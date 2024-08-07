import React, { useState, useEffect } from "react";
import analisededados from "../../assets/image/analisededados.jpg";
import Reputação from "../../assets/image/Reputação.jpg";
import Expansão from "../../assets/image/Espansao+.jpg";
import leads from "../../assets/image/leads.jpg";
import "./carouselfastplay.css";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mouse from "../../assets/image/mouse.png"



function Carouselfastplay() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  

  const images = [
    {
      id: 1,
      src: analisededados,
      alt: "Analise",
      title: t("Carousel.Analise") + "<br>" + t("Carousel.Analise1"),
      text:
        t("Carousel.Paragrafo"),
    },
    {
      id: 2,
      src: Reputação,
      alt: "Reputacao",
      title: t("Carousel.Reputacao") + "<br>" + t("Carousel.Reputacao1"),
      text:
        t("Carousel.Paragrafo1") ,
    },
    {
      id: 3,
      src: Expansão,
      alt: "Expansao",
      title: t("Carousel.Expansao") + "<br>" + t("Carousel.Expansao1"),
      text:
        t("Carousel.Paragrafo2") ,
    },
    {
      id: 4,
      src: leads,
      alt: "Leads",
      title: t("Carousel.Leads") + "<br>" + t("Carousel.Leads1"),
      text:
        t("Carousel.Paragrafo3") ,
    },
  ];
  

  return (
    <div className="Carouselfastplay">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <div className="imagemCarouselfastplay">
              <img src={image.src} alt={image.alt} />
            <div className="textCarousel">
              <div className="posicaoh3ep">
            <h3 dangerouslySetInnerHTML={{ __html: image.title }} />
            <p dangerouslySetInnerHTML={{ __html: image.text }} />
            </div>
              </div>
              </div>
          </div>
        ))}
      </Slider>
      <div className="mouse">
              <img src={Mouse} alt="Mouse" />
            </div>
    </div>
  );
}

export default Carouselfastplay;
