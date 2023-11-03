import React from 'react';
import "./primeiro.css"

function Primeiro() {

    function scrollToTitulo2() {
        const titulo2 = document.getElementById('titulo2');
        if (titulo2) {
          titulo2.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // FUNCAO MOBILE
  function scrollToTitulo2Mobile() {
    const titulo2Mobile = document.getElementById('titulo2Mobile');
    if (titulo2Mobile) {
      titulo2Mobile.scrollIntoView({ behavior: 'smooth' });
    }
  }
    
    return (
        <div className="Primeiro">
             <div className='titulo'>
        <h1>
          Na Fastplay, <br />
          transformamos <br />
          visões em realidade 
        </h1>
        <p>
          Impulsionamos sua empresa por todo o Brasil com <br />
          expertise em markenting e gestão de redes sociais.
        </p>
        <button className='saibamais' onClick={scrollToTitulo2}>SAIBA MAIS</button>
        <button className='saibamais-mobile' onClick={scrollToTitulo2Mobile}>SAIBA MAIS</button>  {/*BUTTON TELEFONE */}
      </div>
        </div>
    )

}
export default Primeiro;
