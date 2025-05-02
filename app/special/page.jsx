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

        {/* <section className="w-full aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/geXBYnTDrrs?vq=hd1080&rel=0&modestbranding=1&autoplay=0&mute=0&controls=1"
            title="Smart Home Automation Demo 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section> */}
        {/* 
        <section className="w-full aspect-video overflow-hidden my-2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BEvUWrno7FI"
            title="Smart Home Automation Demo 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section> */}

        {/* <section className="w-full aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VqoNXslPZ0Q"
            title="Smart Home Automation Demo 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section> */}



        <div className="relative px-2 py-1 sm:pt-0 sm:mt-0">
          <div className="mx-auto w-full max-w-none sm:max-w-screen-lg sm:rounded-2xl sm:shadow-md overflow-hidden">
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full sm:rounded-2xl mt-1 sm:border sm:border-gray-300  block max-w-5xl mx-auto rounded"
                src="https://www.youtube.com/embed/VqoNXslPZ0Q"
                title="Smart Home Automation Demo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>


        <div className="relative px-2  py-1 sm:pt-0 sm:mt-0">

          <div className="mx-auto w-full max-w-none sm:max-w-screen-lg sm:rounded-2xl sm:shadow-md overflow-hidden">
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full sm:rounded-2xl sm:border sm:border-gray-300  block max-w-5xl mx-auto rounded"
                src="https://www.youtube.com/embed/geXBYnTDrrs?vq=hd1080&rel=0&modestbranding=1&autoplay=0&mute=0&controls=1"

                title="Smart Home Automation Demo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>


        <div className="relative px-2  pb-2 pt-1 sm:pt-0 sm:mt-0">

          <div className="mx-auto w-full max-w-none sm:max-w-screen-lg sm:rounded-2xl sm:shadow-md overflow-hidden">
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full sm:rounded-2xl sm:border sm:border-gray-300  block max-w-5xl mx-auto rounded"
                src="https://www.youtube.com/embed/BEvUWrno7FI"
                title="Smart Home Automation Demo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>




        {/* Smart Home PDF Offer Section */}
        <section className="bg-gray-200 pt-2 flex flex-col justify-center items-center">
          <div className="mx-auto max-w-7xl">
            <div className="text-center flex flex-col gap-2 items-center">
              {/* <p className="font-bold text-lg sm:text-xl"> Simple, Secure and Reliable</p> */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Mobile Demo
              </h1>
              <div className="border-b-2 border-gray-400 w-32 sm:w-56"></div>
            </div>

            <div className="flex justify-center items-center pb-5">
              {/* Iframe Section */}
              <div className="relative max-w-xl scale-x-90 scale-y-85 py-3 transform transition-all duration-300">
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
          </div>
        </section>

        {/* lovelace UI 2 */}

        {/* <section className="py-5 bg-white">
          <div className="mx-auto max-w-7xl sm:px-6">
            <div className="text-center flex flex-col gap-2 items-center">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Your Home Demo
              </h1>
              <div className="border-b-2 border-gray-400 w-32 sm:w-56"></div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="relative scale-90 transform transition-transform duration-300">
                <div className="relative overflow-hidden w-[23.4375rem] h-[38.75rem] rounded-[2.5rem] shadow-lg border border-blue-300/50 bg-white/30 backdrop-blur-md ring-1 ring-blue-200/50">
                  <iframe
                    src="https://bbah5uainnohr5ma40kxg84yzg96uyi7.ui.nabu.casa/dashboard-frontalfp/frontv1"
                    className="w-[23.4375rem] h-[38.75rem] bg-white rounded-[2rem]"
                    allowFullScreen
                    title="Smart home"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* text section */}
        <section className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-2 pb-12">

            <div className="  md:mt-0">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-800 tracking-tight">
                Smart Home, Smarter Living <span className="text-blue-500">🏡</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 ">
                Discover how your home can be smarter with a custom smart home concept designed just for you! Get a personalized automation PDF with ideas for lighting, security, energy savings, and more.
              </p>
              <p className="mt-4 text-lg text-gray-600 ">
              1. Solutions to existing home problems
              </p>
              <p className="mt-4 text-lg text-gray-600 ">
              2. Interactive floorplan sample
              </p>
              <p className="mt-4 text-lg text-gray-600 ">
              3. Ideas for a smarter home
              </p>

              <button
                onClick={() => window.open("https://wa.me/+6592212224", "_blank")}
                className="mt-6 flex items-center bg-gradient-to-r from-green-500 to-green-600 transition-colors text-white py-3 px-6 rounded-full shadow-md text-lg font-medium"
              >
                <FaWhatsapp className="w-6 h-6 mr-2 " />
                WhatsApp for PDF Plans
              </button>
              <p className="mt-4 text-lg text-gray-600 ">
               
              </p>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}

export default Page;
