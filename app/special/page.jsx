"use client";
import React, { useState, useRef } from "react";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";

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
    <>


      <main className="bg-gray-50 min-h-screen">

        {/* Video Sections */}
        <section className="w-full aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/geXBYnTDrrs?vq=hd1080&rel=0&modestbranding=1&autoplay=0&mute=0&controls=1"
            title="Smart Home Automation Demo 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        <section className="w-full aspect-video overflow-hidden my-2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BEvUWrno7FI"
            title="Smart Home Automation Demo 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        <section className="w-full aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VqoNXslPZ0Q"
            title="Smart Home Automation Demo 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>

        <div className="relative px-0 sm:px-4 lg:px-8 py-12">
          <div className="mx-auto w-full max-w-none sm:max-w-screen-lg sm:rounded-2xl sm:shadow-md overflow-hidden">
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full sm:rounded-2xl sm:border sm:border-gray-300 rounded-none border-0 "
                src="https://www.youtube.com/embed/VqoNXslPZ0Q"
                title="Smart Home Automation Demo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>


        {/* Smart Home PDF Offer Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-9
        ">
          <div className="flex flex-col items-center md:flex-row md:gap-12">
            {/* Iframe Section */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative max-w-xl scale-90 transform transition-all duration-300">
                <div className="relative overflow-hidden w-[23.4375rem] h-[38.75rem] rounded-[2.5rem] shadow-lg border border-blue-300/50 bg-white/30 backdrop-blur-md ring-1 ring-blue-200/50">
                  <iframe
                    src="https://demo.home-assistant.io/#/lovelace/home"
                    className="w-[23.4375rem] h-[38.75rem] bg-white rounded-[2rem]"
                    allowFullScreen
                    title="Home Assistant Demo"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-800 tracking-tight">
                Smart Home, Smarter Living <span className="text-blue-500">🏡</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover how your home can be smarter with a custom smart home concept designed just for you! Get a personalized automation PDF with ideas for lighting, security, energy savings, and more.
              </p>
              <ul className="mt-[1.75rem] text-md text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]">1.</span> Solutions to existing home problems
                </li>
                <li className="flex items-center">
                  <span className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]">2.</span> Interactive floorplan sample
                </li>
                <li className="flex items-center">
                  <span className="w-[1.5rem] h-[1.5rem] mr-[0.5rem]">3.</span> Ideas for a smarter home
                </li>
              </ul>

              <button
                onClick={() => window.open("https://wa.me/+6592212224", "_blank")}
                className="mt-6 flex items-center bg-gradient-to-r from-green-500 to-green-600 transition-colors text-white py-3 px-6 rounded-full shadow-md text-lg font-medium"
              >
                <FaWhatsapp className="w-6 h-6 mr-2" />
                WhatsApp for PDF Plans
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
