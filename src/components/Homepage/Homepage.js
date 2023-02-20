import React from "react";
import { Section1 } from "../Section1/Section1";
import { Section2 } from "../Section2/Section2";

const Homepage = ({ addToCart }) => {
  return (
    <div>
      <Section1 />
      <Section2 addToCart={addToCart} />
    </div>
  );
};
export default Homepage;
