import React, { useRef } from 'react';
import Image from 'next/image';

const images = [
    '/Assets/slide1.png',
    '/Assets/slide2.png',
    '/Assets/slide3.png',
    '/Assets/slide4.png',
    '/Assets/slide1.png',
    '/Assets/slide2.png',
    '/Assets/slide3.png',
    '/Assets/slide4.png',
    '/Assets/slide4.png',
    '/Assets/slide2.png'
];

const TrendingSlider = ({ title }) => {
    const rowRef = useRef(null);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="relative mt-4 h-[352px] overflow-hidden">
                <div
                    ref={rowRef}
                    className="flex space-x-8 overflow-x-auto scrollbar-hide" // Adjusted space-x value
                    style={{ height: '100%' }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg shadow-md min-w-[240px] h-[320px] flex items-center justify-center"
                        >
                            <Image
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="rounded-lg" // rounded corners
                                layout="fill" // Fill parent div dimensions
                                objectFit="cover" // Maintain aspect ratio
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingSlider;
