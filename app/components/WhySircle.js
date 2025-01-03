
// import React from 'react';
// import Image from 'next/image';

// const WhySircle = () => {
//     return (
//         <div className="flex flex-col md:flex-row justify-center relative items-center bg-white bg-[url('/Assets/vertor')]"
//         style={{ backgroundImage: "url('/Assets/vector.png')" }} // Ensure the background is applied correctly

//         >
//             <div className="rounded-lg shadow-lg  border w-full h-[704px] flex">

//                 {/* Title Section */}
//                 <div className="flex flex-col  justify-center items-center w-1/2 space-y-6 p-4">
//                     {/* Outer Border Div */}
//                     <div className="rounded-lg  overflow-hidden w-[426px]">
//                         <div className="p-4 h-[279px] flex flex-col justify-center">
//                             {/* Why Heading */}
//                             <h1 className="font-circle text-[59px] font-semibold leading-[90px] text-black text-left">
//                                 Why
//                             </h1>

//                             {/* Sircle Heading */}
//                             <h1 className="font-circle text-[94px] font-semibold leading-[95px] text-black text-left underline underline-from-font decoration-transparent">
//                                 Sircle
//                             </h1>

//                             {/* Styled Paragraph */}
//                             <p className="font-plex text-[20px] font-normal leading-[25px] text-black text-left mt-4 text-decoration-skip-ink w-[300px]">
//                                 Develop real-world skills with our courses designed by industry practitioners.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Image Section */}
//                 <div className='absolute top-[85px] left-[220px] '>
//                     <Image src="/Assets/qsn.png" height={150} width={150} alt="QSN Icon" />
//                 </div>

                
// {/* card section */}
//   <div className="flex justify-center items-center w-full md:w-1/2">
//             {/* Container Sized 534x600 */}
//             <div className="rounded-lg w-[534px] h-[600px] flex flex-col p-4">

//                 {/* Card Section */}
//                 <div className="flex-1 grid grid-cols-2 gap-4 overflow-y-auto">

//                     {/* Card 1 */}
//                     <div className="flex flex-col justify-center rounded-lg w-full h-full px-5 bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white">
//                         <Image src="/Assets/frame1.png" height={70} width={70} alt="Personalized Guidance" className="mb-2 left-0" />
//                         <h2 className="text-xl font-semibold px-1 my-1 text-white">
//                             Personalized<br />Guidance
//                         </h2>
//                         <p className="text-sm py-3 px-1 text-white">
//                             Get bespoke advice from students of esteemed colleges.
//                         </p>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="flex flex-col justify-center rounded-lg w-full h-full px-5 bg-white text-purple-800 border-2 border-purple-800">
//                         <Image src="/Assets/frame2.png" height={70} width={70} alt="Flexible Interaction" className="mb-2 left-0" />
//                         <h2 className="text-xl font-semibold px-1 my-1 text-purple-800">
//                             Flexible<br />Interaction
//                         </h2>
//                         <p className="text-sm py-3 px-1 text-purple-800">
//                             Choose how you want to connect—through WhatsApp chat, video calls, or audio calls.
//                         </p>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="flex flex-col justify-center rounded-lg w-full h-full px-5 bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white">
//                         <Image src="/Assets/frame3.png" height={70} width={70} alt="Proven Strategies" className="mb-2 left-0" />
//                         <h2 className="text-xl font-semibold px-1 my-1 text-white">
//                             Proven<br />Strategies
//                         </h2>
//                         <p className="text-sm py-3 px-1 text-white">
//                             Our mentors share battle-tested strategies that go beyond books.
//                         </p>
//                     </div>

//                     {/* Card 4 */}
//                     <div className="flex flex-col justify-center rounded-lg w-full h-full px-5 bg-white text-purple-800 border-2 border-purple-800">
//                         <Image src="/Assets/frame4.png" height={70} width={70} alt="Join Sircle" className="mb-2 left-0" />
//                         <h2 className="text-xl font-semibold px-1 my-1 text-purple-800">
//                             Join<br />Sircle
//                         </h2>
//                         <p className="text-sm py-3 px-1 text-purple-800">
//                             Where your potential meets our expertise.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//             </div>
//         </div>
    // );
// };

// export default WhySircle;

import React from 'react';
import Image from 'next/image';

const ResponsiveLayout = () => {
  return (
    <div className="flex flex-col md:flex-row relative justify-center md:px-[80] items-stretch bg-white md:h-[704px]"
       style={{ backgroundImage: "url('/Assets/vector.png')" }} // Ensure the background is applied correctly
>
    
      <div className="flex flex-col justify-center items-cente w-full md:w-1/2 space-y-6 p-4">
  <div className="rounded-lg overflow-hidden max-w-[426px] w-full h-full flex flex-col justify-center">
    <div className="p-4 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <h1 className="font-circle text-[59px] font-semibold leading-[90px] text-black">
        Why
      </h1>

      <h1 className="font-circle text-[94px] font-semibold leading-[95px] text-black">
        Sircle
      </h1>

      <p className="font-plex text-[20px] font-normal leading-[25px] text-black mt-4 w-[300px]">
        Develop real-world skills with our courses designed by industry practitioners.
      </p>
    </div>
  </div>
</div>


      <div className='absolute top-[85px] left-[220px] '>
                <Image src="/Assets/qsn.png" height={150} width={150} alt="QSN Icon" />
         </div>

      <div className="flex justify-cente items-center w-full md:w-1/2 h-full">
        <div className="rounded-lg w-full max-w-[534px]   md:h-[600px] flex flex-col p-4">
          <div className="flex-1 grid grid-cols-2 gap-4 h-full ">

            <div className="flex flex-col pt-3   rounded-lg w-full h-full px-5 border-2 border-purple-800 bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white">
              <Image src="/Assets/frame1.png" height={70} width={70} alt="Personalized Guidance" className="mb-2 " />
              <h2 className="md:text-xl font-semibold px-1 my-1">Personalized<br />Guidance</h2>
              <p className="text-sm py-2 px-1">Get bespoke advice from students of esteemed colleges.</p>
            </div>

            <div className="flex flex-col pt-3 rounded-lg w-full h-full px-5 bg-white text-purple-800 border-2 border-purple-800">
              <Image src="/Assets/frame2.png" height={70} width={70} alt="Flexible Interaction" className="mb-2" />
              <h2 className="md:text-xl font-semibold px-1 my-1">Flexible<br />Interaction</h2>
              <p className="text-sm py-3 px-1">Choose how you want to connect—through WhatsApp chat, video calls, or audio calls.</p>
            </div>

            <div className="flex flex-col pt-3 rounded-lg w-full h-full px-5 bg-white text-purple-800 border-2 border-purple-800">
              <Image src="/Assets/frame3.png" height={70} width={70} alt="Proven Strategies" className="mb-2" />
              <h2 className="md:text-xl font-semibold px-1 my-1">Proven<br />Strategies</h2>
              <p className="text-sm py-2 px-1">Our mentors share battle-tested strategies that go beyond books.</p>
            </div>

            <div className="flex flex-col pt-3 rounded-lg w-full h-full px-5 bg-white text-white  bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)]">
              <Image src="/Assets/frame4.png" height={70} width={70} alt="Join Sircle" className="mb-2" />
              <h2 className="md:text-xl font-semibold px-1 my-1">Join<br />Sircle</h2>
              <p className="text-sm py-3 px-1">Where your potential meets our expertise.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ResponsiveLayout;
