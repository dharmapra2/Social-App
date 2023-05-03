import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { login, signUp } from "../../redux/slices/AuthAction";
function Auth() {
  const initialData = {
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const dispatch = useDispatch();
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [formInput, setformInput] = useState(initialData);
  const handleInputChange = (event) => {
    setformInput({
      ...formInput,
      [event.target.name]: event?.target?.value?.trim(),
    });
  };
  const handleSubmit = (event) => {
    event?.preventDefault();
    if (isSignedUp) {
      if (formInput?.confirmPassword !== formInput?.password) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "confirm password is mismatch",
        });
        return;
      }
      dispatch(signUp(formInput));
    } else {
      dispatch(login(formInput));
    }
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
      <div className="a-right">
        {isSignedUp ? (
          <form className="infoFrom authForm" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <div className="">
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                value={formInput?.first_name ?? ""}
                name="first_name"
                onChange={handleInputChange}
                required
                title="Enter your First Name"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                value={formInput?.last_name ?? ""}
                name="last_name"
                onChange={handleInputChange}
                required
                title="Enter your Last name"
              />
            </div>
            {/* <div className="">
              <input
                type="text"
                placeholder="User Name"
                className="infoInput"
                value={formInput?.userName??""}
                name="userName"
                onChange={handleInputChange}
                required
              />
            </div> */}
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="infoInput"
                value={formInput?.email ?? ""}
                name="email"
                onChange={handleInputChange}
                title="Enter your mail ID"
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                value={formInput?.password ?? ""}
                name="password"
                onChange={handleInputChange}
                required
                title="Enter Password"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                value={formInput?.confirmPassword ?? ""}
                name="confirmPassword"
                onChange={handleInputChange}
                required
                title="Enter Confirm Password"
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
        ) : (
          <form className="infoFrom authForm" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <div className="">
              <input
                type="text"
                placeholder="User Name"
                className="infoInput"
                name="userName"
                value={formInput?.userName ?? ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                value={formInput?.password ?? ""}
                onChange={handleInputChange}
                required
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
        )}
      </div>
    </div>
  );
}

export default Auth;
