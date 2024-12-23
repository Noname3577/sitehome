"use client";

import React from "react";

export function SliderControls({ totalSlides, currentSlide, goToSlide }) {
  return (
    <div className="absolute bottom-4 left-0 right-0">
      <div className="flex justify-center space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
