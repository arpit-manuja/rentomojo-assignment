import React from 'react';
import { useEffect , useState } from 'react';
import pic from "./rentomojo.png"
const Home = () => {

  const [userData , setUserData] = useState({

    name: '',
    email: '',
    phone: '',
    message: '',

  });


  const userHome = async ()=>{
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
    userHome();
  } , [])



  return (
    <div  style={{ marginLeft: '450px' }}>
     
     <img src={pic} alt="Logo"  />
     <br/>
     <input type="text" />
     <button  style={{ width:"130px"}}>POST</button>
     
    </div>
  );
}

export default Home;
