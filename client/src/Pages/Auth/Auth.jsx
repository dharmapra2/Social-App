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
      <SignUp />
    </div>
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoFrom">
        <h3>Sign up</h3>
        <div className="">
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
        </div>
      </form>
    </div>
  );
}

export default Auth;
