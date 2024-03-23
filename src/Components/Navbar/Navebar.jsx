import React from 'react'
import {Link} from 'react-router-dom'
import Navebarmodule from './Navebar.module.css'

function Navebar() {
  return (
   <nav className={Navebarmodule.navebardesign}>
    <div className={Navebarmodule.navecontainer}>
        <ul className={Navebarmodule.ullist} >
            <li  >
                <Link className={Navebarmodule.lilist} to="/add" >AddEmployee</Link>
            </li>
            <li>
                <Link className={Navebarmodule.lilist} to="/emplist" >EmployeeList</Link>
            </li>
        </ul>
    </div>
   </nav>
  )
}

export default Navebar
