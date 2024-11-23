import React, { useState } from "react";
import axiosInstance from "./axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function LoginSecutiy() {
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
      const response = await axiosInstance.post("/users/loginSecurity", formData);

      if (response.data !== "fail") {
        localStorage.setItem("token", response.data); // Save JWT token to localStorage
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
        <label>
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
        </label>
        <label>
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
        </label>
        <button type="submit">Login</button>
        <ToastContainer />
      </form>
    </div>
  );
}
