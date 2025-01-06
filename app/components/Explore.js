
import Image from 'next/image';

export default function Explore() {
    return (
        <div className=" bg-[url('/Assets/vector.png')]">
            <div className="w-full  md:h-[483px]  md:w-[1104] container mx-auto p-4">
                <h1 className="md:text-6xl text-3xl font-Title font-bold text-center stroke-effect-sm text-white ">Explore the Programs</h1>

                <div className="flex flex-col sm:flex-row justify-between h-full">
                    {/* Program Card 1 - Glow Up */}
                    <div className="flex justify-center items-center flex-1 mb-4 sm:mb-0 sm:mr-4 my-7 md:my-0">
                        <div className=" bg-gradient-to-br  from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white w-[300px] md:w-[500px] md:h-[285px] h-[147] rounded-lg flex flex-col justify-center  p-5 relative shadow-lg gradient-border">
                            <div className="absolute right-2 md:right-8 top-3 md:top-8 bg-green-500 text-white  px-3 md:text-xl rounded">Offline</div>
                            <Image
                                src="/Assets/offline.svg"
                                width={45}
                                height={100}
                                alt="glow up"
                               className=' mb-3 md:mb-3 md:w-[100px] md:h[100px] aspect-square object-contain '
                            />
                            <h2 className="md:text-5xl font-bold font-Title  ">Glow Up</h2>
                            <a href="#" className="md:mt-4 md:text-xl ">See Programs →</a>
                            <Image
                                src="/Assets/stars.png"
                                width={100}
                                height={100}
                                alt="pattern"
                                className='absolute right-0 bottom-1  md:w-[190px] md:h[190px] '
                            />
                        </div>
                    </div>

                    {/* Program Card 2 - Skill Surge */}
                    <div className="flex justify-center items-center flex-1 sm:ml-4 my-7 md:my-0">
                        <div className=" text-white w-[300px]  md:w-[500px] md:h-[285px] h-[147px] rounded-lg flex flex-col justify-center  p-5 relative shadow-lg gradient-border" style={{
                            background: 'linear-gradient(93.91deg, rgba(6, 6, 6, 0.92) 0.53%, rgba(255, 111, 145, 0.92) 99.47%)',
                        }}>
                            <div className="absolute top-3 md:top-8 right-2 md:right-8 bg-yellow-500 text-white  px-3 md:text-xl rounded">Online</div>
                            <Image
                                src="/Assets/online.svg"
                                width={45}
                                height={100}
                                alt="skill surge"
                               className='mb-2 md:mb-3  md:w-[100px] md:h[100px] aspect-square  object-contain'
                            />
                            <h2 className="md:text-5xl font-bold font-Title">Skill Surge</h2>
                            <a href="#" className="md:mt-4 md:text-xl ">See Programs →</a>
                            <Image
                                src="/Assets/stars.png"
                                width={100}
                                alt="pattern"
                                height={100}
                                className='absolute right-0 bottom-1 md:w-[190px] md:h[190px] '
                            />
                        </div>
                    </div>
                </div>
            </div>





            <div className='p-4 '>
                <div className="flex bg-black items-center border-t-2 border-l-2 border-b-4 border-r-4 justify-between  text-white rounded-xl p-4 w-[300px] h-[100px] md:w-[600px] md:h-[126px]  mx-auto md:my-12">
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
                            src="/Assets/robot.svg" // Replace with your robot image path
                            alt="Confusion Robot"
                            width={60}
                            height={60}
                            className='md:w-[100px] md:h-[100]'
                        />

                    </div>

                </div>
            </div>
            
            {/* <Image
                            src="/Assets/exploregradient1.svg" // Replace with your robot image path
                            alt="Confusion Robot"
                            width={60}
                            height={60}
                            className='md:w-[600px] md:h-[600] absolute top-0 left-[-100px] border-2 opacity-40'
                        />
                           <Image
                            src="/Assets/exploregradient1.svg" // Replace with your robot image path
                            alt="Confusion Robot"
                            width={60}
                            height={60}
                            className='md:w-[600px]  absolute md:h-[600] right-0   top-0'
                            /> */}
                            
            
        </div>
    );
}
