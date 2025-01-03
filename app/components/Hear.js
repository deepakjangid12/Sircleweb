import Image from 'next/image'; // Importing the Image component from Next.js

export default function HearItFromYourPeers() {
    return (
        <div className="flex flex-col md:flex-row mx-auto  text-white px-[30px]  md:mx-[80px]  w-auto md:h-[546px]" >

            {/* Left Side - Text Content */}
            <div className="font-Title flex flex-col justify-center w-full md:w-1/2 pr-0 md:pr-8 mb-5 md:mt-0 mt-10 md:mb-0">
                {/* <h1 className="text-6xl font-medium font-Title  mb-4">Hear It <br /> From Your Peers</h1> */}
                <h1
                    className="md:text-6xl text-4xl font-medium font-Title mb-5 "
                    style={{
                        color: 'white',
                        WebkitTextStroke: '1px black',
                        textShadow: '1.5px 1.5px 0 #ffffff'
                    }}
                >
                    Hear It <br /> From Your Peers
                </h1>

                <p className="text-lg font-normal">
                    Develop real-world skills with <br /> our courses designed by industry practitioners.
                </p>
            </div>
            {/* Right Side - Circular Images */}
            <div className="flex justify-center items-center w-full md:h-[546px] h-[400]  md:mt-0 md:w-1/2 relative">
                <div className="circle relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-4 border-dashed rounded-full p-2 flex justify-center items-center">

                    <div className="absolute animate-orbit2 md:animate-orbit" style={{ transform: 'translate(100px) rotate(0deg)' }}>
                        <Image src="/Assets/circle4.png" alt="Peer Image 1" width={96} height={96} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit2 md:animate-orbit" style={{ transform: 'translate(100px) rotate(90deg)', animationDelay: '-10s' }}>
                        <Image src="/Assets/circle4.png" alt="Peer Image 2" width={80} height={80} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit2 md:animate-orbit" style={{ transform: 'translate(100px) rotate(180deg)', animationDelay: '-20s' }}>
                        <Image src="/Assets/circle2.png" alt="Peer Image 3" width={112} height={112} className="rounded-full" />
                    </div>
                    <div className="absolute animate-orbit2 md:animate-orbit" style={{ transform: 'translate(100px) rotate(270deg)', animationDelay: '-30s' }}>
                        <Image src="/Assets/circle1.png" alt="Peer Image 4" width={80} height={80} className="rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    );
}
