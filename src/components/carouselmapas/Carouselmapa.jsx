import React from "react";
import { useState } from 'react';
import mapaEUA from "../../assets/image/mapaEUA.png";
import mapaBrasil from "../../assets/image/mapaBrasil.png";
import "./carouselmapa.css";
import SetaPais from "../../assets/image/SetaPais.png"
import { useTranslation } from 'react-i18next';



function Carouselmapa() {
  const { t } = useTranslation();

  const slides = [
    {
      image: mapaBrasil,
      text: t("Potencial.Brasil"),
    },
    {
      image: mapaEUA,
      text: t("Potencial.ESTADOS UNIDOS"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };


  return (
    <div className="carouselMapas">
      <div className="slideCarousel">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].text} />
        <p>{slides[currentSlide].text}</p>
      </div>
      <div className="setaPais">
      <button onClick={nextSlide}><img src={SetaPais} alt="" /></button></div>
    </div>
  );
}

export default Carouselmapa;
