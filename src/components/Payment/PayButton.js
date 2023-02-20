import React from "react";
import axios from "axios";

const PayButton = ({ cartItem }) => {
  const handlePay = async (e) => {
    try {
      const url =
        "https://ecommerce-website-backend-one.vercel.app/checkout/stripe-payment";
      const { data } = await axios.post(url, { cartItem });
      window.location.assign(data.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={handlePay}>Proceed to Pay</button>
    </>
  );
};

export default PayButton;
