"use client"
import { useEffect } from "react";
import Image from "next/image";

const Six = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
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

    const eventDetails = {
        title: "Sarocha Teeroot's wedding",
        description: "ร่วมเฉลิมฉลองในวันที่ 16 กุมภาพันธ์ 2025",
        location: "Mellow Garden Restaurant & Bakery",
        startDate: "20250216T090000", // YYYYMMDDTHHMMSS
        endDate: "20250216T120000", // YYYYMMDDTHHMMSS
    };

    const generateICS = () => {
        const icsData = `
  BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:Sarocha Teeroot's wedding
  DESCRIPTION:ร่วมเฉลิมฉลองในวันที่ 16 กุมภาพันธ์ 2025
  LOCATION:Mellow Garden Restaurant & Bakery
  DTSTART:20250216T090000Z
  DTEND:20250216T120000Z
  END:VEVENT
  END:VCALENDAR
    `;

        const blob = new Blob([icsData], { type: "text/calendar" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "event.ics";
        link.click();
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventDetails.title
    )}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(
        eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}`;
    return (
        <div className="flex flex-col  items-center justify-center py-12  min-h-screen bg-gradient-to-br from-rose-50  to-purple-50">
            {/* bg-gradient-to-br from-sky-50 via-purple-50 to-amber-50 */}
            <div className="items-center  flex flex-col mx-auto text-center justify-center mb-4 ">
                <Image
                    src="/images/calendar.png" // อัปโหลดรูปภาพใน public/images และใช้ path นี้
                    alt=""
                    width={30}
                    height={30}
                    className="mb-3 "
                />
                <h2 className="text-2xl  font-chanchai  font-bold text-gray-700">WHEN</h2>
                <p className=" text-base font-kanit  mt-2">

                    SUNDAY, FEBRUARY 16, 2025
                </p>
                <p className="text-base font-kanit font-medium text-gray-600 ">
                    วันอาทิตย์ที่ 16 กุมภาพันธ์ พ.ศ. 2568
                </p>
                <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" border border-black border-solid rounded-lg font-kanit text-black px-6 py-2 mt-3 text-sm  hover:bg-gray-700 hover:text-white transition inline-block"
                >
                    Add To Calendar
                </a>
               
            </div>
            <div className="items-center flex flex-col mx-auto text-center justify-center">
                <Image
                    src="/images/wedding-location.png" // อัปโหลดรูปภาพใน public/images และใช้ path นี้
                    alt=""
                    width={35}
                    height={35}
                    className=" mb-3 mt-4 "
                />
                <h2 className="text-2xl  font-chanchai  font-bold text-gray-700">WHERE</h2>
                <p className=" text-base font-kanit  mt-2">

                    Mellow Garden Restaurant & Bakery
                </p>
                <p className="text-sm font-kanit font-medium text-gray-600 text-balance ">
                    10, 895 ถ. ประเสริฐมนูกิจ แขวงนวลจันทร์ เขตบึงกุ่ม กทม
                </p>
                <a
                    href="https://maps.app.goo.gl/1CzzaeEgCjhnwegg8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" border border-black border-solid rounded-lg font-kanit text-black px-6 py-2 mt-3 text-sm  hover:bg-gray-700 hover:text-white transition inline-block"
                >
                    Get Direction
                </a>

            </div>
            <div className="items-center flex flex-col mx-auto text-center justify-center mt-4">
                <Image
                    src="/images/glass-with-wine.png" // อัปโหลดรูปภาพใน public/images และใช้ path นี้
                    alt=""
                    width={35}
                    height={35}
                    className=" mb-3 mt-4 "
                />
                <h2 className="text-2xl  font-chanchai  font-bold text-gray-700">THEME</h2>
                <p className=" text-base font-kanit  mt-2">

                    #PPJourneyAllAlong
                </p>
                <p className="text-sm font-kanit font-medium text-gray-600 text-balance ">

                </p>
                {/* Color Palette */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                    {['#9BC2B2', '#C5D6BA', '#F2E9D3', '#F6C8B6', '#B6BBC7'].map((color, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: color,
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',

                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Google Map */}
            <div className=" fade-in shadow-xl  bg-white rounded-xl " style={{ marginTop: '15px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1924274121734!2d100.6302226!3d13.8274809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d62860825a6a3%3A0xac71df54306132d7!2sMellow%20Garden%20Restaurant%20%26%20Bakery!5e0!3m2!1sth!2sth!4v1735196828884!5m2!1sth!2sth"
                    width="350"
                    height="250"
                    style={{ border: 'none', borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    className=" shadow-xl "
                />
            </div>

        </div>


    );
};

export default Six;
