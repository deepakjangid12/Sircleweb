
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
      <div className="flex flex-col items-center justify-center">
        {/* Overall Container */}
        <div className="w-[1185px] h-[235px] flex flex-col items-center justify-between shadow-md p-4">
          {/* Text Above the Images */}
          <div className="w-[292px] h-[64px] flex items-center justify-center ">
            <h2 className="text-xl font-semibold text-white text-center">
              paired up with prestigious schools like...
            </h2>
          </div>

          {/* Image container */}
          <div className="flex items-center h-[70px] w-full justify-between">
            {/* Use your actual image paths */}
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain" />
            <img src="/Assets/school2.png" alt="Image 2" className="h-full object-contain" />
            <img src="/Assets/school3.png" alt="Image 3" className="h-full object-contain" />
            <img src="/Assets/school1.png" alt="Image 1" className="h-full object-contain" />
          </div>
        </div>
      </div>

  
      <div className="flex justify-center items-center md:m-[100px]  ">
    <div className="flex  flex-row  justify-center px-2">
        {stats.map((stat, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center w-full sm:w-[200px] h-[200px] m-2 p-1 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                {stat.icon}
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="mt-2 text-gray-600 text-center">{stat.label}</div>
            </div>
        ))}
    </div>
</div>

    </>
  );
};

export default Home;

