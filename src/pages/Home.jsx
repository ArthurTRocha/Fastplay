import React from 'react';
import "../styles/home.css"

{/*IMPORTS PAGINAS*/}
import Header from "../components/header/Header"  
import Parceiro from "../components/parceiros/Parceiros"
import EmpresasSM from "../components/EmpresasSM/EmpresasSM"
import VendasMaiores from '../components/VendasMaiores/VendasMaiores';
import Informacoes from "../components/Informações/Informacoes";


function Home() {

 
  
  return (
    <div className="home">

         <Header/>

         <EmpresasSM/>

         <Informacoes/>

         <VendasMaiores/>

         <Parceiro/>

      

          </div>   
  );
}

export default Home;