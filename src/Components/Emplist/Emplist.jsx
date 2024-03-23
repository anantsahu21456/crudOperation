import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Emolistdesign from './Emolist.module.css'

function Emplist() {
  let [emplist, setemplist] = useState([]);
  let navigate = useNavigate();

  let getEmpData = async () => {
    let { data } = await axios.get("http://localhost:3000/employees");
    setemplist(data);
    // console.log(data)
  };

  useEffect(() => {
    getEmpData();
  }, []);

  let viewEmployee = (eid) => {
    navigate(`/emp/${eid}`);
  };

  let navigateToUpdateEmp = (eid) => {
    localStorage.setItem("eid", eid);
    navigate("/update");
  };

  let deleteEmp = async (eid) => {
    await axios.delete(`http://localhost:3000/employees/${eid}`);
    getEmpData();
  };

  return (
    <section>
      <div>
        <h3>employee listr</h3>
      </div>

      <div className={Emolistdesign.mainwala}>
        {emplist.map((m) => {
          return (
            <>
              <div className={Emolistdesign.mainsection}>
                <div className={Emolistdesign.contentsection}>
                  <h1>first name:- {m.fn}</h1>
                  <h1>last name:- {m.ln}</h1>
                  <h1>mobile number:- {m.mob}</h1>
                </div>
                <div className={Emolistdesign.buttonsection}>
                <button className={Emolistdesign.clickme} onClick={() => viewEmployee(m.id)}>view</button>
                <button className={Emolistdesign.clickme} onClick={() => navigateToUpdateEmp(m.id)}>update</button>
                <button className={Emolistdesign.clickme} onClick={() => deleteEmp(m.id)}>delete</button>
                </div>
                
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Emplist;
