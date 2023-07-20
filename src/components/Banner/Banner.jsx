import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Clock from "../Clock/Clock";

import "./Banner.css"
import ComputersCanvas from "../Computers";

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }


                      //************Clock*************//
                      const [timerDays, setTimerDays] = useState();
                      const [timerHours, setTimerHours] = useState();
                      const [timerMinutes, setTimerMinutes] = useState();
                      const [timerSeconds, setTimerSeconds] = useState();
                    
                      let interval;
                    
                      const startTimer = () => {
                        const countDownDate = new Date("22 april, 2023 ").getTime();
                    
                        interval = setInterval(() => {
                          const now = new Date().getTime();
                    
                          const distance = countDownDate - now;
                    
                          const days = Math.floor(distance / (24 * 60 * 60 * 1000));
                          const hours = Math.floor(
                            (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                          );
                          const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
                          const seconds = Math.floor((distance % (60 * 1000)) / 1000);
                    
                          if (distance < 0) {
                            // Stop Timer
                    
                            clearInterval(interval.current);
                          } else {
                            // Update Timer
                            setTimerDays(days);
                            setTimerHours(hours);
                            setTimerMinutes(minutes);
                            setTimerSeconds(seconds);
                          }
                        });
                      };
                    
                      useEffect(() => {
                        startTimer();
                      });
                                       




  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  {/* <h1 style={{display: "flex",justifyContent: "center"}}>ESUMMIT</h1> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>} */}
            </TrackVisibility>
          </Col>
        </Row>
        {/* <ComputersCanvas/> */}
        


        <div className="regButton">

        {/* <button className="button-89" role="button">Register</button> */}


        <button className="button-89" >Register</button>
        
        </div>
        <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      </Container>
    </section>
  )
}


