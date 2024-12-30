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
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <School/>
      <Explore/>
      <Hear/>
      <Imageslider/>
    </>
  );
}
