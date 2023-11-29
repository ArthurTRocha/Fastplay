import React from "react";
import "./crescaconoscomobile.css"
import { useTranslation } from "react-i18next";
import crescaconosco from "../../../assets/image/crescaconosco.png"

function CrescaconoscoMobile () {

    const { t } = useTranslation();

    return (
             <div className="crescaConoscoMobile">
            <div className="textoscrescaConoscoMobile">
            <h1>
            {t('CadastroMobile.cresca1')}
            </h1>
            <p> {t('CadastroMobile.cresca2')} {`\n`}
            {t('CadastroMobile.cresca3')} {`\n`}
            {t('CadastroMobile.cresca4')} {`\n`}
            {t('CadastroMobile.cresca5')} {`\n`}
            {t('CadastroMobile.cresca6')}
            </p>
        
        </div>

        <div className="imagemCrescaConoscoPaiMobile">
        <div className="imagemCrescaConoscoMobile">
            <img src={crescaconosco} alt="" />

            </div>
            </div>
        </div>

    )
}
export default CrescaconoscoMobile;