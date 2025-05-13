"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center min-h-screen w-full mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Full-Width Carousel */}
      {isMounted && (
        <div className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh] mt-22 overflow-hidden flex justify-center items-center bg-gray-100">
          <Slider {...settings} className="w-full h-full">
            <div className="relative w-full flex justify-center items-center">
              <Image
                src="/images/carousel4.jpg"
                alt="Healthy Food"
                width={1920} // Ensures correct aspect ratio
                height={1080}
                objectFit="contain" // No zooming or cropping
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full flex justify-center items-center">
              <Image
                src="/images/carousel2.jpg"
                alt="Balanced Diet"
                width={1920}
                height={1080}
                objectFit="contain"
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full flex justify-center items-center">
              <Image
                src="/images/carousel3.jpg"
                alt="AI Meal Planning"
                width={1920}
                height={1080}
                objectFit="contain"
                className="w-full h-auto"
              />
            </div>
          </Slider>
        </div>
      )}

      {/* Overlay Text Content */}
      <div className="absolute top-1/2 transform -translate-y-1/2 items-center w-full px-6 flex justify-center items-center flex-col mt-12">
        <h3 className="text-green-700 text-3xl font-semibold">Personalized Nutrition at Your Fingertips</h3>
        <h1 className="text-5xl md:text-6xl font-bold mt-8 text-black-900 drop-shadow-lg font-bold">
          AI-Powered Meal Planning <br /> Tailored Just for You
        </h1>
        <p className="text-2xl text-gray-700 mt-8 max-w-lg mx-auto items-center drop-shadow-md">
        <span className="font-semibold text-green-700 text-3xl">NutriCare+</span> helps you plan healthy meals based on **your** dietary needs, health conditions, and fitness goals. 
          
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </motion.section>
  );
}
