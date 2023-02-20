import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://ecommerce-website-backend-one.vercel.app/register";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="register">
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            required
            name="name"
            onChange={handleChange}
            value={data.name}
          />{" "}
          <br />
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            minLength={10}
            required
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />{" "}
          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={data.email}
          />{" "}
          <br />
          {error && <div className="error-message">{error}</div>}
          <label htmlFor="">Password</label>
          <input
            type="password"
            // minLength={8}
            required
            name="password"
            onChange={handleChange}
            value={data.password}
          />{" "}
          <br />
          <br />
          <input type="submit" value="REGISTER" id="register-btn" />
        </form>
        <hr className="line" />
        <h6>Existing User? </h6>
        <Link to="/login">
          {" "}
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
