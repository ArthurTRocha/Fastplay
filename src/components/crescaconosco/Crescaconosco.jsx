import React from "react";
import "./crescaconosco.css"
import { useTranslation } from "react-i18next";
import crescaconosco from "../../assets/image/crescaconosco.png"


function Crescaconosco () {

    const { t } = useTranslation();

    return (
        <div className="crescaConosco">
            <div className="textoscrescaConosco">
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

        <div className="imagemCrescaConoscoPai">
        <div className="imagemCrescaConosco">
            <img src={crescaconosco} alt="CresceConosco" />

            </div>
            </div>

        </div>
    )
}
export default Crescaconosco;