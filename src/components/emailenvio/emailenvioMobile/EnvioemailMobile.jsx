import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./envioemailmobile.css"
import { useTranslation } from 'react-i18next';
import Imagembotao from "../../../assets/image/setabotao.png"
import Setacima from "../../../assets/image/setacima.png"
import i18n from 'i18next';


function EnvioemailMobile() {

    // useEffect(() => {
    //   const listenToEventLanguageChange = (event) => {
    //     const listenedLanguage = event.detail;
    //     setServiceForEmail(listenedLanguage);
    //   };
    //   document.addEventListener('languageChanged', listenToEventLanguageChange);
  
    //   // A função de limpeza remove o ouvinte de evento quando o componente é desmontado
    //   return () => {
    //     document.removeEventListener('languageChanged', listenToEventLanguageChange);
    //   };
    // }, []);

  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [segmento, setSegmento] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [service, setService] = useState('');

  const setServiceForEmail = (selectedLanguage) => {
    if (selectedLanguage === 'pt') {
      setToEmail('contato@fastplaycomunicacao.com.br');
      setService('service_rzdde39');
    } else {
      setToEmail('contact@fastplaymarketing.com');
      setService('service_kbj244q');
    }
  };

  const listenToEventLanguageChange = () => {
    const selectedLanguage = i18n.language;  // Obtenha a linguagem diretamente de i18n
    setServiceForEmail(selectedLanguage);
  };

  useEffect(() => {
    listenToEventLanguageChange();  // Chame a função uma vez no início para configurar o estado inicial

    // Adicione um ouvinte de evento para detectar mudanças de linguagem
    i18n.on('languageChanged', listenToEventLanguageChange);

    // Limpe o ouvinte de evento quando o componente é desmontado
    return () => {
      i18n.off('languageChanged', listenToEventLanguageChange);
    };
  }, []); 

const sendEmail = () => {
  // Configurar os parâmetros necessários para o envio do e-mail
  const emailParams = {
    from_name: name,
    from_email: email,
    from_telefone: telefone,
    from_atuacao: segmento,
    to_email: toEmail,
    to_name: 'Fastplay',
    service: service,
  };

  console.log(emailParams);

  emailjs.send(service, 'template_2skgiw7', emailParams, '4njy-sPPY6dW49lvl')
    .then((response) => {
      console.log(emailParams);
      console.log('E-mail enviado com sucesso!', response);
      setName('');
      setEmail('');
      setSegmento('');
      setTelefone('');
    })
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
    });
};

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
          <img src={Setacima} alt="" />
        </div></div>
      

      <div className="FormularioEnvioEmailsMobile">
      <div className="nomeSolicitadoMobile">
        <input
          className="inputsMobile"
          type="text"
          placeholder={t("Envioemail.CampoEnvio")}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="emailSolicitadoMobile">
        <input
          className="inputsMobile"
          type="email" 
          placeholder={t("Envioemail.CampoEnvio1")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

<div className="telefoneSegmentoMobile">
      <div className="telefoneSolicitadoMobile">
      <input
    className="input2Mobile"
    type="tel" 
    placeholder={t("Envioemail.CampoEnvio2")}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, '');
      setTelefone(value);
    }}
    value={telefone}
    pattern="[0-9]*"  
    inputMode="numeric" 
  />
      </div>

      <div className="segmentoSolicitadoMobile">
        <input
          className="input1Mobile"
          type="text"
          placeholder={t("Envioemail.CampoEnvio3")}
          onChange={(e) => setSegmento(e.target.value)}
          value={segmento}
        />
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
        <img src={Imagembotao} alt="" />
      <input onClick={sendEmail} className="MarcaReuniaoMobile" type="submit" value={t("Envioemail.Reuniao")} /></div>
      </div>
      <div className="colorBlack">
      </div>
      </div>
      
    </div>
  );
}

export default EnvioemailMobile;
