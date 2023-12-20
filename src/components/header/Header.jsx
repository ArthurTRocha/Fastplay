import React from 'react';
import Select from 'react-select';
import { useRef, useEffect, useState } from "react";
import logo from "../../assets/image/logo.png"
import LogoEN from "../../assets/image/FastplayMKT.png"
import "./header.css"
import brasil from "../../assets/image/brazil.png"
import usd from "../../assets/image/united-states-of-america.png"
import france from "../../assets/image/france.png"
import italy from "../../assets/image/italy.png"
import spain from "../../assets/image/spain.png"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Link } from 'react-router-dom';


function Header() {
  

  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("pt"); // Estado para controlar o idioma selecionado
  const [content, setContent] = useState([selectedLanguage]);

  const getImageForLanguage = () => {
    const currentLanguage = i18n.language;

    switch (currentLanguage) {
        case 'en':
            return LogoEN;
        case 'es':
            return LogoEN;
        case 'it':
            return LogoEN;
        case 'fr':
            return LogoEN;
        case 'pt':
            return logo;
        default:
            return logo;
    }
};

const imageSrc = getImageForLanguage();

  const customStyles = {
    // Estilos personalizados para o Select
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #000',
      borderRadius: '0.5vw',
      cursor: 'pointer',
      backgroundColor: '#fff',
      fontWeight: 'bold',
      color: '#000',
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
    const test = language;

    if(test == "pt") {
        fireEventEmailChange('pt');
    } else {
        fireEventEmailChange('else');
    }

    localStorage.setItem('selectedLanguage', language);
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    
  };

  const fireEventEmailChange = (event) => {
    const selectedValue = event;
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: selectedValue }));
  };

  // useEffect(() => {
  //   const language = localStorage.getItem('selectedLanguage')
  //   fireEventEmailChange(language);
     
  // }, []);

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

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, []);


  function scrollToservicos() {
    const servicos = document.getElementById('servicos');
    if (servicos) {
      servicos.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToentreContato() {
  const entreContato = document.getElementById('entreContato');
  if (entreContato) {
    entreContato.scrollIntoView({ behavior: 'smooth' });
  }
}

  return (
    <div className="Header" id="Header">
      <Link to="/home">
        <img className='logo' src={imageSrc} alt="Fastplay" />
      </Link>

      <div className="todasopcoes">
        <div className="opcoes">
        <div className="opcoes4">
            <Link to="/home">{t("Saibamais.Home")}</Link>
          </div>

          <a href="#" onClick={scrollToservicos}>{t('Header.Servicos')}</a>
          <div />
    
          <div className="opcoes2">
            <a href="#" onClick={scrollToentreContato}>{t('Header.Contato')}</a>
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
              // handleLanguageChange(newLanguage);
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
