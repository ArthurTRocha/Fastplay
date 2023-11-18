import React, { useState } from 'react';
import Slider from 'react-slick';
import "./informacoesMobile.css";
import Alcance from "../../../assets/image/Alcance.png";
import Estrategias from "../../../assets/image/Estrategias.png";
import Otimizacao from "../../../assets/image/Otimizacao.png";
import ConstrucaoMarca from "../../../assets/image/ConstrucaoMarca.png";
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InformacoesMobile() {
  const { t } = useTranslation();

  const infoItems = [
    { image: Alcance, text: t("Informacoes.Maximizacao") },
    { image: Estrategias, text: `${t("Informacoes.Personalizacao1")} \n ${t("Informacoes.Personalizacao2")}` },
    { image: Otimizacao, text: `${t("Informacoes.Otimizacao1")} \n ${t("Informacoes.Otimizacao2")}` },
    { image: ConstrucaoMarca, text: `${t("Informacoes.Construcao1")} \n ${t("Informacoes.Construcao2")} \n ${t("Informacoes.Construcao3")}` },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
  };

  return (
    <div className="informacoesMobilePosicao">
    <div className="informacoesMobile">
    <Slider {...settings}>
      {infoItems.map((item, index) => (
        <div key={index} className="infoItem">
          <img className='informacoesMIcone' src={item.image} alt={`Imagem ${index + 1}`} />
          <p className='informacoesMText'>{item.text}</p>
        </div>
      ))}
    </Slider>
    </div>
    </div>
  );
}

export default InformacoesMobile;
