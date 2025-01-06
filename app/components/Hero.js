

import React from 'react';

import Image from 'next/image'; // Importing Image component from Next.js
import { FaAngleDoubleDown } from "react-icons/fa";
const images = [
    '/Assets/img1.svg',
    '/Assets/img2.png',
    '/Assets/img3.png',
    '/Assets/img4.png',
    '/Assets/img5.png',
    '/Assets/img6.png',
    '/Assets/img7.png',
    '/Assets/img8.png',
    '/Assets/img9.png',
    '/Assets/img10.svg',
    '/Assets/img11.png',
    '/Assets/img12.png',
    '/Assets/img13.png',
    '/Assets/img14.svg',
    '/Assets/img15.png',
    '/Assets/img16.svg',
    '/Assets/img17.png',
    '/Assets/img18.png',
    '/Assets/img19.png',
    '/Assets/img20.png',
    '/Assets/img21.png',
];

const Hero = () => {
    return (
        <div
            className=" h-auto flex flex-col md:flex-row items-center justify-between  text-white   md:my-7 my-12 p-3  md:px-[120px] md:py-10   bg-[url('/Assets/vector.png')]"
            
        >

            <div className="flex flex-col justify-center font-Title items-start w-full md:w-[483px] md:h-[541px] max-w-lg z-10  ">
                {/* Replace the Image components with the styled text */}
                <h1 className="text-6xl md:text-8xl font-bold stroke-effect" >DREAMS</h1>
                <h2 className=" text-6xl md:text-8xl font-Title2 stroke-effect" >IN</h2>
                <h1 className=" text-6xl md:text-8xl font-bold stroke-effect " >
                    ACTI
                <span className=" text-6xl md:text-8xl font-bold bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] bg-clip-text text-transparent ">
                        ON</span>
                </h1>

                <p className="mt-4 text-lg w-11/12 font-Title opacity-75">
                    From a watcher to the DOER, learn skills that the world values the most and shine amongst the crowd with SIRCLE!
                </p>
                <button className="mt-10 border-2 border-purple-400 gradient-purple text-white py-2 px-4 rounded-md hover:bg-purple-400  md:w-[261px] md:h-[70px] w-[154px] h-[52px] md:text-xl text-xs gradient-border " >
                    <span className='flex items-center justify-center'> Explore Programs
                        <FaAngleDoubleDown className='ml-2' />
                    </span>
                </button>
            </div>
            {/* Image Section */}
            <div className="grid grid-rows-6 mt-14 md:mt-0 w-full md:w-[42%]">
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-7 gap-0">
                        {Array.from({ length: 7 }).map((_, colIndex) => {
                            const isImage =
                                (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
                                (rowIndex % 2 === 1 && colIndex % 2 !== 0);

                            return (
                                <div key={colIndex} className="flex justify-center items-center ">
                                    {isImage && (
                                        <Image
                                            src={images[(rowIndex * 7 + colIndex) % images.length]} // Correct index for images
                                            alt={`Image ${rowIndex * 7 + colIndex}`} // Dynamic alt text for accessibility
                                            width={100}
                                            height={100}
                                            className="gradient-purple  rounded-md  transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-purple-500"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;


