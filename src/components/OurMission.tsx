"use client";
import React from "react";

const OurMission = () => {
  return (
    <div className="sm:max-h-[45vh] md:max-h-[45vh] lg:h-[30vh] flex flex-col justify-center items-center pt-6 mx-5 rounded-2xl bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-4xl font-extrabold text-purple-600 mb-4 transition-colors duration-300 ease-in-out">
        Our Commitment
      </h1>
      <p className="text-sm lg:text-lg px-4 lg:px-16 py-4 text-justify text-gray-700">
        At the heart of our initiative is the urgency to meet the critical
        demand for blood. We aim to unite donors and recipients through an
        intuitive platform that simplifies the donation process. By fostering a
        community of compassionate individuals, we strive to ensure a steady
        blood supply and inspire more people to contribute. Together, we can
        transform lives, one donation at a time.
      </p>
    </div>
  );
};

export default OurMission;
