import React, { useEffect, useState } from 'react'
import axios from "axios";





const Home =()=> {
    
    const[branchdata,setBranchData]=useState([]);
    const [loading, setLoading] = useState(false);
   
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
    // const getBranchData =async() =>{
    //     try{
    //         const data= await axios.get("http://54.253.29.55/api/stores" );
         
    //             console.log(data.data);
    //             setBranchData(data.data);
                
    //         }catch(err){
    //             console.log(err);
    //           };
    //     };
  

    // useEffect(() => {
    //     getBranchData();
    // }, []);
  return (
    

<div >
  
 
    
<table>
    {branchdata.map((p,idx) =>(
    <tbody>
    <tr>
    <td>

       <h4>{p.branchId}.{p.name}</h4>
       <h5> {p.address}</h5>
       <h6> {p.city}</h6>
       <h6> {p.phone}</h6>
       <h6>{p.province}</h6>
      
        {p.timeZone}
        {p.accessCode}
        {p.deviceCount}

    </td>
    </tr>
    </tbody>
 ))}
</table>

</div>
  );
}

export default Home;