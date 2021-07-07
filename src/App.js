import React, { useState } from 'react'
import './App.css';
import Login from './Components/Login/Login';



function App() {
  const adminUser={
    emailAddress:"admin@test.com",
    password:"12345"
}
const[user,setUser]=useState({emailAddress:"",password:""});
const[error,setError]=useState("");
const login = details =>{
  console.log(details);

  if (details.emailAddress == adminUser.emailAddress && details.password == adminUser.password){
    console.log("Logged in");
    setUser ({
      emailAddress:details.emailAddress,
      password:details.password
    });
  }else{
    console.log("email do not match")
  
    setError("email do not match")
  }
}
const Logout =()=>{
  console.log("Logout");
  setUser({emailAddress:"",password:""});
}
  return (
    

<div className="App">
 
{(user.emailAddress !="")?(
<div>
<h2>welcome</h2>
<button onClick={Logout}>Logout</button>
</div>
):( <Login login={login} error={error}/>)}

    </div>
  );
}

export default App;
