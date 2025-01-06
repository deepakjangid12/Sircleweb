import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="gradient-gray  border-r border-b border-1  border-gray-600 p-3  md:px-[120px]  text-white flex justify-between rounded-b-2xl items-center  py-3">
      <div className="">
      <Image 
          src="/Assets/logo.png" 
          alt="logo" 
          width={70}  // Specify the width of the image
          height={50}  // Specify the height of the image
          className="rounded" // Optional: Adds styling class
        />
      </div>

      <div className="flex gap-6 sm:gap-10 items-center">
        <button className="border border-white px-3 sm:px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
          Learn
        </button>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          About
        </a>
        <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
