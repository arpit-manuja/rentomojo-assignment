import React from "react";
import { useEffect , useState  } from "react";
import {useNavigate } from 'react-router-dom'
const About = () => {

  const [userData , setUserData] = useState({});

  const history =useNavigate();
  const callAboutPage = async ()=>{
    try{
      const res = await fetch('/about', {
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
      history('/login'); 
    }
  }

  useEffect(() => {
    callAboutPage();
  } , [])

  return (
    <>
      <div>
        <form method="GET">
          <div>
            <div>
              <img src="" alt="" />
            </div>

                <div>
              <div>
                <h5>Arpit manuja</h5>
                <h6>web developer</h6>
                <p>Ranking <span> 1/10</span> </p>
              </div>
               </div>


               <label>Name</label>
               <p>{userData.name}</p>
              

          </div>
        </form>
      </div>
    </>
  );
};

export default About;
