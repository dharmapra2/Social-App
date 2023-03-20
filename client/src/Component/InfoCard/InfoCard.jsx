import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";

function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <UilPen
          className="w-[2rem] h-[1.2rem] cursor-pointer"
          onClick={() => setModalOpened(true)}
        />
        {modalOpened && (
          <ProfileModel
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        )}
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>in Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Bhubanswer</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span>Nettantra Tech.</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
}

export default InfoCard;
