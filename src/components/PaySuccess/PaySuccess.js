import React, { useEffect } from "react";
import "./PaySuccess.css";
import axios from "axios";

const PaySuccess = ({ setCartItem, cartItem }) => {
  const total = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const { name, phone, email } = JSON.parse(localStorage.getItem("user"));
  const data = {
    name: name,
    email: email,
    phone: phone,
    products: cartItem,
    totalPrice: total,
    status: "Success",
  };
  const storeOrder = async () => {
    try {
      const url = "https://ecommerce-website-backend-one.vercel.app/order";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };
  if (cartItem.length !== 0) {
    storeOrder();
  }

  useEffect(() => {
    localStorage.removeItem("cart");
    setCartItem([]);
  }, []);
  return (
    <div className="payInfo">
      <h6>Payment Success</h6>
      <p>Continue Shopping!!!</p>
    </div>
  );
};

export default PaySuccess;
