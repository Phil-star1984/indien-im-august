import "./App.css";
import Checklist from "./components/Checklist";
import ClimateAugust from "./components/ClimateAugust";
import ImageGallery from "./components/ImageGallery";
import Introduction from "./components/Introduction";
import MoneyAndPrices from "./components/MoneyAndPrices";
import PeopleAndCulture from "./components/PeopleAndCulture";
import VisaApplication from "./components/VisaApplication";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li>
              <img
                className="indian-flag"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s"
                alt="flag of India"
              />
              <a href="#hero">Indien im August</a>
            </li>
            <li>
              <a href="#visa">Visum Indien</a>
            </li>
            <li>
              <a href="#climate">Klima</a>
            </li>
            <li>
              <a href="#culture">Menschen & Kultur</a>
            </li>
            <li>
              <a href="#money-prices">Geld & Preise</a>
            </li>
            <li>
              <a href="#checklist">Packliste & Checkliste</a>
            </li>
            <li>
              <a href="#gallery">Bildergalerie</a>
            </li>

            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <h1>Indien im August</h1>
          <p className="subline">Reisetipps für den Monsun</p>
        </div>
      </section>

      <Introduction />

      <VisaApplication />

      <ClimateAugust />

      <PeopleAndCulture />

      <MoneyAndPrices />

      <ImageGallery />

      <Checklist />

      {/* Kontakt Section */}
      <section id="contact">
        <h2>Kontakt</h2>
        <p>
          Für Fragen und Anfragen, kontaktiere uns per E-Mail:{" "}
          <a href="mailto:info@phil-splash.de">info@phil-splash.de</a>
        </p>
      </section>

      <footer>
        <p>© 2024 Indien im August by www.Millionpainter.de</p>
      </footer>
    </div>
  );
}

export default App;
