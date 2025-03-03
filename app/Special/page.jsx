"use client";
import React, { useState, useRef } from "react";

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
    <div className="py-0 pb-12 sm:pb-16 lg:pb-20">
      <section id="heroOne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="py-12">
            <div className="relative m-auto max-w-5xl">
              <video
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                src="/Home.mp4"
                width={1024}
                height={607}
                sizes="(max-width: 1024px) 100vw, 1024px"
                controls
                autoPlay
                muted
                loop
              />
            </div>

            <div className="relative m-auto max-w-5xl pt-3">
              <iframe
                className="mx-auto h-auto w-full aspect-video rounded-md bg-gray-400 dark:bg-slate-700"
                src="https://www.youtube.com/embed/dftKArsWaCs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row md:gap-16">
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="relative m-auto max-w-4xl">
              <img
                className="mx-auto w-full rounded-lg"
                src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamera-back.0083b6e2.jpg&w=640&q=50"
                width={828}
                height={828}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          </div>

          <div className="self-center md:w-1/2">
            <div className="mb-8 lg:mb-12 text-lg text-gray-600">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Smart Home, Smarter Living!{" "}
                <span className="text-blue-400">🏡✨</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 italic">
                "A smart home isn’t just about convenience—it’s about creating a
                space that adapts to you, making life easier, safer, and more
                efficient." – Sky
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Discover how your home can be smarter with a custom smart home
                concept designed just for you! Get a personalized automation PDF
                with ideas for lighting, security, energy savings, and more.
              </p>

            
            </div>
          </div>
        </div>
      </div>



      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row md:gap-16">
         

          <div className="self-center md:w-1/2">
            <div className="mb-8 lg:mb-12 text-lg text-gray-600">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Smart Home, Smarter Living!{" "}
                <span className="text-blue-400">🏡✨</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 italic">
                "A smart home isn’t just about convenience—it’s about creating a
                space that adapts to you, making life easier, safer, and more
                efficient." – Sky
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Discover how your home can be smarter with a custom smart home
                concept designed just for you! Get a personalized automation PDF
                with ideas for lighting, security, energy savings, and more.
              </p>

              
            </div>
          </div>


          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="relative m-auto max-w-4xl">
              <img
                className="mx-auto w-full rounded-lg"
                src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamera-back.0083b6e2.jpg&w=640&q=50"
                width={828}
                height={828}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Page;
