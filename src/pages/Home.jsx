import React from 'react';
import "../styles/home.css"

{/*IMPORTS PAGINAS*/}
import Header from "../components/header/Header"  
import Primeiro from "../components/parte1/Primeiro"
import Segunda from "../components/parte2/Segunda"
import Terceira from "../components/parte3/Terceira"
import Quarta from "../components/parte4/Quarta"
import Quinta from "../components/parte5/Quinta"


function Home() {

 
  
  return (
    <div className="home">

         <Header/>

         <Primeiro/>

         <Segunda/>

         <Terceira/>

         <Quarta/>

         <Quinta/>

      

          </div>   
  );
}

export default Home;