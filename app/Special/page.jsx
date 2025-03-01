"use client";
import React, { useState, useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Page() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            <div className="mx-auto py-5 md:px-20 lg:px-35 min-h-96 w-full overflow-hidden relative bg-[#1F2326]">

                <div className="flex flex-col justify-center items-center my-12 text-center space-y-6 px-4">
                    <p className="text-lg sm:text-xl text-white tracking-wide leading-relaxed max-w-2xl">
                        Control everything with just a tap – lighting, security, energy, and more.
                    </p>
                    <h1 className="text-3xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight transform transition duration-500 ease-in-out hover:scale-105">
                        Smart Automation, Made for You
                    </h1>

                </div>


                {/* Video Section */}
                <div className="flex justify-center items-center relative mb-14">
                    <video
                        ref={videoRef}
                        src="/Home.mp4"
                        loop
                        muted
                        className="w-full sm:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
                    />
                    {!isPlaying && (
                        <button
                            onClick={handlePlayClick}
                            className="absolute flex items-center justify-center bg-white text-black p-4 rounded-full shadow-lg focus:outline-none"
                            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    )}
                </div>

                {/* Contact Section */}
                <div className="text-center flex flex-col gap-4 items-center mb-14">
                    <div className="mx-auto pt-14 md:px-20 min-h-96 w-full overflow-hidden relative">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Image Section */}

                            <div className="rounded-lg flex-1 overflow-hidden w-full lg:w-2/3">
                                <img
                                    src="./homeautomation-banner2.png"
                                    alt="Home Automation"
                                    className="w-full h-auto rounded-full shadow-lg"
                                />
                            </div>


                            {/* Text Section */}
                            <div className="p-6 w-full lg:w-3/5 space-y-4 flex-1 lg:text-left">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                                    Smart Home, Smarter Living! <span className="text-blue-400">🏡✨</span>
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-300 italic">
                                    "A smart home isn’t just about convenience—it’s about creating a space that adapts to you,
                                    making life easier, safer, and more efficient." – <span className="text-blue-300">Sky</span>
                                </p>
                                <p className="text-base sm:text-lg text-gray-400">
                                    Discover how your home can be  smarter
                                    with a custom smart home concept designed just for you! Get a personalized automation PDFwith ideas for
                                    lighting, security, energy savings,and more.
                                </p>
                                <p className='text-base sm:text-lg text-gray-400'>Tap below to get yours on WhatsApp! 👇</p>
                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/YOUR_PHONE_NUMBER?text=I%20want%20my%20Smart%20Home%20concept%20PDF!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg shadow-lg bg-green-500 hover:bg-green-400 text-black transition duration-300 transform hover:scale-105"
                                >
                                    📩 WhatsApp me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer Area */}
                <section className="bg-gray-900 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center text-white mb-8">About AutoLifeTech</h2>
                        <p className="text-lg text-center text-gray-300 mb-8">
                            At AutoLifeTech, we make technology truly useful for families—helping you build better habits and achieve your goals effortlessly.
                        </p>
                        <div className="flex justify-center">
                            <div className="w-full md:w-2/3 lg:w-1/2 px-4 sm:px-6">
                                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-semibold text-white mb-4">🏆 Why We’re the Best in Singapore:</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>✅ Seamlessly integrate the widest range of brands</li>
                                        <li>✅ Beautiful floorplans & dashboards for intuitive control</li>
                                        <li>✅ Advanced automations that simplify and enhance daily life</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default Page;
