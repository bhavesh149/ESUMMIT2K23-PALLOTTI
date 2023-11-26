import React from "react";
import Events from "../../components/Events/Events";
import  NavBar  from "../../components/NavBar/NavBar";
import Speaker from "../../components/Speaker/Speaker";
import About from "../../components/About/About";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";

import ScrollUp from "../../components/ScrollUp/ScrollUp";
import ComputersCanvas from "../../components/Computers";
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

const Home = () => {

  return (
    <div className="Home" >
      <NavBar />
      <Banner />
      <About />
      {/* <ComputersCanvas/> */}
      <Events />
      <Speaker />
      <Sponsors />
      
      <ScrollUp />
      <Footer/>
      {/* <div className='end'></div> */}
    </div>
  );
};

export default Home;
