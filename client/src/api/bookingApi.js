import axios from "axios";

// Ensure token is attached in headers
const authHeader = () => {
  try {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData && authData.token) {
      return {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      };
    }
    return {};
  } catch {
    return {};
  }
};






// Create payment intent
export const createPaymentIntent = async (data) => {
  const res = await axios.post("/api/bookings/create-payment-intent", data, authHeader());
  return res.data;
};

// Create Room Booking
export const createRoomBooking = async (data) => {
  const res = await axios.post("/api/bookings/room", data, authHeader());
  return res.data;
};

// Create Activity Booking
export const createActivityBooking = async (data) => {
  const res = await axios.post("/api/bookings/activity", data, authHeader());
  return res.data;
};

// Cancel Booking
export const cancelBooking = async (data) => {
  const res = await axios.post("/api/bookings/cancel", data, authHeader());
  return res.data;
};

// Get User Bookings
export const getUserBookings = async () => {
  const res = await axios.get("/api/bookings/user", authHeader());
  return res.data;
};

// Admin: Get All Bookings
export const getAllBookings = async (queryParams = {}) => {
  const res = await axios.get("/api/bookings/all", {
    ...authHeader(),
    params: queryParams,
  });
  return res.data;
};

// Admin: Update Booking Status
export const updateBookingStatus = async (data) => {
  const res = await axios.patch("/api/bookings/status", data, authHeader());
  return res.data;
};
