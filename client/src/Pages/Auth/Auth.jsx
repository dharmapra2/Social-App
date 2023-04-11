import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
function Auth() {
  const initialData = {
    userName: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [formInput, setformInput] = useState(initialData);
  const handleInputChange = (event) => {
    setformInput({ ...formInput, [event.target.name]: event?.target?.value });
  };
  const handleSubmit = (event) => {
    event?.preventDefault();
    console.log(formInput);
  };
  return (
    <div className="Auth">
      {/* left part */}
      <div className="a-left">
        <img src={Logo} alt="Logo" />
        <div className="webName">
          <h1>MK Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* right part */}
      {isSignedUp ? (
        <div className="a-right">
          <form className="infoFrom authForm" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <div className="">
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                defaultValue={formInput?.first_name}
                name="first_name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                defaultValue={formInput?.last_name}
                name="last_name"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="User Name"
                className="infoInput"
                defaultValue={formInput?.userName}
                name="userName"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="infoInput"
                defaultValue={formInput?.email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                defaultValue={formInput?.password}
                name="password"
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                defaultValue={formInput?.confirmPassword}
                name="confirmPassword"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <span
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setIsSignedUp(!isSignedUp);
                  setformInput((prev) => initialData);
                }}
              >
                Already have an account. Login!
              </span>
            </div>
            <button className="button infoBtn" type="submit">
              Signup
            </button>
          </form>
        </div>
      ) : (
        <div className="a-right">
          <form className="infoFrom authForm" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <div className="">
              <input
                type="text"
                placeholder="User Name"
                className="infoInput"
                name="userName"
                defaultValue={formInput?.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                defaultValue={formInput?.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <span
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setIsSignedUp(!isSignedUp);
                  setformInput((prev) => initialData);
                }}
              >
                Don't have an account. SignUp!
              </span>
              <button className="button infoBtn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Auth;
