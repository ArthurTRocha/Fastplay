import React from 'react';
import "./quinta.css";
import UORK from "../../assets/image/UORK.png"
import ALLBORO from "../../assets/image/ALLBORO.png"
import ALLMIX from "../../assets/image/ALLMix.png"
import AVB from "../../assets/image/AVB.png"
import GELOSETE from "../../assets/image/GELOSETE.png"
import DF from "../../assets/image/DF.png"
import GMC from "../../assets/image/GMC.png"
import ADILSON from "../../assets/image/LOGOADILSON.png"
import MEDLIFE from "../../assets/image/MEDLIFE.png"
import SANATTI from "../../assets/image/SANATTI.png"
import SPX from "../../assets/image/SPX.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


function Quinta() {

    return(
        <div className="Quinta">

<div className="titulo3">
        <h1>
        Conheça nossos clientes parceiros
        </h1>
        <p>
        Escolher a Fastplay significa optar por uma agência de marketing e comunicação <br />
        comprometida em alavancar o sucesso de sua marca em uma escala global.
        </p>
      
      <br />
      <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={true} // Ative as miniaturas
        width="100%"
        centerMode={true} // Ative o modo de centro para mostrar várias imagens ao mesmo tempo
        centerSlidePercentage={20} // Ajuste a porcentagem de visibilidade de cada imagem
        showIndicators={false}
      >
        <div>
          <img className="carouselfotos" src={UORK} alt="UORK" />
        </div>
        <div>
          <img className="carouselfotos" src={AVB} alt="AVB" />
        </div>
        <div>
          <img className="carouselfotos" src={ALLBORO} alt="ALLBORO" />
        </div>
        <div>
          <img className="carouselfotos" src={ALLMIX} alt="ALLMIX" />
        </div>
        <div>
          <img className="carouselfotos" src={DF} alt="DF" />
        </div>
        <div>
          <img className="carouselfotos" src={GELOSETE} alt="GELOSETE" />
        </div>
        <div>
          <img className="carouselfotos" src={GMC} alt="GMC" />
        </div>
        <div>
          <img className="carouselfotos" src={ADILSON} alt="ADILSON" />
        </div>
        <div>
          <img className="carouselfotos" src={MEDLIFE} alt="MEDLIFE" />
        </div>
        <div>
          <img className="carouselfotos" src={SANATTI} alt="SANATTI" />
        </div>
        <div>
          <img className="carouselfotos" src={SPX} alt="SPX" />
        </div>
      </Carousel>
      
    </div>
    <button className='faleconosco'>FALE CONOSCO!</button>
    </div>


        </div>
    )
}
export default Quinta;