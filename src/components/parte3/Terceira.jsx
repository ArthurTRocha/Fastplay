import React from 'react';
import "./terceira.css"
import logo from "../../assets/image/logo.png"
import ConsultoriaPersonalizada from "../../assets/image/ConsultoriaPersonalizada.jpg"
import CriaçãoAPPeWeb from "../../assets/image/CriaçãoAPPeWeb.jpg"
import Markenting from "../../assets/image/Markenting.jpg"
import TrafegoPago from "../../assets/image/TrafegoPago.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

function Terceira() {


return(
<div className="Terceira">
{/*-----------------------------------------PARTE PC----------------------------------------------------- */}

<div className="parte3" >
      <img className='logo2' src={logo} alt="Fastplay" />
                 <div id='parte3'></div> {/*DIV QUE VAI SER PUXADA */}
        <h1>Nossos serviços</h1>
        <p>Conheça nossos serviços especializados e transforme seu <br />
        sucesso empresarial.</p>


         <div className="fotos"> 
        <div className="imagem">
        <img src={ConsultoriaPersonalizada} alt="Consultoria personalizada"/>
        <div className="descricaoC">Consultoria personalizada</div>
        </div>
 
        <div className="imagem1">
        <img src={CriaçãoAPPeWeb} alt="Criação de App & Web Site" />
        <div className="descricaoAW">Criação de App & Web Site</div>
        </div>

        <div className="imagem2">
        <img src={Markenting} alt="Marketing" />
        <div className="descricaoM">Marketing</div>
        </div>
        

        <div className="imagem3">
        <img src={TrafegoPago} alt="Trafégo Pago" />
        <div className="descricaoT">Trafégo Pago</div>
        </div> 
         </div> 
      </div>
{/*-----------------------------------------PARTE MOBILE----------------------------------------------------- */}
<div className="parte3MOBILE" >
      <img className='logo2-mobile' src={logo} alt="Fastplay" id='parte3MOBILE'/>
                 <div id='parte3'></div> {/*DIV QUE VAI SER PUXADA */}
        <h1>Nossos serviços</h1>
        <p>Conheça nossos serviços especializados e transforme seu <br />
        sucesso empresarial.</p>
     
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={true} // Ative as miniaturas
        width="100%"
        centerSlidePercentage={100} // Ajuste a porcentagem de visibilidade de cada imagem
        showIndicators={false}
      >
        <div className="imagem-mobile">
        <img src={ConsultoriaPersonalizada} alt="Consultoria personalizada"/>
        <div className="descricaoC">Consultoria personalizada</div>
        </div>

        <div className="imagem1-mobile">
        <img src={CriaçãoAPPeWeb} alt="Criação de App & Web Site" />
        <div className="descricaoAW">Criação de App & Web Site</div>
        </div>

        <div className="imagem2-mobile">
        <img src={Markenting} alt="Marketing" />
        <div className="descricaoM">Marketing</div>
        </div>
        
        <div className="imagem3-mobile">
        <img src={TrafegoPago} alt="Trafégo Pago" />
        <div className="descricaoT">Trafégo Pago</div>
        </div> 
      </Carousel>
      </div>

{/*---------------------------------------------------------------------------------------------------------- */}
</div>

)

}
export default Terceira;