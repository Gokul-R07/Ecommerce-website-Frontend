import React from "react";
import "./Navbar.css";
import lens from "../../images/icons/find.png";
import { Link } from "react-router-dom";
import logo from "../../images/common/logo.png"

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location = "/";
    console.log("Logout successfully");
  };
  return (
    <div>
      <nav className="navBar">
        <div className="titleBox">
          <Link to="/" className="brandName">
            <img src={logo} alt=""  className="logo"/> 
            <h3>ShopQuick</h3> 
          </Link>
          <div className="searchBar">
            <input type="text" placeholder="Search product name" />
            <img className="searchLens" src={lens} alt="" />
          </div>
        </div>
        <ul className="navLinks">
          <Link to="/" className="linkStyle">
            <li>Home</li>
          </Link>
          {!user && (
            <Link to="/login" className="linkStyle">
              <li>Login</li>
            </Link>
          )}
          {!user && (
            <Link to="/register" className="linkStyle">
              <li>Register</li>
            </Link>
          )}
          <Link to="/cart" className="linkStyle">
            <li>Cart</li>
          </Link>
          {user && user.isAdmin && (
            <Link to="/add-product" className="linkStyle">
              <li>Add Product</li>
            </Link>
          )}
          {user && <li onClick={handleLogOut}>Log out</li>}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
