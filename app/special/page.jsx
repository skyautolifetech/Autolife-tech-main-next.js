"use client";
import React, { useState, useRef } from "react";
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
    <div className="bg-gray-50 min-h-screen">



      <section className="w-full aspect-video overflow-hidden">
        <iframe
          className="w-full h-full bg-gray-400 dark:bg-slate-700"
          src="https://www.youtube.com/embed/geXBYnTDrrs?vq=hd1080&rel=0&modestbranding=1&autoplay=0&mute=0&controls=1"
          title="YouTube video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section className="w-full aspect-video overflow-hidden my-2">
        <iframe
          className="w-full h-full bg-gray-400 dark:bg-slate-700"
          src="https://www.youtube.com/embed/BEvUWrno7FI"
          title="YouTube video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section className="w-full aspect-video overflow-hidden">
        <iframe
          className="w-full h-full bg-gray-400 dark:bg-slate-700"
          src="https://www.youtube.com/embed/VqoNXslPZ0Q"
          title="YouTube video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>




      <div className="mx-auto max-w-7xl px-[1rem] sm:px-[1.5rem] py-[3rem]">
        <div className="flex flex-col items-center md:flex-row md:gap-12">
          {/* Iframe Section */}
          <div className="md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative max-w-xl scale-90 transform transition-all duration-300">
              {/* Iframe with Clipped Header */}
              <div className="relative overflow-hidden w-[23.4375rem] h-[38.75rem] rounded-[2.5rem] shadow-lg border-[0.1875rem] border-blue-300/50 bg-white/30 backdrop-blur-md ring-1 ring-blue-200/50">
                <iframe
                  src="https://demo.home-assistant.io/#/lovelace/home"
                  className="w-[23.4375rem] h-[43.75rem] bg-white -mt-[5rem] rounded-[2rem]"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Text Section */}

          <div className="self-center md:w-1/2 mt-[2rem] md:mt-0">
            <div className="mb-[2rem] lg:mb-[3rem]">

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-800 tracking-tight">
                Smart Home, Smarter Living,{" "}
                <span className="text-blue-500">🏡</span>
              </h1>
              <p className="mt-[1.25rem] text-lg text-gray-600 leading-relaxed">
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
                className="mt-[2rem] flex items-center bg-gradient-to-r from-green-500 to-green-600  transition-colors text-white py-[0.75rem] px-[2rem] rounded-full focus:outline-none shadow-md space-x-3 text-lg font-medium"
              >
                <FaWhatsapp className="w-[1.5rem] h-[1.5rem]" />
                <span>WhatsApp for PDF Plans</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;