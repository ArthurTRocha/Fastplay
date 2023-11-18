import React from "react";
import "./footer.css"
import PlayStore from "../../assets/image/PlayStore.png"
import AppStore from  "../../assets/image/AppStore.png"
import logo from "../../assets/image/logo.png"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import BotaoSeta from "../../assets/image/BotaoSeta.png"
import { useTranslation } from 'react-i18next';

function Footer(){
    const { t } = useTranslation();
    function scrollToTopo() {
        const Header = document.getElementById('Header');
        if (Header) {
            Header.scrollIntoView({ behavior: 'smooth' });
        }
      }
    




    return(
        <div className="footer">
            <div className="ladoesquerdofooter">
            <div className="logofooter">
                <img className="logooFooter" src={logo} alt="Logo" />
            </div>
            <div className="textosfooter">
                <h1>{t("Footer.Jornada")} {`\n`}
                {t("Footer.Jornada2")}</h1>
            </div>
            <div className="redessociaisfooter">
      <a href="https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho..." target="_blank"><BsWhatsapp className='iconee' /></a>
      <a href="https://www.instagram.com/fastplaycomunicacao/?hl=pt-br" target="_blank"><BsInstagram className='iconee'/></a>
      <SiThreads className='iconee'/>
      <a href="https://www.facebook.com/fastplaycomunicacao/" target="_blank"><BsFacebook className='iconee'/></a>
      <FaXTwitter className='iconee'/>
      <a href="https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o" target="_blank"><FaLinkedinIn className='iconee'/></a>
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
                    <a href="">{t("Footer.Outros2")}</a>
                    <a href="">{t("Footer.Outros3")}</a>
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