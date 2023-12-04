import React, { useRef, useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, limit, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, databaseApp } from "../../services/firebaseConfig";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = collection(databaseApp, "messages");

  const [currentUserEmail, setCurrentUserEmail] = useState("");

  // Query para obter as mensagens da conversa atual
  const q = query(
    collection(databaseApp, "chats", "contato@fastplaycomunicacao.com.br", "messages"),
    orderBy("createdAt"),
    limit(25)
  );
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid, email } = auth.currentUser;

    // Use o email do destinatário para criar a referência ao chat
    const recipientEmail = "contato@fastplaycomunicacao.com.br";
    const recipientChatRef = collection(databaseApp, "chats", recipientEmail, "messages");

    // Adicione a mensagem à subcoleção de mensagens
    await addDoc(recipientChatRef, {
      text: formValue,
      uid,
      photoURL,
      to: recipientEmail, // Adicione o destinatário
      createdAt: serverTimestamp(),
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (auth.currentUser) {
      console.log("Usuário autenticado:", auth.currentUser.email);
      setCurrentUserEmail(auth.currentUser.email);
    } else {
      console.log("Nenhum usuário autenticado.");
    }
  }, [auth.currentUser]);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" disabled={!formValue}>
          Enviar
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
