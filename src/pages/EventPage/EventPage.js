import React from "react";
import EventDetails from "../../components/EventDetails/EventDetails";
import Events from "../../components/Events/Events";
import Footer from "../../components/Footer/Footer";
// import  {NavBar}  from '../../components/NavBar/NavBar'
import eventBgImage from "../../assets/img/eventBg.jpg";

import Speaker from "../../components/Speaker/Speaker";
import "../../App.css";
import About from "../../components/About/About";
import NavBar from "../../components/NavBar/NavBar";
import { Banner } from "../../components/Banner/Banner";
import { DiApple, DiFirefox, DiGithubBadge, DiNodejs } from 'react-icons/di';


import "./EventPage.css";

export function EventPage() {
  return (
    <>
      <div className="EventPage">
        {/* <img src={eventBgImage} alt="img" /> */}
        <NavBar />
        <div className="container">
          <h1>
            <span style={{ color: "yellow" }}>BOARD</span> ROOM
          </h1>

          <div class="wrap">
            <button class="button">Register</button>
          </div>
        </div>
        <div className="black"></div>
        <div className="timeline">
          <div className="div1">
            <span>Event Type</span>
            <span>Idea building and pitching event</span>
          </div>
          <div className="div2">
            <span>Registration Starts:</span>
            <span>10-04-2023</span>
          </div>
          <div className="div3">
            <span>Registration Ends:</span>
            <span>20-04-2023</span>
          </div>
        </div>
        {/* <div className="div2"></div> */}
      </div>
      <div className="container2">
        <div className="left">
          <h1>
            <span style={{ color: "white" }}>Company</span>
            <span style={{ color: "yellow" }}>Profile</span>
          </h1>
          <p>
            Successful businesses are the results of imperative decisions made
            by great business leaders. However, if you believe that only the
            company owner is responsible for decision-making, you are mistaken.
            This event will provide you an understanding of who are the members
            behind such great businesses decisions, such as the CEO, CFO, CTO,
            HRO, and IE, and how they influence business by offering advice in
            decision making. The real-life events and issues improve or deprive
            the company's performance because the management team determines the
            fate of the organisation!
          </p>
        </div>
        <div className="right">
          <h1>FORMAT</h1>
          <span className="round1">
            <span
              style={{ fontSize: "2rem", fontWeight: "bold", color: "grey" }}
            >
              01
            </span>
            <span>
              <h8 style={{ fontSize: "2rem", fontWeight: "bold" }}>ROUND</h8>
              <p>
                Be ready for a quiz to test your entrepreneurship knowledge and
                decision-making skills.
              </p>
            </span>
          </span>
          <span className="round2">
            <span
              style={{ fontSize: "2rem", fontWeight: "bold", color: "grey" }}
            >
              02
            </span>
            <span>
              <h8 style={{ fontSize: "2rem", fontWeight: "bold" }}>ROUND</h8>
              <p>Participants would be given a specific board member</p>
            </span>
          </span>
        </div>
      </div>
      <div className="skills">
        <span>SKILL ACQUIRED:</span>
        <span>Decision-Making, Creative Thinking, Improvise</span>
      </div>
      <hr />

      <div className="guidlines">
        <h1>GUIDELINES</h1>
        <span>
          1.The competitions will be held only on weekends. The exact date and
          time will be conveyed well in advance.
        </span>
        <span>
          2.Theparticipants need to buy Passes to take part in the competitions
        </span>
        <span>
          3.In the case of team competitions, only the team leader needs to buy
          Pass and not all team members.
        </span>
        <span>
          4.The participants can access all the competitions using a single Pass
          The participants can access all the competitions using a single Pass
        </span>
      </div>
      <div className="perks">
        <h1>Perks of Participating</h1>
        <div className="perksContainer">
        <div className="prizes">
          <div></div>
          <div>
            <span>Prizes</span>
            <span> Worth Rs. 5k/</span>
          </div>
        </div>
        <div className="prizes">
          <div></div>
          <div>
            <span>Certificates</span>
            <span> For winner and participants.
</span>
          </div>
        </div>
        <div className="prizes">
          <div></div>
          <div>
            <span>Funding Oppurtunities</span>
            <span>From Top Investors and Incubator </span>
          </div>
        </div>
        <div className="prizes">
          <div>
            <DiApple/>
          </div>
          <div>
            <span>Exciting Goodie</span>
            <span> For winners and participant- </span>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
