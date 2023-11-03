import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import logo from "../../assets/image/logo.png"
import "./header.css"


function Header() {
    
    return (
        <div className="Header">
        <img className='logo' src={logo} alt="Fastplay" />
        
    
      <div className="redessociais">
      <a href="https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho..." target="_blank"><BsWhatsapp className='icone' /></a>
      <a href="https://www.instagram.com/fastplaycomunicacao/?hl=pt-br" target="_blank"><BsInstagram className='icone'/></a>
      <SiThreads className='icone'/>
      <a href="https://www.facebook.com/fastplaycomunicacao/" target="_blank"><BsFacebook className='icone'/></a>
      <FaXTwitter className='icone'/>
      <a href="https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o" target="_blank"><FaLinkedinIn className='icone'/></a>
      </div>


        </div>
    )
}
export default Header;
