import React, { useEffect, useState } from "react";
import axios from "axios";

export const Flashdeals = ({ addToCart }) => {
  const [fdItems, setFdItems] = useState([]);
  const [msg,setMsg]=useState("Products Fetching...")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://ecommerce-website-backend-one.vercel.app/product/get";
        const { data } = await axios.get(url);
        setFdItems(data.filter((item) => item.offerName === "flashDeals"));
        setMsg("")
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {msg && <p>{msg}</p> }
      {fdItems.map((item) => (
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
