import React,{useContext}from "react";
import {EmpIdContext} from '../../contexts/EmpId/EmpIdContext'
import "./nav.css";

function Nav(props) {
  let [empid,setEmpid]=useContext(EmpIdContext)
  return (
    <div id="nav">
      <div id="ham">
        <img
          src={require("../../icons/block8.png")}
          id="logo_img"
          alt="User"
        ></img>
      </div>

      <div id="notep">
        <span>LMS | ADMIN {empid}</span>
      </div>

<<<<<<< HEAD
      <div id="log" onClick={() => props.setAuthentication(false)}>
=======
      <div id="log">
>>>>>>> 5b482931f7b52431ac55d1fc6b2746616a2edf1a
        <img
          src={require("../../icons/userb.png")}
          id="user_img"
          alt="User"
        ></img>{" "+empid}
        
      </div>
    </div>
  );
}

export default Nav;
