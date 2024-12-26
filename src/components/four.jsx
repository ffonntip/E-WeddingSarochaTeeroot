"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const WeddingSchedule = () => {

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
    <div className="bg-gradient-to-br from-green-50 via-amber-50 to-pink-50 items-center justify-center min-h-screen">
      <div className="w-full p-3 fade-in">
        <PhotoProvider>
          <PhotoView src="/images/four.jpg">
            <Image
              src="/images/four.jpg"
              alt="Wedding Couple"
              width={300}
              height={400}
              className="w-full h-auto rounded-xl mb-2 cursor-pointer shadow"
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-y-4 md:gap-y-0 justify-between text-balance justify-items-center mx-auto w-screen px-6 rounded-3xl">
        <div className="text-left">
          <p className="text-green-800 text-xs font-medium font-kanit text-nowrap ml-3">Mr. Manus Poonvisitkul</p>
          <p className="text-green-700 text-xs text-nowrap font-kanit ml-3">นาย มนัส พูนวิสิฐกุล</p>
          <p className="text-green-800 mt-2 text-xs font-kanit font-medium text-nowrap ml-3">Mrs. Somjit Poonvisitkul</p>
          <p className="text-xs font-kanit text-nowrap ml-3 text-green-700">นาง สมจิต พูนวิสิฐกุล</p>
        </div>
        <div className="text-center">
          <p className="font-Ephesis font-medium text-xl mr-3 mt-6 text-green-900">&</p>
        </div>
        <div className="text-right items-center mt-5">
          <p className="text-green-800 font-medium text-nowrap font-kanit text-xs mr-4">Mrs. Pornvipa Juthapornpong</p>
          <p className="text-xs text-green-700 font-kanit text-nowrap mr-4">นาง พรวิภา จุฑาพรพงศ์</p>
        </div>
      </div>

      {/* ข้อความเชิญ */}
      <div className="mt-6 text-center">
        <p className="text-green-800 font-kanit text-balance text-sm">
          We gratefully invite you to be in our honorable wedding ceremony between
        </p>
        <p className="text-green-800 font-kanit mt-2 text-xs text-balance">
          มีความยินดีขอเรียนเชิญเพื่อมาเป็นเกียรติเนื่องในพิธีมงคลสมรสระหว่าง
        </p>
      </div>

      {/* รายชื่อ */}
      <div className="mt-4 mb-4 text-center rounded-full w-40 mx-auto p-2">
        <p className="text-5xl mr-10 font-normal text-green-800">Sarocha</p>
        <p className="text-5xl ml-10 font-normal text-green-800">Teeroot</p>
      </div>
      <div className="flex  md:flex-row justify-center mx-auto items-center mb-3 text-center gap-x-8 gap-y-4 md:gap-y-0">
        <div className="text-center">
          <p className="text-xs text-green-800 font-kanit">Sarocha Poonvisitkul</p>
          <p className="text-xs text-green-800 font-kanit">นางสาว สโรชา พูนวิสิฐกุล</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-green-800 font-kanit">Teeroot Juthapornpong</p>
          <p className="text-xs text-green-800 font-kanit">นาย ธีรุตม์ จุฑาพรพงศ์</p>
        </div>
      </div>

      {/* สถานที่ */}
      <div className="text-center mt-6">
        <p className="text-green-800 font-kanit text-nowrap text-sm">
          @ Mellow Garden Restaurant & Bakery
        </p>
        <p className="text-green-800 font-kanit text-nowrap text-xs">
          ณ เมลโล่ การ์เด้น ถ.เกษตร-นวมินทร์
        </p>
      </div>

      {/* กิจกรรม */}
      <div className="grid grid-cols-4 md:grid-cols-4 justify-center items-center px-2 mt-2 mr-2 ">
        {[
          { src: "/images/khan.jpg", time: "14.09 น.", event: "Khan Mak Procession", desc: "พิธีแห่ขันหมาก" },
          { src: "/images/แหวน.png", time: "14.39 น", event: "Wedding Proposal Ceremony", desc: "พิธีสู่ขอ" },
          { src: "/images/รด.png", time: "15.59 น.", event: "Water Blessing Ceremony", desc: "พิธีรดน้ำสังข์" },
          { src: "/images/ฉลอง.png", time: "18.30 น", event: "Wedding Reception", desc: "พิธีฉลองมงคลสมรส" },
        ].map((activity, index) => (
          <div key={index} className="text-center">

            <Image src={activity.src} alt={activity.event} width={300} height={400} className="w-20 mx-auto " />

            <p
              className={`font-kanit text-xs ${activity.src === "/images/ฉลอง.png", "/images/แหวน.png" ? "mt-2" : ""}`}
            >
              {activity.time}
            </p>
            <p className="mt-1 font-kanit text-xs">{activity.event}</p>
            <p className={`font-kanit text-xs ${activity.src === "/images/ฉลอง.png", "" ? "text-nowrap" : ""}`}>{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingSchedule;
