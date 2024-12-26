"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Five = () => {
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
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-sky-50 via-pink-50 to-purple-50 p-2 ">
            {/* ภาพด้านบน */}
            <div className="w-full max-w-lg fade-in ">
                <PhotoProvider>
                    <PhotoView src="/images/five.JPEG">
                        <Image
                            src="/images/five.JPEG" // อัปโหลดรูปภาพใน public/images และใช้ path นี้
                            alt="RSVP Image"
                            width={500}
                            height={700}
                            className="rounded-xl shadow-md"
                        />
                    </PhotoView>
                </PhotoProvider>
            </div>

            {/* ข้อความและปุ่ม */}
            <div className="bg-white mt-8 p-6 rounded-xl shadow-md w-full max-w-lg text-center ">
                <h2 className="text-4xl font-chanchai font-bold text-green-700">R.S.V.P</h2>
                <p className="text-lg font-kanit text-gray-600 mt-1">( ตอบรับการเข้าร่วมงาน )</p>

                <div className="flex items-center justify-center my-4">
                    <div className="border-t  border-gray-300 flex-grow mx-2"></div>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="border-t border-gray-300 flex-grow mx-2"></div>

                </div>

                <p className="text-sm text-gray-700 font-kanit">
                    เพื่อให้เราได้จัดเตรียมการต้อนรับได้อย่างเหมาะสม
                </p>
                <p className="text-sm text-gray-700 font-kanit">
                    ขอรบกวนทำแบบตอบรับเข้าร่วมงานให้เราด้วยนะครับ
                </p>

                <button
                    className=" font-kanit text-lg bg-green-700 text-white px-9 py-3 rounded-full mt-6 font-semibold hover:bg-green-800 transition"
                    onClick={() => (window.location.href = "https://forms.gle/R2j1VqzU9BKwKqNZ7")}
                >
                    แบบตอบรับการเข้าร่วมงาน →
                </button>

                <p className="text-sm font-kanit text-gray-500 mt-4">
                    ขอขอบคุณทุกท่านมา ณ โอกาสนี้</p>
                <p className="text-sm font-kanit text-gray-500 ">
                    แล้วมาพบกันในวันสำคัญของเราทั้งสองคนนะคะ
                </p>
            </div>
        </div >
    );
};

export default Five;
