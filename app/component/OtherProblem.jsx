'use client'

import React, { useState } from 'react'

const OtherProblem = () => {

    const [isOpen, setisOpen] = useState({});

    const dataArr = [
        { title: "Read Issue", description: 'Mrs. Tan, in her 70s, is a stroke survivor. Her family constantly worries about the risk of another stroke or a sudden fall, especially when she’s alone.' },
        { title: "Our Solution", description: 'We install smart occupancy sensors in key areas like the bathroom. If Mrs. Tan stays inside for over 30 minutes, an alert is automatically sent to the family group chat, prompting a check-in. Emergency buttons are also placed throughout the house, allowing Mrs. Tan to call for help instantly when needed.' },
        { title: "Final Results", description: 'Mrs. Tan’s family can finally have peace of mind, knowing she’s safe, while she maintains her independence with confidence.' },
    ];
    
    const dataArrSec = [
        { title: "Read Issue", description: 'In large homes, it can be difficult for family members to easily call for help in different rooms.' },
        { title: "Our Solution", description: 'The Helper Call Button is strategically placed in the grandparents room, and voice commands are set up for the rest of the family to call for assistance. When activated, the helpers bedside lamp flashes blue, and speakers announce, "Need assistance in [Room Name], please assist."' },
        { title: "Final Results", description: 'With the knowledge that they are being monitored, Susu’s performance has noticeably improved.' },
    ];
    
    const dataArrTh = [
        { title: "Read Issue", description: 'Sarah was recovering from a cold, but maintaining a cozy, restful environment was tough. Her mum struggled to keep the room at the perfect temperature and ensure fresh air.' },
        { title: "Our Solution", description: 'With AutoLife’s IoT tech, Sarah’s room adapted automatically—temperature, air quality, and soothing music were all optimized. Presence sensors kept everything just right, offering seamless care without extra effort.' },
        { title: "Final Results", description: 'Sarah recovered faster, and her mum felt at ease knowing the smart home had everything under control.' },
    ];
    
    const dataArrFrth = [
        { title: "Read Issue", description: 'Fiona often blamed herself for struggling with food cravings and a lack of motivation to exercise. She desperately wanted to lose weight, but reminders of pastries and sweet drinks on her living room table only reinforced her feelings of failure' },
        { title: "Our Solution", description: 'We introduced an automated dashboard to track Fiona’s weight loss journey visually. She swapped cookies and sugary drinks for plain water and a yoga mat. With AutoLife’s smart scheduling, her workout music played automatically, and the lights and curtains adjusted themselves to create an energizing environment. She set up two 10-minute workout sessions daily, and even got a friend to join via video chat—keeping fitness fun and social.' },
        { title: "Final Results", description: 'Fiona developed healthier habits and felt proud of her progress. Instead of self-blame, she recognized the power of her environment and consistent routines in achieving her weight loss goals' },
    ];
    
    const dataArrFifth = [
        { title: "Read Issue", description: 'John rented out rooms with utilities included to boost his income. However, he was surprised when his electricity bill shot up by nearly 50%. He needed to find out what was driving the sudden surge in energy consumption.' },
        { title: "Our Solution", description: 'We installed smart sockets and presence detectors to monitor real-time electrical usage and room activity. This allowed John to track consumption patterns and identify any unusual spikes.' },
        { title: "Final Results", description: 'John quickly discovered that one room was consuming an excessive amount of power. Upon investigation, he found that the tenant had set up bitcoin mining machines running 24/7. With clear evidence, John successfully renegotiated the rental agreement, adjusting the price to account for the additional energy costs.' },
    ];
    
    const dataArrsix = [
        { title: "Read Issue", description: 'I find it so difficult to study," Tommy shared. With his PSLE exams approaching, staying focused was a real struggle.' },
        { title: "Our Solution", description: 'We created a custom "Study Mode" scene using AutoLife’s automation. After chatting with Tommy, we integrated his favorite study playlist. At the push of a button, his room transformed: music played, curtains opened, and smart anti-flicker lights provided a bright and comfortable setting. We also introduced a smart automation timer to support the Pomodoro technique, balancing focused study sessions with well-timed breaks.' },
        { title: "Final Results", description: 'Using occupancy sensors, we tracked Tommy’s study hours. He now feels proud of his consistent study habits and improved discipline. With AutoLife, he’s better prepared and more confident for his exams.' },
    ];
    
    const dataArrSev = [
        { title: "Read Issue", description: 'Jason, a primary school student, used to spend hours playing his favorite TV game, Plants vs. Zombies, right after school. His routine often led to arguments with his mum, especially when he fibbed about his gaming habits. She wanted him to shower, complete an hour of homework, and only then enjoy his game time.' },
        { title: "Our Solution", description: "With AutoLife's intelligent IoT technology, Jason’s mum gained full control over the TV's main power. She set a tailored focus study mode just for him—optimizing lighting, air conditioning, and background music, all synced with an inbuilt timer. A presence sensor in his study chair ensured he stayed focused for a full hour before unlocking the TV for gaming." },
        { title: "Final Results", description: 'Now, Jason showers as soon as he gets home and maintains a solid hour of study time before enjoying his games. His mum is thrilled with the newfound balance, and the household is more harmonious than ever.' },
    ];
    
    const dataArrEig = [
        { title: "Read Issue", description: 'Grandma’s dementia was worsening. She often forgot to take her medication and occasionally wandered out of the house in the middle of the night, leaving the family in constant worry.' },
        { title: "Our Solution", description: 'We installed a smart door lock and CCTV system to monitor when Grandma entered or exited the home. If she stepped outside at 2 a.m., the speakers gently reminded her, “Ah Ma, please go back to bed.” Her phone’s location tracking was activated, and a contact sensor on the medicine cabinet helped monitor when she took her medication.' },
        { title: "Final Results", description: 'The family now enjoys peace of mind. They receive alerts if Grandma leaves at odd hours, and they can ensure her medication routine is maintained—keeping her safe and cared for, always.' },
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
                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
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
                 
                    <h1 className='text-lg sm:text-xl font-bold text-gray-800 text-center w-full'>Seamless Care</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                           
                            {dataArrTh.map((PerAccordion, idx) => (
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


                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./User experience/pexels-andres-ayrton-6551070-800x1200.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Stay Fit, Stay Smart</h1>
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
                    <h1 className='text-xl sm:text-xl font-bold text-gray-800 text-center w-fit'>Stop Energy Thieves</h1>
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
                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./Solutions/Autolifetech-Home-Automation-Solution-Work-from-Home.jpg" alt="Smart Home Feature" className="w-full h-[250px] object-cover shadow-md" />
                    <h1 className='text-xl sm:text-xl1 font-bold text-gray-800 text-center w-fit'>Children can’t Focus and Study</h1>
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
                <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
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
