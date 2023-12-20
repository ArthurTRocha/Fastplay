import React from "react";
import "./entrecontato.css"
import Setacima from "../../assets/image/setacima.png"
import Setabaixo from "../../assets/image/setabaixo.png"
import { Link } from "react-router-dom"; 
import setaBotao from "../../assets/image/setabotao.png"
import { useTranslation } from 'react-i18next';
import QrCode from "../../assets/image/QRCODE.png"
import TelefoneQRCode from "../../assets/image/telefoneQrCode.png"




function Entrecontato () {
    const { t } = useTranslation();
    

    return (
        <div className="entreContato" id="entreContato">
            <div className="setaCimaPai">
            <div className="setaCima">
                <img src={Setacima} alt="Seta" />
            </div>
            </div>
            <div className="textosEntrecontato">
                <h1>{t("Contato.Titulo")}{`\n`}
                {t("Contato.Titulo-1")}<span>{t("Contato.Titulo-2")}</span></h1>

                <p><span>{t("Contato.Paragrafo")}</span>{t("Contato.Paragrafo-1")}{`\n`}
                {t("Contato.Paragrafo-2")}{`\n`}
                    <span>{t("Contato.Paragrafo-3")}</span> {t("Contato.Paragrafo-4")}{`\n`} {`\n`}
                    {t("Contato.Paragrafo-5")}<span>{t("Contato.Paragrafo-6")}</span>{t("Contato.Paragrafo-7")}{`\n`}
                    <span>{t("Contato.Paragrafo-8")}</span>{t("Contato.Paragrafo-9")}</p>
                    <div className="buttonCadastro">
                    <Link to="/cadastro?scrollToDiv=true">                    
                    <button>
                    <img 
                        src={setaBotao} 
                        alt="Cadastro"
                        className="setaBotao" 
                        />
                        {t("Conosco.Titulo1")}
                      
                    </button>
                   </Link>                  
                    </div>
                    <div className="qrCodePai">
                    <div className="QRcode">
                        <img src={QrCode} alt="QrCode" />
                    </div>
                    </div>
                    <div className="telefoneQRCodePai">
                    <div className="telefoneQRCode">
                        <img src={TelefoneQRCode} alt="Telefone QRCode" />
                    </div>
                    </div>
                    <div className="setaBaixoPai">
                    <div className="setaBaixo">
                        <img src={Setabaixo} alt="Seta" />
                    </div>
                    </div> 
                    </div>


        </div>
    )
}
export default Entrecontato;