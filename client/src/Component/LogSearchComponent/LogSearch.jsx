import React from "react";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogSearch.css";

function LogSearch() {
  return (
    <div className="LogSearch">
      <img src={Logo} alt="Logo image" />
      <div className="Search">
        <input type="text" name="Search_text" id="" placeholder="#Expolore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogSearch;
