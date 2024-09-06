import React from "react";

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img
              className="indian-flag"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s"
              alt="Bild Flagge von Indien"
            />
            <a href="/">Indien im August</a>
          </li>
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
      </nav>
    </header>
  );
}

export default Navigation;
