import React from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navebar from './Components/Navbar/Navebar'
import AddEmployee from './Components/AddEmployee/AddEmployee'
import Emplist from './Components/Emplist/Emplist'
import UpdateEmployee from './Components/UpdateEmployee/UpdateEmployee'
import SingleEmployee from './Components/SingleEmployee/SingleEmployee'

function Main() {
  return (
   <section>
    <article>
        <Router>
          <Navebar/> 
          <Routes>
            <Route path='/add' element={<AddEmployee/>}/>
            <Route path='/emplist' element={<Emplist/>}/>
            <Route path='/update' element={<UpdateEmployee/>}/>
            <Route path='/emp/:eid' element={<SingleEmployee/>}/>
            </Routes> 
        </Router>
    </article>
   </section>
  )
}

export default Main
