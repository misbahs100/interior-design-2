"use client";
import React, { useState } from "react";

const swiperImages = ["/images/features/features-03.png"];

export function Carousel({imageUrlsArray}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === imageUrlsArray.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? imageUrlsArray.length - 1 : prev - 1,
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {imageUrlsArray.map((img, i) => (
          <div
            key={i}
            className={`duration-700 ease-in-out ${
              i === currentSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={img}
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {imageUrlsArray.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`h-3 w-3 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrentSlide(idx)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <div className="my-2 flex justify-between">
        <button
          type="button"
          className="  group flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-white/30 dark:group-hover:bg-white/60 dark:group-focus:ring-white/70">
            <svg
              className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1L1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className=" group flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-white/30 dark:group-hover:bg-white/60 dark:group-focus:ring-white/70">
            <svg
              className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
