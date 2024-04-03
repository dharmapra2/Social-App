import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { login, signUp } from "../../redux/Actions/AuthAction";
import Button from "../../Component/Button/Button";
function Auth() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.authReducer?.loading);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const handleSubmit = (event) => {
    event?.preventDefault();
    let formData = new FormData(event.target);
    let formInput = {};
    for (let [key, value] of formData.entries()) {
      formInput[key] = value?.trim();
    }
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
                name="first_name"
                title="Enter your First Name"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="last_name"
                title="Enter your Last name"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="infoInput"
                title="Enter your mail ID"
                name="userName"
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                title="Enter Password"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                required
                name="confirmPassword"
                title="Enter Confirm Password"
              />
            </div>
            <div className="">
              <span
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setIsSignedUp(!isSignedUp);
                }}
              >
                Already have an account. Login!
              </span>
            </div>
            <Button
              type="submit"
              value="SignUp"
              loading={loading}
              disabled={loading}
            />
          </form>
        ) : (
          <form className="infoFrom authForm" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <div className="">
              <input
                type="text"
                placeholder="User Name"
                className="infoInput"
                required
                name="userName"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                required
                name="password"
              />
            </div>
            <div className="">
              <span
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setIsSignedUp(!isSignedUp);
                }}
              >
                Don't have an account. SignUp!
              </span>
              <Button
                type="submit"
                value="Login"
                loading={loading}
                disabled={loading}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Auth;
