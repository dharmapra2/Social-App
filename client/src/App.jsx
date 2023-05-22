import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state?.authReducer?.authData);
  console.log(user ? true : false);
  return (
    <div className="App">
      <div className="blur -top-[18%] right-0"></div>
      <div className="blur top-[36%] -left-[8rem]"></div>
      {/* <Profile /> */}
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="/home" /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
