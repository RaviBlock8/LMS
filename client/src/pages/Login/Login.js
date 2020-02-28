import React, { useContext} from "react";
import {useFormState} from 'react-use-form-state'
import {EmpIdContext} from '../../contexts/EmpId/EmpIdContext'
import "./login.css";

function Login(props) {
<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const staticEmail = "1";
  const staticPassword = "1";
=======
  const staticEmail = "ravi@gmail.com";
  const staticPassword = "password1";
  
  //getting context
  let [empid,setEmpid]=useContext(EmpIdContext)
  
>>>>>>> 5b482931f7b52431ac55d1fc6b2746616a2edf1a

  //setting formState
  let [formState,{text,password,email}]=useFormState()

  const handleSubmit=(event)=>{
    event.preventDefault();
<<<<<<< HEAD
    if (password === staticPassword && email === staticEmail) {
      //this is where api will get hit
      props.setAuthentication(true);
    } else {
      console.log("not working");
      alert("enter correct details");
=======
    if (formState.values.passw === staticPassword &&formState.values.email === staticEmail) {
        //this is where api will get hit
        
        setEmpid('007')
      }else{
        alert("enter correct details");
>>>>>>> 5b482931f7b52431ac55d1fc6b2746616a2edf1a
    }
  }


  return (
    <div id="loginBoard">
      <div id="header">
        <img
          src={require("../../icons/block8.png")}
          id="logo_img"
          alt="User"
        ></img>
        <br />
        <h4>&nbsp;&nbsp;LMS | LOGIN</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="groupfield">
          <input placeholder="Email" {...email('email')} />
        </div>

        <div className="groupfield">
          <input {...password('passw')}/>
        </div>

        <div id="buttonA">
          <input id="check" type="checkbox" name="check1" />{" "}
          <span>Remember me</span> <br />
          <a href="/">Forgot Password</a>
          <br />
          <br />
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
