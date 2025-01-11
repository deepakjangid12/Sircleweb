// 'use client'
// import React, { useRef } from 'react';
// import Image from 'next/image';

// const imageData = [
//     {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },  {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },  {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },  {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },  {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },  {
//         src: '/Assets/slide2.png',
//         name: 'Divyanshi Agarwal',
//         label: 'CWS'
//     },
//     {
//         src: '/Assets/slide2.png',
//         name: 'Aastha Goel',
//         label: 'CWS'
//     },

// ];

// const TrendingSlider = ({ title }) => {
//     const rowRef = useRef(null);

//     return (
//         <div className="md:p-6  bg-black my-[65px]">
//             <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
//             <div className="relative mt-4 md:h-[352px] h-[253px] overflow-hidden">
//                 <div
//                     ref={rowRef}
//                     className="flex space-x-8 overflow-x-auto scrollbar-hide"
//                     style={{ height: '100%' }}
//                 >
//                     {imageData.map((item, index) => (
//                         <div 
//                             key={index}
//                             className="relative  rounded-lg shadow-md min-w-[200px] md:min-w-[240px] md:h-[320px] h-[240px] flex flex-col items-center justify-center"
//                         >
//                             <Image
//                                 src={item.src}
//                                 alt={`image of  ${item.name}`}
//                                 className="rounded-lg"
//                                 width={238}
//                                 height={318}
//                             />
//                             <div className="absolute  p-2ebg-opacity-75 w-ful text-center bottom-6 ">
//                                 <h3 className="font-semibold text-white ">{item.name}</h3>
//                             </div>
//                             <div className='absolute bottom-[-10] w-[60px] '>
//                           <h2 className="text-sm rounded-sm text-center border-1  bg-white">{item.label}</h2>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrendingSlider;



































'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

const imageData = [
    {
        src: '/Assets/slide1.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },
    {
        src: '/Assets/slide3.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/slide2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/slide2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/slide2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/slide2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },  {
        src: '/Assets/slide2.png',
        name: 'Divyanshi Agarwal',
        label: 'CWS'
    },
    {
        src: '/Assets/slide2.png',
        name: 'Aastha Goel',
        label: 'CWS'
    },

];

const TrendingSlider = ({ title }) => {
    const rowRef = useRef(null);

    return (
        <div className="md:p-6  bg-black my-[65px]">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
            <div className="relative mt-4 md:h-[352px] h-[253px] overflow-hidden">
                <div
                    ref={rowRef}
                    className="flex md:space-x-8 space-x-16 overflow-x-auto scrollbar-hide"
                    style={{ height: '100%' }}
                >
                    {imageData.map((item, index) => (
                        <div 
                            key={index}
                            className="relative   rounded-lg shadow-md min-w-[200px] md:min-w-[280px] border-2 md:h-[350px] h-[240px] flex flex-col items-center justify-center"
                        >
                            <Image
                                src={item.src}
                                alt={`image of  ${item.name}`}
                                width={171}
                                height={318}
                                className="rounded-lg border-2 border-red-500 md:w-[238px] h-[229px] md:h-[318px]"

                            />
                            <div className="absolute   w-full text-center bottom-9 ">
                                <h3 className="font-semibold text-white ">{item.name}</h3>
                            </div>
                            <div className='absolute bottom-2 w-[60px] '>
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


