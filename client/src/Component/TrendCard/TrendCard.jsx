import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";
function TrendCard() {
  return (
    <div className="TrendCard">
      {TrendData?.map((item, index) => (
        <div className="trend" key={index}>
          <span>#{item?.name}</span>
          <span>{item?.shares}k shares</span>
        </div>
      ))}
    </div>
  );
}

export default TrendCard;
