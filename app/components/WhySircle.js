

import React from 'react';
import Image from 'next/image';

const ResponsiveLayout = () => {
  return (
    <div className=" flex flex-col   bg-white md:flex-row relative bg-[url('/Assets/vector.png')] justify-center  md:py-2  md:h-[704px] "
>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6 ">
  <div className="rounded-lg  overflow-hidden max-w-[520px] w-full  md:h-[] flex flex-col justify-center">
    <div className="p-4 md:p-0 flex flex-col justify-center items-center md:items-start text-center md:text-left  ">
      <h1 className="font-circle md:text-7xl text-5xl font-Title font-semibold  text-black">
        Why
      </h1>

      <h1 className="font-circle md:text-9xl text-6xl font-Title font-semibold leading-[95px] text-black">
        Sircle
      </h1>

      <p className=" md:text-xl text-sm font-medium font-Title   text-black mt-4 w-[300px]">
        Develop real-world skills with our courses designed by industry practitioners.
      </p>
    </div>
  </div>
</div>



      <div className='absolute  top-0  md:top-[70px] md:left-[140px] '>
                <Image src="/Assets/qsn.svg" height={150} width={150} alt="QSN Icon" />
         </div>

      <div className="flex justify-center  md:justify-start items-center w-full md:w-1/2 h-full">
        <div className=" w-[400px] md:w-[534px]  h-[450px]  md:h-[600px] flex flex-col p-4 mb-10 md:mb-0">
          <div className="flex-1 grid grid-cols-2 gap-4 h-full">


            <div className="flex flex-col  pt-5  rounded-lg w-full h-full md:px-5 px-3 border-2 border-purple-800 bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white">
              <Image src="/Assets/frame1.svg" height={40} width={50} alt="Personalized Guidance" className="mb-2 md:w-[70] md:h-[70] " />
              <h2 className="md:text-xl text-base font-semibold px-1 my-1">Personalized<br />Guidance</h2>
              <p className="md:text-sm text-xs md:py-2 px-1">Get bespoke advice from students of esteemed colleges.</p>
            </div>

            <div className="flex flex-col  pt-5  rounded-lg w-full h-full md:px-5 px-3 bg-white text-purple-800 border-2 border-purple-800">
              <Image src="/Assets/frame2.svg" height={40} width={50} alt="Flexible Interaction" className="mb-2 md:w-[70] md:h-[70]" />
              <h2 className="md:text-xl text-base font-semibold px-1 my-1">Flexible<br />Interaction</h2>
              <p className="md:text-sm text-xs md:py-2 px-1">Choose how you want to connect—through WhatsApp chat / calls.</p>
            </div>

            <div className="flex flex-col pt-5  rounded-lg w-full h-full md:px-5 px-3 bg-white text-purple-800 border-2 border-purple-800">
              <Image src="/Assets/frame3.svg" height={40} width={50} alt="Proven Strategies" className="mb-2 md:w-[70] md:h-[70]" />
              <h2 className="md:text-xl text-base font-semibold px-1 my-1">Proven<br />Strategies</h2>
              <p className="md:text-sm text-xs md:py-2 px-1">Our mentors share battle-tested strategies that go beyond books.</p>
            </div>

            <div className="flex flex-col pt-5  rounded-lg w-full h-full md:px-5 px-3 bg-white text-white  bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)]">
              <Image src="/Assets/frame4.svg" height={40} width={50} alt="Join Sircle" className="mb-2 md:w-[70] md:h-[70]" />
              <h2 className="md:text-xl  text-base font-semibold px-1 my-1">Join<br />Sircle</h2>
              <p className="md:text-sm text-xs md:py-2 px-1">Where your potential meets our expertise.</p>
            </div>
          </div>
        </div>
      </div>
      <Image src='/Assets/whygradient.svg' height={30} width={110} alt="gradient" className=' absolute  md:bottom-[-250px] bottom-[-40px] right-0  md:w-[450px] '/>
    </div>
  );
};

export default ResponsiveLayout;
