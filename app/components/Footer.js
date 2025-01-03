import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin,FaPhone, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        // <footer className="bg-gray-900 text-white py-10 px-[40px] md:py-10 md:h-[666px]">
        <footer
    className="bg-gray-900 text-white py-10 px-[40px] md:py-10"
    style={{
        background: `linear-gradient(90.56deg, rgba(37, 37, 39, 0.5) 0%, rgba(134, 134, 141, 0) 100%)`,
    }}
>
            <div className="container mx-auto flex flex-col md:flex-row justify-center  md:px-20">
                <div className="flex flex-col mb-6 w-full md:w-1/2">
                    <div className='max-w-lg'>
                        <h2 className="text-2xl font-bold mb-4">Become an OG ✨</h2>
                        <p className="mb-4">
                            Join Sircle’s exclusive WhatsApp community of 500+ like-minded people! Access free resources, expert webinars, a peer network, and make friends who share your aspirations—all in one place!
                        </p>
                    </div>
                    {/* Adjusting Flex Container for Input and Image */}
                    <div className="flex flex-row mt-6 justify-between items-center w-full max-w-[500px]">
                        <input
                            type="tel"
                            placeholder="Enter your Number"
                            className="border rounded-lg p-2 text-gray-700 w-full md:w-72 md:mr-2"
                        />
                       
                        <Link href="/path-to-your-page" className="flex items-center text-center cursor-pointer ml-4 gradient-border border-2 border-purple-950 md:h-[40px]  bg-gradient-to-br from-[rgba(6,6,6,0.9)] to-[rgba(171,6,213,0.92)] text-white md:py-2 py-1 px-4 rounded-md hover:bg-purple-400  ">
                            <span className="text-xs font-medium font-Title ">Request  a Callback</span> {/* Text */}
                            <FaPhone className=" h-3 w-6" />  {/* Phone icon */}
                        </Link>


                    </div>


                    <div className="flex space-x-4 gap-4 mt-6">
                        <Link href="#" className="text-white hover:text-purple-400" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-purple-400" aria-label="WhatsApp">
                            <FaWhatsapp size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-purple-400" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </Link>
                    </div>
                    <div className="flex  mt-8">
                        <Image
                            src="/Assets/logo.png" // Path to your logo image
                            alt="Sircle Logo"
                            width={50} // Adjust this value as needed for your design
                            height={50} // Adjust this value as needed for your design
                        />
                    </div>
                </div>

                <div className='flex justify-between flex-col md:flex-row gap-5 w-full md:w-1/2'>
                    <div className="flex flex-col mb-6 gap-2">
                        <h3 className="text-lg font-semibold mb-2">Programs</h3>
                        <Link className='hover:text-purple-400 mb-1' href="/glow-up">Glow UP</Link>
                        <Link className="hover:text-purple-400" href="/power-play">Power Play</Link>
                    </div>

                    <div className="flex flex-col mb-6 gap-2">
                        <h3 className="text-lg font-semibold mb-2">Learn More</h3>
                        <Link className="hover:text-purple-400 mb-1" href="/terms-condition">Terms & Condition</Link>
                        <Link className="hover:text-purple-400" href="/privacy-policy">Privacy Policy</Link>
                    </div>

                    <div className="flex flex-col mb-6 gap-2">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p>+91 9817134356</p>
                        <p>hello@sircle.in</p>
                        <p>E-Cell, i3F, IIT <br /> (BHU), Varanasi, Uttar <br /> Pradesh, 221001</p>
                    </div>
                </div>
            </div>

            <p className="text-center  text-sm border-t border-gray-700 pt-6">
                &copy; 2024 Sircle.in | All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
