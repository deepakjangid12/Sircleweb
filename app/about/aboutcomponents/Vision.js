




import Image from 'next/image';
import { FaPlay } from "react-icons/fa";

const VisionMission = () => {
  return (
    <div className="text-white flex justify-center my-20 bg-[url('/Assets/vector.png')]">
      <div className='md:w-[1280px]  flex flex-col items-center justify-between  md:h-[873px]  '>
        
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row justify-between  md:w-[1280px]">
          <div className="flex flex-col justify-center md:w-[545px] mb-12 md:mb-0 rounded-lg shadow-lg order-2 md:order-1 p-5">
            <h2 className="md:text-4xl text-3xl font-semibold mb-4">Our Vision</h2>
            <ul className="list-none space-y-6 text-base">
              <li className="flex items-center mb-2">
                <FaPlay size={30} color='white' className="mr-2" />
                <p>
                  We carry an aim to create a world where every young mind has the opportunity to discover, nurture, and pursue their passion, equipped with the skills and confidence to thrive in their chosen careers.
                </p>
              </li>
              <li className="flex items-center mb-2">
                <FaPlay size={30} color='white' className="mr-2" />
                <p>
                  A world that is ever-changing, only upskilling could keep you in the race and we choose to be the place where students bridge the gap between their Ideal Self and Real Self.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex justify-center rounded-lg md:w-[563px]  md:border-b-2 md:border-r-2 md:h-[363px] overflow-hidden order-1 md:order-2 mb-12 md:mb-0">
            <Image
              src="/Assets/aboutvision1.svg" // Replace with your vision image path
              alt="Vision"
              width={333}
              height={355}
              objectFit="cover"
              className="rounded-lg md:w-[545] md:h-[355]"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row justify-between md:w-[1280px]  ">
          <div className=" flex justify-center rounded-lg md:w-[563px] md:h-[363px]   md:border-b-2 md:border-r-2 overflow-hidden order-1 md:order-1 mb-12 md:mb-0">
            <Image
              src="/Assets/aboutvision2.svg" // Replace with your mission image path
              alt="Mission"
              width={333}
              height={355}
              objectFit="cover"
              className="rounded-lg md:w-[545] md:h-[355]"
            />
          </div>

          <div className="flex flex-col justify-center  md:w-[545px] rounded-lg shadow-lg order-2 md:order-2 p-5  md:p-0 ">
            <h2 className="md:text-4xl text-3xl font-semibold mb-4">Our Mission</h2>
            <h2 className='md:text-2xl text-xl'>Sircle is committed to:</h2>
            <ul className="space-y-6 text-base mt-4">
              <div className="flex items-center">
                <FaPlay size={15} className="mr-2" />
                <p>Providing comprehensive skill development programs tailored for teenagers</p>
              </div>
              <li className="flex items-center">
                <FaPlay size={15} className="mr-2" />
                <p>Facilitating direct connections between students and industry leaders</p>
              </li>
              <li className="flex items-center">
                <FaPlay size={15} className="mr-2" />
                <p>Offering hands-on experiences through our immersive externship programs</p>
              </li>
              <li className="flex items-center">
                <FaPlay size={15} className="mr-2" />
                <p>Cultivating a supportive community that fosters growth and innovation</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
