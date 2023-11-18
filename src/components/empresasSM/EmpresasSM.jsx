import React from 'react';
import "./empresassm.css"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import homem from "../../assets/image/homemcadeira.png"
import alvo from "../../assets/image/alvo.png"
import sombra from "../../assets/image/sombra.png"
import { Link } from 'react-router-dom';




function EmpresasSM() {
  const { t } = useTranslation();

  const handleClick = () => {
    history.push('/saibamais');
  };
    return(
        <div className="EmpresasSM">
           <div className="TextosEmpresasSM">
        <h1>{t("EmpresasSM.Titulo")}{`\n`}{t("EmpresasSM.Titulo-1")}</h1>
        <p>
            {t("EmpresasSM.Paragrafo")}
            {`\n`}
            {t("EmpresasSM.Paragrafo-1")}
            {`\n`}
            {t("EmpresasSM.Paragrafo-2")}
            {`\n`}
            {t("EmpresasSM.Paragrafo-3")}
            {`\n\n`}
            {t("EmpresasSM.Paragrafo-4")}
            <span>{t("EmpresasSM.Paragrafo-5")}</span>
            {t("EmpresasSM.Paragrafo-6")}
            {`\n`}
            {t("EmpresasSM.Paragrafo-7")}
            {`\n`}
            {t("EmpresasSM.Paragrafo-8")}
            </p>
            {`\n`}
            <Link to="/saibamais">
  <button className='button-qtme'>{t("EmpresasSM.Transformar")}</button>
</Link>
            </div>

            <div className="redessociais">
      <a href="https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho..." target="_blank"><BsWhatsapp className='icone' /></a>
      <a href="https://www.instagram.com/fastplaycomunicacao/?hl=pt-br" target="_blank"><BsInstagram className='icone'/></a>
      <SiThreads className='icone'/>
      <a href="https://www.facebook.com/fastplaycomunicacao/" target="_blank"><BsFacebook className='icone'/></a>
      <FaXTwitter className='icone'/>
      <a href="https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o" target="_blank"><FaLinkedinIn className='icone'/></a>
      </div>
      <div className="imagemhomem">
        <img className='homem' src={homem} alt="Imagem" /></div>

      <div className="TextosEmpresasSM2">

        <div className="alvo-sombra">
        <div className="alvo">
     <img className='alvo' src={alvo} alt="" />
     </div>
     <div className="sombra">
     <img className='sombra' src={sombra} alt="" />
     </div>
     </div>
     
        <h1>
        {t("EmpresasSM.Titulo-2")}{`\n`}  {t("EmpresasSM.Titulo-3")}
        </h1>
        <p>
        {t("EmpresasSM.Paragrafo-9")} {`\n`} 
        {t("EmpresasSM.Paragrafo-10")} {`\n`}
        {t("EmpresasSM.Paragrafo-11")} {`\n`}
        {t("EmpresasSM.Paragrafo-12")} {`\n`}
        {t("EmpresasSM.Paragrafo-13")}</p>
      </div>


        </div>
    )
}
export default EmpresasSM;