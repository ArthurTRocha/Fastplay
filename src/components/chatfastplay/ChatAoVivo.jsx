import React from "react";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import "./chataovivo.css";

const ChatAoVivo = () => {
  const [user] = useAuthState(auth);

  // Defina o ID do cliente (pode ser obtido a partir do seu sistema de autenticação)
  const clientId = user ? user.uid : null;

  return (
    <div className='ChatAoVivo'>
      <header>
        <h1>ReactChat</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom clientId={clientId} /> : <SignIn />}</section>
    </div>
  );
};

export default ChatAoVivo;
