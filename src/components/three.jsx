'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSwipeable } from "react-swipeable";
import "react-photo-view/dist/react-photo-view.css";

const CustomCarousel = () => {
    const images = [
        '/images/three1.jpg',
        '/images/three2.jpg',
        '/images/three3.jpg',
        '/images/three4.jpg',
        '/images/three5.jpg',
        '/images/three6.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + (isLandscape ? 3 : 1)) % images.length);
    }, [isLandscape, images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - (isLandscape ? 3 : 1) + images.length) % images.length
        );
    }, [isLandscape, images.length]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    if (images.length === 0) return <p>No images to display</p>;

    return (
        <div className="flex flex-col p-2 items-center justify-center min-h-screen px-4 bg-teal-50">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold font-chanchai text-green-900">BEST MOMENT</h2>
                <div className="flex items-center my-4 text-center">
                    <div className="border-t border-green-400 flex-grow"></div>
                    <h2 className="text-base font-serif font-thin text-green-700 mx-4 ">EVER</h2>
                    <div className="border-t border-green-400 flex-grow"></div>
                </div>
                <p className="text-lg font-chanchai font-semibold text-green-800 ">SAROCHA & TEEROOT</p>
            </div>

            <div
                {...swipeHandlers}
                className={`flex ${isLandscape ? 'flex-row' : 'flex-col'} items-center justify-center w-full max-w-screen-lg bg-sage-200 rounded-xl px-6 py-2 shadow-md relative`}
            >
                <button className="carousel-button prev" onClick={handlePrev} aria-label="Previous">
                    &lt;
                </button>

                <div className="carousel-images flex justify-center items-center my-6 relative w-[300px] h-[400px] overflow-hidden">
                    {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                        <div key={index} className="flex-shrink-0 p-2 ">
                            <PhotoProvider>
                                <PhotoView src={image}>
                                    <Image
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        layout="fixed"
                                        width={400}
                                        height={300}
                                        objectFit="cover"
                                        className="rounded-2xl shadow-lg"
                                    />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    ))}
                </div>

                <button className="carousel-button next" onClick={handleNext} aria-label="Next">
                    &gt;
                </button>
            </div>

            <div className="carousel-dots mt-6">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></span>
                ))}
            </div>
            <p className="text-xl font-sans text-center text-green-700 mt-4">#PPJourneyAllAlong</p>
        </div>
    );
};

export default CustomCarousel;