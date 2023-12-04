import React from "react";
import { auth } from "../../services/firebaseConfig";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL, id } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`} key={id}>
      <img className="imgChatMessage" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="user" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
