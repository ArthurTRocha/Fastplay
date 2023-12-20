import React from 'react';
import "./vendasmaioresmobile.css"
import { useTranslation } from 'react-i18next';
import celular from "../../../assets/image/Instagrampostmarketingdigital.png"
import CarouselfastplayTablet from "../../carouselfastlpay/carouselfastplayTablet/CarouselFastplayTablet"
import CarouselfastplayMobile from "../../carouselfastlpay/carouselfastplaymobile/CarouselfastplayMobile"


function VendasMaioresMobile() {
    const { t } = useTranslation();
    return (
        <div className="vendasmaioresMobile">

            <div className="textosvendasmaioresMobile">
                <div className="vendasmaiores-celularMobile"><img src={celular} alt="Celular" /></div>
                <h1>
                    {t('Vendasmaiores.Titulo')} 
                    {t('Vendasmaiores.Titulo2')} 
                    {t('Vendasmaiores.Titulo3')}
                </h1>
                <p>
                    {t('Vendasmaiores.Descricao')} <span> {t('Vendasmaiores.Descricao2')} </span>{`\n`}
                    {t('Vendasmaiores.Descricao3')} <span> {t('Vendasmaiores.Descricao4')} </span> {t('Vendasmaiores.Descricao5')} 
                </p>
            </div>

            <div className="carouselFastPlayVendas">
            <CarouselfastplayTablet/>
            </div>
            <div className="carouselfastPlayVendas2">
            <CarouselfastplayMobile/>
            </div>

        </div>
    )
}

export default VendasMaioresMobile;
