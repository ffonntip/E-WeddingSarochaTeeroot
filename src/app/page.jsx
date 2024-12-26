"use client";

import { useInView } from "react-intersection-observer";
import MarriageCountdown from "@/components/first";
import SaveTheDatePage from "@/components/second";
import CustomCarousel from "@/components/three";
import WeddingSchedule from "@/components/four";
import Five from "@/components/five";
import Six from "@/components/six";
import Seven from "@/components/seven";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // ทำให้ trigger การแสดงแค่ครั้งเดียว
    threshold: 0.5, // ปรับเพื่อให้ตรวจจับเมื่อ 50% ขององค์ประกอบปรากฏ
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Marriage Countdown */}
      <div className="w-full ">
        <MarriageCountdown />
      </div>

      {/* Save The Date Page */}
      <div
        ref={ref}
        className={`relative w-full py-10 bg-sage-50 flex items-center justify-center transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <SaveTheDatePage />
      </div>

      {/* Custom Carousel */}
      <div className="relative w-full ">
        <CustomCarousel />
      </div>

      {/* Wedding Schedule */}
      <div className="relative w-full ">
        <WeddingSchedule />
      </div>

      {/* Five */}
      <div className="relative w-full ">
        <Five />
      </div>

      {/* Six */}
      <div className="relative w-full ">
        <Six />
      </div>

      {/* Seven */}
      <div className="relative w-full ">
        <Seven />
      </div>
    </div>
  );
}
