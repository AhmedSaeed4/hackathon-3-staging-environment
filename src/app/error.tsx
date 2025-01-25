"use client";
import React from "react";
import Link from "next/link"; // Link component for routing
import erro from "../app/assets/Error.G02.watermarked.2k.png"
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center text-white p-8 rounded-lg ">
        {/* Animated Skull */}
        <div className="flex justify-center items-center mb-6">
          <div className="animate-pulse">
            <Image
              src={erro}
              height={300}
              width={300}
              alt="Skull"
              className="w-24 h-24 md:w-32 md:h-32 "
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300">
          Oops! Something Went Wrong
        </h1>
        <p className="text-sm md:text-lg mb-6 text-gray-500">
          Were sorry, the page youre looking for doesnt exist. Please go back to the homepage.
        </p>

        {/* Go to Home Button */}
        <Link href="/" passHref>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transform transition-all hover:scale-105 hover:bg-blue-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
