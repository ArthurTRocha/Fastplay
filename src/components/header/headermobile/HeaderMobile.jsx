import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import logo from '../../../assets/image/logo.png';
import brasil from '../../../assets/image/brazil.png';
import usd from '../../../assets/image/united-states-of-america.png';
import france from '../../../assets/image/france.png';
import italy from '../../../assets/image/italy.png';
import spain from '../../../assets/image/spain.png';
import './headermobile.css';
import Menu from "../../../assets/image/menu.png"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

function Header() {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const customStyles = {
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
      height: '1vh',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      margin: '0',
      padding: '0',
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
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsMenuOpen(false); // Fechar o menu ao trocar o idioma
  };

  const languages = [
    {
      value: 'pt',
      label: (
        <div onClick={() => handleLanguageChange('pt')}>
          <img src={brasil} className="bandeiraMobile" title="Português" alt="PT" />
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div onClick={() => handleLanguageChange('en')}>
          <img src={usd} className="bandeiraMobile" title="English" alt="EN" />
        </div>
      ),
    },
    {
      value: 'fr',
      label: (
        <div onClick={() => handleLanguageChange('fr')}>
          <img src={france} className="bandeiraMobile" title="Français" alt="FR" />
        </div>
      ),
    },
    {
      value: 'it',
      label: (
        <div onClick={() => handleLanguageChange('it')}>
          <img src={italy} className="bandeiraMobile" title="Italiano" alt="IT" />
        </div>
      ),
    },
    {
      value: 'es',
      label: (
        <div onClick={() => handleLanguageChange('es')}>
          <img src={spain} className="bandeiraMobile" title="Español" alt="ES" />
        </div>
      ),
    },
  ];

  return (
    <div className="headerMobile" id="Header">
 
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={Menu} alt="" />
      </div>
      {isMenuOpen && (
        <div className="menu-optionsMobile">
          <div className="posicaoMobileOpcoes">
          <a className='opecoesMobile' href="/home">{t('Saibamais.Home')}</a>
          {`\n`}
          <a className='opecoesMobile' href="">{t('Header.Servicos')}</a>
          {`\n`}
          <a className='opecoesMobile' href="">{t('Header.Contato')}</a>
          {`\n`}        
          <img className="logoMobile" src={logo} alt="FastplayMobile" />
          
          <div className="redessociaisMobile">
      <a href="https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho..." target="_blank"><BsWhatsapp className='iconeMobile' /></a>
      <a href="https://www.instagram.com/fastplaycomunicacao/?hl=pt-br" target="_blank"><BsInstagram className='iconeMobile'/></a>
      <SiThreads className='iconeMobile'/>
      <a href="https://www.facebook.com/fastplaycomunicacao/" target="_blank"><BsFacebook className='iconeMobile'/></a>
      <FaXTwitter className='iconeMobile'/>
      <a href="https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o" target="_blank"><FaLinkedinIn className='iconeMobile'/></a>
      </div>
      <div className="tracodegradeMobile"> 
      </div>
      </div>
        </div>
      )}
      <div className="SelectLanguageMobile">
        <Select
          styles={customStyles}
          className="SelectHeaderMobile"
          options={languages}
          value={languages.find((lang) => lang.value === selectedLanguage)}
          isSearchable={false}
          onChange={(selectedOption) => {
            const newLanguage = flagToLanguage[selectedOption.value];
            handleLanguageChange(newLanguage);
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
}

export default Header;
