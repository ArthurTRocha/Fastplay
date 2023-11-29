import React from "react";
import "./footer.css"
import PlayStore from "../../assets/image/PlayStore.png"
import AppStore from  "../../assets/image/AppStore.png"
import logo from "../../assets/image/logo.png"
import LogoEN from "../../assets/image/FastplayMKT.png"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import BotaoSeta from "../../assets/image/BotaoSeta.png"
import { useTranslation } from 'react-i18next';
import { MdTextsms } from "react-icons/md";
import i18n from 'i18next';
import { Link } from "react-router-dom";



function Footer(){
    const { t } = useTranslation();

    function scrollToTopo() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
   


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
        : 'https://api.whatsapp.com/send/?phone=13472275049&text=Hello+I+would+like+to+schedule+a+video+conference+to+discuss+marketing.&type=phone_number&app_absent=0';
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
            : 'sms:+13472275049'
          }
          
    return(
        <div className="footer">
            <div className="ladoesquerdofooter">
            <div className="logofooter">
                <img className="logooFooter" src={imageSrc} alt="Logo" />
            </div>
            <div className="textosfooter">
                <h1>{t("Footer.Jornada")} {`\n`}
                {t("Footer.Jornada2")}</h1>
            </div>
            <div className="redessociaisfooter">
            <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='iconee'/></a>
        <a href={getSocialMediaLink('instagram')} target="_blank"><BsInstagram className='iconee'/></a>
        <a href={getSocialMediaLink('facebook')} target="_blank"><BsFacebook className='iconee'/></a>
        <a href={getSocialMediaLink('twitter')} target="_blank"><FaXTwitter className='iconee'/></a>
        <a href={getLinkedInLink()} target="_blank"><FaLinkedinIn className='iconee'/></a>
        <a href={getEmailLink()} target="_blank"><TfiEmail className='iconee'/></a>
        <a href={getSmsLink()} target="_blank"><MdTextsms className='iconee'/></a>
      </div>
            </div>


            <div className="meioesquerdofooter">
                <div className="meioesquerdo">
                    <h1>{t("Footer.ServicosTitulo")}</h1>
                    <p >{t("Footer.Servicos")}</p>
                    <p >{t("Footer.Servicos2")}</p>
                    <p >{t("Footer.Servicos3")}</p>
                    <p >{t("Footer.Servicos4")}</p>
                </div>
            </div>




            <div className="meiodireitofooter">
            <div className="meiodireito">
                    <h1>{t("Footer.OutrosTitulo")}</h1>
                    <a href="">{t("Footer.Outros")}</a>
                    <Link to="/cadastro">{t("Footer.Outros2")}</Link>
                    <a href="/trabalheconosco">{t("Footer.Outros3")}</a>
                </div>
            </div>




            <div className="ladodireitofooter">
           
                <div className="ladodireito">
                    <h1>{t("Footer.Breve")} {`\n`}
                    {t("Footer.Breve2")}</h1>
                    
                    <div className="downloads">
            <div className="PlayStore"><img src={PlayStore} alt="PlayStore" /></div>
            <div className="AppStore"><img src={AppStore} alt="AppStore" /></div>
            </div>
            </div>
            </div>

            <div className="topo01">
            <button className="buttontopo" onClick={scrollToTopo}>
                <div className="divbuttontopo"><img src={BotaoSeta} alt="Botão" /></div>
                </button>
                </div>

        </div>
    )
}
export default Footer;