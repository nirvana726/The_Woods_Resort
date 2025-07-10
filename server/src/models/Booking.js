import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
  },
  activity: {
    type: mongoose.Types.ObjectId,
    ref: "Activity",
  },
  bookingType: {
    type: String,
    enum: ["room", "activity"],
    required: true
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: function() { return this.bookingType === 'room'; }
  },
  checkOutDate: {
    type: Date,
    required: function() { return this.bookingType === 'room'; }
  },
  participants: {
    type: Number,
    required: function() { return this.bookingType === 'activity'; }
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending",
  },
  paymentStatus: {
    type: String,
    enum: ["unpaid", "paid", "refunded", "partially_refunded"],
    default: "unpaid",
  },
  transactionId: {
    type: String,
  },
  paymentIntentId: {
    type: String,
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: "NPR"
  },
  specialRequests: {
    type: String,
    maxlength: 500
  },
  cancellationReason: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);