import React from "react";
import "./potencialmobile.css";
import seta from "../../../assets/image/seta.png";
import MapasMobile from "../../carouselmapas/carouselmapasmobile/CarouselmapaMobile";
import Setaa from "../../../assets/image/Setinha.png";
import { useTranslation } from 'react-i18next';

function PotencialMobile() {
    const { t } = useTranslation();
    return (
        <div className="potencialMobile">

            <div className="potencialtextoMobile">
                <h1>
                    {t("Potencial.Maximize")} {`\n`}
                    {t("Potencial.Maximize2")}{t("Potencial.Maximize3")} {`\n`}
                    {t("Potencial.Maximize4")}
                </h1>
            </div>

            <div className="quadroempresarialMobile">
                <div className="anosMobile">
                    <div className="ano2022Mobile"><p>2022</p></div>
                    <div className="iconesPotencialMobile">
                        <div className="tracoMobile"><p>75%</p></div>
                        <div className="tracoMobile"><p>50%</p></div>
                        <div className="tracoMobile"><p>25%</p></div>
                        <div className="tracoMobile"><p>0%</p></div>
                    </div>
                    <div className="setaAnossMobile">
                        <img src={Setaa} alt="Seta" />
                    </div>
                    <div className="ano2023Mobile"><p>2023</p></div>
                </div>
            </div>

            <div className="setaempresarialMobile">
                <div className="setaempresarial1Mobile">
                    <img className="imagemSetaMobile" src={seta} alt="Seta-Fastplay" />
                    <img className="imagemSetaMobile" src={seta} alt="Seta-Fastplay" />
                    <div className="descricaosetaMobile">
                        <div className="descriacaoseta1Mobile">
                            <p><span>+</span> {t("Potencial.De")} {`\n`}
                                <span className="span1Mobile">40</span>{`\n`}
                                {t("Potencial.Nacionais")}</p>

                            <p><span>+</span> {t("Potencial.De")} {`\n`}
                                <span className="span1Mobile">25</span>{`\n`}
                                {t("Potencial.Internacionais")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="potencialtextosMobile">
                <p>
                    {t("Potencial.Dados")} {`\n`}
                    {t("Potencial.Dados2")}
                </p>
            </div>

            <div className="posicaoMapa01Mobile">
                <div className="posicaoMapaMobile"><MapasMobile /></div>
            </div>
        </div>
    );
}

export default PotencialMobile;
