import React, { useState } from 'react'
import './App.css';
import Login from './Components/Login/Login';
// import Home from './Page/Home';
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom'
import { AddBranch } from './Components/AddBranch';
import { EditBranch } from './Components/EditBranch';
import { Home } from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'reactstrap'

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
<h1>welcome</h1>
<div >

<Router>
      <Switch>
        <Route exact path='/' ><Home/></Route>
        <Route path='/add' ><AddBranch/></Route>
        <Route path='/edit/:id'><EditBranch/></Route>
      </Switch>
  </Router>
</div>

<Button onClick={Logout}>Logout</Button>

</div>
):( <Login login={login} error={error}/>)}
   

    </div>
  );
}

export default App;
