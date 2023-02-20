import React from "react";
import Carousel from "react-bootstrap/Carousel";
import b1 from "../../images/slideshow/b1.jpg";
import b2 from "../../images/slideshow/b2.jpg";
import b3 from "../../images/slideshow/b3.jpg";
import b4 from "../../images/slideshow/b4.jpg";
import "./Slideshow.css";
const Slideshow = () => {
  return (
    <div className="slideShow">
      <Carousel  fade variant="dark">
        <Carousel.Item className="slideShow1">
          <img className="d-block w-100 slideImg " src={b1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slideImg" src={b2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slideImg" src={b3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slideImg" src={b4} alt="Fourth slide" />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Slideshow;
