const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')
require('../db/conn');
const User = require('../model/userSchema');

router.get('/' , (req , res)=>{
    res.send("Hello from router home page")
})
router.post('/register' , (req , res)=>{

    
   
    const {name , email , phone , work , password , cpassword} = req.body;

    if(!name || !email || !phone || !work || !cpassword || !password)
    return res.status(422).json({message:"please fill the field properly"})

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist)
        {
        return res.status(422).json({message:"User already exists"})
        }
        else if(password != cpassword)
        {
            return res.status(422).json({message:"Password doesnot match"})
        }

        
        const user1 = new User({name , email , phone  , work , password , cpassword});

        user1.save().then(()=>{
            return res.status(201).json({message:"User successfully created"})
        })
        .catch((err)=>{
            res.status(500).json({message:"Failed to register" , err});
        })

    })
    .catch((err)=>{
        console.log("Error is occurred " , err);
    })
})
var i=0;

console.log("outside login");

router.post('/login' , (req , res)=>{
    const {email , password} = req.body;


    console.log("Email is " , email ,"password is " , password , "i is ",i);
    i++;

    if(!email || !password)
    {
        console.log("hello1")
        return res.status(422).json({message:"Please fill the field properly..."});
    }




    User.findOne({email: email})
    .then((exist)=>{
        if(!exist)
        {
            console.log("hello2")
            return res.status(422).json({message:"Email does not exist"});
        }


        exist.generateAuthToken()
        .then((token)=>{
            console.log(token);

            res.cookie("jwtoken" , token , {
                expires: new Date(Date.now() +25892000000),
                httpOnly: true
            });

            res.cookie("raman" , "deep");

        })
        .catch((error)=>{
            console.log(error);
        })


        bcrypt.compare(password , exist.password)
      .then((present)=>{
        if(!present)
        {
            console.log("hello3");
            return res.status(422).json({message:"Password is wrong"});
        }
            console.log("hello4");
            return  res.status(200).json({message:"User Login Success"});
        
      })
      .catch((err)=>{
        console.log("Error: " + err)
      })

      
      

    })
    .catch((err)=>{
        console.error("Error in login  " + err.message)
    })
})

router.get('/about',authenticate , (req, res) => {
    // res.send("Hello, world! from about");
    res.send(req.rootUser);
})

router.get('/getdata',authenticate , (req, res) => {
    res.send(req.rootUser);
})

router.get('/logout',(req, res) => {

    console.log("dhdsfdsfdshfgdhfdgfhdfd");
    // res.send("Hello, world! from about");
    console.log("hello from backend logout")
    res.clearCookie('jwtoken' , {path: '/'})
    res.status(200).send('User logged out');
})


module.exports = router;