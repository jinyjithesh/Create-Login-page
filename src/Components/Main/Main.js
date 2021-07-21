// import React,{useState} from 'react';
// import './Main.css';
// import axios from "axios";
// const Main=()=>{
   
//     const[userdata,setUserData]=useState({name:"",address:"",city :"",phone:"",timeZone:"",accessCode:""});
//     const submitHandler=e=>{
//         e.preventDefault();
//       console.log(userdata);
    
   

//         axios.post("https://staging.bfitds.com/api/Branch",{
//             address:userdata.emailAddress,
//             name:userdata.password,
         
//         })
//         .then((res)=>{
            
//                 if( res.status === 200 &&  res.userdata.success === true){
//                    setUserData(res.data.userdata.name);
//                 console.log(res.userdata)
               
//             }
//            else{
//                console.log(res.userdata)
//            }

//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
    
      
  
     
//    }
//     return(
//         <div className="form">
//            <form onSubmit={submitHandler} >
//            <label>name</label>
//                <input    type="name"
//                  onChange={(e)=>setUserData({...userdata,name:e.target.value})}/>
//                <label>address</label>
//                <input type="address"
//                  onChange={(e)=>setUserData({...userdata,address:e.target.value})}t/> 
//                <label>city</label>
//                <input   type="text"
//                  onChange={(e)=>setUserData({...userdata,city:e.target.value})}/>
//                <label>phone</label>
//                <input    type="text"
//                  onChange={(e)=>setUserData({...userdata,phone:e.target.value})}/>
//                <label>timeZone</label>
//                <input    type="text"
//                  onChange={(e)=>setUserData({...userdata,timeZone:e.target.value})}/>
//                <label>accessCode</label>
               
//                <input    type="text"
//                  onChange={(e)=>setUserData({...userdata,accessCode:e.target.value})}/>
//         </form>
          
//         </div>
//     )
// }
// export default Main()