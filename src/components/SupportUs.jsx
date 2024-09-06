import React from "react";

function SupportUs() {
  return (
    <section id="support-us">
      <div className="support-us-content">
        <h2>Unterstütze uns</h2>

        <p>
          Mit <strong>Indien im August</strong> wollen wir Menschen wie dir mit
          wichtigen und nützlichen Informationen weiterhelfen und die Welt
          bunter und lebenswerter gestalten. Du kannst uns auf drei Arten
          unterstützen:
        </p>
        <ul>
          <li>
            1. Unser{" "}
            <strong>Kinderbuch "Sini und die Reise zum Blauwal"</strong> kaufen.
          </li>
          <li>
            2. Phil als{" "}
            <strong>Web Developer/Art Director/Grafikdesigner buchen</strong>.
          </li>
          <li>
            3. Phil als <strong>Schnellzeichner/Live Künstler</strong> für
            deinen <strong>Event</strong> engagieren.
          </li>
        </ul>
      </div>
      {/* Platzhalter für Instagram Story Bilder */}
      <div className="insta-gallery">
        <a
          target="_blank"
          href="https://www.phil-splash.de/"
          rel="noopener noreferrer"
        >
          <figure>
            <figcaption>
              1. Phil als <strong>Schnellzeichner/Live Künstler</strong> für
              deinen <strong>Event</strong> engagieren.
            </figcaption>
            <img
              src="https://res.cloudinary.com/hzwebux5t/image/upload/c_fill,g_center,h_320,w_320/v1573162902/j9tdpey0xtavlou3bgvf.jpg"
              alt="Bild Schnellzeichner & Millionpainter Phil Splash"
            />
          </figure>
        </a>
        <a
          target="_blank"
          href="http://sini-blauwal.de/"
          rel="noopener noreferrer"
        >
          <figure>
            <figcaption>
              2. Unser{" "}
              <strong>Kinderbuch "Sini und die Reise zum Blauwal"</strong>{" "}
              kaufen.
            </figcaption>
            <img
              src="https://i.etsystatic.com/12729793/r/il/1a06ae/4299252208/il_fullxfull.4299252208_gth6.jpg"
              alt="Bild Kinderbuch SIni und die Reise zum Blauwal von Sinikka Mulfinger & Phil SPlash"
            />
          </figure>
        </a>
        <a
          target="_blank"
          href="http://millionpainter.de/"
          rel="noopener noreferrer"
        >
          <figure>
            <figcaption>
              3. Phil als{" "}
              <strong>Web Developer/Art Director/Grafikdesigner buchen</strong>.
            </figcaption>
            <img
              src="https://media.licdn.com/dms/image/D4D22AQEEXEvJ_YsWfg/feedshare-shrink_800/0/1712743028152?e=2147483647&v=beta&t=AxuZhpRas_gq1JCqdYRCELo5eRP6XQ4lEM4wcu4hBdU"
              alt="Bild Marketingagentur Millionpainter.de & Phil Splash"
            />
          </figure>
        </a>
      </div>
    </section>
  );
}

export default SupportUs;
