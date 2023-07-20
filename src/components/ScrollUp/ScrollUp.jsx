import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

import "./ScrollUp.css"

const ScrollUp = () => {
    const[scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 560) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    // window.addEventListener("scroll",function() {
    //     const scrollUp = document.querySelector(".scrollup")
    //     if(this.scrollY>=560) {scrollUp.classList.add
    //     ("show-scroll")}
    //     else scrollUp.classList.remove("show-scroll")
    // })

  return (
    
    <a href="#" className={scrolled ? "scrolledUp" : ""}>
        {/* <i className='uil uil-arrow-up scrollup__icon'></i> */}
        <FaAngleDoubleUp style={{color: "white",width: "2rem",height: "2rem"}}/>
    </a>

  )
}

export default ScrollUp