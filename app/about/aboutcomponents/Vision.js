// components/VisionMission.js
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";

const VisionMission = () => {
  return (
    <div className=" text-white  flex justify-center md:px-[12px] p-5 my-14">
      {/* <div className="flex items-center justify-center container md:w-[1180px] border  "> */}
        <div className="grid  justify-items-center grid-cols-1 font-Title md:grid-cols-2 gap-10   md:w-[1410px]  md:h-[800px]">
          {/* Vision Section text */}
          <div className="flex flex-col justify-center md:w-[545px]    rounded-lg shadow-lg order-2  md:order-1">
            <h2 className="md:text-4xl text-3xl font-semibold mb-4">Our Vision</h2>
            <ul className="list-none space-y-6 text-base "> {/* Change list style to none */}

            <li className="flex items-center mb-2">
              <FaPlay size={30} color='white' className="text-white mr-2" />
              <p>
                We carry an aim to create a world where every young mind has the opportunity to discover, nurture, and pursue their passion, equipped with the skills and confidence to thrive in their chosen careers.
              </p>
            </li>
            <li className="flex items-center mb-2">
              <FaPlay size={30} color='white' className="text-white mr-2" />
              <p>
              A world that is ever-changing, only upskilling could keep you in the race and we choose to be the place where students bridge the gap between their Ideal Self and Real Self.
              </p>
              
            </li>
            </ul>
           
          </div>
          {/* vision section image */}
          <div className="relative  rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/Assets/aboutvision1.svg" // Replace with your vision image path
              // src="/Assets/aboutvision3.svg" // Replace with your vision image path
              alt="Vision"
              width={545}
              height={355}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Mission Section image */}
          <div className="relative  rounded-lg overflow-hidden order-3">
            <Image
              src="/Assets/aboutvision2.svg" // Replace with your mission image path
              // src="/Assets/aboutvision4.svg" // Replace with your vision image path
              alt="Mission"
              width={545}
              height={355}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
         
{/* mission section text */}
<div className="flex flex-col    md:w-[545px] md:p- rounded-lg shadow-lg order-4">
      <h2 className="md:text-4xl text-3xl font-semibold mb-4">Our Mission</h2>
      <h2 className='md:text-2xl text-xl'>Sircle is commited to:</h2>

      <ul className=" space-y-6 text-base mt-4"> {/* Change list style to none */}
        <div className="flex items-center">
          <FaPlay size={15} className="text-white mr-2" /> {/* Add icon for each item */}
          <p>Providing comprehensive skill development programs tailored for teenagers</p>
        </div>
        <li className="flex items-center">
          <FaPlay  size={15}className="text-white mr-2" />
          <p>Facilitating direct connections between students and industry leaders</p>
        </li>
        <li className="flex items-center">
          <FaPlay  size={15} className="text-white mr-2" />
          <p>Offering hands-on experiences through our immersive externship programs</p>
        </li>
        <li className="flex items-center">
          <FaPlay  size={15} className="text-white mr-2" />
          <p>Cultivating a supportive community that fosters growth and innovation</p>
        </li>
      </ul>
    </div>

        </div>
      {/* </div> */}
    </div>
  );
};

export default VisionMission;
