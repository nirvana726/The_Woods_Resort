import { useState } from "react";
import axios from "axios";
import bookingHero from '../assets/hero/booking-hero.jpg';
import { FaStar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Booking() {
  const [form, setForm] = useState({
    room: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);

    try {
      // Make sure your backend expects these exact keys,
      // or transform the form object accordingly before sending

      // Example: backend expects checkInDate, checkOutDate instead of checkIn/checkOut?
      const payload = {
        roomId: form.room,
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        phone: form.phone,
        country: form.country,
        specialRequests: form.message,
        checkInDate: form.checkIn,
        checkOutDate: form.checkOut,
        guests: Number(form.guests),
      };

      await axios.post("/api/bookings/room", payload); // Assuming you use /api/bookings/room for room booking

      setSuccess("Booking successful!");
      setForm({
        room: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        checkIn: "",
        checkOut: "",
        guests: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center mb-12">
        <img
          src={bookingHero}
          alt="Booking Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 custom-blur" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Kicker */}
          <span className="inline-block mb-4 px-2 border border-white text-white rounded-full font-sm text-sm bg-transparent backdrop-blur-sm tracking-wider shadow-md">
            Book Your Stay
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl !text-white !font-extrabold mb-4 drop-shadow-lg ">
            Make a Reservation
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Send us your booking inquiry and we&apos;ll get back to you with availability and pricing
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-[var(--bg)]">
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2 bg-white/90 border border-black/10 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Booking Inquiry Form</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and our reservations team will contact you with availability and pricing details.</p>
            {success && <div className="mb-4 text-green-600">{success}</div>}
            {error && <div className="mb-4 text-red-600">{error}</div>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Personal Information Section */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
              </div>
              {/* First Name */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">First Name *</label>
                <input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  type="text"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="Your first name"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Last Name *</label>
                <input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  type="text"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="Your last name"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Phone *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="+977 98XX-XXXXXX"
                  required
                />
              </div>
              {/* Country */}
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="text-sm font-medium mb-1">Country</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  type="text"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="Your country"
                />
              </div>
              {/* Booking Details Section */}
              <div className="col-span-1 md:col-span-2 mt-2">
                <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
              </div>
              {/* Check-in */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Preferred Check-in Date *</label>
                <input
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  type="date"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              </div>
              {/* Check-out */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Preferred Check-out Date *</label>
                <input
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  type="date"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              </div>
              {/* Guests */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Number of Guests *</label>
                <input
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  type="number"
                  min="1"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                />
              </div>
              {/* Room Type */}
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-medium mb-1">Preferred Room Type *</label>
                <select
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="family">Family Room</option>
                  <option value="king">King Size Room</option>
                  <option value="triple">Triple Sharing Room</option>
                </select>
              </div>
              {/* Message */}
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="text-sm font-medium mb-1">Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  placeholder="Let us know any special requests or questions."
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Booking Inquiry"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info, Urgent Assistance, and Accommodations */}
          <div className="space-y-6">
            {/* Accommodations Preview */}
            <div className="bg-white border border-black/10 rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Our Accommodations</h3>
              <div className="space-y-4">
                {/* Room Card */}
                <div className="flex items-center gap-4 bg-white rounded-lg p-2 shadow border border-gray-200">
                  <img src="/src/assets/Gallery/IMG-20250626-WA0002.jpg" alt="Family Room" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold text-base">Family Room</div>
                    <div className="text-xs text-gray-600 flex items-center gap-1"><FaStar className="text-yellow-500" /> Featured Room</div>
                    <div className="text-sm text-gray-700">From NPR 3000/night</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-2 shadow border border-gray-200">
                  <img src="/src/assets/Gallery/IMG-20250626-WA0003.jpg" alt="King Size Room" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold text-base">King Size Room</div>
                    <div className="text-xs text-gray-600 flex items-center gap-1"><FaStar className="text-yellow-500" /> Featured Room</div>
                    <div className="text-sm text-gray-700">From NPR 2500/night</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-lg p-2 shadow border border-gray-200">
                  <img src="/src/assets/Gallery/IMG-20250626-WA0004.jpg" alt="Triple Sharing Room" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold text-base">Triple Sharing Room</div>
                    <div className="text-xs text-gray-600 flex items-center gap-1"><FaStar className="text-yellow-500" /> Featured Room</div>
                    <div className="text-sm text-gray-700">From NPR 2800/night</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white border border-black/10 rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><FaPhoneAlt className="text-green-600" /><span>+977-9851122519</span></div>
                <div className="flex items-center gap-3"><FaEnvelope className="text-green-600" /><span>thewoodscharikot@gmail.com</span></div>
                <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-green-600" /><span>Charikot, Dolakha District, Nepal</span></div>
              </div>
            </div>

            {/* Urgent Assistance */}
            <div className="bg-white border border-black/10 rounded-xl shadow p-6">
              <h4 className="text-lg font-semibold mb-3">Need Immediate Assistance?</h4>
              <p className="text-gray-600 mb-4">Call us directly for urgent inquiries or immediate booking assistance.</p>
              <a href="tel:+9779851122519" className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                Call Now: +977-9851122519
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
