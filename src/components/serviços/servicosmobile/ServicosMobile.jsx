import React, { useState } from "react";
import "./servicosmobile.css"
import { useTranslation } from 'react-i18next';
import TP from "../../../assets/image/Trafegopago.png"
import EVM from "../../../assets/image/Estrategiamarketing.png"
import DSA from "../../../assets/image/desenvolvimenoaplicativos.png"
import TR from "../../../assets/image/Treinamentorepresentantes.png"
import DE from "../../../assets/image/dadosestrtegicos.png"
import GR from "../../../assets/image/gestaoredessociais.png"
import SM from "../../../assets/image/socialmedia.png"
import MG from "../../../assets/image/marketingpecommerce.png"

function Servicos() {


    function scrollToContato() {
        const envioEmailMobile = document.getElementById('envioEmailMobile');
        if (envioEmailMobile) {
            envioEmailMobile.scrollIntoView({ behavior: 'smooth' });
        }
    }

      
    const { t } = useTranslation();

    return (
        <div className="servico01Mobile">


            <div className="servicosMobile">
                <h1>{t("Servicos.Potencialize")} <span>{t("Servicos.Potencialize2")}</span></h1>
                <p>{t("Servicos.Potencialize3")} {`\n`}
                    {t("Servicos.Potencialize4")}</p>

               
                <div className="cardSuperiorMobile">

                    <div className="card1SuperiorMobile"><h3>{t("Servicos.Trafego")}</h3>
                    <div className="card1SuperiorbackMobile">
                        <p>Aumento do tráfego{`\n`}
                        qualificado para o site,{`\n`}
                        conversões mais altas;{`\n`}
                        alcance de público-alvo{`\n`}
                        especifico,{`\n`}
                        maximização do ROI</p>
                            </div>
                        <div className="iconecardsuperiorMobile">
                            <div className="cardservicoimagemMobile"><img src={TP} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={TP} alt="" /></div>

                        </div>
                    </div>


                    <div className="card3SuperiorMobile"><h3>{t("Servicos.Desenvolvimento")} {`\n`}
                        {t("Servicos.Desenvolvimento2")} {`\n`}
                        {t("Servicos.Desenvolvimento3")}</h3>
                        <div className="card3SuperiorbackMobile">
                            <p>Sites e aplicativos{`\n`}
                            profissionais,{`\n`}
                            experiência do usuário{`\n`}
                            aprimorada, {`\n`}
                            acessibilidade em {`\n`}
                            dispositivos móveis {`\n`}
                            maior conversão</p>
                            </div>
                        <div className="iconecardsuperior2Mobile">
                            <div className="cardservicoimagemMobile"><img src={DSA} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={DSA} alt="" /></div>
                        </div>
                    </div>

                    <div className="card2SuperiorMobile"><h3>{t("Servicos.Estrategia")} {`\n`}
                        {t("Servicos.Estrategia2")} {`\n`}
                        {t("Servicos.Estrategia3")}</h3>
                        <div className="card2SuperiorbackMobile">
                            <p>Aumento das taxas de{`\n`}
                            conversão,{`\n`}
                            crescimento da base{`\n`}
                            de clientes,{`\n`}
                            diferenciação da{`\n`}
                            concorrência,{`\n`}
                            maximização do ROI</p>
                            </div>
                        <div className="iconecardsuperior1Mobile">
                            <div className="cardservicoimagemMobile"><img src={EVM} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={EVM} alt="" /></div>
                        </div>
                    </div>


                    <div className="card4SuperiorMobile"><h3>{t("Servicos.Treinamento")} {`\n`}
                        {t("Servicos.Treinamento2Mobile")}</h3>
                        <div className="card4SuperiorbackMobile">
                            <p>Equipes de vendas{`\n`}
                            mais componentes,{`\n`}
                            aumento nas vendas,{`\n`}
                            abordagem de vendas {`\n`}
                            consistente, melhoria{`\n`}
                            do atendimento ao{`\n`}
                            cliente </p>
                            </div>
                        <div className="iconecardsuperior3Mobile">
                            <div className="cardservicoimagemMobile"><img src={TR} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={TR} alt="" /></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="botaotracoMobile">
                <div className="btnContrate1Mobile"></div>
                <div className="btnContrate2Mobile"> </div>
                <div className="btnContrateMobile"><button onClick={scrollToContato}>{t("Servicos.Contrate")}</button></div></div>



            <div className="servico1Mobile">

            <div className="servicosMobile">

                <div className="cardInferiorMobile">
                    
                    


                   
                    <div className="card1InferiorMobile">
                        <h3>{t("Servicos.Gestao")} {`\n`}
                            {t("Servicos.Gestao2")} {`\n`}
                            {t("Servicos.Gestao3")}</h3>
                            <div className="card1InferiorbackMobile">
                                <p>Análise de dados de {`\n`}
                                mercado, insights {`\n`}
                                valiosos, tomada de {`\n`}
                                decisões informadas, {`\n`}
                                vantagem competitiva</p>
                                    </div>
                        <div className="iconecardInferiorMobile">
                            <div className="cardservicoimagemMobile"><img src={DE} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={DE} alt="" /></div>
                        </div>
                    </div>


                    


                    <div className="card3InferiorMobile"><h3>{t("Servicos.Profissional")} {`\n`}
                        {t("Servicos.Profissional2")} {`\n`}
                        {t("Servicos.Profissional3")}</h3>
                        <div className="card3InferiorbackMobile">
                                <p>Desenvolvimento de{`\n`}
                                uma identidade de {`\n`}
                                marca única,{`\n`}
                                gerenciamento de{`\n`}
                                redes sociais, eficaz,{`\n`}
                                construção de{`\n`}
                                relacionamentos com{`\n`}
                                clientes</p>
                                    </div>
                        <div className="iconecardInferior2Mobile">
                            <div className="cardservicoimagemMobile"><img src={SM} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={SM} alt="" /></div>
                        </div>
                    </div>
                    <div className="card2InferiorMobile"><h3>{t("Servicos.Gestaors")} {`\n`}
                        {t("Servicos.Gestaors2")}</h3>
                        <div className="card2InferiorbackMobile">
                                <p>Engajamento da{`\n`}
                                audiência, criação de{`\n`}
                                uma presença online{`\n`}
                                solida, construção de{`\n`}
                                relacionamentos com {`\n`}
                                clientes, aumento da{`\n`}
                                visibilidade da marca.</p>
                                    </div>
                        <div className="iconecardInferior1Mobile">
                            <div className="cardservicoimagemMobile"><img src={GR} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={GR} alt="" /></div>
                        </div>
                    </div>


                    <div className="card4InferiorMobile"><h3>{t("Servicos.Marketing")} {`\n`}
                        {t("Servicos.Marketing2")}</h3>
                        <div className="card4InferiorbackMobile">
                                <p>Aumento das vendas{`\n`}
                                online, otimização de{`\n`}
                                páginas de produtos, {`\n`}
                                estratégias {`\n`}
                                promocionais eficazes, {`\n`}
                                expansão do {`\n`}
                                e-commerce</p>
                                    </div>
                        <div className="iconecardInferior3Mobile">
                            <div className="cardservicoimagemMobile"><img src={MG} alt="" /></div>
                            <div className="cardservicoimagembackMobile"><img src={MG} alt="" /></div>
                        </div>
                    </div>

                </div>


            </div>
            </div>





        </div>
    )
}
export default Servicos;