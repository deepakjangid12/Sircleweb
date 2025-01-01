// // components/Explore.js

// export default function Explore() {
//     return (
//         <div className=" w-[1104px] h-[483px] container mx-auto p-8">
//             <h1 className="text-4xl font-Title font-bold  text-center text-white mb-10">Explore the Programs</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {/* Program Card 1 */}
//                 <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
//                     <div>
//                         <h3 className="text-2xl font-bold">Glow Up</h3>
//                         <span className="text-xs font-semibold bg-red-500 rounded-full py-1 px-2 mt-2">Offline</span>
//                     </div>
//                     <a href="#" className="mt-4 inline-block text-sm bg-white text-purple-600 rounded-full py-2 px-4 text-center">
//                         See Programs &rarr;
//                     </a>
//                 </div>

//                 {/* Program Card 2 */}
//                 <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
//                     <div>
//                         <h3 className="text-2xl font-bold">Skill Surge</h3>
//                         <span className="text-xs font-semibold bg-green-500 rounded-full py-1 px-2 mt-2">Online</span>
//                     </div>
//                     <a href="#" className="mt-4 inline-block text-sm bg-white text-blue-600 rounded-full py-2 px-4 text-center">
//                         See Programs &rarr;
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }



// components/Explore.js

// import Image from 'next/image';

// export default function Explore() {
//     return (
//         <div className="w-[1104px] h-[483px] container mx-auto ">
//             <h1 className="text-4xl font-Title font-bold text-center text-white mb-12">Explore the Programs</h1>
//             <div className="grid grid-cols-1  sm:grid-cols-2 ">
//                 {/* Image 1 */}
//                 <div className="flex justify-start items-center">
//                     <Image
//                         src="/Assets/glowup1.png" // Replace with your actual image path for Glow Up
//                         alt="Glow Up Program"
//                         width={485} // Adjust based on your image dimensions
//                         height={285} // Adjust based on your image dimensions
//                         className="object-cover rounded-lg"
//                     />
//                 </div>

//                 {/* Image 2 */}
//                 <div className="flex justify-end items-center">
//                     <Image
//                         src="/Assets/glowup2.png" // Replace with your actual image path for Skill Surge
//                         alt="Skill Surge Program"
//                         width={485} // Adjust based on your image dimensions
//                         height={285} // Adjust based on your image dimensions
//                         className="object-cover rounded-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }


import Image from 'next/image';

export default function Explore() {
    return (
        <>
            <div className="w-[1104px] h-[483px] container mx-auto ">
                <h1 className="text-4xl font-Title font-bold text-center text-white">Explore the Programs</h1>
                <div className="flex flex-col sm:flex-row justify-between h-full">
                    {/* Image 1 */}
                    <div className="flex justify-center items-center flex-1 mb-0 sm:mr-4"> {/* Margin bottom on mobile */}
                        <Image
                            src="/Assets/glowup1.png" // Replace with your actual image path for Glow Up
                            alt="Glow Up Program"
                            width={450} // Adjust based on your image dimensions
                            height={285} // Adjust based on your image dimensions
                            className="object-cover rounded-lg"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="flex justify-center items-center flex-1 sm:ml-4 mb"> {/* Margin left on larger screens */}
                        <Image
                            src="/Assets/glowup2.png" // Replace with your actual image path for Skill Surge
                            alt="Skill Surge Program"
                            width={450} // Adjust based on your image dimensions
                            height={285} // Adjust based on your image dimensions
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>


            <div className="flex items-center border-t-2 border-l-2 border-b-4 border-r-4 justify-between  text-white rounded-xl p-4 w-[600px] h-[126px] mx-auto mt-8">
                <div className="flex-grow">
                    <h2 className="text-lg font-bold">Still Confused?</h2>
                    <p className="text-sm">Talk To Councellor
                        <a href="#" className="text-purple-600 font-semibold inline-flex items-center ml-2">
                            <span className=" text-center  font-bold text-2xl">&rarr;</span> {/* Thicker arrow */}
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
        </>
    );
}
