import axios from "axios";
import React, { useEffect, useState } from "react";

export const BigDiscount = ({ addToCart }) => {
  const [bdItems, setBdItems] = useState([]);
  const [msg,setMsg]=useState("Products Fetching...")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://ecommerce-website-backend-one.vercel.app/product/get";
        const { data } = await axios.get(url);
        setBdItems(data.filter((item) => item.offerName === "bigDiscount"));
        setMsg("")
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {msg && <p>{msg}</p>}
      {bdItems.map((item) => (
        <div className="fdCard" key={item._id}>
          <img src={item.productImage} alt="" className="fdImages" />
          <h5>{item.productName}</h5>
          <h6>Brand:{item.brandName}</h6>
          <p>Price Rs:{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
};
