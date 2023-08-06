import React, { useState } from 'react';
// import './Login.css'

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } =formData;
    console.log(email,password)
    const res = await fetch("/login" , {
      method:"POST",
      headers:{
           "content-Type" : "application/json",
      },
      body : JSON.stringify({
        email,password
      })
    });
    const data = await res.json();
    if(res.status === 422 || !data ) {
      console.log("Invalid Registration");
      alert("invalid")
    }
    else {
      
      console.log("sucess");
      alert("valid")
    }
  };

  return (
    <div className="app">
      <form className="login-form"   method="POST">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit"   onClick={handleSubmit} >Login</button>
      </form>
    </div>
  );
}

export default App;