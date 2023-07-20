import React, { useEffect, useRef } from "react";
import circle from "../../assets/img/bgpops.avif";
import innerPic from "../../assets/img/bhaveshbgrmv.png";

import "../Speaker/Speaker.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const speakerData = [
  {
    bgImage: circle,
    profilePic: innerPic,
    speakerName: "Bhavesh Mahajan",
    speakerInfo: "Founder and CEO, xxx",
  },
  {
    bgImage: circle,
    profilePic: innerPic,
    speakerName: "Abhishek Wasekar",
    speakerInfo: "Founder and CEO, yyy",
  },
  {
    bgImage: circle,
    profilePic: innerPic,
    speakerName: "Abhishek Wasekar",
    speakerInfo: "Founder and CEO, yyy",
  },
  {
    bgImage: circle,
    profilePic: innerPic,
    speakerName: "Abhishek Wasekar",
    speakerInfo: "Founder and CEO, yyy",
  },
  {
    bgImage: circle,
    profilePic: innerPic,
    speakerName: "Abhishek Wasekar",
    speakerInfo: "Founder and CEO, yyy",
  },
];

const Speaker = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=60",
            toggleActions: "play none none reverse",
            // markers:true
          },
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
    <div style={{ backgroundColor: "black" }} id="speakers">
      <div className="Speaker">
        <h1>Prominent Speakers</h1>
        <div className="container">
          {speakerData.map((el, i) => {
            return (
              <div className="Frame" ref={addToRefs}>
                <div className="person">
                  <div className="person_container">
                    <img className="circle" src={el.bgImage} alt="" />
                    <img className="person_img" src={el.profilePic} alt="" />
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <h4 style={{ color: "black" }}>{el.speakerName}</h4>
                </div>
                <div>
                  <p>{el.speakerInfo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
