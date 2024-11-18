"use client";

import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Heart } from "lucide-react";
import Link from "next/link"; // Import Link for routing
import OurMission from "./OurMission";

const Hero = () => {
  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mb-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6">
        <div className="mx-4 mb-20 hover:shadow-xl transition-all duration-300 ease-in-out">
          <Alert className="bg-white text-gray-800">
            <Heart className="h-6 w-6 text-red-600 pt-1" />
            <AlertTitle className="text-lg font-semibold">
              Important Alert!
            </AlertTitle>
            <AlertDescription className="text-sm">
              Your generous act of donating blood could be the lifeline someone
              desperately needs.
            </AlertDescription>
          </Alert>
        </div>
        <div>
          <Link href="/DonorForm">
            <button
              type="button"
              className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg rounded-full transition-transform duration-200 transform hover:scale-105"
            >
              Become a Hero
              <span className="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-r from-yellow-200 to-yellow-500 blur-md animate-pulse"></span>
            </button>
          </Link>
        </div>
        <br />
        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-center mt-3 text-white">
          Make a Difference
          <span className="text-yellow-300 block sm:inline sm:ml-3">
            Donate Blood Today
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-6 font-normal text-center max-w-2xl text-white">
          By donating blood, you're not just giving a gift; you're providing
          hope and health to those in need. Join us in this noble cause to light
          up lives and create a brighter future for families everywhere.
        </p>
      </div>
      <OurMission />
    </>
  );
};

export default Hero;
