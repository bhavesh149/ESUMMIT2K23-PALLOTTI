import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" style={{display: "flex", justifyContent: "center"}}>
            
                    <div className="skill-bx wow zoomIn">
                        <h2>Days to go...</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <section responsive={responsive} /*infinite={true}*/ className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Days</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Hours</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Seconds</h5>
                            </div>
                           
                        </section>
                    </div>
                </div>
           
        {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
    </section>
  )
}
