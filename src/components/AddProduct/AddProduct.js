import axios from "axios";
import React, { useState } from "react";
import "./AddProduct.css";
import { UilTimes } from "@iconscout/react-unicons";

const AddProduct = () => {
  const initialState = {
    productName: "",
    brandName: "",
    price: "",
    offerName: "",
    productImage: "",
    stripeId: "",
  };
  const [productData, setProductData] = useState(initialState);
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = ({ currentTarget: input }) => {
    setProductData({ ...productData, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url1 =
        "https://ecommerce-website-backend-one.vercel.app/checkout/add";
      const { data } = await axios.post(url1, productData);
      const url =
        "https://ecommerce-website-backend-one.vercel.app/product/add";
      await axios.post(url, {
        ...productData,
        stripeId: data,
      });
      setProductData(initialState);
      setMsg("Product added...");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setImage(null);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const base64 = await convertToBase64(file);
    e.target.value = "";
    setProductData({ ...productData, productImage: base64 });
  };
  return (
    <div className="AddProduct">
      <div className="addItem">
        <div className="addItemBox">
          <h4 className="addTitle">Add Product</h4>
          <br />
          <form action="" className="productForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                required
                name="productName"
                onChange={handleChange}
                value={productData.productName}
              />
            </div>
            <div>
              <label htmlFor="">Brand Name</label>
              <input
                type="text"
                onChange={handleChange}
                name="brandName"
                value={productData.brandName}
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                type="text"
                onChange={handleChange}
                name="price"
                value={productData.price}
              />
            </div>

            <div>
              <label htmlFor="">Offer Name</label>
              <select
                name="offerName"
                className="offerSelect"
                onChange={handleChange}
                value={productData.offerName}
              >
                <option value="" disabled hidden>
                  Select one Offer Name
                </option>
                <option value="flashDeals">Flash Deals</option>
                <option value="bigDiscount">Big Dicount</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Image</label>
              <input
                className="fileInput"
                type="file"
                onChange={(e) => handleFileUpload(e)}
                name="productImage"
                accept=".jpeg,.png,.jpg"
              />
            </div>
            {image && (
              <div className="previewImage">
                <UilTimes onClick={() => setImage(null)} />
                <img src={URL.createObjectURL(image)} alt="" />
              </div>
            )}
            <div className="btnDiv">
              <br />
              {!msg && (
                <button className="Btn addBtn">
                  <b>ADD PRODUCT</b>
                </button>
              )}
              {msg && <h6>{msg}</h6>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
