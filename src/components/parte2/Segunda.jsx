import React from 'react';
import "./segunda.css"

function Segunda(){
    function scrollToTitulo3() {
        const parte3 = document.getElementById('parte3');
        if (parte3) {
          parte3.scrollIntoView({ behavior: 'smooth' });
        }
      }
    // FUNCAO MOBILE
    function scrollToTitulo3M() {
      const parte3MOBILE = document.getElementById('parte3MOBILE');
      if (parte3MOBILE) {
        parte3MOBILE.scrollIntoView({ behavior: 'smooth' });
      }
    }



return (
<div className="Segunda">

<div className="parte2">
        <h1>
        Descubra como a FastPlay vai <br />
        alavancar seu negócio!
        </h1>
        <p>Empresas de sucesso têm suas origens modestas, mas alcançaram <br />
        o crescimento por meio de investimentos em marketing. A missão <br />
        da Fast Play Marketing é impulsionar suas vendas e visibilidade. E <br />
        você, pronto pra potencializar seu sucesso com a FastPlay <br />
        Marketing?</p>
        <button className='cns' onClick={scrollToTitulo3}>CONHEÇA NOSSOS SERVIÇOS</button>
        <button className='cnsm' onClick={scrollToTitulo3M}>CONHEÇA NOSSOS SERVIÇOS</button>

      </div>

      </div>
      )
      }
    export default Segunda;