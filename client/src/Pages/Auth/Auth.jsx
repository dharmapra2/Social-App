import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="Logo" />
        <div className="webName">
          <h1>MK Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <Login />
    </div>
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoFrom authForm">
        <h3>Sign up</h3>
        <div className="">
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div className="">
          <span className="text-[12px]">Already have an account. Login!</span>
        </div>
        <button className="button infoBtn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="a-right">
      <form className="infoFrom authForm">
        <h3>Log In</h3>
        <div className="">
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div className="">
          <span className="text-[12px]">Don't have an account. SignUp!</span>
          <button className="button infoBtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
