
import Image from 'next/image';

const PartnershipsSection = () => {
  return (
    <div className="bg-black p-5 text-white flex flex-col items-center  md:my-[100px]">
      <div className='flex flex-col justify-between md:w-[576px] my-5 md:h-[278px] h-[206px] '>
        <div>
          <h1 className="text-center md:text-3xl text-2xl  font-bold mb-4">
            We're also expanding through exciting new partnerships.
          </h1>
        </div>

        {/* Flex container for logos in a row */}
        <div className="flex md:justify-between justify-evenly items-center space-x-4">
          {/* Boot & Boost Logo */}
          <div className="flex justify-center items-center border border-white rounded-lg p-4 w-[130px] h-[74px] md:w-[202px] md:h-[116px]">
            <Image
              src="/Assets/aboutpatner1.svg" // Replace with your actual logo path
              alt="Boot & Boost"
              width={98}  // Adjust the width as needed
              height={60}  // Adjust the height to maintain aspect ratio
              className="object-contain md:w-full md:h-full" // Use full dimensions for maximum size
            />
          </div>

          {/* Second Partner Logo */}
          <div className="flex justify-center items-center border border-white rounded-lg w-[130px] h-[74px] md:w-[202px] md:h-[116px]">
            <Image
              src="/Assets/aboutpatner2.svg" // Replace with your actual logo path
              alt="Another partner"
              width={86}  // Adjust the width as needed
              height={60}  // Adjust the height to maintain aspect ratio
              className="object-contain md:w-full md:h-full" // Use full dimensions for maximum size
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSection;

