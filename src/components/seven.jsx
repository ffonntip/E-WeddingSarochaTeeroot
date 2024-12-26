"use client";
import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from 'next/image';

const Seven = () => {
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
        <div
            className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-3 min-h-screen"
            style={{
                backgroundImage: "url('/images/seven.JPEG')",
            }}
        >
            {/* เบลอพื้นหลัง */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

            {/* รูปภาพด้านนอก */}
            <div className="relative z-20 flex justify-center space-x-6 mb-8">
                <div className="w-40 h-45 overflow-hidden rounded-xl shadow-xl fade-in">
                    <PhotoProvider>
                        <PhotoView src="/images/Seven-Outtext/Ch1.JPEG">
                            <Image
                                src="/images/Seven-Outtext/Ch1.JPEG"
                                width={400}
                                height={700}
                                alt="Position 1"
                                className="w-full h-full object-cover "
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="w-40 h-45 overflow-hidden rounded-xl shadow-xl fade-in">
                    <PhotoProvider>
                        <PhotoView src="/images/Seven-Outtext/Ch2.JPEG">
                            <Image src="/images/Seven-Outtext/Ch2.JPEG" alt="Description" width={400} height={700}   className="w-full h-full object-cover " />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>

            {/* เนื้อหา */}
            <div className="relative z-10 bg-gradient-to-r from-pink-100  py-8 px-5 rounded-3xl shadow-xl max-w-3xl mx-auto ">
                <div className="text-center">
                    {/* ข้อความ */}
                    <p className="text-green-900 font-kanit text-xl text-balance  mb-6">
                        Thank you in advance for your wishes to us, and we wish to see you in person at the ceremony
                    </p>

                    {/* ข้อความเพิ่มเติม */}
                    <p className="text-green-900 font-kanit text-lg font-medium mt-4">
                        #PPJourneyAllAlong
                    </p>
                    <p className="text-green-900 font-kanit text-sm font-light mt-1">
                        (Apologize if we could not invite you in person)
                    </p>
                </div>
            </div>

            {/* รูปภาพด้านนอก (ด้านล่าง) */}
            <div className="relative z-20 flex justify-center space-x-6 mt-8">
                <div className="w-40 h-45 overflow-hidden rounded-xl shadow-xl fade-in">
                    <PhotoProvider>
                        <PhotoView src="/images/Seven-Outtext/แทนที่.JPEG">
                            <Image
                                src="/images/Seven-Outtext/แทนที่.JPEG"
                                alt="Position 3"
                                width={400}
                                height={700}
                                className="w-full h-full object-cover"
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="w-40 h-45 overflow-hidden rounded-xl shadow-xl fade-in">
                    <PhotoProvider>
                        <PhotoView src="/images/Seven-Outtext/Ch4.JPEG">
                            <Image
                                src="/images/Seven-Outtext/Ch4.JPEG"
                                alt="Position 4"
                                width={400}
                                height={700}
                                className="w-full h-full object-cover"
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default Seven;