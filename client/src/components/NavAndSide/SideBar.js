import React from "react";
import "./side.css";
import { useHistory , useLocation } from "react-router-dom";

function SideBar() {
  //fake data
<<<<<<< HEAD
  const role = "admin";
=======
  const role='admin'
  //getting location
  let location=useLocation()
  console.log(location)
>>>>>>> 180d0c028ae41e2ac78281832e30b9e059ba2072

  //Using routing to link logout button and apply leave button
  const history = useHistory();
  

  const loadAnotherPage = page => {
    switch (page) {
      case "dashboard":
        history.push("/");
        break;
      case "applyLeave":
        history.push("/addLeave");
        break;
      default:
        history.push("/");
        break;
    }
  };

  return (
<<<<<<< HEAD
    <div id="sidebar">
      <button
        type="button"
        onClick={() => {
          loadAnotherPage("dashboard");
        }}
        id="dashb"
        key="2"
      >
        Dashboard
      </button>

      <button
        type="button"
        onClick={() => {
          loadAnotherPage("applyLeave");
        }}
        key="3"
        id="apply"
      >
=======
    <div id="sidebar" >

      <button type="button" onClick={()=>{loadAnotherPage('dashboard')}} className={location.pathname==='/'?'selected':''} key="2">
        Dashboard{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>

      <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="3"  className={location.pathname==='/addLeave'?'selected':''}>
>>>>>>> 180d0c028ae41e2ac78281832e30b9e059ba2072
        Apply For Leave{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>

<<<<<<< HEAD
      <button
        type="button"
        onClick={() => {
          loadAnotherPage("applyLeave");
        }}
        key="4"
        id="approval"
      >
=======
      <button type="button"  onClick={()=>{loadAnotherPage('applyLeave')}} key="4" id="approval">
>>>>>>> 180d0c028ae41e2ac78281832e30b9e059ba2072
        Leave Approval{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>

<<<<<<< HEAD
      {role === "admin" ? (
        <button
          type="button"
          onClick={() => {
            loadAnotherPage("applyLeave");
          }}
          key="5"
        >
          Add Employee{" "}
          <img
            src={require("../../icons/arrowb.png")}
            id="user_img"
            alt="User"
          ></img>
        </button>
      ) : (
        ""
      )}
=======
      {
        role==='admin'?
        <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="5" >
        Leave management{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
        </button>
        :''

      }

      {
        role==='admin'?
        <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="5" >
        Employee{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
        </button>
        :''

      }

>>>>>>> 180d0c028ae41e2ac78281832e30b9e059ba2072
    </div>
  );
}

export default SideBar;
