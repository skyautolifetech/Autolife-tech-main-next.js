import React from "react";

function Footer() {
  return (
    <div className="mx-auto py-14 px-6 sm:px-12 lg:px-32  w-full overflow-hidden relative text-white" style={{ backgroundColor: 'black' }}>
    <div className="flex flex-col lg:flex-row justify-start dark:text-slate-300">
      {/* About AutoLifeTech Section */}
      <div className="flex flex-col  lg:w-1/2 text-gray-700 ">
        <h1 className="text-2xl font-semibold text-white mt-6 ">
          AutoLifeTech Pte Ltd
        </h1>
        <p className="text-sm text-white">
          {/* <span className="text-lg font-semibold text-white mt-6"> AutoLifeTech Pte Ltd<br/> </span> We make technology truly useful for families <br/>helping you build better habits and achieve your goals effortlessly. */}
        </p>
  
        <p className="text-sm font-semibold text-white  mt-2">
          Why We’re the Best in Singapore:
        </p>
        <ul className="text-sm space-y-2 text-white">
          <li>1. Seamlessly integrate the widest range of brands</li>
          <li>2. Beautiful floorplans & dashboards for intuitive control</li>
          <li>3. Advanced automations that simplify and enhance daily life</li>
        </ul>
  
        <p className="text-lg text-white mt-2">
            <a href="https://wa.me/6592212224??text=Hi%20Sky ," target="_blank">
          WhatsApp <b>Sky</b> (Smart Home Architect) on <b>+65 92212224</b>
          </a>
        </p>
      </div>
  
      {/* Optional second column for contact or other info */}
      {/* <div className="hidden lg:block lg:w-1/2 text-center"> */}
        {/* You can add more content here if needed */}
      {/* </div> */}
    </div>
  </div>
  
  );
}

export default Footer;
