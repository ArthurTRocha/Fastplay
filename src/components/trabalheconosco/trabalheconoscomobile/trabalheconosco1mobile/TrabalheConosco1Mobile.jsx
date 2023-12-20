import React, { useState, useEffect, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import "./trabalheconosco1mobile.css"
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { IoMdBriefcase } from "react-icons/io";
import setaBotao from "../../../../assets/image/setabotao.png"
import i18n from 'i18next'; 


function TrabalheConosco1Mobile () {
    const { t } = useTranslation();
    // const [selectedLanguage, setSelectedLanguage] = useState('');

    // useEffect(() => {
    //   const listenToEventLanguageChange = (event) => {
    //     const listenedLanguage = event.detail;
    //     let toEmail = 'teste';
    //     let service = 'teste';
        
    //     if (listenedLanguage === 'pt') {
    //       toEmail = 'contato@fastplaycomunicacao.com.br';
    //       service = 'service_rzdde39';
    //     } else {
    //       toEmail = 'contact@fastplaymarketing.com';
    //       service = 'service_kbj244q';
    //     }
        
    //     console.log(toEmail);
    //     console.log(service);
    //     setToEmail(toEmail);
    //     setService(service);
    //   localStorage.setItem('selectedLanguage', listenedLanguage);
    // };

    
    //   document.addEventListener('languageChanged', listenToEventLanguageChange);

    //   const storedLanguage = localStorage.getItem('selectedLanguage');
    //   if (storedLanguage) {
    //     // Defina a seleção da bandeira ao recuperar do localStorage
    //     setSelectedLanguage(storedLanguage);
    //   }
  
    
    //   return () => {
    //     document.removeEventListener('languageChanged', listenToEventLanguageChange);
    //   };
    // }, []); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [datanascimento, setDatanascimento] = useState ('');
    const [perfil, setPerfil] = useState ('');
    const [cargo, setCargo] = useState ('');
    const [nacionalidade, setNacionalidade] = useState('');
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
      from_nacionalidade: nacionalidade,
      from_datanascimento: datanascimento,
      from_perfil: perfil,
      from_cargo: cargo,
      to_email: toEmail,
      to_name: 'Fastplay',
      service: service,
    };
  
    console.log(emailParams);
  
    // Substituir 'seu_serviço_ID', 'seu_modelo_ID' e 'seu_usuario_ID' pelos valores corretos
        emailjs.send(service, 'template_8i9ub1h', emailParams, '4njy-sPPY6dW49lvl')
        .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
        
        setName('');
        setEmail('');
        setNacionalidade('');
        setTelefone('');
        setDatanascimento('');
        setPerfil('');
        setCargo('');
        window.alert('E-mail enviado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
      });
  };
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    return (


<div className="TrabalheConosco1Mobile">





  <div className="inputsTCMobile">
<div className="inputsTC-1Mobile">
  <div className="textosInputsTCMobile">
    <h1>{t("Conosco.Dados")}</h1> <BiSolidUser className="iconeInputsTCMobile"/>
  </div>
<div className="nomesInputTCMobile">
<input
  className="inputTC_11Mobile"
  type="text"
  placeholder={t("Envioemail.CampoEnvio")}
  onChange={(e) => setName(e.target.value)}
  value={name}
/>
</div>

<div className="dataNascimento_NacionalidadeMobile">
  <div className="dataNascimentoMobile">
    <input
    className="inputTC_1Mobile"
    type="text" 
    placeholder={t("Conosco.Nascimento")}
    onChange={(e) => setDatanascimento(e.target.value)}
    value={datanascimento}/>
  </div>

  <div className="nacionalidadeMobile">
    <input
      className="inputTC_1Mobile"
      type="text" 
      placeholder={t("Conosco.Nacionalidade")}
      onChange={(e) => setNacionalidade(e.target.value)}
      value={nacionalidade}/>
  </div>

</div>
</div>










<div className="inputsTC-2Mobile">
<div className="textosInputsTC_1Mobile">
    <h1>{t("Conosco.Contato")}</h1> <MdEmail className="iconeInputsTCMobile"/>
  </div>
<div className="emailTCMobile">
<input
  className="inputTC_11Mobile"
  type="email" 
  placeholder={t("Envioemail.CampoEnvio1")}
  onChange={(e) => setEmail(e.target.value)}
  value={email}
/>
</div>


<div className="telefone_PerfilMobile">
<div className="telefoneTCMobile">
<input
className="inputTC_1Mobile"
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
<div className="perfilTCMobile">
<input
  className="inputTC_1Mobile"
  type="text" 
  placeholder={t("Conosco.Linkedin")}
  onChange={(e) => setPerfil(e.target.value)}
  value={perfil}
/>
</div>
</div>
</div>








<div className="inputsTC-3Mobile">
<div className="textosInputsTC_2Mobile">
    <h1>{t("Conosco.Disponiveis")}</h1> <IoMdBriefcase className="iconeInputsTCMobile"/>
  </div>
<div className="cargosDisponiveisTCMobile">
<select
    className="inputTC_1Mobile"
    onChange={(e) => setCargo(e.target.value)}
    value={cargo}
  >
    <option value="" disabled defaultValue>
    {t("Conosco.Selecione")}
      </option>
    <option value="opcao1">{t("Conosco.Vaga")}</option>
    <option value="opcao2">{t("Conosco.Vaga1")}</option>
    <option value="opcao3">{t("Conosco.Vaga2")}</option>
    <option value="opcao4">{t("Conosco.Vaga3")}</option>

  </select>
</div>  

</div>


      



    <button onClick={sendEmail} 
    className="cadastrarTCMobile">
      <img src={setaBotao} alt="Ícone do botão" />
      {t("Conosco.Cadastrar")}</button>
</div>
        </div>
    )
}
export default TrabalheConosco1Mobile;