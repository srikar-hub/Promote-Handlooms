import React, { useState } from 'react'
import axios from 'axios';
export default function LoginSignup() {
  const [state,setState] = useState({
    name:'',
  });

  const handlechange = (e)=>{
     setState({
      ...state,
      [e.target.name]:e.target.value,
     })
     console.log(e)
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:4000/login',state);
      console.log(response.data);
    }
    catch(error){
      console.error("There was an error ",error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      Username:<input type="text" name="name" placeholder='Enter Your name' value={state.name} onChange={handlechange}/>
      <button type='submit'>Add name</button>
      </form>
    </div>
  )
}
