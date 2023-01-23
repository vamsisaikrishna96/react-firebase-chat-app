import React from "react";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "./Auth.scss";

const Auth = ({ setIsAuth }: any) => {
  const signInWithGoogle = async () => {
    try {
      const authResult: any = await signInWithPopup(auth, provider);
      localStorage.setItem("auth-token", authResult.user.accessToken);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-container">
      <p>Sign in with Google to continue</p>
      <button className="auth-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;
