'use client'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import School from "./components/Schools";
import Hear from "./components/Hear";
import Explore from "./components/Explore";
import Imageslider from "./components/Imageslider"
import WhySircle from "./components/WhySircle";
import Learners from './components/Learners'
import Footer from'./components/Footer'
export default function Home() {
  
  return (
    <div className="gradient-">
      {/* <Navbar /> */}
      <Hero />
      <School/>
      <Explore/>
      <Hear/>
      <Imageslider/>
      <WhySircle/>
      <Learners/>
      {/* <Footer/> */}
    </div>
  );
}
