import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./envioemail.css"
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Imagembotao from "../../assets/image/setabotao.png"
import Setacima from "../../assets/image/seta2.png"
import i18n from 'i18next';
  
function Envioemail() {
  const { t } = useTranslation();



  

  const [toEmail, setToEmail] = useState('');

    useEffect(() => {
        const setToEmailForLanguage = (language) => {
            if (language === 'pt') {
                setToEmail('contato@fastplaycomunicacao.com.br');
            } else {
                setToEmail('contact@fastplaymarketing.com'); // Substitua pelo seu outro e-mail
            }
        };

        setToEmailForLanguage(i18n.language);

        const handleLanguageChange = (language) => {
            setToEmailForLanguage(language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);


    const [mostrarMensagem, setMostrarMensagem] = useState(false);

  return (
    <div className="envioEmail" id="envioEmail">
      <div className="posicaoElementosEmail">
      <div className="titulosolicite">
        <h1>{t("Envioemail.Titulo")}<span>{t("Envioemail.Titulo1")}</span></h1>
        {`\n`}
        <p>{t("Envioemail.Paragrafo")}{`\n`}
        {t("Envioemail.Paragrafo1")}<span>{t("Envioemail.Paragrafo2")}{`\n`}
        {t("Envioemail.Paragrafo3")}</span>{t("Envioemail.Paragrafo4")}</p>
        </div>
        {`\n`}
        <div className="setass">
      <div className="setacima">
          <img src={Setacima} alt="Seta" />
        </div>
        </div>
      


     <div className="FormularioEnvioEmails">

      <form target="_blank" action={`https://formsubmit.co/${toEmail}`} encType="multipart/form-data"  method="POST">
            <input type="hidden" name="_next" value="https://fastplaycomunicacao.com.br/Obrigado"/> 
            <input type="hidden" name="_captcha" value="false"/>

            

            <div className="nomeSolicitado">
            <input type="text" name="name" 
            required 
            placeholder={t("Envioemail.CampoEnvio")}
            className="inputs"/>
            </div>

            <div className="emailSolicitado">
            <input type="email" name="email" 
            placeholder={t("Envioemail.CampoEnvio1")}
            className="inputs"/>
            </div>


            <div className="telefoneSegmento">
            <div className="telefoneSolicitado">

                <label >
                <PhoneInput
                    country={''} // Defina o código do país conforme necessário
                    placeholder={t("Envioemail.CampoEnvio2")}                
                    inputStyle={{ width: '24vw', height: '8vh', }}
                    inputProps={{
                        name: 'telefone',
                        required: true,
                    }}
                />
                </label>
                </div>

                <div className="segmentoSolicitado">
                  <input type="text" name="text"  
                  placeholder={t("Envioemail.CampoEnvio3")}
                  className="input1"/>
                  <div className="question" onMouseOver={() => setMostrarMensagem(true)} onMouseOut={() => setMostrarMensagem(false)}>
        <div className="question?">?</div>
        {mostrarMensagem && (
        <div className="mensagemAoPassarMouse">
          <p>{t("Envioemail.Mouse")}{`\n`}{t("Envioemail.Mouse1")}</p>
        </div>
      )}
      </div>
      </div>
      </div>


      <div className="imagemReuniao"> 
    <button className="MarcaReuniao" type="submit">
        <img src={Imagembotao} alt="ImagemBotao" />
        {t("Envioemail.Reuniao")}
    </button>
</div>
            </form>
            </div> 
            </div>
            











  
      </div>

  );
}

export default Envioemail;
