import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", formData);

      if (response.data.success) {
        toast.success("Login Successful! Redirecting to Home...", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => navigate("/"),
        });
      } else {
        toast.error("Invalid email or password.", { position: "top-left", autoClose: 3000 });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again later.", { position: "top-left", autoClose: 3000 });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <ToastContainer />
      </form>
    </div>
  );
}

