import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return <button className="sign-in" onClick={() => signInWithGoogle()}>Logar com Google</button>;
};

export default SignIn;
