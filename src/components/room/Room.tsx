import React from "react";
import Signout from "../signout/Signout";
import "./Room.scss";
export const Room = ({ roomRef, setRoom }: any) => {
  return (
    <>
      <div className="room-container">
        <input ref={roomRef} className="room-input" />
        <button className="room-btn" onClick={setRoom}>
          Enter Room
        </button>
      </div>
      <Signout />
    </>
  );
};

export default Room;
