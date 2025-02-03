'use client'

import React, { useState } from 'react'

const OtherProblem = () => {

    const [isOpen, setisOpen] = useState({});

    const dataArr = [

        { title: "Read Issue", description: 'Mrs Tan is in her 70s. She suffered from stroke, they family is worried sick that he might have another stroke or faint', },
        { title: "Our Solution", description: "Smart occupancy timers are placed in toilets. If more than 30mins in Toilet, Alert is sent to family group chat to check on Mrs Tan. Emergency buttons are placed in key areas around the house. Mrs Tan is trained to use them when required", },
        { title: "Final Results", description: "The family can sleep a lot better and with less worry.", },
    ];


    const dataArrSec = [

        { title: "Read Issue", description: 'The family lives in a big house, it is hard to call the helper to the different rooms', },
        { title: "Our Solution", description: "Helper Call Button is placed in grandparents rooms. Voice command to call helper is created for rest of family.When activated, Helpers’ bedside lamp will flash Blue. Speakers will play “Need assistance at ‘‘ Room Please assist.", },
        { title: "Final Results", description: "With the knowledge of being monitored, Susu’s performance improved.", },
    ];


    const dataArrTh = [

        { title: "Read Issue", description: 'Martin has been visiting doctors and taking medication for a year because of his runny nose. His nose always feels itchy which has affected his concentration.', },
        { title: "Our Solution", description: "3 Hypotheses were made: Cat in the house, food sensitivity or fumes from the coffee shop under the block. Air quality sensors were installed in each of his rooms. A smart log was implemented for Martin to track his runny nose.", },
        { title: "Final Results", description: "Martin’s runny nose coincided with bad air quality (PM10 and VOC) usually before his meal times. Martin concluded that it was the fumes from the coffee shop. He shifted his room and bought better air purifiers. He was thankful to still be able to enjoy good food and his pet cat.", },
    ];

    const dataArrFrth = [

        { title: "Read Issue", description: 'Fiona always blamed herself for having poor self-control of her food addiction and laziness to exercise. She wanted to lose weight badly. During the discovery session, we noticed pastries and sweet drinks on the living room table. When asked, Fiona mentioned it always reminded her of her lack of discipline.', },
        { title: "Our Solution", description: "An automation dashboard will show her weight loss journey in a graph. She started replacing her cookies and sweet drinks with plain water and a yoga mat. She schedules 2 workout routines daily, each session lasting for 10mins. At the appointed time, her workout music will play with her lights and curtains opening automatically. Her friend subsequently agreed to the same routine, joining in by video chat.", },
        { title: "Final Results", description: "Fiona felt proud of herself that she had healthier habits. Instead of blaming herself, she recognised that environment and having habits were huge factors that helped her weight loss journey.", },
    ];

    const dataArrFifth = [

        { title: "Read Issue", description: 'John rented out rooms with electrical bills included for extra income. He discovered his electrical bills almost increased by 50%.', },
        { title: "Our Solution", description: "Smart sockets and presence detectors were installed to monitor activity and electrical consumption.", },
        { title: "Final Results", description: "John discovered high consumption in 1 room. Upon investigation, bitcoin mining machines were running 24/7. John managed to renegotiate with his tenant and increase the rental price.", },
    ];
  
    const dataArrsix = [

        { title: "Read Issue", description: 'I find it so difficult to study”, This year is my PSLE. Help', },
        { title: "Our Solution", description: "Hey google STUDY MODE Scene was created. After discussing with Tommy, he shared with favourite study music playlist.Music plays, Curtains open, smart anti-flickering lights on brightly. Lastly, a smart automation timer was installed for him to do focused work using Pomodoro study technique with break times allocated. ", },
        { title: "Final Results", description: "Number of study hours we approximated base on occupancy sensor. Tommy is proud that he is able to better maintain the study habit and his improved Will Power/ Discipline", },
    ];


    const dataArrSev = [

        { title: "Read Issue", description: 'Jason is in primary school. After school, he always sits in the living room and plays TV games (his favourite Plants vs Zombies). Recently he got into an argument with his mum for lying about his game addiction. His mum wants Jason to first shower, complete an hour of homework, then be allowed game time.', },
        { title: "Our Solution", description: " Mum controls the main power to the TV. She set the time. A customised focus study mode was programmed for Jason. It optimises his light, aircon, music with an inbuilt timer. After 1 hour of sitting at the study chair (tracked by presence sensor), Jason can activate the TV and his game", },
        { title: "Final Results", description: "Jason came home and showered immediately instead of delaying for hours. He was able to study for 1 hour consistently.", },
    ];


    const dataArrEig= [

        { title: "Read Issue", description: ' Grandma’s Dementia is getting worse, she forgets to take her medication, and leaves the house in the middle of the night.', },
        { title: "Our Solution",description: "A smart door lock + CCTV was installed at her home. It can track whenever grandma entered or exited the house. If grandma leaves the house at 2am, Speakers will say “Ah Ma Please go back to bedroom.” Location tracking on her phone was enabled. A contact sensor is placed at the medicine cabinet to approximately track when medicine is taken." },
        { title: "Final Results", description: "The family is save from worry and hassle. If Ah ma goes out at the wrong time, family members are alerted. Medication is taken regularly", },
    ];
   
    const toggle = (cardIdx, idx) => {
        setisOpen(prevState => ({
            ...prevState,
            [cardIdx]: prevState[cardIdx] === idx ? null : idx, // Toggling only for the specific card
        }));

    };



    return (
        <div className="mx-auto py-14 flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative" style={{ backgroundColor: '#D4D0D6' }}>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center my-6 text-center">
                <p className="text-lg text-gray-600 tracking-wide">User experience and design</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Other Problems You Might Face
                </h1>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center justify-center" >
                {/* Card 1 */}
                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/HotFLusha-woman-sat-in-bed-and-experience-a-head-as-part-of-her-high-blood-pressure-symptoms.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-lg sm:text-xl font-bold text-gray-800 text-center w-full'>Elderly needs safety</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArr.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(1, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[1] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="flex flex-col justify-center items-center gap-3 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-rodnae-productions-5591833.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-full'>Helper Call Button</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(2, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[2] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                <img src="./User experience/pexels-andrea-piacquadio-3767426.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                 
                    <h1 className='text-lg sm:text-xl font-bold text-gray-800 text-center w-full'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArr.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(3, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[3] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card 4 */}


                <div className="flex flex-col justify-center items-center gap-3 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-andres-ayrton-6551070-800x1200.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Addicted to TV Games</h1>
                    <div className="flex flex-col text-center gap-4">

                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrFrth.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(4, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[4] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[4] === idx && '!rotate-180'}`} />

                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[4] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* Card 5 */}
                <div className="flex flex-col justify-center items-center gap-0 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/mining-machines.png" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">

                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrFifth.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(5, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[5] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[5] === idx && '!rotate-180'}`} />

                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[5] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                
                {/* Card 6 */}
                <div className="flex flex-col justify-center items-center gap-0 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./Solutions/Autolifetech-Home-Automation-Solution-Work-from-Home.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Children can’t Focus and Study</h1>
                    <div className="flex flex-col text-center gap-4">

                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrsix.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(6, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[6] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[6] === idx && '!rotate-180'}`} />

                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[6] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                
                {/* Card 7 */}
                <div className="flex flex-col justify-center items-center gap-3 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./Solutions/pexels-ryutaro-tsukata-5472251.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Addicted to TV Games</h1>
                    <div className="flex flex-col text-center gap-4">

                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSev.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(7, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[7] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[7] === idx && '!rotate-180'}`} />

                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[7] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                
                {/* Card 8 */}
                <div className="flex flex-col justify-center items-center gap-0 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./Solutions/Autolifetech-Home-Automation-Solution-Dementia.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">

                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrEig.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(8, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">

                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[8] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[8] === idx && '!rotate-180'}`} />

                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[8] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default OtherProblem
