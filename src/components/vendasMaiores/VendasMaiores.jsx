import React from 'react';
import "./vendasmaiores.css"
import { useTranslation } from 'react-i18next';
import celular from "../../assets/image/Instagrampostmarketingdigital.png"
import Carouselfastplay from "../carouselfastlpay/Carouselfastplay"
import CarouselFTablet from "../carouselfastlpay/carouselfastplayTablet/CarouselFastplayTablet"


function VendasMaiores() {
    const { t } = useTranslation();
    return (
        <div className="vendasmaiores">

            <div className="textosvendasmaiores">
                <div className="vendasmaiores-celular"><img src={celular} alt="" /></div>
                <h1>
                {t('Vendasmaiores.Titulo')} {`\n`}
                {t('Vendasmaiores.Titulo2')} {`\n`}
                {t('Vendasmaiores.Titulo3')}
                </h1>
                <p>
                {t('Vendasmaiores.Descricao')} <span> {t('Vendasmaiores.Descricao2')} </span>{`\n`}
                {t('Vendasmaiores.Descricao3')} <span> {t('Vendasmaiores.Descricao4')} </span> {t('Vendasmaiores.Descricao5')} 
                </p>

            </div>

            <div className="Carouselfastplay"> <Carouselfastplay/></div>
           


            <div className="carouselFTablet"><CarouselFTablet/></div>
            
            


       
        </div>
    )
}
export default VendasMaiores;