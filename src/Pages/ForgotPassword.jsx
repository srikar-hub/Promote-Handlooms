import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {
    const navigate = useNavigate();
const [formData,setFormData] = useState({
    email:"",
    password:"",
});
const handleChange = (e) =>{
     setFormData({
        ...formData,
        [e.target.name]:e.target.value,
     })
}

    const handleSubmit = async (e)=>{
        e.preventDefault();

       try{
        const res =  await axios.post("http://localhost:8080/api/users/login", formData);
        console.log(res);
        if(res.data.success){
            toast.success("Redirecting",{
                autoClose:3000,
                position:"top-right",
                onClose:()=>navigate("/setPassword"),
            });
            
        }
        else{
            toast.error("Error! Email or Password is incorrect",{
                autoClose:3000,
                position:"top-right",
            });
        }
       }
       catch(error){
        toast.error("Something Went Wrong please try again",{
            position:"top-right",
            autoClose:3000,
        })
       }
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            Email:<input type="email" name="email" id="email" placeholder='Enter email' value={formData.email} onChange={handleChange} required/>
            Password:<input type="password" name="password" id="password" placeholder='Enter Old Password' value={formData.password} onChange={handleChange} required/>
            <button type='submit'>Verify</button>
            <ToastContainer/>
        </form>
    </div>
  )
}
