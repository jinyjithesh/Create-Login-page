import './Login.css';
import axios from "axios";
import React, { useState } from 'react';
function Login({login,error}){


    const[details,setDetails]=useState({emailAddres:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
       login(details);
    //    axios.post("https://staging.bfitds.com/api/Auth",{
    //     emailAddress:details.email,
    //     password:details.password
    // })
    // .then(res=>{
    //     console.log(res.details)
       
    // })
   
    }
   function savUser(){
      
      console.warn({details})
      let data={details}
       fetch("https://staging.bfitds.com/api/Auth",{
           method:'POST',
           headers:{
               'accept': 'application/json',
               'Content-Type':'application/json'
           },
           body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
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
      onChange={(e)=>setDetails({...details,emailAddres:e.target.value})}
      value={details. emailAddres}
                
      id="email"
                    name="email"
                    defaultValue="admin"
                />
                <br />
                <label htmlFor="lname">Password</label>
                <br />
                {(error !="")?(<div>{error}</div>):""}
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
                <button type="submit" onClick={savUser}>Login</button>
            </form>

        </div>
        )
    };
export default Login;
