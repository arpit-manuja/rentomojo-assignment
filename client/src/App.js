import React from 'react';
import Navbar from './component/Navbar'
import Home from './component/Home';
import {Route, Routes} from 'react-router-dom'

import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import Logout from './component/Logout';


const App = () => {
  return (
    <>

    <Navbar/>
    

    <Routes>


    < Route index path="/"  element = {<Home/>} />
    < Route path="/about"  element = {<About/>} />
    < Route path="/contact"  element = {<Contact/>} />
    < Route path="/login"  element = {<Login/>} />
    < Route path="/signup"  element = {<Signup/>} />
    < Route path="/logout"  element = {<Logout/>} />

    < Route path="/*"  element = {<p>Error page</p>} />
   
    

    
    </Routes>

    

    
    </>
  );
}

export default App;
