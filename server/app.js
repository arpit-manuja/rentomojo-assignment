const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());


app.use(express.json())
 
dotenv.config({path:'./config.env'});


app.use(require('./router/auth'))

const User = require('./model/userSchema')

require('./db/conn');



const PORT = process.env.PORT;



// app.get('/about', (req, res) => {
//     res.send("Hello, world! from about");
// })

app.get('/contact', (req, res) => {
    res.send("Hello, world! from contact");
})

app.get('/signin', (req, res) => {
    res.send("Hello, world! from signin");
}) 

app.get('/signup', (req, res) => {
    res.send("Hello, world! from signup");
})


app.listen(PORT , ()=>{
    
    console.log("Server is listening on 5000 port");
})