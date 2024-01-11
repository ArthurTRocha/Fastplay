import React, { useState, useEffect } from "react";
import analisededados from "../../../assets/image/analisededados.jpg";
import Reputação from "../../../assets/image/Reputação.jpg";
import Expansão from "../../../assets/image/Espansao+.jpg";
import leads from "../../../assets/image/leads.jpg";
import "./carouselfastplaytablet.css"; 
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Click from "../../../assets/image/Click.png";

function CarouselfastplayTablet() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,

  };

  const images = [
    {
      id: 1,
      src: analisededados,
      alt: "Analise",
      title: t("Carousel.Analise") + t("Carousel.Analise1"),
      text:
        t("Carousel.Paragrafo") ,
    },
    {
      id: 2,
      src: Reputação,
      alt: "Reputacao",
      title: t("Carousel.Reputacao") + t("Carousel.Reputacao1"),
      text:
        t("Carousel.Paragrafo1") ,
    },
    {
      id: 3,
      src: Expansão,
      alt: "Expansao",
      title: t("Carousel.Expansao") + t("Carousel.Expansao1"),
      text:
        t("Carousel.Paragrafo2") ,
    },
    {
      id: 4,
      src: leads,
      alt: "Leads",
      title: t("Carousel.Leads") + t("Carousel.Leads1"),
      text:
        t("Carousel.Paragrafo3") ,
    },
  ];

  return (
    <div className="carouselMarketingPositionTablet">
      <div className="CarouselfastplayTablet"> 
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="carousel-itemTablet"> 
              <div className="imagemCarouselfastplayTablet"> 
                <img src={image.src} alt={image.alt} />
                <div className="textCarouselTablet"> 
                  <div className="posicaoh3epTablet">
                    <h3 dangerouslySetInnerHTML={{ __html: image.title }} />
                    <p dangerouslySetInnerHTML={{ __html: image.text }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="posicaoClick">
          <div className="clickTablet"> 
            <img src={Click} alt="ClickTablet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselfastplayTablet;
