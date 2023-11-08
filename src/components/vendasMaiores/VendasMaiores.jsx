import React from 'react';
import "./vendasmaiores.css"
import { useTranslation } from 'react-i18next';
import { BsDashLg } from "react-icons/bs";
import celular from "../../assets/image/Instagrampostmarketingdigital.png"


function VendasMaiores() {
    const { t } = useTranslation();
    return (
        <div className="vendasmaiores">

            <div className="textosvendasmaiores">
                <div className="vendasmaiores-celular"><img src={celular} alt="" /></div>
                <h1>
                {t('Vendasmaiores.Titulo')} <br />
                {t('Vendasmaiores.Titulo2')} <br />
                {t('Vendasmaiores.Titulo3')}
                </h1>
                <p>
                {t('Vendasmaiores.Descricao')} <span> {t('Vendasmaiores.Descricao2')} </span><br />
                {t('Vendasmaiores.Descricao3')} <span> {t('Vendasmaiores.Descricao4')} </span> {t('Vendasmaiores.Descricao5')} 
                </p>

            </div>


            <div className="vendasmaioresfotos-textos">

            <div className="vendasmaiores-fotos0">
            <BsDashLg className='BsDashLg'/>
            </div>
            <div className="vendasmaiores-texto0">
            <h1>
            Inovação <br />
            Tecnológica
            </h1>
            <p>
            A FastPlay está atualizada <br />
            com as últimas <br />
            tendências e tecnologias, <br />
            o que significa que você <br />
            se beneficiará de soluções <br />
            inovadoras e práticas <br />
            recomendadas do setor.
            </p>
            <button>Saiba mais!</button>
            </div>

            <div className="vendasmaiores-fotos1">
            <BsDashLg className='BsDashLg'/>
            </div>
            <div className="vendasmaiores-texto1">
            <h1>
                Conhecimento <br />
                Especializado
                </h1>
                <p>
                Com experiência em <br />
                marketing estratégico, a <br />
                FastPlay pode ajudar a <br />
                impulsionar o crescimento <br />
                sustentável da sua empresa, <br />
                aumentando a visibilidade, o <br />
                alcance e a eficácia das <br />
                estratégias de marketing.
                </p>
                <button>Saiba mais!</button>
            </div>

            <div className="vendasmaiores-fotos2">
            <BsDashLg className='BsDashLg'/>
            </div>
            <div className="vendasmaiores-texto2">
            <h1>
                Acompanhamento <br />
                e análise
                </h1>
                <p>
                Oferecemos  serviços de <br />
                acompanhamento e <br />
                análise contínuos, <br />
                permitindo que você tome <br />
                decisões informadas com <br />
                base em dados e métricas <br />
                de desempenho.
                </p>
                <button>Saiba mais!</button>
            </div>
            </div>


            


       
        </div>
    )
}
export default VendasMaiores;