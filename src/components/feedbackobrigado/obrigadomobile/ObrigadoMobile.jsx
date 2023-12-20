import React from "react";
import "./obrigadomobile.css"
import palmas from "../../../assets/image/palmas.png"
import LogoMarkenting from "../../../assets/image/FastplayMarketingLetraPreta.png"
import LogoComunicacao from "../../../assets/image/FastplayComunicacaoLetraPreta.png"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Header from "../../header/Header";

function ObrigadoMobile () {
    const { t } = useTranslation();

    const getImageForLanguage = () => {
        const currentLanguage = i18n.language;

        switch (currentLanguage) {
            case 'en':
                return LogoMarkenting;
            case 'es':
                return LogoMarkenting;
            case 'it':
                return LogoMarkenting;
            case 'fr':
                return LogoMarkenting;
            case 'pt':
                return LogoComunicacao;
            default:
                return LogoComunicacao;
        }
    };

    const imageSrc = getImageForLanguage();

    return(
        <div className="obrigadoMobile">
             <div className="headerObrigadoMobile"><Header/></div>
            
            <div className="palmasTextosMobile">
                <div className="textoObrigadoMobile">
                    <h1>{t("Feedback.Obrigado")}</h1>
                    <p>{t("Feedback.Paragrafo1")}</p>
                </div>
                <div className="imagemPalmasMobile">
                <img src={palmas} alt="Palmas" />
                </div>
            </div>
            <div className="logoObrigadoMobile">
                <img src={imageSrc} alt="Logo" />
            </div>
        <div className="tracolaranjaObrigadoMobile"></div>    
        </div>
    )
}
export default ObrigadoMobile;