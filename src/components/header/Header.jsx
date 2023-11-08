import React from 'react';
import Select from 'react-select';
import { useRef, useEffect, useState } from "react";
import logo from "../../assets/image/logo.png"
import "./header.css"
import brasil from "../../assets/image/brazil.png"
import usd from "../../assets/image/united-states-of-america.png"
import france from "../../assets/image/france.png"
import italy from "../../assets/image/italy.png"
import spain from "../../assets/image/spain.png"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';




function Header() {
  const { t } = useTranslation();



  const [selectedLanguage, setSelectedLanguage] = useState("pt-BR"); // Estado para controlar o idioma selecionado
  const [content, setContent] = useState([selectedLanguage]);

  const customStyles = {
    // Estilos personalizados para o Select
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #304269', // Tamanho da borda fixo em pixels
      borderRadius: '0.5vw',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      fontWeight: 'bold',
      color: '#304269',
      transition: 'background-color 0.3s ease-in-out',
      marginRight: '0.5vw',
      padding: '0 !important',
      height: '1vh'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      margin: '0',
      padding: '0'
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      marginTop: '0',
      marginBottom: '0',
      padding: '0',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      padding: '0',
    }),
  };
  




  const flagToLanguage = {
    brasil: 'pt',
    usd: 'en',
    france: 'fr',
    italy: 'it',
    spain: 'es',
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Atualize o idioma com o novo idioma selecionado
  };

  const languages = [
    {
      value: 'pt',
      label: (
        <div onClick={() => handleLanguageChange('pt')}>
          <img src={brasil} className="bandeira" title="Português" />
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div onClick={() => handleLanguageChange('en')}>
          <img src={usd} className="bandeira" title="English" />
        </div>
      ),
    },
    {
      value: 'fr',
      label: (
        <div onClick={() => handleLanguageChange('fr')}>
          <img src={france} className="bandeira" title="Français" />
        </div>
      ),
    },
    {
      value: 'it',
      label: (
        <div onClick={() => handleLanguageChange('it')}>
          <img src={italy} className="bandeira" title="Italiano"
          />
        </div>
      ),
    },

    {
      value: 'es',
      label: (
        <div onClick={() => handleLanguageChange('es')}>
          <img src={spain} className="bandeira" title="Español" />
        </div>
      ),
    },
  ];

  return (
    <div className="Header">
      <img className='logo' src={logo} alt="Fastplay" />


      <div className="todasopcoes">
        <div className="opcoes">
          <a href="">{t('Header.Servicos')}</a>
          <div />
          <div className="opcoes2">
            <a href="">{t('Header.Contato')}</a>
          </div>
          <div className="opcoes3">
            <a href="">{t('Header.Sobre nos')}</a>
          </div>
        </div>
        <div className="SelectLanguage">
          <Select
            styles={customStyles}
            className='SelectHeader'
            options={languages}
            value={languages.find((lang) => lang.value === selectedLanguage)}
            isSearchable={false}
            onChange={(selectedOption) => {
              const newLanguage = flagToLanguage[selectedOption.value];
              setSelectedLanguage(newLanguage);
              handleLanguageChange(newLanguage);
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </div>

      </div>
    </div>
  )
}
export default Header;
