import React, { useEffect, useState } from 'react'
import axios from "axios";
import Main from '../Components/Main/Main'
import './Home.css'


const Home =()=> {
    
    const[branchdata,setBranchData]=useState([]);
    const [loading, setLoading] = useState(false);
    const[userdata,setUserData]=useState({branchId:"",name:"",address:"",city :"",phone:"",timeZone:"",accessCode:""});
  
    useEffect(() => {
        axios.get('https://staging.bfitds.com/api/Branch').then((response) => {
            console.log(response.data)
            setBranchData(response.data)
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
          });
    }, []);
    const getBranchData =async() =>{
        try{
            const data= await axios.get("https://staging.bfitds.com/api/Branch" );
         
                console.log(data.data);
                setBranchData(data.data);
                
            }catch(err){
                console.log(err);
              };
        };
  

    useEffect(() => {
        getBranchData();
    }, []);

   const submitHandler2=e=>{
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
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsIlJvbGUiOiIwIiwibmJmIjoxNjI2MTQ1OTMzLCJleHAiOjE2MjYyMzIzMzMsImlhdCI6MTYyNjE0NTkzM30.v8_kJPCDGWXBYf3W7Rw1JU-MYzjnzLqPHnrpgSHEvMg",
            },
          }
         )
        
        .then((res)=>{
            
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
   const updateHandler=e=>{
    e.preventDefault();
  console.log(userdata);

axios.put("https://staging.bfitds.com/api/Branch/76",
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
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsIlJvbGUiOiIwIiwibmJmIjoxNjI2MTY1NDkxLCJleHAiOjE2MjYyNTE4OTEsImlhdCI6MTYyNjE2NTQ5MX0.BhQFlVEXCNMz0FrX-XAe8oNtYHiXdM2tnlvKv-3ZS_I",
        },
      }
     )
    
    .then((res)=>{
        
            if( res.status === 200 &&  res.deletdata.success === true){
                setUserData(res.data.userdata.branchId);
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
 useEffect(()=>{
      const removeHandler=e=>{
    e.preventDefault();
  console.log(userdata);

    const data = axios.delete("https://staging.bfitds.com/api/Branch/76",
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
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwiZW1haWwiOiJhZG1pbkB0ZXN0LmNvbSIsIlJvbGUiOiIwIiwibmJmIjoxNjI2MTY1NDkxLCJleHAiOjE2MjYyNTE4OTEsImlhdCI6MTYyNjE2NTQ5MX0.BhQFlVEXCNMz0FrX-XAe8oNtYHiXdM2tnlvKv-3ZS_I",
        },
      }
     )
    
    .then((res)=>{
        
            if( res.status === 200 &&  res.deletdata.success === true){
                setUserData(res.data.userdata.branchId);
               
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
 })
  
         
  return (
    

<div>
    <div className="form">
    <form onSubmit={submitHandler2} >
        <label>branchId</label>
        <input type="branchId" value={userdata.branchId} className="input"
        
         onChange={(e)=>setUserData({...userdata,branchId:e.target.value})}/><br/>
               <label>name</label>
               <input    type="name"
               value={userdata.name}
                 onChange={(e)=>setUserData({...userdata,name:e.target.value})}/><br/>
               <label>address</label>
               <input type="address" value={userdata.address}
                 onChange={(e)=>setUserData({...userdata,address:e.target.value})}t/> <br/>
               <label>city</label>
               <input   type="text" value={userdata.city}
                 onChange={(e)=>setUserData({...userdata,city:e.target.value})}/><br/>
               <label>phone</label>
               <input    type="text" value={userdata.phone}
                 onChange={(e)=>setUserData({...userdata,phone:e.target.value})}/><br/>
                <label>province</label>
               <input    type="province" value={userdata.province}
                 onChange={(e)=>setUserData({...userdata,province:e.target.value})}/><br/>
               
               <label>timeZone</label>
               <input    type="text" value={userdata.timeZone}
                 onChange={(e)=>setUserData({...userdata,timeZone:e.target.value})}/><br/>
        <button onClick={updateHandler}>update</button>
        <button>submit</button>
       
  
          
               
   </form>
    </div>
    <div className="table">
    <table  >
        <thead>
            <tr>
                <td>No</td>
                <td>Name</td>
                <td>Address</td>
                <td>City</td>
                <td>Phone</td>
                <td>TimeZone</td>
             
            </tr>
        </thead>
    {branchdata.map((p,idx) =>(
    <tbody>
    <tr>
    <td><h4>{p.branchId}</h4></td>
    <td><h4>{p.name}</h4></td>
    <td> <h4> {p.address}</h4></td>
    <td><h4> {p.city}</h4></td>
    <td>  <h4>{p.phone}</h4></td>
    <td><h4>{p.timeZone}</h4></td>
    <td><button onClick={updateHandler}>update</button></td>
    <td><button  onClick={removeHandler}>delete</button></td>

   
   
  
    </tr>
    </tbody>
 ))}
</table>
    </div>
  

</div>
  );
}

export default Home;