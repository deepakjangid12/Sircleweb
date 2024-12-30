

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
            className="deep flex flex-col md:flex-row items-center justify-between bg-black text-white h-auto mx-2 my-7 p-1 sm:mx-10 md:mx-10 lg:mx-28 py-10 "
            style={{ backgroundImage: "url('/Assets/vector.png')" }} // Ensure the background is applied correctly
        >
            {/* Text/Image Section */}
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 max-w-lg z-10">
                <Image
                    src="/assets/DREAMS IN ACTION.png"
                    alt="DREAMS IN ACTION"
                    width={300}
                    height={300}
                    className="hidden md:block"
                />

                <Image
                    src="/Assets/DREAMS IN ACTION.png" // Image path for mobile screens
                    alt="DREAMS IN ACTION"
                    width={280}
                    height={200}
                    className="md:hidden"
                />

                <p className="mt-4 text-lg w-11/12">
                    Fro a watcher to the DOER, learn skills that the world values the most and shine amongst the crowd with SIRCLE!
                </p>

                <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-210 w-[200px]">
                    Explore Programs ↓
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
                                <div key={colIndex} className="flex justify-center items-center">  
                                    {isImage && (
                                        <Image
                                            src={images[(rowIndex * 7 + colIndex) % images.length]} // Correct index for images
                                            alt={`Image ${rowIndex * 7 + colIndex}`} // Dynamic alt text for accessibility
                                            width={100}
                                            height={100}
                                            className="rounded-md  transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"
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


