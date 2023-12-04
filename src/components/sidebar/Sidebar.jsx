import React from "react";
import ChatAoVivo from "../chatfastplay/ChatAoVivo";
import "./sidebar.css"

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ChatAoVivo />
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Sidebar;
