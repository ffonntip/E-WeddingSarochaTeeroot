"use client";
import React, { useEffect, useState } from "react";

export default function MarriageCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [backgroundImage, setBackgroundImage] = useState("/images/first.jpg");

  useEffect(() => {
    const targetDate = new Date("2025-02-16T00:00:00+07:00"); // กำหนดวันเป้าหมาย
    const updateCountdown = () => {
      const now = new Date(); // เวลาปัจจุบัน
      const difference = targetDate - now; // คำนวณส่วนต่างเวลา

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // หากถึงเวลาเป้าหมายแล้ว
      }
    };

    updateCountdown(); // เรียกใช้ฟังก์ชันครั้งแรก
    const interval = setInterval(updateCountdown, 1000); // อัปเดตทุกๆ 1 วินาที

    return () => clearInterval(interval); // ล้าง Interval เมื่อ component ถูกถอด
  }, []);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth > window.innerHeight) {
        setBackgroundImage("/images/first1.jpg"); // ใช้รูปภาพสำหรับจอแนวนอน
      } else {
        setBackgroundImage("/images/first.jpg"); // ใช้รูปภาพสำหรับจอแนวตั้ง
      }
    };

    updateBackground(); // เรียกใช้ครั้งแรก
    window.addEventListener("resize", updateBackground); // ติดตามการเปลี่ยนขนาดหน้าจอ

    return () => window.removeEventListener("resize", updateBackground); // ล้าง Event Listener เมื่อ component ถูกถอด
  }, []);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center rounded-lg text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* กล่องพื้นหลังสำหรับนับถอยหลัง */}
      <div className=" absolute bottom-12 w-full border-collapse  bg-opacity-30 text-center py-8">
        <h1 className="text-4xl font-semibold uppercase mb-4 font-chanchai">Marriage</h1>
        <h2 className="text-2xl  font-chanchai mb-6">Occurring In</h2>
        <div className="flex justify-center space-x-3">
          <div>
            <p className="text-4xl font-bold font-chanchai text-nowrap text-center">{timeLeft.days}  :</p>
            <p className="text-sm mr-7 font-chanchai font-medium">Days</p>
          </div>
          <div>
            <p className="text-4xl font-bold font-chanchai text-nowrap">{timeLeft.hours}  :</p>
            <p className="text-sm mr-7 font-chanchai font-medium">Hours</p>
          </div>
          <div>
            <p className="text-4xl mr-2 font-chanchai font-bold text-nowrap">{timeLeft.minutes}  :</p>
            <p className="text-sm mr-7 font-chanchai font-medium">Minutes</p> 
          </div>
          <div>
            <p className="text-4xl  font-chanchai font-bold">{timeLeft.seconds}   </p>
            <p className="text-sm font-chanchai font-medium">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
