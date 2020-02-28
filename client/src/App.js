import React, { useState, useContext } from "react";
//Fixed components
import Nav from "./components/NavAndSide/Nav";
import Sidebar from "./components/NavAndSide/SideBar";
//Pages
import EmpDashboard from "./pages/EmpDashboard/EmpDashboard";
import Login from "./pages/Login/Login";
import AddLeave from "./pages/AddLeave/AddLeave";
//css file import
import "./App.css";

//Reducer import
import { connect } from "react-redux";
//Router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing providers
import { EmpIdContext } from "./contexts/EmpId/EmpIdContext";
import AddEmployee from "./pages/EmployeeManager/AddEmployee/AddEmployee";
import EmployeeManager from "./pages/EmployeeManager/EmployeeManager";
import LeaveApproval from "./pages/LeaveApproval/LeaveApproval";

function App(props) {
  const [isAuthenticated, setAuthentication] = useState(false);

  let [empid, setEmpid] = useContext(EmpIdContext);

  return empid != null ? (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App" id="app">
        <div id="top">
          <Nav setAuthentication={setAuthentication}></Nav>
        </div>

        <div id="main">
          <Sidebar></Sidebar>

          <div>
            <Switch>
            <Route path="/addemp">
                <AddEmployee></AddEmployee>
              </Route>
              <Route path="/emp">
                <EmployeeManager></EmployeeManager>
              </Route>
              <Route path="/lapr">
                <LeaveApproval></LeaveApproval>
              </Route>
              <Route path="/addLeave">
                <AddLeave></AddLeave>
              </Route>
              <Route path="/">
                <EmpDashboard />
              </Route>
            </Switch>
          </div>

          <button onClick={props.addLeave}>Add Leave</button>
        </div>
      </div>
    </Router>
  ) : (
    <Login setAuthentication={setAuthentication} />
  );
}

//dispatcher code
const mapDispatchToProps = dispatch => {
  return {
    addLeave: () =>
      dispatch({
        type: "ADD_LEAVE_REQUEST",
        data: {
          id: 5,
          type: "Casual",
          date: "14 Feb 2020",
          days: 3,
          status: "pending"
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(App);
