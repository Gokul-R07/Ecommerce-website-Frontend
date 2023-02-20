import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PaySuccess from "./components/PaySuccess/PaySuccess";
import PayFailure from "./components/PayFailure/PayFailure";
import AddProduct from "./components/AddProduct/AddProduct";

let storageCart = JSON.parse(localStorage.getItem("cart")) || [];
function App() {
  const [cartItem, setCartItem] = useState(storageCart);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item._id === product._id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item._id === product._id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item._id === product._id);
    if (productExit.qty !== 1) {
      setCartItem(
        cartItem.map((item) =>
          item._id === product._id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  function removeItem(cartItem, product) {
    return cartItem.filter(function (item) {
      return item._id !== product._id;
    });
  }

  const deleteItem = (product) => {
    setCartItem(removeItem(cartItem, product));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
                deleteItem={deleteItem}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/success=true"
            element={
              <PaySuccess setCartItem={setCartItem} cartItem={cartItem} />
            }
          />
          <Route path="/cancel" element={<PayFailure />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
