import React from "react";
import "./trabalheconosco2.css"
import setamarrom from "../../../assets/image/setamarrom2.png"
import { useTranslation } from 'react-i18next';
import CarouselFotos from "../../carouselfotosnossas/CarouselFotosFastplay";

function TrabalheConosco2() {
    const { t } = useTranslation();

    return (
        <div className="TrabalheConosco2">

            <div className="imagemSetamarromTC">
                <img src={setamarrom} alt="Seta" />
            </div>
              <div className="textosTC">
            <h1>{t("Conosco.Titulo")}</h1>
            <p>{t("Conosco.Paragrafo")}</p>
        </div>
        <CarouselFotos/>
        <div className="textosTC_1Pai">
        <div className="textosTC_1">
            <h1>{t("Conosco.Titulo1")}</h1>
            <p>{t("Conosco.Paragrafo1")}</p>
        </div>
        </div>
        </div>
    )
}
export default TrabalheConosco2;