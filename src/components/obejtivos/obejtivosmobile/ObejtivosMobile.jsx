import React from "react"
import "./obejtivosmobile.css"
import obejetivos from "../../../assets/image/obejetivos.png"
import { useTranslation } from 'react-i18next';
import setamarrom from "../../../assets/image/setamarrom.png"




function ObejtivosMobile () {
    const { t } = useTranslation();


return (
<div className="obejetivosMobile">
{`\n`} {`\n`}{`\n`}
<div className="textosObejtivosMobile">
<h1>{t('CadastroMobile.objetivo1')} {`\n`}
{t('CadastroMobile.objetivo2')}</h1>

<p>{t('CadastroMobile.alcance1')} {`\n`}
{t('CadastroMobile.alcance2')} {`\n`}
{t('CadastroMobile.alcance3')} {`\n`}
{t('CadastroMobile.alcance4')} {`\n`}
{t('CadastroMobile.alcance5')}</p>
    </div>
    <div className="imagemObjetivosMobilePai">
                <div className="imagemObjetivosMobile">
                    <img src={obejetivos} alt="Objetivos" />
                </div>
                 </div>
                 <div className="setamarromPaiMobile">
                 <div className="setamarromMobile">
                    <img src={setamarrom} alt="Seta" />
                 </div>
                 </div>
               </div>
)}

export default ObejtivosMobile;