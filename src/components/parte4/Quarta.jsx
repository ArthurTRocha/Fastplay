import React from 'react';
import "./quarta.css"
import {RxSewingPinFilled} from "react-icons/rx"
import { BsDashLg } from "react-icons/bs";
import celular from "../../assets/image/celular.png"


function Quarta() {

    return(

        <div className="Quarta">

{/*-------------------------------------------------PARTE PC------------------------------------------------- */}

      <div className='titulo2' id='titulo2'>
        <h1>Tenha a Fastplay em seu negócio!</h1>

        <div className='cards'>
        <div className='card1'>
    <h4>Plano de marketing <br />
    <span className='laranja'>personalizado</span> e <span className='laranja'>estratégico</span><br />
    para público alvo referente</h4>
    </div>

    <div className="card2">
      <h4>Priorizamos a análise de dados e <br/>
       relatórios para garantir que suas <br />
      <span className='laranja'>campanhas sejam eficazes</span>, fornecendo <br />
      <span className='laranja'>resultados mensuráveis</span> e <span className='laranja'>oportunidades <br />
      </span> contínuas de <span className='laranja'>aprimoramento.</span></h4>
    </div>

    <div className="card3">
      <h4>Deixe nos cuidar de suas <br />
      redes sociais com <span className='laranja'>estratégias <br /> 
      eficazes, conteúdo envolvente e <br /> 
      interação</span> com seu público</h4>
    </div>

    <div className="card4">
      <h4>Com presença em <span className='laranja'>nível <br />
       internacional,</span> estamos prontos para <br /> 
       <span className='laranja'>atender clientes em todo o mundo</span>, <br /> 
       adaptando nossas <span className='laranja'>estratégias</span> de <br /> 
       acordo com as particularidades de <br />
       cada mercado.</h4>
    </div>
    </div>
    <div className="celular">
    <img className='telefone' src={celular} alt="Celular"/>
        
    <div className="icons">
     <div className="Icon">
       <BsDashLg className='BsDashLg'/>
      <RxSewingPinFilled className='RxSewingPinFilled'/>
      </div>

      <div className='Icon1'>
      <RxSewingPinFilled className='RxSewingPinFilledd'/>
      <BsDashLg className='BsDashLg'/>
      </div>

      <div className='Icon2'>
      <RxSewingPinFilled className='RxSewingPinFilleddd'/>
      <BsDashLg className='BsDashLg'/>
      </div>

      <div className="Icon3">
      <RxSewingPinFilled className='RxSewingPinFilledddd'/>
      <BsDashLg className='BsDashLg'/>
      </div> 
    </div>  
      </div>
      </div>
{/*----------------------------------------------PARTE MOBILE------------------------------------------------- */}
<div className="titulo2Mobile" id='titulo2Mobile'>
  <h1>TESTE DE PUXADA</h1>
</div>

                                               {/* PARTE A FAZER */}

{/*---------------------------------------------------------------------------------------------------------- */}

        </div>

    )
}
export default Quarta;