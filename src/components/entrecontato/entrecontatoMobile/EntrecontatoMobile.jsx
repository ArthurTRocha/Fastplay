import React from "react";
import "./entrecontatomobile.css";
import Setacima from "../../../assets/image/setacima.png";
import { Link } from "react-router-dom"; 
import setaBotao from "../../../assets/image/setabotao.png";
import { useTranslation } from 'react-i18next';
import QrCode from "../../../assets/image/QRCODE.png"

function EntrecontatoMobile() {
    const { t } = useTranslation();

    return (
        <div className="entreContatoMobile" id="entreContatoMobile">
            <div className="setaCimaMobilePai">
                <div className="setaCimaMobile">
                    <img src={Setacima} alt="Seta" />
                </div>
            </div>
            <div className="textosEntrecontatoMobile">
                <h1>{t("Contato.Titulo")}{`\n`}
                    {t("Contato.Titulo-1")}<span>{t("Contato.Titulo-2")}</span></h1>

                <p><span>{t("Contato.Paragrafo")}</span>{t("Contato.Paragrafo-1")}{`\n`}
                    {t("Contato.Paragrafo-2")}{`\n`}
                    <span>{t("Contato.Paragrafo-3")}</span> {t("Contato.Paragrafo-4")}{`\n`} {`\n`}
                    {t("Contato.Paragrafo-5")}<span>{t("Contato.Paragrafo-6")}</span>{t("Contato.Paragrafo-7")}{`\n`}
                    <span>{t("Contato.Paragrafo-8")}</span>{t("Contato.Paragrafo-9")}</p>
                <div className="buttonCadastroMobile">
                    <Link to="/cadastromobile?scrollToDiv=true">
                        <button>
                            <img 
                                src={setaBotao} 
                                alt="Seta"
                                className="setaBotaoMobile" 
                            />
                        {t("Conosco.Titulo1")}
                        </button>
                    </Link>                  
                </div>
            </div>
            <div className="qrCodeMobilePai">
                <div className="qrCodeMobile">
                    <img src={QrCode} alt="QrCode" />
                </div>
            </div>

        </div>
    );
}

export default EntrecontatoMobile;
