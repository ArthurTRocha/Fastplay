import React from 'react';
import "./empresassm.css"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdTextsms } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import homem from "../../assets/image/homemcadeira.png"
import alvo from "../../assets/image/alvo.png"
import sombra from "../../assets/image/sombra.png"
import { Link } from 'react-router-dom';
import i18n from 'i18next';




function EmpresasSM() {
  const { t } = useTranslation();


  const getSocialMediaLink = (socialMedia) => {
    const selectedLanguage = i18n.language;
    let baseUrl = '';
  
    switch (socialMedia) {
      case 'instagram':
        baseUrl = 'https://www.instagram.com/';
        break;
      case 'facebook':
        baseUrl = 'https://www.facebook.com/';
        break;
      case 'twitter':
        baseUrl = 'https://twitter.com/';
        break;

      default:
        return '';
    }
  
    return selectedLanguage === 'pt'
      ? `${baseUrl}fastplaycomunicacao/?hl=pt-br`
      : `${baseUrl}fastplaymarketing/`;
  };
      const instagramLink = getSocialMediaLink('instagram');
      const facebookLink = getSocialMediaLink('facebook');
      const twitterLink = getSocialMediaLink('twitter');
  


    const getLinkedInLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o/mycompany/'
    : 'https://www.linkedin.com/company/fastplaymarketing/?viewAsMember=true';
    };


    const getWhatsAppLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho...'
    : 'https://api.whatsapp.com/send/?phone=19297264171&text=Hello+I+would+like+to+schedule+a+video+conference+to+discuss+marketing.&type=phone_number&app_absent=0';
    };

    const getEmailLink = () => {
      const selectedLanguage = i18n. language;
      return selectedLanguage === 'pt'
      ? 'mailto:contato@fastplaycomunicacao.com.br'
      : 'mailto:contact@fastplaymarketing.com'
    }

    const getSmsLink = () => {
      const selectedLanguage = i18n. language;
      return selectedLanguage === 'pt'
      ? 'sms:+5531996013764'
      : 'sms:+19297264171'
    }

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
            <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='icone' /></a>
        <a href={getSocialMediaLink('instagram')} target="_blank"><BsInstagram className='icone'/></a>
        <a href={getSocialMediaLink('facebook')} target="_blank"><BsFacebook className='icone'/></a>
        <a href={getSocialMediaLink('twitter')} target="_blank"><FaXTwitter className='icone'/></a>
        <a href={getLinkedInLink()} target="_blank"><FaLinkedinIn className='icone'/></a>
        <a href={getEmailLink()} target="_blank"><TfiEmail className='icone'/></a>
        <a href={getSmsLink()} target="_blank"><MdTextsms className='icone'/></a>
      </div>
      <div className="imagemhomem">
        <img className='homem' src={homem} alt="Imagem" /></div>

      <div className="TextosEmpresasSM2">

        <div className="alvo-sombra">
        <div className="alvo">
     <img className='alvo' src={alvo} alt="Alvo" />
     </div>
     <div className="sombra">
     <img className='sombra' src={sombra} alt="Sombra" />
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