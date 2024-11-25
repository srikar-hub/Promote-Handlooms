import React from 'react'
import axios from 'axios'
import "../Css/Signup.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
export default function Signup() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });
   const navigate = useNavigate();
  



  const handleChange = (e) => {
    // const { name, value } = e.target; // Extract 'name' and 'value' from the input that triggered the event
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update the corresponding key in formData with the new value
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", formData);
      console.log(response.data);
      toast.success(response.data.success,{
        position:"top-right",
        style: { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" },
        autoClose:3000,
        onClose : ()=>navigate("/login"),
      });
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Error Failed to Login ",{
        style: { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" },
        position:"top-left",
        autoClose:3000,
      });
    }
  };


  return (
    
    <div>


        <form onSubmit={handleSubmit}>

            Name:<input type="text" name="name" placeholder='Your Name' value={formData.name}  onChange={handleChange}required/>
            Email:<input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleChange} required/>
            Password<input type="password" name="password" placeholder='Enter password' value={formData.password} onChange={handleChange} required />
            <button>Signup</button>
            <p>Already have an Account? <Link to="/login">Login</Link> </p> 
            <p><Link to="/send">Forgot Password?</Link></p>
            <ToastContainer/>
        </form>
    </div>

  
    
    
  );
}
  
    {/* <div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </div> */}