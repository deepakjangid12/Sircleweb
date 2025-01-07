// components/CardsSection.js
import Image from 'next/image';

const CardsSection = () => {
  return (
    <div className="bg-gradient-to-r bg-white md:h-[753px] p-10 flex flex-col justify-center items-center">
        <div className='flex flex-col justify-between  md:w-[720px] md:h-[621px]'>
            <div className='md:h-[162px] border'>
      <h1 className="md:text-5xl font-Title font-semibold mb-2 text-center">Think Upschooling</h1>
      <h2 className="md:text-5xl font-Title font-semibold mb-5 text-center">Think Sircle</h2>
      <p className="md:text-xl font-Title text-center mb-10">Dreams In Action</p>
      </div>
      <div className="flex justify-center md:h-[404px]   md:w-[720px] border-2  border-red-700">
        {/* Card 1 */}
          <Image
            src="/Assets/aboutthink2.svg" // Replace with your actual image path
            alt="Card 1"
            width={194}
            height={390}
            className=" md:w-[200] md:h-[346]  object-cover -rotate-12"
          />
        

        {/* Card 2 */}
          <Image
            src="/Assets/aboutthink2.svg" // Replace with your actual image path
            alt="Card 2"
            width={224}
            height={390}
            className="md:w-[224] md:h-[398]  object-cover z-10"
          />
         
        {/* Card 3 */}
          <Image
            src="/Assets/aboutthink2.svg" // Replace with your actual image path
            alt="Card 3"
            width={194}
            height={390}
            className="md:w-[200] md:h-[346]  object-cover rotate-12"
          />
         
        
      </div>

      
      </div>
    </div>
  );
};

export default CardsSection;
