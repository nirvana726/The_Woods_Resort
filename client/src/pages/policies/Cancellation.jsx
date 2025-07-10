import PolicySectionHeader from '../../components/common/PolicySectionHeader';
import { Link } from 'react-router-dom';

export default function Cancellation() {
  return (
    <div>
      <PolicySectionHeader
        title="Cancellation & Refund Policy"
        subtitle="At The Woods Charikot Resort, we understand that travel plans can change. Our Cancellation & Refund Policy is designed to be fair and transparent for both our valued guests and our business operations."
      />
      <section className="py-16 bg-gray-50 min-h-[40vh]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-3xl w-full bg-gray-50 p-8 rounded-lg shadow flex flex-col space-y-6">
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Cancellation Terms</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li><span className="font-semibold">48 hours or more before check-in:</span> Full refund</li>
              <li><span className="font-semibold">24 to 48 hours before check-in:</span> 50% refund</li>
              <li><span className="font-semibold">Less than 24 hours before check-in:</span> No refund</li>
              <li><span className="font-semibold">No-shows:</span> Full charge applies</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">How to Cancel</h3>
            <p className="text-lg text-[#4b3a2f]">To cancel or modify your reservation, please contact us as soon as possible via:</p>
            <ul className="text-lg text-[#4b3a2f]">
              <li> <span className="font-semibold">Phone:</span> +977 9851-122519</li>
              <li> <span className="font-semibold">Email:</span> thewoodscharikot@gmail.com</li>
            </ul>
            <p className="text-lg text-[#4b3a2f]">Please include your reservation confirmation number and contact details.</p>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Special Circumstances</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Weather-related cancellations: Eligible for rebooking</li>
              <li>Medical emergencies: Refunds considered on a case-by-case basis with valid documentation</li>
              <li>Force majeure events (natural disasters, government restrictions): Eligible for full refund or rebooking</li>
              <li>Travel restrictions due to government advisories: Flexible rebooking or refund options available</li>
              <li>Group bookings: May have separate cancellation terms</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Refund Eligibility & Conditions</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Refunds are issued based on our cancellation timeframes and eligibility terms.</li>
              <li>Requests must be submitted in writing via email or through our official channels.</li>
              <li>Refunds are processed to the original payment method only.</li>
              <li>Bank processing or service fees may be deducted from the refund amount.</li>
              <li>Some items are non-refundable (see below).</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Refund Processing Time</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-lg text-[#4b3a2f] border border-[#e5ded6]">
                <thead>
                  <tr className="bg-[#f8f4ef]">
                    <th className="px-4 py-2 border-b border-[#e5ded6] text-left">Payment Method</th>
                    <th className="px-4 py-2 border-b border-[#e5ded6] text-left">Refund Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">Credit Card</td>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">3–5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">Bank Transfer</td>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">5–7 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">International Transfer</td>
                    <td className="px-4 py-2 border-b border-[#e5ded6]">7–14 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">General Processing</td>
                    <td className="px-4 py-2">Within 7–10 business days after approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Partial Refunds</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Early departure: No refund unless due to uncontrollable circumstances</li>
              <li>Downgrading services: Difference may be refunded</li>
              <li>Add-on services: Refundable if cancelled at least 24 hours in advance</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Non-Refundable Items</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Booking fees and service charges</li>
              <li>Third-party service fees (e.g., tours, transportation)</li>
              <li>Promotional packages during peak seasons (as per terms at time of booking)</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Questions about this policy section */}
      <section className="py-16 bg-[#f8f4ef]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d1c13] mb-4">Need Assistance?</h2>
          <p className="text-center text-lg text-[#4b3a2f] mb-10 max-w-2xl mx-auto">
          For cancellation, modifications, or refund requests, please contact us with your booking details.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 