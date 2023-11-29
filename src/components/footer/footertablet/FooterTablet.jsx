import React from "react";
import './footertablet.css'; 
import logo from "../../../assets/image/logo.png"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdTextsms } from "react-icons/md";
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import setaTablet from "../../../assets/image/setafooterTablet.png"

function FooterTablet() {  
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

    return (
        <div className="footerTablet">  
        
            <div className="logofooterTablet">  
                <img src={logo} alt="" />
            </div>

            <div className="textosfooterTablet">  
            <div className="titulo1FooterTablet">
            <h1>{t("Footer.Tablet")}</h1>{`\n`}
            <p >{t("Footer.Servicos")}</p>{`\n`}
            <p >{t("Footer.Servicos2")}</p>{`\n`}
            <p >{t("Footer.Servicos3")}</p>{`\n`}
            <p >{t("Footer.Servicos4")}</p>

            </div>
                  
            <div className="titulo2FooterTablet">
            <h1>{t("Footer.Tablet1")}</h1>{`\n`}
            <a href="">{t("Footer.Outros")}</a>{`\n`}{`\n`}
            <a href="/cadastro">{t("Footer.Outros2")}</a>{`\n`}{`\n`}
            <a href="/trabalheconosco">{t("Footer.Outros3")}</a>

            </div>
            </div>

            <div className="positionFooterTablet">  
                    <div className="fundoBlackRedesFooterTablet">
                    <div className="redesFooterTablet">
                    <div className="redessociaisfooterTablet">  
                    <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='iconeTablet' /></a>
                    <a href={getSocialMediaLink('instagram')} target="_blank"><BsInstagram className='iconeTablet'/></a>
                    <a href={getSocialMediaLink('facebook')} target="_blank"><BsFacebook className='iconeTablet'/></a>
                    <a href={getSocialMediaLink('twitter')} target="_blank"><FaXTwitter className='iconeTablet'/></a>
                    <a href={getLinkedInLink()} target="_blank"><FaLinkedinIn className='iconeTablet'/></a>
                    <a href={getEmailLink()} target="_blank"><TfiEmail className='iconeTablet'/></a>
                    <a href={getSmsLink()} target="_blank"><MdTextsms className='iconeTablet'/></a>
                    </div>
                    <div className="fundoBlackRedesFooterTabletradius">
                        <div className="setafooterTablet">
                        <img src={setaTablet} alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTablet;  
