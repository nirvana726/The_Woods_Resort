import contactHero from '../assets/hero/contact-hero.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center mb-12">
        <img
          src={contactHero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 custom-blur" />
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          {/* Kicker */}
          <span className="inline-block mb-4 px-2 border border-white text-white rounded-full font-sm text-sm bg-transparent backdrop-blur-sm tracking-wider shadow-md">
            Get in Touch
          </span>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl !text-white !font-extrabold mb-4 drop-shadow-lg ">
            Contact Us
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            We&apos;re here to help you plan your perfect escape to nature
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-[var(--bg)]">
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white/90 border border-black/10 rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl font-bold mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Have questions about your stay? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">First Name *</label>
                <input type="text" placeholder="Your first name" className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Last Name *</label>
                <input type="text" placeholder="Your last name" className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email *</label>
                <input type="email" placeholder="your.email@example.com" className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />
              </div>
              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Phone</label>
                <input type="tel" placeholder="+977 98XX-XXXXXX" className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition" />
              </div>
              {/* Subject */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-1">Subject *</label>
                <input type="text" placeholder="How can we help you?" className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />
              </div>
              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us more about your inquiry..."
                  className="bg-[#fdfaf6] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  * Our team will respond to your inquiry within 24 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="bg-[var(--bg)] rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
              <div className="mb-2 flex items-start gap-2">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div>Charikot, Dolakha District<br />Bagmati Province, Nepal</div>
                </div>
              </div>
              <div className="mb-2 flex items-start gap-2">
                <FaPhoneAlt className="text-green-600 mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+977-9851122519<br />+977-9843473163</div>
                </div>
              </div>
              <div className="mb-2 flex items-start gap-2">
                <FaEnvelope className="text-green-600 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>thewoodscharikot@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaClock className="text-green-600 mt-1" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div>24/7 Reception<br />Restaurant: 6:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
            {/* Google Map with Get Directions heading */}
            <div className="mt-6">
              <h4 className="text-3xl font-semibold mb-2">Get Directions</h4>
              <iframe
                title="The Woods Charikot Resort Location"
                src="https://www.google.com/maps?q=The+Woods+Charikot+Resort,+Charikot,+Dolakha,+Nepal&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

