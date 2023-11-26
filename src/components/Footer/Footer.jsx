import React from "react";
import Fimg from "../../assets/img/college_logo.png";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {BsInstagram, BsYoutube} from "react-icons/bs"

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>REACH OUT TO US</h1>
      <div className="row">
        <div className="col-6 fLeft">
          <img src={Fimg} alt="" style={{ width: "60%" }} />
        </div>
        <div className="col-6 fRight">
          <div>
            <span>
              <FiMail style={{ width: "2.5rem", height: "2.5rem" }} />
            </span>
            <span><h5>QUERIES</h5></span>
            <span>xyz@gmail.com</span>
            <span>9834739201</span>
          </div>
          <div>
            <span>
              <FiMail style={{ width: "2.5rem", height: "2.5rem" }} />
            </span>
            <span><h5>SPONSORSHIP</h5></span>
            <span>xyz@gmail.com</span>
            <span>9834739201</span>
          </div>
        </div>
      </div>
      <div className="fEnd">
        <span><h5>Technex | SVPCET NAGPUR</h5></span>
        <span>
            <a href="https://www.linkedin.com/in/bhavesh-mahajan-b4255922b/" ><AiFillLinkedin style={{width: "2.3rem",height: "2.3rem",color: "white"}}/> </a>
            <a href="/"><AiFillFacebook style={{width: "2.3rem",height: "2.3rem",color: "white"}}/></a>
            <a href="/"><AiOutlineTwitter style={{width: "2.3rem",height: "2.3rem",color: "white"}}/></a>
            <a href="/"><BsYoutube style={{width: "2.3rem",height: "2.3rem",color: "white"}}/></a>
            <a href="https://www.instagram.com/_bhavesh_675/"><BsInstagram style={{width: "2.3rem",height: "2.3rem",color: "white"}}/></a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
