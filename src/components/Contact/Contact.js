import React from "react";
import "./Contact.css";
import playStore from "../../images/contact/play.png";
import appleStore from "../../images/contact/apple-icon.png";

const Contact = () => {
  return (
    <div className="contactSection">
      <div className="companyDetails">
        <h1>Shopify</h1>
        <p>Most preferred Online Shopping Website</p>
        <button>
          <img src={playStore} alt="play-store-icon" /> Google Play
        </button>
        <button>
          <img src={appleStore} alt="apple-store-icon" />
          App Store
        </button>
      </div>
      <div className="aboutUs">
        <h1>About Us</h1>
        <ul>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="customerCare">
        <h1>Customer Care</h1>
        <ul>
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div className="contactUs">
        <h1>Contact Us</h1>
        <ul>
          <li>70 Washington Square South, New York, NY 10012, United States</li>
          <li>Email: uilib.help@gmail.com</li>
          <li>Phone: +1 1123 456 780</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
