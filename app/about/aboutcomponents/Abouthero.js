// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa'; // Importing the LinkedIn icon
import { FaAngleDoubleDown } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-screen   text-white">
        <div className='flex flex-col items-center justify-between text-white  md:w-[794px] md:h-[469px]'>
      <div className="flex justify-center  border  rounded-lg  items-center gap-[80px] mb-4 md:w-[279px] md:h-[55px]">
        <Image
          src="/Assets/logo.png"
          alt="logo"
          width={64}
          height={50}
          className="rounded"
        />
        <div className="flex items-center">
        <FaLinkedin size={32} className="mr-2 rounded-lg white" /> {/* Adjust the size and color if needed */}
        <div className="text-xs font-Title">
          <div>LinkedIn</div>
          <div className='font-semibold'>Glow Up</div>
        </div>
      </div>
      </div >
      <div className='flex font-Title flex-col justify-between  md:h-[358px]'>
        <div className='stroke-effect-blur '>
      <h1 className="text-6xl md:text-6xl text-white font-medium text-center mb-4">
        Skills that speak
      </h1>
      <h2 className="text-xl md:text-5xl text-white font-medium text-center mb-6">
        Dreams that Soar
      </h2>
      </div>
     
      <p className=" text-xl  text-center mb-6">
        Sircle your success with our upskilling platform that bridges the gap
        between students' aspirations and professional career. We empower
        teens with future-ready skills through our EXTERNSHIPS led by field
        achievers and CXOs, turning Dreams Into Action.
      </p>
      <button href="/more-info" className="flex bg-white w-[195px] h-[73px] text-xl  justify-center items-center mx-auto text-purple-600 rounded-lg px-6 py-2 font-semibold hover:bg-gray-100 transition">
          Know More 
          <FaAngleDoubleDown className='ml-2' />

      </button>
    
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
