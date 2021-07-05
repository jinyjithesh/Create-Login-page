import React, { useState } from 'react'
import './App.css';
import Login from './Components/Login/Login';






function App() {
  const adminUser={
    emailAddress:"admin@test.com",
    password:"1234",
}
const[user,setUser]=useState({email:"",password:""});
const[error,setError]=useState("");
const login= details =>{
  console.log(details);
  if (details.email ==adminUser.emailAddress && details.password==adminUser.password){
    console.log("Logged in");
    setUser ({
      emailAddress:details.emailAddress,
      password:details.password
    });
  }else{
    console.log("Details do not match");
    setError("email do not match")
  }
}
const Logout =()=>{
  console.log("Logout");
  setUser({emailAddress:"",password:""});
}
  return (
    <div className="App">

 {(user.email !="")?(
   <div>
     <h2>welcome,<span>{user.name}</span></h2>
     <button onClick={Logout}>Logout</button>
   </div>
 ) : ( <Login login={login} error={console.error()}/>)}
 
    </div>
  );
}

export default App;
