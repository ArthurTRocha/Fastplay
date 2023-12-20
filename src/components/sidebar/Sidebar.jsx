import React from "react";
import Chat from "../chat/Chat"
import "./sidebar.css"
import { MdSms } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <Chat />
      <button className="abrirChatt" onClick={onClose}><MdSms className="MdSms"/> </button>
    </div>
  );
};

export default Sidebar;
