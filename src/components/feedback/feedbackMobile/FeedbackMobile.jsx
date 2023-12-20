import React from "react";
import "./feedbackmobile.css"
import { useTranslation } from 'react-i18next';


function FeedbackMobile () {
    const { t } = useTranslation();

    return (
        <div className="feedbackMobile">
            <div className="posicaoFeedbackMobile">

             <div className="textosFeedbackMobile">
                <h1>{t("Feedback.Titulo")}</h1>
                <p>{t("Feedback.Paragrafo")}</p>
            </div>

            <div className="inputsFeedbackMobile">


            <form target="_blank" action="https://formsubmit.co/contato@fastplaycomunicacao.com.br" encType="multipart/form-data"  method="POST">
            <input type="hidden" name="_next" value="https://fastplaycomunicacao.com.br/ObrigadoMobile"/> 
            <input type="hidden" name="_captcha" value="false"/>

            

            <div className="inputsFeedBackMobile">
            <input type="text" name="name" 
            required 
            placeholder={t("Envioemail.CampoEnvio")}/>
            

            <input type="email" name="email" 
            placeholder={t("Envioemail.CampoEnvio1")}/>
                </div>


             <div className="feedbackSelecioneArquivo">
            <input type="text" name="feedback" 
            required placeholder="Feedback"
            className='inputFeedbackMobile'/>


            <label className="fileFeedbackMobile">
                {t("Feedback.Arquivo")} 
                <input type="file" name="attachment" 
                accept="image/png, image/jpeg"
                placeholder='Imagem:'/> 
                </label>
                </div>   

            <div className="buttonFeedbackMobile"> 
            <button type="submit">{t("Feedback.Button")}
            </button>
            </div>
            </form>
            </div>
            </div>

        </div>
    )
}
export default FeedbackMobile;