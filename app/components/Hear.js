

// import Image from 'next/image'; // Importing the Image component from Next.js

// export default function HearItFromYourPeers() {
//     return (
//         <div className="flex  mx-auto text-white p-8 m-[80px]" style={{ width: '1181px', height: '546px' }}>
//             {/* Left Side - Text Content */}
//             <div className="font-Title flex flex-col justify-center w-1/2 pr-8">
//                 <h1 className="text-4xl font-bold mb-4">Hear It <br /> From Your Peers</h1>
//                 <p className="text-lg">
//                     Develop real-world skills with <br /> our courses designed by industry practitioners.
//                 </p>
//             </div>

//             {/* Right Side - Circular Images */}
//             <div className="flex justify-center items-center w-1/2 relative">
//                 <div className="circle relative w-[400px] h-[400px] border-4   border-dashed  rounded-full p-2 flex justify-center items-center">
//                     {/* Images rotating around the circle */}
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)' }}>
//                         <Image src="/Assets/circle4.png" alt="Peer Image 1" width={96} height={96} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-10s' }}>
//                         <Image src="/Assets/circle4.png" alt="Peer Image 2" width={80} height={80} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-20s' }}>
//                         <Image src="/Assets/circle2.png" alt="Peer Image 3" width={112} height={112} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-30s' }}>
//                         <Image src="/Assets/circle1.png" alt="Peer Image 4" width={80} height={80} className="rounded-full" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import Image from 'next/image'; // Importing the Image component from Next.js

// export default function HearItFromYourPeers() {
//     return (
//         <div className="flex flex-col md:flex-row mx-auto text-white p-8 m-[20px] md:m-[80px]" style={{ width: '100%', maxWidth: '1181px', height: '546px' }}>
//             {/* Left Side - Text Content */}
//             <div className="font-Title flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
//                 <h1 className="text-4xl font-bold mb-4">Hear It <br /> From Your Peers</h1>
//                 <p className="text-lg">
//                     Develop real-world skills with <br /> our courses designed by industry practitioners.
//                 </p>
//             </div>

//             {/* Right Side - Circular Images */}
//             <div className="flex justify-center items-center w-full h-[px] md:w-1/2 relative">
//                 <div className="circle relative w-[200] h-[200] md:w-[400px] md:h-[400px] border-4 border-dashed rounded-full p-2 flex justify-center items-center">
//                     {/* Images rotating around the circle */}
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)' }}>
//                         <Image src="/Assets/circle4.png" alt="Peer Image 1" width={96} height={96} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-10s' }}>
//                         <Image src="/Assets/circle4.png" alt="Peer Image 2" width={80} height={80} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-20s' }}>
//                         <Image src="/Assets/circle2.png" alt="Peer Image 3" width={112} height={112} className="rounded-full" />
//                     </div>
//                     <div className="absolute animate-orbit" style={{ transform: 'translate(150px) rotate(0deg)', animationDelay: '-30s' }}>
//                         <Image src="/Assets/circle1.png" alt="Peer Image 4" width={80} height={80} className="rounded-full" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import Image from 'next/image'; // Importing the Image component from Next.js

export default function HearItFromYourPeers() {
    return (
        <div className="flex flex-col md:flex-row mx-auto  text-white p-7 m-[20px] md:m-[80px] w-auto max-h[546px]" >
            
            {/* Left Side - Text Content */}
            <div className="font-Title flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Hear It <br /> From Your Peers</h1>
                <p className="text-lg">
                    Develop real-world skills with <br /> our courses designed by industry practitioners.
                </p>
            </div>

            {/* Right Side - Circular Images */}
            <div className="flex justify-center items-center w-full h-[546px] md:w-1/2 relative">
                <div className="circle relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-4 border-dashed rounded-full p-2 flex justify-center items-center">
                    
                    {/* Images rotating around the circle */}
                    <div className="absolute animate-orbit" style={{ transform: 'translate(100px) rotate(0deg)' }}>
                        <Image src="/Assets/circle4.png" alt="Peer Image 1" width={96} height={96} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit" style={{ transform: 'translate(100px) rotate(90deg)', animationDelay: '-10s' }}>
                        <Image src="/Assets/circle4.png" alt="Peer Image 2" width={80} height={80} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit" style={{ transform: 'translate(100px) rotate(180deg)', animationDelay: '-20s' }}>
                        <Image src="/Assets/circle2.png" alt="Peer Image 3" width={112} height={112} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit" style={{ transform: 'translate(100px) rotate(270deg)', animationDelay: '-30s' }}>
                        <Image src="/Assets/circle1.png" alt="Peer Image 4" width={80} height={80} className="rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
