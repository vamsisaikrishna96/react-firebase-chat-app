import React from "react";
import './Room.scss';
export const Room = ({ roomRef, setRoom }: any) => {
  return (
    <div className="room-container">
      <input ref={roomRef} className="room-input" />
      <button className="room-btn" onClick={setRoom}>
        Enter Room
      </button>
    </div>
  );
};

export default Room;
