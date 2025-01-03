
import Image from 'next/image';

export default function Explore() {
    return (
        <>
            <div className="w-full md:h-[483px]  md:w-[1104] container mx-auto p-4">
                <h1 className="md:text-4xl text-3xl font-Title font-bold text-center text-white mb-9">Explore the Programs</h1>

                <div className="flex flex-col sm:flex-row justify-between h-full">
                    {/* Program Card 1 - Glow Up */}
                    <div className="flex justify-center items-center flex-1 mb-4 sm:mb-0 sm:mr-4 ">
                        <div className="bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white w-[450px] h-[285px] rounded-lg flex flex-col justify-evenly  p-5 relative shadow-lg gradient-border">
                            <div className="absolute  right-8 top-8 bg-green-500 text-white  px-3 text-xl rounded">Offline</div>
                            <Image
                                src="/Assets/offline.png"
                                width={105}
                                height={100}

                            />
                            <h2 className="text-5xl font-bold font-Title  ">Glow Up</h2>
                            <a href="#" className="mt-4 text-xl ">See Programs →</a>
                            <Image
                                src="/Assets/stars.png"
                                width={190}
                                height={190}
                                className='absolute right-0 bottom-1'
                            />
                        </div>
                    </div>

                    {/* Program Card 2 - Skill Surge */}
                    <div className="flex justify-center items-center flex-1 sm:ml-4 ">
                        <div className=" text-white w-[450px] h-[285px] rounded-lg flex flex-col justify-evenly  p-5 relative shadow-lg gradient-border" style={{
                            background: 'linear-gradient(93.91deg, rgba(6, 6, 6, 0.92) 0.53%, rgba(255, 111, 145, 0.92) 99.47%)',
                        }}>
                            <div className="absolute top-8 right-8 bg-yellow-500 text-white  px-3 text-xl rounded">Online</div>
                            <Image
                                src="/Assets/online.png"
                                width={80}
                                height={80}

                            />
                            <h2 className="text-5xl font-bold font-Title">Skill Surge</h2>
                            <a href="#" className="mt-4 text-xl ">See Programs →</a>
                            <Image
                                src="/Assets/stars.png"
                                width={190}
                                height={190}
                                className='absolute right-0 bottom-1'
                            />
                        </div>
                    </div>
                </div>
            </div>





            <div className='p-4'>
                <div className="flex items-center border-t-2 border-l-2 border-b-4 border-r-4 justify-between  text-white rounded-xl p-4 md:w-[600px] h-[126px]  mx-auto md:my-12">
                    <div className="flex-grow">
                        <h2 className="text-lg font-bold">Still Confused?</h2>
                        <p className="text-sm">Talk To Councellor
                            <a href="#" className="text-purple-600 font-semibold inline-flex items-center ml-2">
                                <span className=" text-center  font-bold text-2xl">→</span> {/* Thicker arrow */}
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center ml-4"> {/* Ensures spacing from text */}
                        <Image
                            src="/Assets/robot.png" // Replace with your robot image path
                            alt="Confusion Robot"
                            width={98}
                            height={98}
                        />

                    </div>

                </div>
            </div>
        </>
    );
}
