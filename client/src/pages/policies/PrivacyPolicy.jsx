import React from "react";
import PolicySectionHeader from '../../components/common/PolicySectionHeader';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
      <PolicySectionHeader
        title="Privacy Policy"
        subtitle="At The Woods Charikot Resort, we are committed to protecting your privacy and ensuring the security of your personal information."
      />
      <section className="py-16 bg-gray-50 min-h-[40vh]">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-3xl w-full bg-gray-50 p-8 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-lg text-[#4b3a2f]">This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or use our services.</p>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Information We Collect:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>Personal information you provide when making reservations or contacting us</li>
              <li>Usage data and analytics to improve our website and services</li>
              <li>Cookies and similar technologies for website functionality</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">How We Use Your Information:</h3>
            <ul className="list-disc list-inside text-lg text-[#4b3a2f]">
              <li>To process and manage your reservations</li>
              <li>To communicate with you about your stay and our services</li>
              <li>To improve our website and guest experience</li>
            </ul>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Data Protection:</h3>
            <p className="text-lg text-[#4b3a2f]">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible to authorized personnel.</p>
            <h3 className="font-serif text-2xl font-normal text-[#2d1c13]">Contact Us:</h3>
            <p className="text-lg text-[#4b3a2f]">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:thewoodscharikot@gmail.com" className="text-blue-600 underline">thewoodscharikot@gmail.com</a> or call us at +977 9851-122519.</p>
            <p className="text-lg text-[#4b3a2f]">Address: Bhimeshwor Municipality - 3, Lampate, Charikot, Dolakha District, Nepal - 45500</p>
            <p className="text-lg text-[#4b3a2f]">If you have any questions or concerns about this Privacy Policy, please don&apos;t hesitate to contact us.</p>
          </div>
        </div>
      </section>
      {/* Questions about this policy section */}
      <section className="py-16 bg-[#f8f4ef]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d1c13] mb-4">Questions about this policy?</h2>
          <p className="text-center text-lg text-[#4b3a2f] mb-10 max-w-2xl mx-auto">
            If you have any questions or concerns about this Privacy Policy, please don&apos;t hesitate to contact us.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
