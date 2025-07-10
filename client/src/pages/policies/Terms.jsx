import PolicySectionHeader from '../../components/common/PolicySectionHeader';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div>
      <PolicySectionHeader
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our services or making a reservation at The Woods Charikot Resort."
      />
      <section className="py-16 bg-gray-50 min-h-[40vh]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-3xl w-full bg-gray-50 p-8 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-lg text-[#4b3a2f]">By using our website and services, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern The Woods Charikot Resort&apos;s relationship with you.</p>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Reservations and Bookings:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>All reservations are subject to availability and confirmation</li>
              <li>A valid credit card is required to guarantee your reservation</li>
              <li>Check-in time is 2:00 PM and check-out time is 12:00 PM</li>
              <li>Early check-in and late check-out are subject to availability and additional charges</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Payment Terms:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Full payment is required at the time of check-in unless otherwise arranged</li>
              <li>We accept cash, major credit cards, and bank transfers</li>
              <li>Additional charges for services, amenities, or damages will be added to your final bill</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Guest Responsibilities:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Guests are responsible for any damage to hotel property during their stay</li>
              <li>Smoking is prohibited in all guest rooms and designated non-smoking areas</li>
              <li>Guests must comply with all hotel policies and local laws</li>
              <li>Maximum occupancy limits must be observed</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Limitation of Liability:</h3>
            <p className="text-lg text-[#4b3a2f]">The Woods Charikot Resort shall not be liable for any indirect, special, or consequential damages arising from your stay or use of our services. Our liability is limited to the amount paid for your accommodation.</p>
          </div>
        </div>
      </section>
      {/* Questions about our terms section */}
      <section className="py-16 bg-[#f8f4ef]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d1c13] mb-4">Questions about our terms?</h2>
          <p className="text-center text-lg text-[#4b3a2f] mb-10 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms & Conditions, please don&apos;t hesitate to contact us.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 