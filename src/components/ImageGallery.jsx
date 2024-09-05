import React from "react";

function ImageGallery() {
  return (
    <section id="gallery">
      <h2>Bildergalerie</h2>
      <div className="grid-gallery">
        <img
          src="/images/imagegallery-01.jpg"
          alt="Bild 1"
        />
        <img
          src="/images/imagegallery-02.jpg"
          alt="Bild 2"
        />
        <img
          src="/images/imagegallery-03.jpg"
          alt="Bild 3"
        />
        <img
          src="/images/imagegallery-04.jpg"
          alt="Bild 4"
        />
        <img
          src="/images/imagegallery-05.jpg"
          alt="Bild 1"
        />
        <img
          src="/images/imagegallery-09.jpg"
          alt="Bild 2"
        />
        
      </div>
    </section>
  );
}

export default ImageGallery;
