import React, { useState, useEffect } from 'react';
import "./feedback.css"
import FeedbackImagem from "../../assets/image/FeedbackImagem.png"
import setaesticada from "../../assets/image/setaesticada.png"
import { useTranslation } from 'react-i18next';
import Footer from "../footer/Footer"
import Header from "../header/Header"
import i18n from 'i18next';


function Feedback () {
    const { t } = useTranslation();

    const [toEmail, setToEmail] = useState('');

    useEffect(() => {
        const setToEmailForLanguage = (language) => {
            if (language === 'pt') {
                setToEmail('contato@fastplaycomunicacao.com.br');
            } else {
                setToEmail('contact@fastplaymarketing.com'); 
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


    return (
        <div className="feedback">
            <Header/>

            <div className="textosFeedback">
                <h1>{t("Feedback.Titulo")}</h1>
                <p>{t("Feedback.Paragrafo")}</p>
            </div>

            <div className="inputsFeedback">


            <form target="_blank" action={`https://formsubmit.co/${toEmail}`} encType="multipart/form-data"  method="POST">
            <input type="hidden" name="_next" value="https://fastplaycomunicacao.com.br/Obrigado"/> 
            <input type="hidden" name="_captcha" value="false"/>

            

            <div className="nameemailFeedback">
            <input type="text" name="name" 
            required 
            placeholder={t("Envioemail.CampoEnvio")}/>
            

            <input type="email" name="email" 
            placeholder={t("Envioemail.CampoEnvio1")}/>
            </div>


            
            <input type="text" name="feedback" 
            required placeholder="Feedback"
            className='inputFeedback'
            style={{ resize: 'none', width: '100%' }}
            />

            <label className="fileFeedback">
                {t("Feedback.Arquivo")} 
                <input type="file" name="attachment" 
                accept="image/png, image/jpeg"
                placeholder='Imagem:'/> 
                </label>


            <div className="buttonFeedback"> 
            <button type="submit">{t("Feedback.Button")}
            </button>
            </div>
           
            
            </form>

            </div>
            <div className="imagemFeedback">
                <img src={FeedbackImagem} alt="FeedbackImagem" />
            </div>
            <div className="setaFeedback">
                <img src={setaesticada} alt="Seta" />
            </div>

            <div>
           
            </div>
            

            <Footer/>
        </div>
    )
}
export default Feedback;