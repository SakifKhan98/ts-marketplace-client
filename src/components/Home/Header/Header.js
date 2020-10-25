import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import sliderBG2 from "../../../images/backgrounds/sliderBG2.jpg";
import sliderBG3 from "../../../images/backgrounds/sliderBG3.jpg";
import sliderBG4 from "../../../images/backgrounds/sliderBG4.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slider">
          <img className="d-block w-100" src={sliderBG2} alt="First slide" />
          <Carousel.Caption>
            <h1>Get Your Assignments Done</h1>
            <p>
              Top Teacher from around the world are ready to do your assignments
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img className="d-block w-100" src={sliderBG3} alt="Third slide" />

          <Carousel.Caption>
            <h1>Help People to Learn Easier</h1>
            <p>Lot of Students are there in need of your help</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
          <img className="d-block w-100" src={sliderBG4} alt="Third slide" />

          <Carousel.Caption>
            <h1>Collaborate with Top Teachers</h1>
            <p>Get to know teachers from all around the world</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
