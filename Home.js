import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; 
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null); 

  const handleItemClick = (index) => {
    setActiveIndex(index); 
  };

  useEffect(() => {
    document.body.classList.add('home');
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="home">
      <link rel="icon" href="./logo-gbs.jpg" type="image/x-icon"></link>
      <container>
        <div className="logo_gbs"></div>
        <div className="logo"></div>
        <div className="boek">
          <div className="lijn"></div>
          <h1 className="kies">{t('Kies welke uitgave u wilt lezen.')}</h1>
          <div className="lijst-container">
            <ul className="lijst">
              {[
                'Statenvertaling',
                'Griekse tekst van het nieuwe Testament',
                'Authorized (King James) Version',
                'Authorized Version Annotaded (Dutch Annotations)',
                'Psalmberijming 1773',
                'Psalmberijming Datheen',
                'Heidelbergse Cathegismus',
                'Nederlandse Geloofsbelijdenis',
                'Dordtse Leerregels',
              ].map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <ul className="lijst">
              {[
                'De drie algemene belijdenissen',
                'Christelijke gebeden',
                'Liturgische formulieren',
                'Kort begrip',
                'Ziekentroost',
                'Hellenbroek uitgebreid',
                'Hellenbroek hertaald',
                'Ledeboer',
                'Kaarten',
              ].map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index + 9 ? 'active' : ''}
                  onClick={() => handleItemClick(index + 9)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="lezen" onClick={() => navigate('/Statenvertaling')}>
            {t('Bekijken')}
          </button>

          <div className="boekenlegger"></div>
          <div className="gbs_logo"></div>
          <h1 className="welkom">{t('Welkom bij GBS Bijbel Online')}</h1>
          <p className="uitleg">
            {t('Dit Bijbelprogramma is ontwikkeld in opdracht van de Gereformeerde Bijbelstichting (www.gbs.nl). U kunt hier de tekst van de Statenvertaling met kanttekeningen raadplegen, en verder alle uitgaven die hiernaast worden genoemd. Alle onderdelen van het programma zijn goed doorzoekbaar, en voorzien van veel hyperlinks om het gebruiksgemak te verhogen. Aan de bovenkant van het scherm staan opties om af te drukken, te kopiëren en dergelijke (links), kan de zoekfunctie gebruikt worden (midden), en kunnen de visuele instellingen aangepast worden (rechts).')}
          </p>
          <h1 className="persoonlijk">{t('Persoonlijke omgeving')}</h1>
          <p className="anoniem">
            {t('Het programma is anoniem te gebruiken. Om notities te kunnen maken, dient u een (gratis) persoonlijke account aan te maken via onderstaande knop.')}
          </p>
          <div className="vlagNL" onClick={() => changeLanguage('nl')}></div>
          <div className="nl" onClick={() => changeLanguage('nl')}>NL</div>
          <div className="en" onClick={() => changeLanguage('en')}>EN</div>
          <div className="vlagEN" onClick={() => changeLanguage('en')}></div>
          <button className="inloggen" onClick={() => alert('Deze functie is nog in onderhoud')}>{t('Inloggen')}</button>
          <button className="account" onClick={() => alert('Deze functie is nog in onderhoud')}>{t('Account aanmaken')}</button>
        </div>
      </container>
    </div>
  );
}

export default Home;