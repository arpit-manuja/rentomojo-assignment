import React, { useState , useEffect } from 'react';
// import './App.css';

function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Replace with your logic for handling form submission
  // };

  const [userData , setUserData] = useState({

    name: '',
    email: '',
    phone: '',
    message: '',

  });


  const userContact = async ()=>{
    try{
      const res = await fetch('/getdata', {
        method:'GET',
        headers :{

          Accept : 'application/json',
          "Content-Type": "application/json"


        },
        credentials : "include"
      });

      const data = await res.json();

      console.log(data.name);

      setUserData(data);

      if(!res.status === 200)
      {
        const error = new Error (res.error);
        throw error;

      }


    } catch(err){
      console.log(err)
      
    }
  }






  useEffect(() => {
    userContact();
  } , [])


  return (
    <div className="app">
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" value={userData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea name="message" value={userData.message} onChange={handleChange}  required />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
