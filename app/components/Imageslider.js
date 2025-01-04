'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

const imageData = [
    {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },
    {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/img2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },
    // Add more entries as needed
];

const TrendingSlider = ({ title }) => {
    const rowRef = useRef(null);

    return (
        <div className="md:p-6   my-[65px]">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="relative mt-4 md:h-[352px] h-[253px] overflow-hidden">
                <div
                    ref={rowRef}
                    className="flex space-x-8 overflow-x-auto scrollbar-hide"
                    style={{ height: '100%' }}
                >
                    {imageData.map((item, index) => (
                        <div 
                            key={index}
                            className="relative  rounded-lg shadow-md min-w-[200px] md:min-w-[240px] md:h-[320px] h-[240px] flex flex-col items-center justify-center"
                        >
                            <Image
                                src={item.src}
                                alt={`image of  ${item.name}`}
                                className="rounded-lg"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute  p-2ebg-opacity-75 w-ful text-center bottom-6 ">
                                <h3 className="font-semibold text-white ">{item.name}</h3>
                            </div>
                            <div className='absolute bottom-[-10] w-[60px] '>
                          <h2 className="text-sm rounded-sm text-center border-1  bg-white">{item.label}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingSlider;

