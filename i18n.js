import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Kies welke uitgave u wilt lezen.": "Choose which edition you want to read.",
      "Bekijken": "View",
      "Welkom bij GBS Bijbel Online": "Welcome to GBS Bible Online",
      "Dit Bijbelprogramma is ontwikkeld in opdracht van de Gereformeerde Bijbelstichting (www.gbs.nl). U kunt hier de tekst van de Statenvertaling met kanttekeningen raadplegen, en verder alle uitgaven die hiernaast worden genoemd. Alle onderdelen van het programma zijn goed doorzoekbaar, en voorzien van veel hyperlinks om het gebruiksgemak te verhogen. Aan de bovenkant van het scherm staan opties om af te drukken, te kopiëren en dergelijke (links), kan de zoekfunctie gebruikt worden (midden), en kunnen de visuele instellingen aangepast worden (rechts).": "This Bible program was developed on behalf of the Reformed Bible Foundation (www.gbs.nl). Here you can consult the text of the Statenvertaling with annotations, as well as all the editions mentioned next to it. All parts of the program are well searchable and equipped with many hyperlinks to increase ease of use. At the top of the screen are options to print, copy, etc. (left), the search function can be used (middle), and the visual settings can be adjusted (right).",
      "Persoonlijke omgeving": "Personal environment",
      "Het programma is anoniem te gebruiken. Om notities te kunnen maken, dient u een (gratis) persoonlijke account aan te maken via onderstaande knop.": "The program can be used anonymously. To be able to make notes, you need to create a (free) personal account via the button below.",
      "Inloggen": "Login",
      "Account aanmaken": "Create account",
      "Statenvertaling": "States Translation",
      "Griekse tekst van het nieuwe Testament": "Greek text of the New Testament",
      "Authorized (King James) Version": "Authorized (King James) Version",
      "Authorized Version Annotaded (Dutch Annotations)": "Authorized Version Annotated (Dutch Annotations)",
      "Psalmberijming 1773": "Psalm Versification 1773",
      "Psalmberijming Datheen": "Psalm Versification Datheen",
      "Heidelbergse Cathegismus": "Heidelberg Catechism",
      "Nederlandse Geloofsbelijdenis": "Dutch Confession of Faith",
      "Dordtse Leerregels": "Canons of Dort",
      "De drie algemene belijdenissen": "The Three Universal Creeds",
      "Christelijke gebeden": "Christian Prayers",
      "Liturgische formulieren": "Liturgical Forms",
      "Kort begrip": "Short Understanding",
      "Ziekentroost": "Comfort for the Sick",
      "Hellenbroek uitgebreid": "Hellenbroek Expanded",
      "Hellenbroek hertaald": "Hellenbroek Rewritten",
      "Ledeboer": "Ledeboer",
      "Kaarten": "Maps"
    }
  },
  nl: {
    translation: {
      "Kies welke uitgave u wilt lezen.": "Kies welke uitgave u wilt lezen.",
      "Bekijken": "Bekijken",
      "Welkom bij GBS Bijbel Online": "Welkom bij GBS Bijbel Online",
      "Dit Bijbelprogramma is ontwikkeld in opdracht van de Gereformeerde Bijbelstichting (www.gbs.nl). U kunt hier de tekst van de Statenvertaling met kanttekeningen raadplegen, en verder alle uitgaven die hiernaast worden genoemd. Alle onderdelen van het programma zijn goed doorzoekbaar, en voorzien van veel hyperlinks om het gebruiksgemak te verhogen. Aan de bovenkant van het scherm staan opties om af te drukken, te kopiëren en dergelijke (links), kan de zoekfunctie gebruikt worden (midden), en kunnen de visuele instellingen aangepast worden (rechts).": "Dit Bijbelprogramma is ontwikkeld in opdracht van de Gereformeerde Bijbelstichting (www.gbs.nl). U kunt hier de tekst van de Statenvertaling met kanttekeningen raadplegen, en verder alle uitgaven die hiernaast worden genoemd. Alle onderdelen van het programma zijn goed doorzoekbaar, en voorzien van veel hyperlinks om het gebruiksgemak te verhogen. Aan de bovenkant van het scherm staan opties om af te drukken, te kopiëren en dergelijke (links), kan de zoekfunctie gebruikt worden (midden), en kunnen de visuele instellingen aangepast worden (rechts).",
      "Persoonlijke omgeving": "Persoonlijke omgeving",
      "Het programma is anoniem te gebruiken. Om notities te kunnen maken, dient u een (gratis) persoonlijke account aan te maken via onderstaande knop.": "Het programma is anoniem te gebruiken. Om notities te kunnen maken, dient u een (gratis) persoonlijke account aan te maken via onderstaande knop.",
      "Inloggen": "Inloggen",
      "Account aanmaken": "Account aanmaken",
      "Statenvertaling": "Statenvertaling",
      "Griekse tekst van het nieuwe Testament": "Griekse tekst van het nieuwe Testament",
      "Authorized (King James) Version": "Authorized (King James) Version",
      "Authorized Version Annotaded (Dutch Annotations)": "Authorized Version Annotaded (Dutch Annotations)",
      "Psalmberijming 1773": "Psalmberijming 1773",
      "Psalmberijming Datheen": "Psalmberijming Datheen",
      "Heidelbergse Cathegismus": "Heidelbergse Cathegismus",
      "Nederlandse Geloofsbelijdenis": "Nederlandse Geloofsbelijdenis",
      "Dordtse Leerregels": "Dordtse Leerregels",
      "De drie algemene belijdenissen": "De drie algemene belijdenissen",
      "Christelijke gebeden": "Christelijke gebeden",
      "Liturgische formulieren": "Liturgische formulieren",
      "Kort begrip": "Kort begrip",
      "Ziekentroost": "Ziekentroost",
      "Hellenbroek uitgebreid": "Hellenbroek uitgebreid",
      "Hellenbroek hertaald": "Hellenbroek hertaald",
      "Ledeboer": "Ledeboer",
      "Kaarten": "Cards"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "nl", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;