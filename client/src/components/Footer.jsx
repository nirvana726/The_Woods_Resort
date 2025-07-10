// Footer.js
// import Image from "next/image";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTripadvisor, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/rooms", label: "Rooms" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Book Now" },
];

const policyLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/cancellation", label: "Cancellation & Refund Policy" },
    { to: "/guest-guidelines", label: "Guest Guidelines" },
];

const socialLinks = [
    { href: "https://www.facebook.com/thewoodscharikotresort", icon: <FaFacebookF />, label: "Facebook" },
    { href: "https://www.instagram.com/thewoodscharikot/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://www.tiktok.com/@the.woods.resort", icon: <FaTiktok />, label: "TikTok" },
    { href: "https://www.youtube.com/@thewoodscharikotresort8318", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://www.tripadvisor.com/Hotel_Review-g1207735-d15325527-Reviews-The_Woods_Charikot_Resort-Charikot_Janakpur_Zone_Central_Region.html", icon: <FaTripadvisor />, label: "TripAdvisor" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-16 border-b border-gray-200">
          {/* Resort Info */}
          <div className="w-full md:w-1/3 lg:w-2/5">
            <Link to="/" className="flex items-center gap-4 mb-4">
              <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-md">
                <img
                  src="/logo.avif"
                  alt="The Woods Charikot Resort Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-[var(--heading)] font-playfair">The Woods Charikot Resort</span>
            </Link>
            <p className="max-w-sm mt-4 text-base leading-relaxed">
              Your luxury mountain retreat in the heart of the Himalayas, where nature meets comfort.
            </p>
            <div className="mt-6 space-y-2 text-base">
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-lg" /><span>Bhimeshwor Municipality - 3, Lampate, Charikot, Dolakha District, Nepal</span></p>
                <p className="flex items-center gap-2"><FaPhoneAlt className="text-lg" /><span>+977 9851-122519</span></p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-lg" /><span>thewoodscharikot@gmail.com</span></p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="w-full md:w-2/3 lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-[var(--heading)] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="relative text-base hover:text-inherit after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#a89c7c] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-[var(--heading)] mb-4">Our Policies</h3>
              <ul className="space-y-2">
                {policyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="relative text-base hover:text-inherit after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#a89c7c] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-[var(--heading)] mb-4">Follow Us</h3>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social) => (
                   <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--heading)] transition-colors">
                     {social.icon}
                   </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 text-center text-sm text-[var(--text)]">
          <p>Copyright © {new Date().getFullYear()} The Woods Charikot Resort. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
