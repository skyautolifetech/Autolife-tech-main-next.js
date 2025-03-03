import React from 'react'

function DashBoard() {
  return (
    <div>
      <div className="mx-auto py-14 px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative bg-gradient-to-b from-stone-300 via-gray-40 to-stone-300">
        {/* Section Title */}
        <div className="text-center mb-12 flex flex-col gap-4 items-center">
          {/* <p className="font-bold text-lg sm:text-xl"> Simple, Secure and Reliable</p> */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Your All-in-one System
          </h1>


          <div className="border-b-2 border-gray-400 w-32 sm:w-56 mb-6"></div>
          <p className="text-sm sm:text-base px-4 sm:px-8 w-full md:w-3/4 lg:w-5/6 text-center text-gray-600">
            This is why we designed the most beautiful dashboard that not only looks good but is incredibly user-friendly for everyone to use. We combine all your smart apps and devices into one interface that allows you to control your entire home without having to switch apps.
          </p>
        </div>

        {/* Image Section */}
        {/* <div className="flex justify-center items-center">
                  <video
                    src="https://autolifetech.com/wp-content/uploads/2021/10/y2mate.com-Hassio-Floorplan-UI-with-Color-synced-lights_1080pFHR.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-3/2 sm:w-2/3 lg:w-5/6 h-auto object-cover rounded"
                ></video>
                
            </div> */}
        <div className="flex justify-center items-center">
            <img
              src="./home2a.png"
              alt="Home Automation"
              className="w-3/2 sm:w-2/3 lg:w-5/6 h-auto object-cover rounded"
              // style={{ width: "20rem" }}
            />
          </div>

        {/* <div className="flex justify-center items-center">
          <video
            src="https://autolifetech.com/wp-content/uploads/2021/10/y2mate.com-Hassio-Floorplan-UI-with-Color-synced-lights_1080pFHR.mp4"
            autoPlay
            loop
            muted
            className="w-3/2 sm:w-2/3 lg:w-5/6 h-auto object-cover rounded"
            controls  // Optional: Add controls to make the video playable
          ></video>
        </div> */}

      </div>
    </div>
  )
}

export default DashBoard
