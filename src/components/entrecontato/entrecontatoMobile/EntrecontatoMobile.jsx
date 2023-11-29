import React from "react";
import "./entrecontatomobile.css";
import Setacima from "../../../assets/image/setacima.png";
import Setabaixo from "../../../assets/image/setabaixo.png";
import { Link } from "react-router-dom"; 
import setaBotao from "../../../assets/image/setabotao.png";
import { useTranslation } from 'react-i18next';

function EntrecontatoMobile() {
    const { t } = useTranslation();

    return (
        <div className="entreContatoMobile" id="entreContatoMobile">
            <div className="setaCimaMobilePai">
                <div className="setaCimaMobile">
                    <img src={Setacima} alt="" />
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
                    <Link to="/cadastromobile">
                        <button>
                            <img 
                                src={setaBotao} 
                                alt=""
                                className="setaBotaoMobile" 
                            />
                            Cadastro
                        </button>
                    </Link>                  
                </div>
                <div className="setaBaixoMobilePai">
                    <div className="setaBaixoMobile">
                        <img src={Setabaixo} alt="" />
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default EntrecontatoMobile;
