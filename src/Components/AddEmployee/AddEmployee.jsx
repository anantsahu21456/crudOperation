import React,{useState} from 'react'
import axios from 'axios'
import AddEmployeestyle from './AddEmployee.module.css'

function AddEmployee() {

  let [empData,setEmpData]=useState({fn:'',ln:'',mob:'',email:'',password:'',address:''})

  let UpdateEmpData = ({target:{name,value}})=>{
    setEmpData({...empData,[name]:value})
  }

  let AddEmpdata = async()=>
  {
    let sendData = await axios.post("http://localhost:3000/employees",empData)
    console.log(sendData)
  }
  let {fn,ln,mob,email,password,address} = empData

  return (
    <div>
      <form onSubmit={AddEmpdata}>
        <div>
          <h3 className={AddEmployeestyle.heading}>signup</h3>
        </div>
        
        <div className={AddEmployeestyle.container}>
        <div>
          <input className={AddEmployeestyle.searcharea} type="text" placeholder='first name' name="fn" value={fn} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={AddEmployeestyle.searcharea} type="text" placeholder='last name' name="ln" value={ln} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={AddEmployeestyle.searcharea} type="number" placeholder='mob' name="mob" value={mob} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={AddEmployeestyle.searcharea} type="email" placeholder='email' name="email" value={email} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={AddEmployeestyle.searcharea} type="password" placeholder='password' name="password" value={password} onChange={UpdateEmpData}  />
        </div>

        <div>
          <input className={AddEmployeestyle.searcharea} type="text" placeholder='address'  name="address" value={address} onChange={UpdateEmpData}  />
        </div>



        <button className={AddEmployeestyle.clickhere} type='submit'> submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddEmployee
