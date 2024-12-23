"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SliderControls } from "./slider-controls";

import slidesData from "../../../datatest/slides_data.json";
const slides = slidesData.slides_data;

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              {slide.title}
            </h2>
            <p className="text-xl text-center">{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="hidden absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
      <SliderControls
        totalSlides={slides.length}
        currentSlide={currentSlide}
        goToSlide={setCurrentSlide}
      />
    </div>
  );
}

export default ImageSlider;
