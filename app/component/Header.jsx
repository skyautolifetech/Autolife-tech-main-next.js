import React from 'react'
import Navbar from './Navbar'
import Services from './Services'

function Header() {
    return (
        <div className="">
            <div className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative">
                <video
                    src="/Home.mp4"
                    loading="lazy"
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                ></video>
                <Navbar />

                <div className="z-10 text-white absolute flex flex-col items-start bottom-[30%] left-[8vw]">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Make your home smart,
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            and life simpler
                        </h1>
                        <p className="text-lg md:text-xl mt-4 max-w-xl">
                            Be blown away by the endless possibilities of customizable home automation with AutoLifeTech Singapore
                        </p>
                        {/* <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                        BOOK A DEMO
                    </button> */}
                    </div>
                </div>

            </div>

            {/* <div className="mx-auto py-10 px-4 sm:px-6 md:px-20 lg:px-32 w-full overflow-hidden relative">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">


                    <div className="flex flex-col sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                        <h1 className="text-lg font-semibold text-gray-800 mb-4">
                            Don’t waste your existing devices
                        </h1>
                        <p className="text-sm text-gray-600">
                            Already have smart lights, Xiaomi, Dyson air purifier, TV, Motion sensors, Tablets, Google speakers. Add existing devices into your automation system
                        </p>
                    </div>

                    <div className="flex flex-col sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                        <h1 className="text-lg font-semibold text-gray-800 mb-4">
                        1000+ Compatible Brands
                        </h1>
                        <p className="text-sm text-gray-600">
                        Buy your favourite products from Local, Shopee, Lazada during their sale, add them into your home. Mix and match till your heart’s content
                        </p>
                    </div>


                    <div className="flex flex-col sm:border-gray-200 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                        <h1 className="text-lg font-semibold text-gray-800 mb-4">
                        Fully Customizable Automations
                        </h1>
                        <p className="text-sm text-gray-600">
                        No issue is too big or too small, we offer customization to suit your specific needs. Dementia, young children, health conditions, habit building etc
                        </p>
                    </div>

                </div>

            </div> */}


        </div>


    )
}

export default Header
