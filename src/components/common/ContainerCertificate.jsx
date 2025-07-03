// src/components/common/ContainerCertificate.jsx

import React, { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const ContainerCertificate = ({ imageUrl, altText }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Fungsi untuk mencegah scroll di background saat modal terbuka
  const toggleZoom = () => {
    const isCurrentlyZoomed = !isZoomed;
    setIsZoomed(isCurrentlyZoomed);
    if (isCurrentlyZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleImageClick = (e) => e.stopPropagation();

  return (
    <>
      {/* --- Kontainer Gambar Thumbnail --- */}
      <div
        onClick={toggleZoom}
        className="w-full rounded-2xl border border-gray-200 shadow-sm relative cursor-pointer 
                   overflow-hidden group aspect-w-4 aspect-h-3 bg-gray-100"
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/image/placeholder.png";
          }}
        />
        <div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 flex justify-center items-center"
        >
          <div className="text-white flex flex-col items-center">
            <FiZoomIn size={32} className="mb-2" />
            <span className="text-sm font-semibold">Click to Zoom</span>
          </div>
        </div>
      </div>

      {/* --- Modal untuk Tampilan Zoom --- */}
      {isZoomed && (
        <div
          onClick={toggleZoom}
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fadeIn"
        >
          {/* Tombol Close */}
          <button
            onClick={toggleZoom}
            className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer z-50 
                       bg-black/30 rounded-full p-2"
          >
            <FiX size={24} />
          </button>

          <div
            onClick={handleImageClick}
            className="relative w-full h-full flex justify-center items-center"
          >
            <img
              src={imageUrl}
              alt={`Zoomed in: ${altText}`}
              className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

// Tambahkan ini di file CSS global Anda (misal: globals.css) untuk animasi fadeIn
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}
*/

export default ContainerCertificate;
