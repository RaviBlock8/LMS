import React, { useContext } from "react";
//Fixed components
import Nav from "./components/NavAndSide/Nav";
import Sidebar from "./components/NavAndSide/SideBar";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
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

import LeaveApproval from "./pages/LeaveApproval/LeaveApproval"

import AddEmployee from "./pages/EmployeeManager/AddEmployee/AddEmployee"
function App(props) {
  let [empid, setEmpid] = useContext(EmpIdContext);
  console.log('context value:',empid)
  console.log('session value',sessionStorage.getItem('empid'))

  return empid != null? (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App" id="app">
        <div id="top">
          <Navbar/>
        </div>

        <div id="main">
          <Sidebar></Sidebar>

          <div>
            <Switch>
            <Route exact path="/">
                <EmpDashboard />
              </Route>
              <Route exact path="/addLeave">
                <AddLeave></AddLeave>
              </Route>
              <Route exact path="/leaveApproval">
                <LeaveApproval></LeaveApproval>
              </Route>
              <Route exact path="/addEmployee">
                <AddEmployee></AddEmployee>
              </Route>
            </Switch>
          </div>

         
        </div>
        <Footer/>
      </div>
    </Router>
  ) : (
    <Login />
  );
}

export default App;
