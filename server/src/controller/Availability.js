// controllers/Availability.js
import Room from "../models/Room.js";
import Activity from "../models/Activity.js";
import Booking from "../models/Booking.js";

// Check room availability for dates
export const checkRoomAvailability = async (req, res) => {
  try {
    const { roomId, checkInDate, checkOutDate } = req.query;
    
    if (!roomId || !checkInDate || !checkOutDate) {
      return res.status(400).json({
        success: false,
        message: "Room ID, check-in and check-out dates are required"
      });
    }

    // Check if room exists and is available
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found"
      });
    }

    // Check for conflicting bookings
    const conflictingBookings = await Booking.find({
      room: roomId,
      status: { $ne: "cancelled" },
      $or: [
        { 
          checkInDate: { $lt: new Date(checkOutDate) },
          checkOutDate: { $gt: new Date(checkInDate) }
        }
      ]
    });

    const isAvailable = conflictingBookings.length === 0;

    res.status(200).json({
      success: true,
      isAvailable,
      room,
      conflictingDates: conflictingBookings.map(b => ({
        checkIn: b.checkInDate,
        checkOut: b.checkOutDate
      }))
    });
  } catch (error) {
    console.error("Error checking room availability:", error);
    res.status(500).json({
      success: false,
      message: "Failed to check availability",
      error: error.message
    });
  }
};

// Check activity availability for date and participants
export const checkActivityAvailability = async (req, res) => {
  try {
    const { activityId, bookingDate, participants } = req.query;
    
    if (!activityId || !bookingDate) {
      return res.status(400).json({
        success: false,
        message: "Activity ID and booking date are required"
      });
    }

    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found"
      });
    }

    // Check if date is in the future
    if (new Date(bookingDate) < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Booking date must be in the future"
      });
    }

    // Check for existing bookings on this date
    const dateBookings = await Booking.find({
      activity: activityId,
      bookingDate: new Date(bookingDate),
      status: { $ne: "cancelled" }
    });

    const totalParticipants = dateBookings.reduce(
      (sum, booking) => sum + booking.participants, 0
    );

    const maxParticipants = activity.maxParticipants || 20; // Default if not set
    const availableSpots = maxParticipants - totalParticipants;
    const canBook = availableSpots >= (participants || 1);

    res.status(200).json({
      success: true,
      canBook,
      availableSpots,
      activity,
      requiresParticipants: participants !== undefined
    });
  } catch (error) {
    console.error("Error checking activity availability:", error);
    res.status(500).json({
      success: false,
      message: "Failed to check availability",
      error: error.message
    });
  }
};