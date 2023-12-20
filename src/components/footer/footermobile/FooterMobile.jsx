import React from "react";
import './footermobile.css'
import logo from "../../../assets/image/logo.png"
import LogoEN from "../../../assets/image/FastplayMKT.png"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import i18n from 'i18next';
import { TfiEmail } from "react-icons/tfi";
import { MdTextsms } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";


function FooterMobile() {
    const { t } = useTranslation();

    const getImageForLanguage = () => {
      const currentLanguage = i18n.language;
  
      switch (currentLanguage) {
          case 'en':
              return LogoEN;
          case 'es':
              return LogoEN;
          case 'it':
              return LogoEN;
          case 'fr':
              return LogoEN;
          case 'pt':
              return logo;
          default:
              return logo;
      }
  };
  
  const imageSrc = getImageForLanguage();

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

        const getLocalizacaoInLink = () => {
          const selectedLanguage = i18n.language;
        
          const enderecos = {
            pt: "Rua Santa Juliana, 1375 A, Sete Lagoas, Minas Gerais",
            en: "44-11 Broadway, Queens, NY 11103, Estados Unidos", // Substitua pelo endereço desejado em inglês
          };
        
          const linkBase = 'https://www.google.com/maps/search/?api=1&query=';
          const endereco = enderecos[selectedLanguage] || enderecos.en;
        
          return linkBase + encodeURIComponent(endereco);
        };

    return (
        <div className="footerMobile">


           
                <div className="logofooterMobile">  
                <img src={imageSrc} alt="Logo" />
            </div>
            <div className="positionFooterMobile">
            <div className="textosfooterMobile">
                <h1>{t("Footer.Mobile")}{`\n`}{t("Footer.Mobile1")}</h1>
            <div className="redessociaisfooterMobile">
            <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='icone' /></a>
        <a href={getSocialMediaLink('instagram')} target="_blank"><BsInstagram className='icone'/></a>
        <a href={getSocialMediaLink('facebook')} target="_blank"><BsFacebook className='icone'/></a>
        <a href={getSocialMediaLink('twitter')} target="_blank"><FaXTwitter className='icone'/></a>
        <a href={getLinkedInLink()} target="_blank"><FaLinkedinIn className='icone'/></a>
        <a href={getEmailLink()} target="_blank"><TfiEmail className='icone'/></a>
        <a href={getSmsLink()} target="_blank"><MdTextsms className='icone'/></a>
      </div>
      </div>
      <div className="enderecoFooterPaiMobile">
      <FaMapMarkerAlt className="enderecoIconeMobile"/>
      <a className='endereçosFooterMobile' href={getLocalizacaoInLink()} target="_blank" rel="noopener noreferrer">
      {t("Endereco.enderecos")}</a>
      </div>
      </div>
    
        </div>
    )
}
export default FooterMobile;