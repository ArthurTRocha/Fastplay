import React from "react";
import { auth } from "../../services/firebaseConfig";

const SignOut = () => {
  return (
    auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
  );
};

export default SignOut;
