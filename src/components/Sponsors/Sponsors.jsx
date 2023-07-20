import React, { useEffect, useRef } from 'react'
// import {FaAws} from "@react-icons/fa";
import { DiApple, DiFirefox, DiGithubBadge, DiNodejs } from 'react-icons/di';

import "./Sponsors.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {

    const revealRefs = useRef([]);
    revealRefs.current = [];
    useEffect(() => {
      revealRefs.current.forEach((el, index) => {
          gsap.fromTo(
              el,
              { autoAlpha: 0 },
              { duration: 1,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  id: `section-${index+1}`,
                  trigger: el,
                  start: 'top center+=70',
                  toggleActions: 'play none none reverse',
                  // markers:true
                }
               }
          );
      });
    }, []);
  
    const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
    };
  return (
    <div className='Sponsors'>
        <h1>Sponsors</h1>
        <div className="container" >
            <div className="sponsor_box"ref={addToRefs}>
                <div><DiGithubBadge style={{width: "9rem", height: "9rem"}}/> </div>
            </div>
            <div className="sponsor_box"ref={addToRefs}>
                <div><DiFirefox style={{width: "9rem", height: "9rem"}}/> </div>
            </div>
            <div className="sponsor_box"ref={addToRefs}>
                <div><DiNodejs style={{width: "9rem", height: "9rem"}}/> </div>
            </div>
            <div className="sponsor_box"ref={addToRefs}>
                <div><DiApple style={{width: "9rem", height: "9rem"}}/> </div>
            </div>
        </div>

    </div>
  )
}

export default Sponsors