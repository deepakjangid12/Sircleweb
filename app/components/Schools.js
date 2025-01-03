
import React from 'react';
import { FiBarChart2, FiUsers, FiTag } from 'react-icons/fi';

const Home = () => {
  const stats = [
    {
      number: '5000+',
      label: 'Futures Unlocked',
      icon: <FiBarChart2 className="text-4xl mb-2 text-gray-700" />,
    },
    {
      number: '30+',
      label: 'Sessions Conducted',
      icon: <FiUsers className="text-4xl mb-2 text-gray-700" />,
    },
    {
      number: '1000+',
      label: 'Strong Insights',
      icon: <FiTag className="text-4xl mb-2 text-gray-700" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center  justify-center ">
        {/* Overall Container */}
        <div className="md:w-[1185px] w-full md:h-[235px] flex flex-col items-center justify-between shadow-md p-4 overflow-hidden">
          {/* Text Above the Images */}
          <div className="w-[292px] h-[64px] flex  justify-center   ">
            <h2 className="text-xl font-medium font-Title text-white text-center">
              paired up with prestigious schools like...
            </h2>
          </div>

          {/* Image container */}
          {/* <div className='flex overflow-hidden border-t border-b  p-3  border-gray-600 ' > */}
       
          <div className='flex overflow-hidden p-7 border-t border-b border-gray-600 ' style={{ borderColor: 'rgba(96, 125, 139, 0.2)' }}>
  


          <div className="flex items-center h-[70px] w-full justify-between animate-loop-scroll" >
            <img src="/Assets/school1.png" alt="Image 1" className="h-full  object-contain mx-8" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain mx-8" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain mx-8" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain mx-8" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain mx-8" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain mx-8" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain mx-8" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain mx-8" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain mx-8" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain mx-8" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain mx-8" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain mx-8" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain mx-8" />
        </div>
        
          </div>

        </div>
      </div>
    

  
      <div className="flex justify-center items-center md:m-[100px]  my-12  ">
    <div className="flex  flex-row  justify-center px-2">
        {stats.map((stat, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center  w-full md:w-[200px] md:h-[200px] m-2 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                {stat.icon}
                <div className=" md:text-3xl  font-bold">{stat.number}</div>
                <div className="mt-2 text-gray-600 text-sm text-center">{stat.label}</div>
            </div>
        ))}
    </div>
</div>


    </>
  );
};

export default Home;

