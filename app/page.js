'use client'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import School from "./components/Schools";
import Hear from "./components/Hear"
import Explore from "./components/Explore";
import Imageslider from "./components/Imageslider"
import WhySircle from "./components/WhySircle";
import Learners from './components/Learners'
import Footer from'./components/Footer'
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="gradient-purpl">
      <Navbar />
      <Hero />
      <School/>
      <Explore/>
      <Hear/>
      <Imageslider/>
      <WhySircle/>
      <Learners/>
      <Footer/>
    </div>
  );
}
