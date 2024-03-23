import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
// import UpdateEmployeedesign from './UpdateEmployee.module.css'
// import AddEmployee from '../AddEmployee/AddEmployee'
import UpdateEmployeestyle from './UpdateEmployee.module.css'



function UpdateEmployee() {
  let [empData,setEmpData]=useState({fn:'',ln:'',mob:'',email:'',password:'',address:''})

  // updateempdata function 
  let UpdateEmpData = ({target:{name,value}})=>{
    setEmpData({...empData,[name]:value})
  }


  let GetEmpdata = async()=>
  {
    let {data} = await axios.get(`http://localhost:3000/employees/${localStorage.getItem('eid')}`);
    setEmpData(data)
    console.log(data )
  }

  useEffect(()=>
  {
    GetEmpdata()

  },[])


   let updateEmployeeData = async(e)=>
   {
    e.preventDefault()
    let sendData = await axios.put(`http://localhost:3000/employees/${localStorage.getItem('eid')}`,empData)
    console.log(sendData)
   }

   let {fn,ln,mob,email,password,address} = empData


  return (
    <div>
      <form onSubmit={updateEmployeeData}>
        <div className={UpdateEmployeestyle.container}>
        <div>
          <h3>signup</h3>
        </div>

        <div>
        <div>
          <input className={UpdateEmployeestyle.searcharea} type="text" placeholder='first name' name="fn" value={fn} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={UpdateEmployeestyle.searcharea} type="text" placeholder='last name' name="ln" value={ln} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={UpdateEmployeestyle.searcharea} type="number" placeholder='mob' name="mob" value={mob} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={UpdateEmployeestyle.searcharea} type="email" placeholder='email' name="email" value={email} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={UpdateEmployeestyle.searcharea} type="password" placeholder='password' name="password" value={password} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={UpdateEmployeestyle.searcharea} type="text" placeholder='address' name="address" value={address} onChange={UpdateEmpData}  />
        </div>

        <button className={UpdateEmployeestyle.clickhere} type='submit'> submit</button>
        </div>
        </div>

      </form>
      
    </div>
  )
}

export default UpdateEmployee
