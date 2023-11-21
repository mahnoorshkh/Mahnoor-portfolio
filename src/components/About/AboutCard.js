import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello I Am <span className="purple"><strong>Mahnoor Khurram </strong></span>
            An Undergraduate Software Engineer <span className="purple"> From Karachi, Pakistan.</span>
            <br /> I am a Final Year student pursuing BS.
            In Software Engineering From <strong>FAST NUCES ,Karachi</strong>.
            <br />
            I am a highly Dedicated individual and a capable Web developer have made wonderful web apps.
            <br />
            I love learning new technology .
            <br />
            Currently learning Andoid App making and Power Platform. 
            <br />
           Some of my projects are<strong><a href="https://github.com/mahnoorshkh"> Here </a></strong>
            <br />
          
          Some of my projects are listed here:
          <br />
          <ul>
            <li className="about-projects">
              <ImPointRight /><strong><a href="https://github.com/mahnoorshkh/hospital_management">Hospital Management System Using PHP</a></strong> 
            </li>
            <li className="about-projects">
               <ImPointRight /><strong><a href="https://github.com/mahnoorshkh/HospitalManagement-Website-_Java">Hospital Management System Using java</a></strong> 
            </li>
            <li className="about-projects">
              <ImPointRight /> <ImPointRight /><strong><a href="https://github.com/mahnoorshkh/HospitalManagement-Website-_Java">Hospital Management System Using java</a></strong> 
            </li>
            <li className="about-projects">
              <ImPointRight /> <ImPointRight /><strong><a href="https://github.com/mahnoorshkh/FAST-Tourism-Website_Frontend_Html-css-js-bootstrap">Hospital Management System Using java</a></strong> 
            </li>
          </ul>

          Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Outing
            </li>
            <li className="about-activity">
              <ImPointRight /> Shopping
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
