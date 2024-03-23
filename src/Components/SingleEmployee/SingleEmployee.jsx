import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleEmployeedesign from './SingleEmployee.module.css'


function SingleEmployee() {
  let [empData,setEmpData] = useState({});

  let {eid} = useParams();


   let getEmpData = async()=>
   {
    let {data} = await axios.get(`http://localhost:3000/employees/${eid}`);
    setEmpData(data)
    console.log(empData)
   }

   useEffect(()=>
   {
    getEmpData()
   },[])

  return (
    <div>
      <div className={SingleEmployeedesign.mainsection}>
     <div className={SingleEmployeedesign.headingname}>
     <h1>employee data</h1>
     </div>

     <div className={SingleEmployeedesign.singlecontainer}>
     <h2>User ID: {eid}</h2>
      <h3>{`first name: ${empData.fn}`}</h3>
      <h3>{`last name: ${empData.ln}`}</h3>
      <h3>{`mobile number: ${empData.mob}`}</h3>
      <h3>{`email: ${empData.email}`}</h3>
      <h3>{`address: ${empData.address}`}</h3>
      <h3>{`password: ${empData.password}`}</h3>
     </div>
     </div>
      
    </div>
  )
}

export default SingleEmployee
