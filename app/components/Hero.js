

import React from 'react';

import Image from 'next/image'; // Importing Image component from Next.js

const images = [
    '/Assets/img1.png',
    '/Assets/img2.png',
    '/Assets/img3.png',
    '/Assets/img4.png',
    '/Assets/img5.png',
    '/Assets/img6.png',
    '/Assets/img7.png',
    '/Assets/img8.png',
    '/Assets/img9.png',
    '/Assets/img10.png',
    '/Assets/img11.png',
    '/Assets/img12.png',
    '/Assets/img13.png',
    '/Assets/img14.png',
    '/Assets/img15.png',
    '/Assets/img16.png',
    '/Assets/img17.png',
    '/Assets/img18.png',
    '/Assets/img19.png',
    '/Assets/img20.png',
    '/Assets/img21.png',
];

const Hero = () => {
    return (
        <div
            className=" h-auto flex flex-col md:flex-row items-center justify-between  text-white  mx-2 md:my-7 my-12 p-1 sm:mx-10 md:mx-10 lg:mx-28 md:py-10 "
        // style={{ backgroundImage: "url('/Assets/vector.png')" }} // Ensure the background is applied correctly
        >

            <div className="flex flex-col justify-center font-Title items-start w-full md:w-[483px] md:h-[541px] max-w-lg z-10  ">
                {/* Replace the Image components with the styled text */}
                <h1 className="text-6xl md:text-8xl font-bold stroke-effect" >DREAMS</h1>
                <h2 className=" text-6xl md:text-8xl font-Title2 stroke-effect" >IN</h2>
                <h1 className=" text-6xl md:text-8xl font-bold stroke-effect " >
                    ACT
                    <span className="text-white">I</span>
                    <span className="text-purple-500">ON</span>
                </h1>

                <p className="mt-4 text-lg w-11/12">
                    From a watcher to the DOER, learn skills that the world values the most and shine amongst the crowd with SIRCLE!
                </p>
                    <button className="mt-10 border-2 border-purple-400 bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white py-2 px-4 rounded-md hover:bg-purple-400  md:w-[261px] md:h-[60px] gradient-border " >
                       <span > Explore Programs ↓</span>
                    </button>
            </div>


            {/* Image Section */}
            <div className="grid grid-rows-6 mt-14 md:mt-0 w-full md:w-[40%]">
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-7 gap-0">
                        {Array.from({ length: 7 }).map((_, colIndex) => {
                            const isImage =
                                (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
                                (rowIndex % 2 === 1 && colIndex % 2 !== 0);

                            return (
                                <div key={colIndex} className="flex justify-center items-center  ">
                                    {isImage && (
                                        <Image
                                            src={images[(rowIndex * 7 + colIndex) % images.length]} // Correct index for images
                                            alt={`Image ${rowIndex * 7 + colIndex}`} // Dynamic alt text for accessibility
                                            width={100}
                                            height={100}
                                            className="rounded-md  transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-purple-500"
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


