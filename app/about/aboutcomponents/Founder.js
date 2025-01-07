// components/FoundersNote.js

import Image from 'next/image';

const FoundersNote = () => {
  return (
    <div className="flex flex-col md:flex-row mb-24 w-full bg-white text-black md:h-[600px] ">
      <div className="w-full  md:w-1/2 ">
      <div className=' relative border-2 mx-auto md:w-[613px] md:h-[600px] border-red-500 '>
      <div className='md:w-[483px] md:h-[355px] border-2 mx-auto'>
        <h2 className="text-3xl font-bold mb-4">Founder’s Note</h2>
        <p className="mb-4">
          Sircle stemmed from a deeply personal experience. Despite cracking IIT-JEE, I struggled to gain the practical skills needed for the workforce.
        </p>
        <p className="mb-4">
          We found that there was a significant gap in the education-to-employment pipeline where students lacked skills that are bound to form an entire ecosystem of employment.
        </p>
        <p className="font-bold mb-2">What can help them bridge the problem?</p>
        <h3 className="text-xl font-semibold">Upskilling.</h3>
        </div>

        <div className='flex flex-col justify-between rounded-xl  p-3 absolute right-0 bottom-[-70px] bg-black text-white md:w-[613px] md:h-[169px] border-2'>
        <p className=" md:text-lg font-semibold">And this is where Sircle comes in</p>
        <p className='md:text-base'>
          Where it fills the gap between academics and work by connecting young adults with industry exposure for skill-building through hands-on training.
          It is a place where we make sure any kid in future doesn’t have to suffer because of lack of skills.
        </p>
      </div>
      </div>
      </div>
      <div className="w-full md:w-1/2 flex border-2 items-center justify-center">
        <Image
          src="/Assets/aboutfounder.svg" // replace with your actual image path
          alt="Founder"
          width={300} // specify desired width
          height={400} // specify desired height
          className="object-cover rounded-lg md:h-[600px] md:w-[486px]"
        />
      </div>
    </div>
  );
}

export default FoundersNote;
