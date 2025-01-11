// components/CardsSection.js
import Image from 'next/image';

const CardsSection = () => {
  return (
    <div className="  bg-[url('/Assets/vector.png')] md:h-[753px]  p-4 md:p-10 flex flex-col justify-center items-center "style={{ backgroundColor: '#FCFCFC' }}>
      {/* //gradientimg */}
   


        <div className='flex  flex-col md:justify-between justify-evenly  md:w-[720px] h-[550px] md:h-[621px]'>
            <div className='md:h-[162px] '>
      <h1 className="md:text-5xl text-4xl font-Title font-semibold mb-2 text-center">Think Upschooling</h1>
      <h2 className="md:text-5xl text-4xl font-Title font-semibold mb-5 text-center">Think Sircle</h2>
      <p className="md:text-xl text-xl font-semibold font-Title text-center md:mb-10">Dreams In Action</p>
      </div>
      <div className="flex justify-center md:h-[404px] w-[345px] h-[207px]  md:w-[720px]   relative ">
        {/* Card 1 */}
          <Image
            src="/Assets/aboutthink1.svg" // Replace with your actual image path
            alt="Card 1"
            width={100}
            height={178}
            className=" md:w-[200px] md:h-[346px] h-[178px] absolute left-5 md:left-10 bottom-3 md:bottom-5  object-cover -rotate-12"
          />
        

        {/* Card 2 */}
          <Image
            src="/Assets/aboutthink2.svg" // Replace with your actual image path
            alt="Card 2"
            width={115}
            height={205}
            className="md:w-[224px] md:h-[398px] h-[205px]  object-cover z-10"
          />
         
        {/* Card 3 */}
          <Image
            src="/Assets/aboutthink3.svg" // Replace with your actual image path
            alt="Card 3"
            width={100}
            height={178}
            className="md:w-[200px] md:h-[346px] h-[178px] absolute bottom-3 md:bottom-5 right-5 md:right-10 object-cover rotate-12"
          />
         
        
      </div>

      
      </div>
    </div>
  );
};

export default CardsSection;
