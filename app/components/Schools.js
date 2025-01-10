
import React from 'react';
import Image from 'next/image';

const Home = () => {
  const stats = [
    {
      number: '5000+',
      label: 'Futures Unlocked',
      imageSrc: '/Assets/slid.png', // Replace with the actual image path
    },
    {
      number: '30+',
      label: 'Sessions Conducted',
      imageSrc: '/Assets/slide.png', // Replace with the actual image path
    },
    {
      number: '1000+',
      label: 'Strong Insights',
      imageSrc: '/Assets/stats.png', // Replace with the actual image path
    },
  ];

  return (
    <div className=' bg-black'>
      <div className="flex flex-col  items-center  justify-center  ">
        {/* Overall Container */}
        <div className="md:w-[1185px] w-full md:h-[250px] flex flex-col items-center justify-between shadow-md p-4 mt-4 overflow-hidden">
          {/* Text Above the Images */}
          <div className="w-[292px] h-[64px] flex  justify-center  mb-7 ">
            <h2 className="md:text-2xl text-base font-medium font-Title text-white text-center">
              paired up with prestigious schools like...
            </h2>
          </div>

          {/* Image container */}
          {/* <div className='flex overflow-hidden border-t border-b  p-3  border-gray-600 ' > */}
       
          <div className='flex overflow-hidden p-7 border-t border-b border-gray-600 ' style={{ borderColor: 'rgba(96, 125, 139, 0.2)' }}>
  


          <div className="flex items-center h-[70px] w-full justify-between animate-loop-scroll" >
            <img src="/Assets/school1.svg" alt="Image 1" className="h-full  object-contain mx-6 md:mx-12" />
            <img src="/Assets/school2.svg" alt="Image 2" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school3.svg" alt="Image 3" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school1.svg" alt="Image 1" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school2.svg" alt="Image 2" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school3.svg" alt="Image 3" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school1.svg" alt="Image 1" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school2.svg" alt="Image 2" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school3.svg" alt="Image 3" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school1.svg" alt="Image 1" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school2.svg" alt="Image 2" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school3.svg" alt="Image 3" className="h-full object-contain mx-6 md:mx-12" />
            <img src="/Assets/school1.svg" alt="Image 1" className="h-full object-contain mx-6 md:mx-12" />
        </div>
        
          </div>

        </div>
      </div>
    

 <div className="flex justify-center items-center md:m-[100px]  my-12">
          <div className="flex flex-row justify-center w-[360px] md:w-[694px] md: px-2">

            {/* First Stat Container */}
            <div className="flex flex-col items-center justify-center  w-[130px] md:w-[200px] md:h-[200px] h-[130px] m-2 p-2  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"style={{ backgroundColor: '#FFFFFF' }}>
              <Image
                src="/Assets/stats1.svg" // Replace with the actual image path
                alt="Futures Unlocked"
                width={48} // Adjust as needed
                height={60} // Adjust as needed
                className=" md:h-[50] md:w-[70] aspect-square object-contain "
              />
              <div className="md:text-4xl text-xl mt-2 font-Title font-medium">5000+</div>
              <div className="md:mt-2 text-gray-600 font-Title md:text-sm text-[8px] font-medium  text-center">Futures Unlocked</div>
            </div>

            {/* Second Stat Container */}
            <div className="flex flex-col items-center justify-center w-[130px] h-[130px] md:w-[200px] md:h-[200px] m-2 p-2  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"style={{ backgroundColor: '#FFFFFF' }}>
              <Image
                src="/Assets/stats2.svg" // Replace with the actual image path
                alt="Sessions Conducted"
                width={48}
                height={60}
                className=" md:h-[50] md:w-[70] aspect-square object-contain"
              />
              <div className="md:text-4xl text-xl mt-2 font-Title font-medium">30+</div>
              <div className="md:mt-2 font-Title text-gray-600 md:text-sm text-[8px] text-center font-medium">Sessions Conducted</div>
            </div>

            {/* Third Stat Container */}
            <div className="flex flex-col items-center justify-center  h-[130px] w-[130px] md:w-[200px] md:h-[200px] m-2 p-2  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"style={{ backgroundColor: '#FFFFFF' }}>
              <Image
                src="/Assets/stats3.svg" // Replace with the actual image path
                alt="Strong Insights"
                width={48}
                height={60}
                className="md:h-[50] md:w-[50] aspect-square object-contain"
              />
              <div className="md:text-4xl text-xl mt-2 font-Title font-medium">1000+</div>
              <div className="md:mt-2 font-Title text-gray-600 md:text-sm text-[8px] text-center font-medium">Strong Insights</div>
            </div>
            </div>
            </div>



    </div>
  );
};

export default Home;

