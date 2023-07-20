import React, { useRef, useEffect } from "react";
import { DiAtom } from "react-icons/di";
import { gsap } from "gsap";

import "./Events.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    logo: (
      <DiAtom style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }} />
    ),
    eventName: "Bussiness Conclave",
  },
  {
    logo: (
      <DiAtom style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }} />
    ),
    eventName: "Startup Expo",
  },
  {
    logo: (
      <DiAtom style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }} />
    ),
    eventName: "Event 4",
  },
  {
    logo: (
      <DiAtom style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }} />
    ),
    eventName: "Event 5",
  },
  {
    logo: (
      <DiAtom style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }} />
    ),
    eventName: "Event 6",
  },
];

const Events = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 0.4,
          autoAlpha: 1,
          translate: "0 10px",
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=70",
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
    <div className="Events" id="events">
      <h1>Events</h1>
      <div className="container">
        {sections.map((el, i) => {
          return (
            <div key={i + 1} className="Event_box" ref={addToRefs}>
              <div>
                {/* <DiAtom
                            style={{ width: "8rem", height: "8rem", marginBottom: "2rem" }}
                        /> */}
                {el.logo}
              </div>
              <div>
                <h2>{el.eventName}</h2>
              </div>
              <Link to="/eventPage">
                <p>Read More</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
