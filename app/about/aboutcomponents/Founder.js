import Image from 'next/image';
import { MdStars } from "react-icons/md";

const FoundersNote = () => {
  return (
    <div className='bg-white'>
    <div className="flex flex-col md:flex-row mb-24 w-full md:px-[120px] bg-black md:bg-white text-black md:h-[600px]  md:w-[1440px] mx-auto ">
      <div className="w-full md:w-1/2 flex  items-center md:justify-center justify-end order-1 md:order-2 bg-black md:bg-white relative">
      <Image
          src="/Assets/aboutsahil.svg" // replace with your actual image path
          alt="Founder"
          width={140} // specify desired width
          height={400} // specify desired heightn
          className="absolute left-8 top-16 object-cover  md:hidden ml-4"
        />
        <Image
          src="/Assets/aboutfounder.svg" // replace with your actual image path
          alt="Founder"
          width={218} // specify desired width
          height={400} // specify desired height
          className="object-cover   rounded-lg md:h-[600px] md:w-[486px]"
        />
      </div>




      <div className=" w-full md:w-1/2 flex   order-2 md:order-1 bg-white  ">
        <div className="flex flex-col   md:justify-between justify-center  md:mt-12  px-5 md:px-0   h-[540px] md:w-[613px] md:h-[600px] relative ">
          <div className="md:w-[483px] md:h-[355px]  ">
            <h2 className="text-3xl md:text-5xl font-semibold font-Title mb-2">Founder’s Note</h2>
            <Image
          src="/Assets/aboutfoundernote.svg" // replace with your actual image path
          alt="Foundernote"
          width={87} // specify desired width
          height={22} // specify desired height
          className="object-cover rounded-lg md:h-[12px] md:mx-44 mx-32 md:w-[221px] mb-6 bg-white"
        />
            <p className="mb-7 text-sm md:text-base">
              Sircle stemmed from a deeply personal experience. Despite cracking IIT-JEE, I struggled to gain the practical skills needed for the workforce.
            </p>
            <p className="mb-7 md:text-base font-semibold text-sm">
              We found that there was a significant gap in the education-to-employment pipeline where students lacked skills that are bound to form an entire ecosystem of employment.
            </p>
            <p className="font-semibold mb-2">What can help them bridge the problem?</p>
            <div className='flex items-center '>
            <MdStars className='md:hidden size-5 mr-3 items-center'/>
            <h3 className="text-lg  md:text-2xl font-semibold">Upskilling.</h3>
            </div>


          </div>

{/* mobile  */}
          <div className='absolute gradient-border gradient-purple rounded-sm bottom-[-20px]  w-[257px] flex justify-center items-center h-[38px] md:bg-black  bg-purple-600 md:hidden  '>
              <h1 className="text-base font-semibold p-[5px] text-center  text-white ">And this is where Sircle comes in</h1>
            </div>




          {/* for desktop */}
          <div className=' hidden md:block  '>
            <div className='  w-[296px] rounded-tl-xl rounded-tr-xl flex justify-center items-center h-[55px] md:bg-black  bg-purple-600  '>
              <h1 className="text-base font-semibold p-[5px] text-center  text-white ">And this is where Sircle comes in</h1>
            </div>

            <div className=' rounded-bl-xl gradient-purple gradient-border rounded-br-xl rounded-tr-xl flex justify-center items-center mx-auto order-2 bg-purple-600   w-[330px] md:w-full h-[216px] md:h-[128px] '>
              <p className='text-base  p-5 text-white  '>
                Where it fills the gap between academics and work by connecting young adults with industry exposure for skill-building through hands-on training. It is a place where we make sure any kid in future doesn’t have to suffer because of lack of skills.
              </p>
            </div>
          </div>

        </div>
      </div>



      {/* for mobile */}
      <div className='md:hidden order-2'>
        <div className='flex mx-auto gradient-purple gradient-border justify-center items-center bg-purple-600 rounded-sm w-[330px] h-[216px]  mt-16'>
          <p className='text-base  p-6 text-white '>
            Where it fills the gap between academics and work by connecting young adults with industry exposure for skill-building through hands-on training. It is a place where we make sure any kid in future doesn’t have to suffer because of lack of skills.
          </p>
        </div>
      </div>

    </div>
    </div>
  );
}

export default FoundersNote;
