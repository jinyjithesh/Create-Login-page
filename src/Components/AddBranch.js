import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import { Button, ListGroup} from 'reactstrap'
export const AddBranch = () => {

  const[userdata,setUserData]=useState({branchId:"",name:"",address:"",city :"",phone:"",timeZone:"",accessCode:""});
  const token = localStorage.getItem("token");
  const submitHandler=e=>{
    e.preventDefault();
  console.log(userdata);

  axios.post("https://staging.bfitds.com/api/Branch",
    {
        branchId:userdata.branchId,
        name:userdata.name,
        address:userdata.address,
        city:userdata.city,
        phone:userdata.phone,
        timeZone:userdata.timeZone,
        accessCode:userdata.accessCode,

    },
    {
        headers:{
            Authorization:"Bearer" + token
              ,
          },
      }
     )
    
    .then((res)=>{
        localStorage.setItem("token");
            if( res.status === 200 &&  res.userdata.success === true){
               setUserData(res.data.userdata.name);
            console.log(res.userdata)
           
        }
       else{
           console.log(res.userdata)
       }

        })
        .catch((err)=>{
            console.log(err);
        })

  

 
}
  
    
    return (
        
            <form  onSubmit={submitHandler}  >
              <h5>Add User</h5>

<label>branchId</label><br/>
               <input type="branchId" value={userdata.branchId} onChange={(e)=>setUserData({...userdata,branchId:e.target.value})} /><br/>

               <label>name</label><br/>
               <input    type="name" value={userdata.name}
                 onChange={(e)=>setUserData({...userdata,name:e.target.value})}/><br/>

               <label>address</label><br/>
               <input type="address"  value={userdata.address}onChange={(e)=>setUserData({...userdata,address:e.target.value})}/> <br/>

               <label>city</label><br/>
               <input   type="text" value={userdata.city} onChange={(e)=>setUserData({...userdata,city:e.target.value})} /><br/>

               <label>phone</label><br/>
               <input    type="text" value={userdata.phone}
                 onChange={(e)=>setUserData({...userdata,phone:e.target.value})} /><br/>

                <label>province</label><br/>
               <input    type="province" value={userdata.province}
                 onChange={(e)=>setUserData({...userdata,province:e.target.value})}/><br/>
               
               <label>timeZone</label><br/>
               <input    type="text" value={userdata.timeZone}
                 onChange={(e)=>setUserData({...userdata,timeZone:e.target.value})}/><br/>
        <Button type="submit" onClick={submitHandler}>Add</Button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
       

               
 
   </form>

    )
}