import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'

function App() {

  const history =useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //learn
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {name  , email, phone , work , password , cpassword} = formData;

    const configuration = {
      method : 'POST',
      url:"http://localhost:5000/register",

      data :{
        name  , email, phone , work , password , cpassword
      },
    };

    axios(configuration)
    .then((result)=>{
        if(result.status === 422)
        {
        // console.log("heloooooooooooooooooo");
        window.alert("Invlid registration")
         }
         else
         {
          window.alert("USER registered succefully")
         }
        
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    })

   


  }

  
  return (
    <div className="app">
      <form className="signup-form" method="POST" >
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Mobile Number</label>
        <input type="number" name="phone" value={formData.mobile} onChange={handleChange} required />

        <label htmlFor="work">Profession</label>
        <input type="text" name="work" value={formData.work} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          value={formData.cPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
