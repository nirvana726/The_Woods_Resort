import React from "react";
import PropTypes from "prop-types";

const PolicySectionHeader = ({ title, subtitle }) => (
  <section className="bg-[#f8f4ef] min-h-screen flex items-center justify-center border-t border-[#e5ded6]">
    <div className="max-w-3xl mx-auto text-center px-4">
      <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#2d1c13] mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-[#4b3a2f] font-sans">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

PolicySectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PolicySectionHeader; 