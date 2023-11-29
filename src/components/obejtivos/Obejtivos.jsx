import React from "react"
import "./obejtivos.css"
import obejetivos from "../../assets/image/obejetivos.png"
import { useTranslation } from 'react-i18next';
import setamarrom from "../../assets/image/setamarrom.png"



function Obejtivos () {
    const { t } = useTranslation();


return (
<div className="obejetivos">
<div className="textosObejtivos">
<h1>{t('CadastroMobile.objetivo1')} {`\n`}
{t('CadastroMobile.objetivo2')}</h1>

<p>{t('CadastroMobile.alcance1')} {`\n`}
{t('CadastroMobile.alcance2')} {`\n`}
{t('CadastroMobile.alcance3')} {`\n`}
{t('CadastroMobile.alcance4')} {`\n`}
{t('CadastroMobile.alcance5')}</p>
    </div>
    <div className="imagemObjetivosPai">
                <div className="imagemObjetivos">
                    <img src={obejetivos} alt="Imagem" />
                </div>
                 </div>
                 <div className="setamarromPai">
                 <div className="setamarrom">
                    <img src={setamarrom} alt="Seta" />
                 </div>
                 <div className="tracoObjetivo"></div>
                 </div>
            
               </div>
)}

export default Obejtivos;