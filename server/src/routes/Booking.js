import express from "express";
import {
  createPaymentIntent,
  createRoomBooking,
  createActivityBooking,
  getUserBookings,
  cancelBooking,
  getAllBookings,
  updateBookingStatus
} from "../controller/Booking.js";
import { requireSignIn, isAdmin } from "../middlewares/Auth.js";


const router = express.Router();

// Payment
router.post("/create-payment-intent", requireSignIn, createPaymentIntent);

// User booking operations
router.post("/room", requireSignIn, createRoomBooking);
router.post("/activity", requireSignIn, createActivityBooking);
router.get("/user", requireSignIn, getUserBookings);
router.post("/cancel", requireSignIn, cancelBooking);

// Admin booking operations
router.get("/all", requireSignIn, isAdmin, getAllBookings);
router.patch("/status", requireSignIn, isAdmin, updateBookingStatus);

export default router;