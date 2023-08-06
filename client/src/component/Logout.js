import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('/logout' , {
            method: 'GET',
            headers:{
                // Accept : 'application/json',
                "content-Type": "application/json"
            },
            // credentials: "include"
        })
        .then((res)=>{
                navigate('/login' , {replace: true})
                if(res.status!=200)
                {
                    const error = new Error(res.error);
                    throw error;
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div>
      
      <h1>
        logout page\
      </h1>
    </div>
  );
}

export default Logout;
