import React from "react";
import "./Cart.css";
import PayButton from "../Payment/PayButton";
import deleteIcon from "../../images/icons/deleteIcon.png";
import { Link } from "react-router-dom";

const Cart = ({ cartItem, addToCart, decreaseQty, deleteItem }) => {

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <div className="cartSection">
      <div className="cartListBox">
        <div className="cartList">
          {cartItem.length === 0 && <h1>No Items in Cart</h1>}
          {cartItem.length !== 0 && <h1>Cart</h1>}
          {cartItem.map((item) => {
            return (
              <div className="cartItem" key={item._id}>
                <div className="cartImg">
                  <img src={item.productImage} alt="" />
                </div>
                <div className="itemRight">
                  <h5>{item.productName}</h5>
                  <h6>Brand:{item.brandName}</h6>
                  <h6>Price Rs:{item.price}</h6>
                  <p>Quantity:{item.qty}</p>
                </div>
                <div className="cartItemFeature">
                  <img
                    className="deleteBin"
                    src={deleteIcon}
                    alt=""
                    onClick={() => deleteItem(item)}
                  />
                  <div>
                    <button className="plusBtn" onClick={() => addToCart(item)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button
                      className="minusBtn"
                      onClick={() => decreaseQty(item)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cartSummary">
        <div className="cartTotal">
          <h3>Cart Summary</h3>
          <p>Total Price Rs:{totalPrice}</p>
          {totalPrice !== 0 && !localStorage.getItem("user") && (
            <Link to="/login">
              <button>Please Login to Pay </button>
            </Link>
          )}
          {totalPrice !== 0 && localStorage.getItem("user") && (
            <PayButton cartItem={cartItem} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
