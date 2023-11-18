import React, { useState, useEffect } from "react";
import analisededados from "../../../assets/image/analisededados.jpg";
import Reputação from "../../../assets/image/Reputação.jpg";
import Expansão from "../../../assets/image/Expansão.jpg";
import leads from "../../../assets/image/leads.jpg";
import "./carouselfastplaymobile.css";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Click from "../../../assets/image/Click.png";

function Carouselfastplay() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    {
      id: 1,
      src: analisededados,
      alt: "Analise",
      title: t("Carousel.Analise") + t("Carousel.Analise1"),
      text:
        t("Carousel.Paragrafo") +
     
        t("Carousel.Paragrafo-1") +
      
        t("Carousel.Paragrafo-2") +
 
        t("Carousel.Paragrafo-3") +
  
        t("Carousel.Paragrafo-4"),
    },
    {
      id: 2,
      src: Reputação,
      alt: "Reputacao",
      title: t("Carousel.Reputacao") +  t("Carousel.Reputacao1"),
      text:
        t("Carousel.Paragrafo1") +
 
        t("Carousel.Paragrafo1-1") +
  
        t("Carousel.Paragrafo1-2") +
   
        t("Carousel.Paragrafo1-3") +

        t("Carousel.Paragrafo1-4"),
    },
    {
      id: 3,
      src: Expansão,
      alt: "Expansao",
      title: t("Carousel.Expansao") +  t("Carousel.Expansao1"),
      text:
        t("Carousel.Paragrafo2") +
  
        t("Carousel.Paragrafo2-1") +

        t("Carousel.Paragrafo2-2") +
   
        t("Carousel.Paragrafo2-3") +
     
        t("Carousel.Paragrafo2-4"),
    },
    {
      id: 4,
      src: leads,
      alt: "Leads",
      title: t("Carousel.Leads") + t("Carousel.Leads1"),
      text:
        t("Carousel.Paragrafo3") +
        
        t("Carousel.Paragrafo3-1") +
       
        t("Carousel.Paragrafo3-2") +
        
        t("Carousel.Paragrafo3-3") +
       
        t("Carousel.Paragrafo3-4"),
    },
  ];
  
  return (
    <div className="carouselMarketingPosition">
    <div className="CarouselfastplayMobile">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-itemMobile">
            <div className="imagemCarouselfastplayMobile">
              <img src={image.src} alt={image.alt} />
              <div className="textCarouselMobile">
                <div className="posicaoh3epMobile">
                  <h3 dangerouslySetInnerHTML={{ __html: image.title }} />
                  <p dangerouslySetInnerHTML={{ __html: image.text }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="posicaoClick">
      <div className="clickMobile">
        <img src={Click} alt="" />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Carouselfastplay;
