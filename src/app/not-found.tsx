"use client"
// pages/404.tsx
import React, { useState, useEffect } from "react";

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle animation for the skull
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-black min-h-screen ">
      <div className="text-center ">
        <h1 className="text-5xl font-extrabold mb-4 animate-pulse">404</h1>
        <p className="text-xl mb-6 animate-bounce">Oops! Page not found.</p>
        
        {/* Skull Animation with smooth floating and rotating */}
        <div
          className={`transition-transform transform duration-1000 ${isVisible ? "rotate-0" : "rotate-360"}`}
          style={{
            fontSize: "150px",
            animation: "float 2s ease-in-out infinite",
          }}
        >
          💀
        </div>
        
        <p className="mt-6 text-lg">Please go back to the homepage.</p>
      </div>

      {/* CSS for Floating Effect */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
