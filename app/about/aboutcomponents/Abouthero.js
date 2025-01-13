// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa'; // Importing the LinkedIn icon
import { FaAngleDoubleDown } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-[600px]  md:h-[720px]  text-white  bg-[url('/Assets/aboutherogradient.svg')] bg-cover bg-no-repeat bg-center ">
      <div className='flex flex-col items-center justify-between text-white   md:w-[794px] md:h-[469px]'>
        <div className="flex justify-between px-3  border  rounded-lg  items-center   w-[143px] md:w-[279px] h-[29px] md:h-[55px]">
          <div>
            <Image
              src="/Assets/logo.svg"
              alt="logo"
              width={34}
              height={50}
              className="rounded md:w-[78px] md:h-[40px] "
            />
          </div>
          <div>
            <h1 className='text-2xl'>|</h1>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="md:size-10 size-4 mr-2 md:rounded-lg white" /> {/* Adjust the size and color if needed */}
            <div className="md:text-xs text-[5px] font-Title">
              <div>LinkedIn</div>
              <div className='font-semibold'>Glow Up</div>
            </div>
          </div>
        </div >
        <div className='flex font-Title flex-col justify-between px-3  md:h-[370px]'>
          <div className='stroke-effect'>
            <h1 className="text-[54px]  font-Title md:text-6xl text-white font-medium text-center mb-2">
              Skills that speak
            </h1>
            <h2 className="text-5xl  md:text-5xl px-4 font-Title text-white font-medium text-center mb-6">
              Dreams that Soar
            </h2>
          </div>

          <p className="text-xs md:text-xl px-5 text-center mt-4 mb-6 opacity-90" >
            Sircle your success with our upskilling platform that bridges the gap
            between students' aspirations and professional career. We empower
            teens with future-ready skills through our EXTERNSHIPS led by field
            achievers and CXOs, turning Dreams Into Action.
          </p>
         
          <button className="mt-2  mx-auto border-2 border-purple-400 gradient-purple text-white py-2 px-4 rounded-md hover:bg-purple-400  md:w-[261px] md:h-[70px] w-[154px] h-[52px] md:text-xl text-xs gradient-border " >
            <span className='flex items-center justify-center'> Know More
              <FaAngleDoubleDown className='ml-2' />
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
