import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import logo from '../../../assets/image/logo.png';
import LogoEN from "../../../assets/image/FastplayMKT.png"
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
import { TfiEmail } from "react-icons/tfi";
import { MdTextsms } from "react-icons/md";
import { Link } from 'react-router-dom';

function Header() {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState('pt');
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
      maxHeight: '7vh',
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
    localStorage.setItem('email', selectedValue);
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: selectedValue }));
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

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  function scrollToservicosMobile() {
    const servicosMobile = document.getElementById('servicosMobile');
    if (servicosMobile) {
      servicosMobile.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToentreContatoMobile() {
  const entreContatoMobile = document.getElementById('entreContatoMobile');
  if (entreContatoMobile) {
    entreContatoMobile.scrollIntoView({ behavior: 'smooth' });
  }
}




  const getSocialMediaLink = (socialMedia) => {
    const selectedLanguage = i18n.language;
    let baseUrl = '';
  
    switch (socialMedia) {
      case 'instagram':
        baseUrl = 'https://www.instagram.com/';
        break;
      case 'facebook':
        baseUrl = 'https://www.facebook.com/';
        break;
      case 'twitter':
        baseUrl = 'https://twitter.com/';
        break;

      default:
        return '';
    }
  
    return selectedLanguage === 'pt'
      ? `${baseUrl}fastplaycomunicacao/?hl=pt-br`
      : `${baseUrl}fastplaymarketing/`;
  };
  const instagramLink = getSocialMediaLink('instagram');
  const facebookLink = getSocialMediaLink('facebook');
  const twitterLink = getSocialMediaLink('twitter');
  


    const getLinkedInLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://www.linkedin.com/company/fastplay-comunica%C3%A7%C3%A3o/mycompany/'
    : 'https://www.linkedin.com/company/fastplaymarketing/?viewAsMember=true';
    };


    const getWhatsAppLink = () => {
    const selectedLanguage = i18n.language;
    return selectedLanguage === 'pt'
    ? 'https://wa.me/31996013764?text=Olá!%20Gostaria%20de%20saber%20maiores%20informações%20sobre%20os%20seus%20produtos%20e%20serviços%20ou%20gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20o%20seu%20trabalho...'
    : 'https://api.whatsapp.com/send/?phone=19297264171&text=Hello+I+would+like+to+schedule+a+video+conference+to+discuss+marketing.&type=phone_number&app_absent=0';
    };

    const getEmailLink = () => {
      const selectedLanguage = i18n. language;
      return selectedLanguage === 'pt'
      ? 'mailto:contato@fastplaycomunicacao.com.br'
      : 'mailto:contact@fastplaymarketing.com'
    }

    const getSmsLink = () => {
      const selectedLanguage = i18n. language;
      return selectedLanguage === 'pt'
      ? 'sms:+5531996013764'
      : 'sms:+19297264171'
    }
    
    // FECHAR O MENU CLICANDO FORA DELE 
    const menuRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [menuRef]);

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

  return (
    <div className="headerMobile" id="Header"  ref={menuRef}>
 
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={Menu} alt="Menu" />
      </div>
      {isMenuOpen && (
        <div className="menu-optionsMobile">
          <div className="posicaoMobileOpcoes">
          <Link className='opecoesMobile' to="/home">{t('Saibamais.Home')}</Link>
          {`\n`}
          <a className='opecoesMobile' href="#" onClick={scrollToservicosMobile}>{t('Header.Servicos')}</a>
          {`\n`}
          <a className='opecoesMobile' href="#" onClick={scrollToentreContatoMobile}>{t('Header.Contato')}</a>
          {`\n`}
          <Link className='opecoesMobile' to="/TrabalheConoscoMobile">{t('Conosco.Titulo')}</Link>
          {`\n`}
          <Link className='opecoesMobile' to="/cadastromobile">{t('Footer.Outros4')}</Link>
          {`\n`}
          <Link className='opecoesMobile' to="/FeedbackMobile">Feedback</Link>
          <div className="logoHeaderPai">
          <img className="logoMobile" src={imageSrc} alt="FastplayMobile" />
          </div>

          <div className="tracoRedeHeaderMobile">
          <div className="tracodegradeMobile"> 
      </div>
          <div className="redessociaisMobile">
      <a href={getWhatsAppLink()} target="_blank"><BsWhatsapp className='iconeMobile' /></a>
        <a href={getSocialMediaLink('instagram')} target="_blank"><BsInstagram className='iconeMobile'/></a>
        <a href={getSocialMediaLink('facebook')} target="_blank"><BsFacebook className='iconeMobile'/></a>
        <a href={getSocialMediaLink('twitter')} target="_blank"><FaXTwitter className='iconeMobile'/></a>
        <a href={getLinkedInLink()} target="_blank"><FaLinkedinIn className='iconeMobile'/></a>
        <a href={getEmailLink()} target="_blank"><TfiEmail className='iconeMobile'/></a>
        <a href={getSmsLink()} target="_blank"><MdTextsms className='iconeMobile'/></a>
      </div>
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
              setSelectedLanguage(newLanguage);
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
