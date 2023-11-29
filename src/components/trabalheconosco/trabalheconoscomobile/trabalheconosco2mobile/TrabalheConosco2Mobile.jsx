import React from "react";
import "./trabalheconosco2mobile.css"
import { useTranslation } from 'react-i18next';
import setamarrom from "../../../../assets/image/setamarrom2.png"
import CarouselFotosNossasMobile from "../../../../components/carouselfotosnossas/carouselfotosnossasmobile/CarouselFotosFastplayMobile"
import setaesticada from "../../../../assets/image/setaesticada.png"

function TrabalheConosco2Mobile() {
    const { t } = useTranslation();

    return (
        <div className="TrabalheConosco2Mobile">

        

            <div className="imagemSetamarromTCMobile">
                <img src={setamarrom} alt="" />
            </div>
              <div className="textosTCMobile">
            <h1>{t("Conosco.Titulo")}</h1>
            <p>{t("Conosco.Paragrafo")}</p>
        </div>
        <CarouselFotosNossasMobile/>
        <div className="textosTC_1Mobile">
            <h1>{t("Conosco.Titulo1")}</h1>
            <p>{t("Conosco.Paragrafo1")}</p>
        </div>
        </div>
    )
}
export default TrabalheConosco2Mobile;