import { React } from "react";
import "./Section1.css";
import fashion from "../../images/icons/fashion.png";
import mobile from "../../images/icons/smartphone.png";
import electronic from "../../images/icons/electronics.png";
import shoe from "../../images/icons/running-shoe.png";
import watch from "../../images/icons/watch.png";
import furniture from "../../images/icons/furniture.png";
import grocery from "../../images/icons/shopping-bag.png";
import toy from "../../images/icons/toys.png";
import beauty from "../../images/icons/makeover.png";
import book from "../../images/icons/book-stack.png";
import Slideshow from "./Slideshow.js";

export const Section1 = () => {
  return (
    <div className="sectionOne">
      <div className="oneLeft">
        <ul className="category">
          <li>
            {" "}
            <img src={fashion} alt="" /> Fashion
          </li>
          <li>
            <img src={mobile} alt="" />
            Mobiles
          </li>
          <li>
            <img src={electronic} alt="" />
            Electronics
          </li>
          <li>
            <img src={grocery} alt="" />
            Grocery
          </li>
          <li>
            <img src={toy} alt="" />
            Toys
          </li>
          <li>
            <img src={furniture} alt="" />
            Home
          </li>
          <li>
            <img src={beauty} alt="" />
            Beauty
          </li>
          <li>
            <img src={book} alt="" />
            Books
          </li>
          <li>
            {" "}
            <img src={watch} alt="" />
            Watches
          </li>
          <li>
            <img src={shoe} alt="" />
            Shoes
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <Slideshow />
      </div>
    </div>
  );
};
