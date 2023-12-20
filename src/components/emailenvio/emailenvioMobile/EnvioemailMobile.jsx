import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./envioemailmobile.css"
import { useTranslation } from 'react-i18next';
import Imagembotao from "../../../assets/image/setabotao.png"
import Setacima from "../../../assets/image/setacima.png"
import i18n from 'i18next';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function EnvioemailMobile() {
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
    <div className="envioEmailMobile" id="envioEmailMobile">
      <div className="posicaoElementosEmailMobile">
      <div className="titulosoliciteMobile">
        <h1>{t("Envioemail.Titulo")}<span>{t("Envioemail.Titulo1")}</span></h1>
        {`\n`}
        <p>{t("Envioemail.Paragrafo")}{`\n`}
        {t("Envioemail.Paragrafo1")}<span>{t("Envioemail.Paragrafo2")}{`\n`}
        {t("Envioemail.Paragrafo3")}</span>{t("Envioemail.Paragrafo4")}</p>
        </div>
        {`\n`}
        <div className="setassMobile">
      <div className="setacimaMobile">
          <img src={Setacima} alt="Seta" />
        </div></div>
      

      <div className="FormularioEnvioEmailsMobile">
      <form target="_blank" action={`https://formsubmit.co/${toEmail}`} encType="multipart/form-data"  method="POST">
            <input type="hidden" name="_next" value="https://fastplaycomunicacao.com.br/Obrigado"/> 
            <input type="hidden" name="_captcha" value="false"/>

            

            <div className="nomeSolicitadoMobile">
            <input type="text" name="name" 
            required 
            placeholder={t("Envioemail.CampoEnvio")}
            className="inputsMobile"/>
            </div>

            <div className="emailSolicitadoMobile">
            <input type="email" name="email" 
            placeholder={t("Envioemail.CampoEnvio1")}
            className="inputsMobile"/>
            </div>


            <div className="telefoneSegmentoMobile">
            <div className="telefoneSolicitadoMobile">

                <label >
                <PhoneInput
                    country={''} // Defina o código do país conforme necessário
                    placeholder={t("Envioemail.CampoEnvio2")}                
                    inputStyle={{ width: '39vw', height: '8vh', }}
                    inputProps={{
                        name: 'telefone',
                        required: true,
                    }}
                />
                </label>
                </div>

                <div className="segmentoSolicitadoMobile">
                  <input type="text" name="text"  
                  placeholder={t("Envioemail.CampoEnvio3")}
                  className="input1Mobile"/>
                  <div className="questionMobile" onMouseOver={() => setMostrarMensagem(true)} onMouseOut={() => setMostrarMensagem(false)}>
        <div className="question?Mobile">?</div>
        {mostrarMensagem && (
        <div className="mensagemAoPassarMouseMobile">
          <p>{t("Envioemail.Mouse")}{`\n`}{t("Envioemail.Mouse1")}</p>
        </div>
      )}
      </div>
      </div>
      </div>


      <div className="imagemReuniaoMobile"> 
    <button className="MarcaReuniaoMobile" type="submit">
        <img src={Imagembotao} alt="ImagemBotaoMobile" />
        {t("Envioemail.Reuniao")}
    </button>
</div>
            </form>
            </div> 
      
    </div>
    </div>
  );
}

export default EnvioemailMobile;
