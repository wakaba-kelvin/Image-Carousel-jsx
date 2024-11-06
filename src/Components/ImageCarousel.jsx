// src/ImageCarousel.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';
import './ImageCarousel.css';

const images = [
  { src: 'https://picsum.photos/300/200?random=1', description: 'Product 1 Description' },
  { src: 'https://picsum.photos/300/200?random=2', description: 'Product 2 Description' },
  { src: 'https://picsum.photos/300/200?random=3', description: 'Product 3 Description' },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={goToPrevious} className="carousel-btn">
          <FaArrowLeft />
        </button>
        <div className="carousel-image-container">
          <img
            src={images[currentIndex].src}
            alt={`Product ${currentIndex + 1}`}
            onClick={openLightbox}
          />
          <button onClick={openLightbox} className="expand-icon">
            <FaExpand />
          </button>
        </div>
        <button onClick={goToNext} className="carousel-btn">
          <FaArrowRight />
        </button>
      </div>
      <p className="carousel-description">{images[currentIndex].description}</p>

      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={images[currentIndex].src}
              alt={`Product ${currentIndex + 1}`}
            />
            <p>{images[currentIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
