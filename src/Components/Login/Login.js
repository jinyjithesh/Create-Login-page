import './Login.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
function Login({login}){


    const[details,setDetails]=useState({emailAddress:"",password:"", remember:"",otpSendAs:""});
    const submitHandler=e=>{
        e.preventDefault();
      console.log(details);
      login(details)
   

        axios.post("https://staging.bfitds.com/api/auth",{
            emailAddress:details.emailAddress,
            password:details.password,
            // remember: details.remember,
            // otpSendAs: details.otpSendAs
        })
        .then((res)=>{
            
                if( res.status === 200 &&  res.details.success === true){
                setDetails(res.data.details.emailAddress);
                console.log(res.details)
               
            }
           else{
               console.log(res.details)
           }

            })
            .catch((err)=>{
                console.log(err);
            })
    
      
  
     
   }
        return(
            <div className="loginParentDiv">
            <h1>Login  </h1>
 
            <form onSubmit={submitHandler} >
                <label htmlFor="fname">Email</label>
                <br />
                <input
                 className="input"
                 type="email"
                 onChange={(e)=>setDetails({...details,emailAddress:e.target.value})}
                 value={details. emailAddress}
                 id="email"
                 name="email"
                 defaultValue="admin"
                />
                <br />
                <label htmlFor="lname">Password</label>
                <br />
              
                <input
                    className="input"
                    type="password"
                    onChange={(e)=>setDetails({...details,password:e.target.value})}
                    value={details.password}
                    id="password"
                    name="password"
                    defaultValue="1"
                />
                <br />
                <br />
                <button type="submit" value="LOGIN" Login={login}>Login</button>
            </form>

        </div>
        )
    };
export default Login;
