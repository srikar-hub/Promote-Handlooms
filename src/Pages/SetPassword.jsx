import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function SetPassword() {
  
   
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
          const response = await axios.put("http://localhost:8080/api/users/setPassword", formData);
          console.log(response.data);
          if(response.data.success){
          toast.success(response.data.message,{
            position:"top-right",
            style: { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" },
            autoClose:3000,
            onClose : ()=>navigate("/login"),
          });
          }else{
            toast.success(response.data.message,{
                position:"top-right",
                style: { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" },
                autoClose:3000,        
              });
          }
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
           Email:<input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleChange} required/>
                Password<input type="password" name="password" placeholder='Enter password' value={formData.password} onChange={handleChange} required />
                <button type='submit'>Signup</button>          
                <ToastContainer/>
            </form>
            
        </div>
    
      
        
        
      );
  
}
