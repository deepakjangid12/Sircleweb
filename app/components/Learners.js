import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Masonry from 'react-masonry-css';

const testimonials = [
    {
        name: "Venya Gujral",
        title: "Student",
        content: "✨ A Journey to Transformation with Sircle Fellowship Program: I am excited to share my amazing journey and learnings. I have received in this program - Sircle Fellowship Program. I explored many topics, gained a plethora of knowledge and solutions.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Diyaansh Agarwal",
        title: "Student",
        content: "🌟 Ever had an experience that completely transformed your perspective? I just did the Sircle internship workshop by Sahil Yadav and I’m buzzing with excitement! For the past few weeks, I immersed myself in a whirlwind of skill enhancement sessions, and it was a game-changer.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Ayushmaan Pandey",
        title: "LPS, Varanasi",
        content: "🚀 Just completed an amazing 14-day Glow-up Program by Sircle at IIT-BHU, covering 6 essential modules. Ready to apply the new skills!",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Kartik Agrahar",
        title: "Sunbeam Bhagirathi",
        content: "💡 If you can dream it, you can do it! Grateful for the journey and the knowledge gained during my internship at Sircle. A big thank you to the entire team for their support and guidance.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Khushi Bansal",
        title: "Student",
        content: "🎉 Learning has never been more fun! I recently completed a 14-day intensive internship at Sircle. Huge thanks to the supportive team for their mentorship and guidance throughout this journey!",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Samridhi Tiwari",
        title: "Sunbeam Bhagirathi",
        content: "✨ As I conclude my internship at Sircle, I am filled with immense gratitude for the learning and experiences I’ve gained over this period. This journey has been incredibly enriching.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Arnav Soni",
        title: "Sunbeam Bhagirathi",
        content: "🌈 The experience has been incredible! Learning new skills was challenging, but the mentors were incredibly supportive and friendly, which helped us push through.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Aastha Goel",
        title: "Student",
        content: "🔑 Just wrapped up a fantastic experience with the Glow-Up Program at Sircle. It was a 14-day program including 6 modules.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Deepansh Singh",
        title: "Student",
        content: "🔥 I’m excited to share a major milestone in my journey - completing the incredible Sircle Fellowship! This experience has been transformative.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Janhavi Singh",
        title: "Sunbeam Bhagirathi",
        content: "🔄 The most impactful decision I ever took! I enrolled in Sircle’s extension program. This program is a life changer.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
    {
        name: "Sakshan Soni",
        title: "Sunbeam Bhagirathi",
        content: "📚 Today marks the last day of my Sircle externship, and it's been an incredible learning journey. I've gained a wide array of skills.",
        linkedIn: "#",
        avatar: "https://via.placeholder.com/50" // Replace with actual avatar URL
    },
];

const Testimonials = () => {
    
const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
    
};

    return (
        <div className=" py-10 px-[80px] md:mx-10">
            <h2 className="text-center text-4xl font-bold mb-10 text-white ">Hear it from the Learners</h2>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid "
                columnClassName="my-masonry-grid_column "
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className=" p-6 rounded-lg shadow-lg flex flex-col relative ">
                        <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-4 text-blue-500 hover:text-blue-700">
                            <FaLinkedin size={24} />
                        </a>
                        <div className="flex items-start mb-4">
                            <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                <h4 className="text-sm text-gray-600">{testimonial.title}</h4>
                            </div>
                        </div>
                        <p className="text-gray-700">{testimonial.content}</p>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Testimonials;
