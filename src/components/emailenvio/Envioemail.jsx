import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./envioemail.css"
import { useTranslation } from 'react-i18next';
import QRcode from "../../assets/image/QRcode.png"
import Imagembotao from "../../assets/image/setabotao.png"
import Setabaixo from "../../assets/image/setabaixo.png"
import Setacima from "../../assets/image/setacima.png"



function Envioemail() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [segmento, setSegmento] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || telefone === "" || segmento === "") {
      alert(Envioemail.Alert);
      return;
    }

    const templateParams = {
      to_name: name,
      from_atuacao: segmento,
      to_telefone: telefone,
      to_email: email
    }

    emailjs.send("service_kbj244q", "template_2skgiw7", templateParams, "AS-EReiZl_JcDfw--")
      .then(response => {
        console.log('E-mail enviado com sucesso!', response);
        setName('');
        setEmail('');
        setSegmento('');
        setTelefone('');
      })
      .catch(error => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar e-mail. Por favor, tente novamente.');
      });
  }
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
      <div className="setabaixo">
        <img src={Setabaixo} alt="" />
      </div>
      <div className="setacima">
          <img src={Setacima} alt="" />
        </div></div>
      

      <form className="FormularioEnvioEmails" onSubmit={sendEmail}>
      <div className="nomeSolicitado">
        <input
          className="inputs"
          type="text"
          placeholder={t("Envioemail.CampoEnvio")}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="emailSolicitado">
        <input
          className="inputs"
          type="email" 
          placeholder={t("Envioemail.CampoEnvio1")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

<div className="telefoneSegmento">
      <div className="telefoneSolicitado">
      <input
    className="input2"
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

      <div className="segmentoSolicitado">
        <input
          className="input1"
          type="text"
          placeholder={t("Envioemail.CampoEnvio3")}
          onChange={(e) => setSegmento(e.target.value)}
          value={segmento}
        />
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
        <img src={Imagembotao} alt="" />
      <input className="MarcaReuniao" type="submit" value={t("Envioemail.Reuniao")} /></div>
      </form>
      </div>
      <div className="QrcodePai">
      <div className="Qrcode"><img src={QRcode} alt="" /></div></div>

    
    </div>
  );
}

export default Envioemail;
