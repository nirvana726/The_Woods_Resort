import dotenv from 'dotenv';
dotenv.config();



import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import Activity from "../models/Activity.js";
import User from "../models/User.js";
import Stripe from "stripe";
import mongoose from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Enhanced create payment intent
export const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency, metadata, customerEmail } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({
        success: false,
        message: "Amount and currency are required",
      });
    }

    // Create customer in Stripe if email is provided
    let customer;
    if (customerEmail) {
      customer = await stripe.customers.create({
        email: customerEmail,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata,
      customer: customer?.id,
      payment_method_types: ["card"],
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payment intent",
      error: error.message,
    });
  }
};

// Create room booking
export const createRoomBooking = async (req, res) => {
  try {
    const { 
      roomId, 
      checkInDate, 
      checkOutDate, 
      paymentIntentId,
      specialRequests 
    } = req.body;
    
    const userId = req.user.id;

    // Validate room exists and is available
    const room = await Room.findById(roomId);
    if (!room || !room.available) {
      return res.status(400).json({ 
        success: false,
        message: "Room not available" 
      });
    }

    // Verify payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ 
        success: false,
        message: "Payment not completed" 
      });
    }

    // Calculate total nights and amount
    const nights = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    const amount = room.price * nights;

    // Create booking
    const booking = new Booking({
      user: userId,
      room: roomId,
      bookingType: "room",
      checkInDate,
      checkOutDate,
      bookingDate: new Date(),
      status: "confirmed",
      paymentStatus: "paid",
      paymentIntentId,
      amount,
      specialRequests
    });

    await booking.save();
    
    // Update room availability if needed
    await Room.findByIdAndUpdate(roomId, { available: false });

    res.status(201).json({
      success: true,
      message: "Room booking created successfully",
      booking
    });
  } catch (error) {
    console.error("Error creating room booking:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create room booking",
      error: error.message,
    });
  }
};

// Create activity booking
export const createActivityBooking = async (req, res) => {
  try {
    const { 
      activityId, 
      bookingDate, 
      participants,
      paymentIntentId,
      specialRequests 
    } = req.body;
    
    const userId = req.user.id;

    // Validate activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(400).json({ 
        success: false,
        message: "Activity not found" 
      });
    }

    // Verify payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ 
        success: false,
        message: "Payment not completed" 
      });
    }

    // Calculate total amount
    const amount = activity.price * participants;

    // Create booking
    const booking = new Booking({
      user: userId,
      activity: activityId,
      bookingType: "activity",
      bookingDate,
      participants,
      status: "confirmed",
      paymentStatus: "paid",
      paymentIntentId,
      amount,
      specialRequests
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Activity booking created successfully",
      booking
    });
  } catch (error) {
    console.error("Error creating activity booking:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create activity booking",
      error: error.message,
    });
  }
};

// Get user bookings
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const bookings = await Booking.find({ user: userId })
      .populate("room activity", "title images price")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};

// Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const { bookingId, reason } = req.body;
    const userId = req.user.id;

    const booking = await Booking.findOne({
      _id: bookingId,
      user: userId
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Booking already cancelled"
      });
    }

    // Update booking status
    booking.status = "cancelled";
    booking.cancellationReason = reason;
    await booking.save();

    // Initiate refund if paid
    if (booking.paymentStatus === "paid") {
      try {
        const refund = await stripe.refunds.create({
          payment_intent: booking.paymentIntentId,
          reason: "requested_by_customer"
        });
        
        booking.paymentStatus = "refunded";
        await booking.save();
      } catch (refundError) {
        console.error("Refund failed:", refundError);
        booking.paymentStatus = "partially_refunded";
        await booking.save();
      }
    }

    // Make room available again if it's a room booking
    if (booking.room) {
      await Room.findByIdAndUpdate(booking.room, { available: true });
    }

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      booking
    });
  } catch (error) {
    console.error("Error cancelling booking:", error);
    res.status(500).json({
      success: false,
      message: "Failed to cancel booking",
      error: error.message,
    });
  }
};

// Admin - Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const { type, status, from, to } = req.query;
    
    let query = {};
    
    if (type) query.bookingType = type;
    if (status) query.status = status;
    
    if (from && to) {
      query.createdAt = {
        $gte: new Date(from),
        $lte: new Date(to)
      };
    }
    
    const bookings = await Booking.find(query)
      .populate("user", "name email")
      .populate("room activity", "title price")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};

// Admin - Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID"
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking status updated",
      booking
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update booking status",
      error: error.message,
    });
  }
};