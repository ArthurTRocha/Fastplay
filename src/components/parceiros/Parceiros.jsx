import React from 'react';
import "./parceiros.css";
import { useTranslation } from 'react-i18next';
import Carousel from "../carouselparceiros/Carouselparceiros";


function Parceiros() {

  const { t } = useTranslation();

    return(
        <div className="Parceiro">

<div className="titulo3">
        <h1>
        {t('Parceiro.Titulo')}
        </h1>
        <p>
        {t('Parceiro.Descricao')} <br />
        {t('Parceiro.Descricao2')}
        </p>
      <Carousel/>
     
      
    </div>
    <button className='faleconosco'>FALE CONOSCO!</button>
    </div>


    )
}
export default Parceiros;