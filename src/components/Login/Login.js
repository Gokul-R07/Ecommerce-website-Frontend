import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://ecommerce-website-backend-one.vercel.app/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res));
      window.location = "/cart";
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={data.email}
          />{" "}
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={data.password}
          />{" "}
          {error && <div className="error-message">{error}</div>}
          <br />
          <br />
          <button type="submit" id="login-btn" className="Btn">
            <b>LOGIN</b>
          </button>
          <hr />
          <h6>Looks like you're new? </h6>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
