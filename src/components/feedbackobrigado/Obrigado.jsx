import React from "react";
import "./obrigado.css"
import palmas from "../../assets/image/palmas.png"
import seta from "../../assets/image/setaesticada.png"
import LogoMarkenting from "../../assets/image/FastplayMarketingLetraPreta.png"
import LogoComunicacao from "../../assets/image/FastplayComunicacaoLetraPreta.png"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Header from "../header/Header";



function Obrigado () {
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
        <div className="obrigado">
            <div className="headerObrigado"><Header/></div>
            
            <div className="setaesticadaObrigadoPai">
            <div className="setaesticadaObrigado">
                <img src={seta} alt="Seta" />
            </div>
            </div>
            <div className="palmasTextos">
                <div className="textoObrigado">
                    <h1>{t("Feedback.Obrigado")}</h1>
                    <p>{t("Feedback.Paragrafo1")}</p>
                </div>
                <div className="imagemPalmas">
                <img src={palmas} alt="Palmas" />
                </div>
            </div>
            <div className="logoObrigado">
                <img src={imageSrc} alt="Logo" />
            </div>
        <div className="tracolaranjaObrigado"></div>    
        </div>
    )
}
export default Obrigado;