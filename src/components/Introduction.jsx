import React from "react";

function Introduction() {
  return (
    <section id="introduction">
      <div className="introduction-content">
        <h2>Warum Indien im August</h2>

        <p>
          Hi, wir sind Sini und Phil. Da wir beide Asien lieben, wussten wir,
          dass wir irgendwann einmal auch nach Indien mussten. Angefixt durch
          Länder wie Sri Lanka, Indonesien und China, hatten wir in etwa eine
          Ahnung, was uns erwarten würde. Aber ehrlicherweise haben wir immer
          großen Respekt und auch ein klein wenig Angst vor Indien gehabt. Das
          wollten wir 2024 ändern und uns einfach selbst ein Bild vor Ort
          machen. Unsere Reise war nicht nur Friede, Freude, Eierkuchen, sondern
          auch mit einigen Herausforderungen versehen. Da wir wenig
          Informationen darüber gefunden haben, wie es ist im August in der
          Monsunzeit durch Indien zu reisen, habe ich beschloßen eine Website zu
          entwickeln, die euch bei eurer Reiseplanung helfen soll. Auch wenn
          Indien eine Herausforderung sein kann, war diese Reise unglaublich
          inspirierend und bereichernd für uns. Lasst euch deshalb nicht
          abschrecken und zieht es einfach durch.
        </p>
      </div>
      {/* Platzhalter für Instagram Story Bilder */}
      <div className="insta-gallery">
        <img
          src="/images/introduction-sini&philsplash.jpeg"
          alt="Instagram Story Placeholder 1"
        />
        <img
          src="/images/introduction-culture.jpeg"
          alt="Instagram Story Placeholder 2"
        />
        <img
          src="/images/introduction-food.jpeg"
          alt="Instagram Story Placeholder 3"
        />
      </div>
    </section>
  );
}

export default Introduction;
