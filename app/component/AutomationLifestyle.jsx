import React from 'react'


function AutomationLifestyle() {

  const data = [
    {
      "img": "/automationLifeImages/img1.jpg",
      "name": "Free to Choose the Best",
      "disc": "Expand your possibilities with unlimited device compatibility. Whether it’s a Dyson, Tesla car, Samsung washer, Aqara, Yale lock, or Google Assistant—choose the brands you love and integrate seamlessly with AutoLife."
    },
    {
      "img": "/automationLifeImages/img2.jpg",
      "name": "Enhance Home Security",
      "disc": "With over 4,600+ homes and offices secured, we transform your space into a safe sanctuary. Cherish precious moments with your family, knowing your home is protected"
    },
    {
      "img": "/automationLifeImages/img3.png",
      "name": "Maintain Healthy Homes",
      "disc": "Breathe easy with safe air quality, integrated smoke detection, automated robot vacuums, leak prevention to combat mold, and smart toilet ventilation. We create healthier living environments effortlessly"
    },
    {
      "img": "/automationLifeImages/img4.jpg",
      "name": "Operate Without Internet, Reliability",
      "disc": "Boost reliability and uptime by keeping your home’s automation independent of external internet connections. Your data stays within your home—secure, private, and efficient."
    },
    {
      "img": "/automationLifeImages/img5.jpg",
      "name": "Experience Remote Access",
      "disc": "Stay connected to your home wherever you are. Whether on holiday or at work, get real-time insights and control everything at a glance through your phone."
    },
    {
      "img": "/automationLifeImages/img6.gif",
      "name": "Secured Cloud Back Up",
      "disc": "Enhance reliability with routine backups of your home data and custom configurations. Rest assured—our dedicated customer support is always ready to assist when you need it most."
    }
  ];

  // const [datas, setDatas] = useState(data);

  return (
    // md:px-20
    <div className="mx-auto py-14 px-4 sm:px-6  lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative">

    <div className="text-center mb-12">
      <p className="text-gray-600 text-lg font-bold sm:text-3xl md:text-4xl mb-4 md:w-3/4 w-full mx-auto">
      A truly intelligent home automation system designed around your lifestyle
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        data.map((e, i) => (
          <div className="relative flex-shrink-0 w-full" key={i}>

            <img src={e.img} alt={`Automation Life ${i + 1}`} className="w-full h-64 object-cover mb-14  rounded-lg shadow-lg" />

            <div className="absolute bottom-1 left-0 right-0 flex justify-center ">

              <div className="inline-block bg-white p-6 sm:p-4  shadow-lg">
                <h1 className="text-lg sm:text-xl font-semibold text-center">{e.name}</h1>
                <p className=" text-xs sm:text-xs text-gray-700 text-center mt-2">
                  {e.disc}
                </p>
              </div>

            </div>

          </div>
        ))
      }

    </div>

  </div>
  );
}

export default AutomationLifestyle;
