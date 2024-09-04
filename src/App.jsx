import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="#hero">Indien im August</a></li>
            <li><a href="#visa">Beantragung des Visums</a></li>
            <li><a href="#gallery">Bildergalerie</a></li>
            <li><a href="#checklist">Packliste & Checkliste</a></li>
            <li><a href="#contact">Kontakt</a></li>
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

      {/* Visa Section */}
      <section id="visa">
        <h2>Beantragung des Visums</h2>
        <p>Alles, was du wissen musst, um ein Visum für Indien zu bekommen.</p>
        {/* Platzhalter für Instagram Story Bilder */}
        <div className="insta-gallery">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Instagram Story Placeholder 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Instagram Story Placeholder 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Instagram Story Placeholder 3" />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h2>Bildergalerie</h2>
        <div className="grid-gallery">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Bild 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Bild 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Bild 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDdhNX-OgE2pprpZOnLJk1pFHyuvDY9hASg&s" alt="Bild 4" />
        </div>
      </section>

      {/* Checklist Section */}
      <section id="checklist">
        <h2>Packliste & Checkliste</h2>
        <ul>
          <li>Leichte, atmungsaktive Kleidung</li>
          <li>Regenjacke und wasserdichte Schuhe</li>
          <li>Wichtige Reiseunterlagen (Reisepass, Visum)</li>
          <li>Reiseadapter für indische Steckdosen</li>
          <li>Medikamente und Reiseapotheke</li>
        </ul>
      </section>

      {/* Kontakt Section */}
      <section id="contact">
        <h2>Kontakt</h2>
        <p>Für Fragen und Anfragen, kontaktiere uns per E-Mail: <a href="mailto:info@indienimaAugust.com">info@indienimaAugust.com</a></p>
      </section>

      <footer>
        <p>© 2024 Indien im August by www.Millionpainter.de</p>
      </footer>
    </div>
  );
}

export default App;
