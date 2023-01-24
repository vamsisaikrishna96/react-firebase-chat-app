import React from "react";
import Signout from "../signout/Signout";
import "./Room.scss";
export const Room = ({ roomRef, setRoom }: any) => {
  return (
    <>
      <div className="room-container">
        <div className="room-title">Enter into Room</div>
        <input ref={roomRef} className="room-input" />
        <button className="room-btn" onClick={setRoom}>
          Enter
        </button>
      </div>
      <Signout />
    </>
  );
};

export default Room;
