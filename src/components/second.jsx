"use client";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

export default function SaveTheDatePage() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Remove observer once element is visible
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="px-4 bg-sage-50 flex justify-center items-center ">
      <div
        className={`flex  ${isLandscape ? "flex-row" : "flex-col"
          } items-center justify-between w-full max-w-screen-xl bg-sage-200 rounded-xl shadow-md  p-6`}
      >
        {/* ภาพถ่าย */}
        <div className={`w-full ${isLandscape ? "w-1/2 " : "w-full mt-8"} p-2`}>
          <PhotoProvider>
            <PhotoView src="/images/second.jpg">
              <Image
                src="/images/second.jpg"
                alt="Wedding Couple"
                width={300}
                height={400}
                className="w-full h-auto shadow-lg rounded-xl border border-gray-200 cursor-pointer"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
   
        {/* ข้อความ */}
        <div
          className={`w-full ${isLandscape ? "w-1/2 text-left pl-6" : "text-center pt-6"
            }`}
        >
          <h1 className="text-5xl text-nowrap font-Ephesis text-center font-bold mt-3  text-green-800 mb-2">
            Sarocha & Teeroot
          </h1>
          <p className="text-lg text-center font-serif text-sage mb-6 ">New Chapter Begins</p>
          <div className="flex items-center my-4 text-center">
            <div className="border-t  border-gray-400 flex-grow"></div>
            <h2 className="text-base font-serif font-thin text-green-700 mx-4 ">Save The Date</h2>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>
          <p className="text-xl mt-7 font-semibold text-center font-chanchai  text-green-800 tracking-wider">FEBRUARY 16, 2025</p>
          <p className="text-xs font-sans text-center text-green-700 mt-4 text-balance ">
            YOU ARE INVITED TO OUR WEDDING CEREMONY AND TO THE CELEBRATION OF
            OUR MARRIAGE. DON &apos; T MISS TO MEET US AND WE HOPE TO SEE YOU ON OUR
            SPECIAL DAY.
          </p>
          <p className="text-xs font-sans text-center text-green-700 mt-4 text-balance ">#PPJourneyAllAlong</p>
          <div
            className={`${isLandscape ? "hidden" : "block"
              } mt-6  border-gray-300 h-16 mx-auto `}
          ></div>
        </div>
      </div>
    </div>
  );
}
