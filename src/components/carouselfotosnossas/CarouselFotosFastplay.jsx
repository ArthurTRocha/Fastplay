import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fotoscarousel from "../../assets/image/fotoscarousel1.jpeg"
import fotoscarousel1 from "../../assets/image/fotoscarousel2.jpeg"
import fotoscarousel2 from "../../assets/image/fotoscarousel3.jpeg"
import fotoscarousel3 from "../../assets/image/fotoscarousel4.jpeg"
import fotoscarousel4 from "../../assets/image/fotoscarousel5.jpeg"
import "./carouselfotosfastplay.css"




function CarouselFotosFastplay() {


    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      arrows: false, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
  
    return (
      <div className="carouselFotosFastplay">
        <Slider {...settings}>
          <div className="carouselFotos">
            <img src={fotoscarousel} alt="Imagem 1" />
          </div>
          <div className="carouselFotos1">
            <img src={fotoscarousel1} alt="Imagem 2" />
          </div>
          <div className="carouselFotos2">
            <img src={fotoscarousel2} alt="Imagem 3" />
          </div>
          <div className="carouselFotos3">
            <img src={fotoscarousel3} alt="Imagem 4" />
          </div>
          <div className="carouselFotos4">
            <img src={fotoscarousel4} alt="Imagem 4" />
          </div>
        </Slider>
      </div>
    );
  }

export default CarouselFotosFastplay;
