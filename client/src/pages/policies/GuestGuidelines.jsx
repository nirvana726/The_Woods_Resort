import PolicySectionHeader from '../../components/common/PolicySectionHeader';
import { Link } from 'react-router-dom';

export default function GuestGuidelines() {
  return (
    <div>
      <PolicySectionHeader
        title="Guest Guidelines"
        subtitle="Important information for a pleasant stay. Please take a moment to review these guidelines to ensure a wonderful experience for everyone."
      />
      <section className="py-16 bg-gray-50 min-h-[40vh]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-3xl w-full bg-gray-50 p-8 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-lg text-[#4b3a2f]">Welcome to The Woods Charikot Resort! To ensure a pleasant and safe experience for all our guests, please review and follow these guidelines during your stay.</p>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Check-in & Check-out:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Check-in time: 2:00 PM</li>
              <li>Check-out time: 12:00 PM</li>
              <li>Valid government-issued photo ID required at check-in</li>
              <li>Credit card or deposit required for incidentals</li>
              <li>Early check-in/late check-out subject to availability and additional charges</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Safety & Security:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Keep your room key with you at all times</li>
              <li>Do not leave valuables unattended in public areas</li>
              <li>Use the in-room safe for important documents and valuables</li>
              <li>Report any suspicious activity to front desk immediately</li>
              <li>Emergency exits and procedures are posted in your room</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Room Policies:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Smoking is strictly prohibited in all guest rooms and indoor areas</li>
              <li>Maximum occupancy limits must be observed</li>
              <li>Additional guests must be registered at the front desk</li>
              <li>Quiet hours: 10:00 PM - 7:00 AM</li>
              <li>Please be considerate of other guests</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Facilities & Amenities:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Restaurant hours: 7:00 AM - 10:00 PM</li>
              <li>Front desk: 24/7</li>
              <li>WiFi is complimentary throughout the property</li>
              <li>Housekeeping service available daily</li>
              <li>Laundry service available (charges apply)</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Environmental Responsibility:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Please conserve water and electricity</li>
              <li>Use towel and linen reuse programs</li>
              <li>Dispose of waste properly in designated areas</li>
              <li>Respect local wildlife and natural surroundings</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Payments & Charges:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Damages to hotel property will be charged to your account</li>
              <li>Lost key cards incur a replacement fee</li>
              <li>Minibar and room service charges apply as posted</li>
              <li>Final bill must be settled before check-out</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Questions or Concerns section */}
      <section className="py-16 bg-[#f8f4ef]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d1c13] mb-4">Questions or Concerns?</h2>
          <p className="text-center text-lg text-[#4b3a2f] mb-10 max-w-2xl mx-auto">
            Our front desk team is here to help you 24/7. Don&apos;t hesitate to contact us if you have any questions.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 