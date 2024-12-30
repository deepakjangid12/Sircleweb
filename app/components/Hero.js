

// import React from 'react';

// import Image from 'next/image'; // Importing Image component from Next.js

// const images = [
//     '/Assets/img1.png',
//     '/assets/img2.png',
//     '/assets/img3.png',
//     '/assets/img4.png',
//     '/assets/img5.png',
//     '/assets/img6.png',
//     '/assets/img7.png',
//     '/assets/img8.png',
//     '/assets/img9.png',
//     '/assets/img10.png',
//     '/assets/img11.png',
//     '/assets/img12.png',
//     '/assets/img13.png',
//     '/assets/img14.png',
//     '/assets/img15.png',
//     '/assets/img16.png',
//     '/assets/img17.png',
//     '/assets/img18.png',
//     '/assets/img19.png',
//     '/assets/img20.png',
//     '/assets/img21.png',
// ];

// const Hero = () => {
//     return (
//         <div
//             className="deep flex flex-col md:flex-row items-center justify-between bg-black text-white h-auto mx-2 my-7 sm:mx-10 md:mx-10 lg:mx-28 py-10 p-4"
//             style={{ backgroundImage: "url('/assets/vector.png')" }} // Ensure the background is applied correctly
//         >
//             {/* Text/Image Section */}
//             <div className="flex flex-col justify-center items-start w-full md:w-1/2 max-w-lg z-10">
//                 <Image
//                     src="/assets/DREAMS IN ACTION.png" // Image path for larger screens
//                     alt="DREAMS IN ACTION"
//                     width={300}
//                     height={300}
//                     className="hidden md:block"
//                 />

//                 <Image
//                     src="/assets/DREAMS IN ACTION.png" // Image path for mobile screens
//                     alt="DREAMS IN ACTION"
//                     width={280}
//                     height={200}
//                     className="md:hidden"
//                 />

//                 <p className="mt-4 text-lg w-11/12">
//                     From a watcher to the DOER, learn skills that the world values the most and shine amongst the crowd with SIRCLE!
//                 </p>

//                 <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-210 w-[200px]">
//                     Explore Programs ↓
//                 </button>
//             </div>

//             {/* Image Section */}
//             <div className="grid grid-rows-6 mt-14 md:mt-0 w-full md:w-[40%]">
//                 {Array.from({ length: 6 }).map((_, rowIndex) => (
//                     <div key={rowIndex} className="grid grid-cols-7 gap-0">
//                         {Array.from({ length: 7 }).map((_, colIndex) => {
//                             const isImage =
//                                 (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
//                                 (rowIndex % 2 === 1 && colIndex % 2 !== 0);

//                             return (
//                                 <div key={colIndex} className="flex justify-center items-center">  
//                                     {isImage && (
//                                         <Image
//                                             src={images[(rowIndex * 7 + colIndex) % images.length]} // Correct index for images
//                                             alt={`Image ${rowIndex * 7 + colIndex}`} // Dynamic alt text for accessibility
//                                             width={100}
//                                             height={100}
//                                             className="rounded-md border transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"
//                                         />
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;



import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

const images = [
    '/Assets/img1.png',
    '/assets/img2.png',
    '/assets/img3.png',
    '/assets/img4.png',
    '/assets/img5.png',
    '/assets/img6.png',
    '/assets/img7.png',
    '/assets/img8.png',
    '/assets/img9.png',
    '/assets/img10.png',
    '/assets/img11.png',
    '/assets/img12.png',
    '/assets/img13.png',
    '/assets/img14.png',
    '/assets/img15.png',
    '/assets/img16.png',
    '/assets/img17.png',
    '/assets/img18.png',
    '/assets/img19.png',
    '/assets/img20.png',
    '/assets/img21.png',
];

// Function to get two unique random indices
const getRandomIndices = (length) => {
    const firstIndex = Math.floor(Math.random() * length);
    let secondIndex = Math.floor(Math.random() * length);
    while (secondIndex === firstIndex) {
        secondIndex = Math.floor(Math.random() * length);
    }
    return [firstIndex, secondIndex];
};

const Hero = () => {
    const [flippedIndices, setFlippedIndices] = useState(getRandomIndices(images.length));
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const flipInterval = setInterval(() => {
            // Randomly generate new indices
            const newIndices = getRandomIndices(images.length);
            setFlippedIndices(newIndices);

            // Trigger the flip
            setIsFlipped(true);

            // Set a timeout to flip back after 2 seconds
            const timeout = setTimeout(() => {
                setIsFlipped(false);
            }, 2000); // 2000 milliseconds = 2 seconds

            return () => clearTimeout(timeout); // Cleanup timeout on new interval
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearInterval(flipInterval); // Clear interval on component unmount
    }, []);

    return (
        <div
            className="deep flex flex-col md:flex-row items-center justify-between bg-black text-white h-auto mx-2 my-7 sm:mx-10 md:mx-10 lg:mx-28 py-10 p-4"
            style={{ backgroundImage: "url('/assets/vector.png')" }}
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
                    src="/assets/DREAMS IN ACTION.png"
                    alt="DREAMS IN ACTION"
                    width={280}
                    height={200}
                    className="md:hidden"
                />
                <p className="mt-4 text-lg w-11/12">
                    From a watcher to the DOER, learn skills that the world values the most and shine amongst the crowd with SIRCLE!
                </p>
                <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-210 w-[200px]">
                    Explore Programs ↓
                </button>
            </div>

            {/* Image Section */}
            <div className=" grid grid-rows-6 mt-14 md:mt-0 w-full md:w-[40%]  ">
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-7  ">
                        {Array.from({ length: 7 }).map((_, colIndex) => {
                            const isImage =
                                (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
                                (rowIndex % 2 === 1 && colIndex % 2 !== 0);

                            const imageIndex = (rowIndex * 7 + colIndex) % images.length;
                            const displayImageIndex = (imageIndex === flippedIndices[0]) ? flippedIndices[1] :
                                (imageIndex === flippedIndices[1]) ? flippedIndices[0] : imageIndex;

                            const isCurrentFlipped = (imageIndex === flippedIndices[0] || imageIndex === flippedIndices[1]);

                            return (
                                <div key={colIndex} className="flex justify-center items-center border">
                                    {isImage && (
                                        <div className={`flip-container ${isCurrentFlipped && isFlipped ? 'flipped' : ''}`}>
                                            <div className="flipper">
                                                <div className="front">
                                                    <Image
                                                        src={images[imageIndex]}
                                                        alt={`Image ${imageIndex}`}
                                                        width={100}
                                                        height={100}
                                                        className="rounded-md  transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"
                                                    />
                                                </div>
                                                <div className="back">
                                                    <Image
                                                        src={"/Assets/img10.png"}
                                                        alt={`Image ${imageIndex} flipped`}
                                                        width={100}
                                                        height={100}
                                                        className="rounded-md  transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* CSS for flipping effect */}
            
            <style jsx>{`
                .flip-container {
                    perspective: 1000px;
                    width: 100px; /* Fixed width to prevent grid gaps */
                    height: 100px; /* Fixed height to prevent grid gaps */
                    display: flex; /* Ensures the content stays aligned */
                    justify-content: center; 
                    align-items: center; 
                }
                   

                .flipper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }

                .flipped .flipper {
                    transform: rotateY(180deg);
                }

                .front, .back {

                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 5px; /* Optional: to match rounded corners */
                    
                }

                .back {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
};

export default Hero;
