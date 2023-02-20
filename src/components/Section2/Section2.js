import React from "react";
import { Flashdeals } from "./Flashdeals";
import { BigDiscount } from "./BigDiscount";
import "./Section2.css";

export const Section2 = ({ addToCart }) => {
  return (
    <div className="flashDeals">
      <div className="dealOne">
        <h3>
          <i className="fa fa-bolt" id="flashIcon"></i>
          Flash Deals
        </h3>
        <div className="fdContainer">
          <Flashdeals addToCart={addToCart} />
        </div>
      </div>
      <div className="dealTwo">
        <h3>
          <i className="fa fa-percent" id="flashIcon"></i>
          Big Discounts
        </h3>
        <div className="fdContainer">
          <BigDiscount addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};
