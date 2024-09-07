import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="iniaaugust-logo">
          <img
            className="indian-flag"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s"
            alt="Bild Flagge von Indien"
          />
          <a href="/">Indien im August</a>
        </div>
        <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="/#visa">Visum Indien</a>
          </li>
          <li>
            <a href="/#climate">Klima</a>
          </li>
          <li>
            <a href="/#culture">Menschen & Kultur</a>
          </li>
          <li>
            <a href="/#money-prices">Geld & Preise</a>
          </li>
          <li>
            <a href="/#gallery">Bildergalerie</a>
          </li>
          <li>
            <a href="/#checklist">Checkliste</a>
          </li>
          <li>
            <a href="/impressum">Kontakt/Impressum</a>
          </li>
        </ul>

        <div className="burger" onClick={toggleMenu}>
          <div className={`line1 ${menuOpen ? "toggle" : ""}`}></div>
          <div className={`line2 ${menuOpen ? "toggle" : ""}`}></div>
          <div className={`line3 ${menuOpen ? "toggle" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
