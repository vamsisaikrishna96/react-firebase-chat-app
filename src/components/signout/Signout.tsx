import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Signout.scss";

const Signout = () => {
  const signOutFromApplication = async () => {
    await signOut(auth);
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="signout-container">
      <button className="signout-btn" onClick={signOutFromApplication}>
        Sign Out
      </button>
    </div>
  );
};

export default Signout;
