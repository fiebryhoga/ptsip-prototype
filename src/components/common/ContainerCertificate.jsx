import React, { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const ContainerCertificate = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleOverlayClick = () => {
    setIsZoomed(false);
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // prevent closing when clicking image
  };

  return (
    <>
      {/* Normal Container */}
      <div
        onClick={() => setIsZoomed(true)}
        className="w-full rounded-2xl border border-green-800/20 shadow-sm relative cursor-pointer overflow-hidden group"
      >
        {/* Image */}
        <img
          src="/assets/image/att1.png"
          alt="Certificate"
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
          <div className="text-white flex flex-col items-center">
            <FiZoomIn size={32} color="#00662C" className="mb-2" />
            <span className="text-sm text-[#00662C] font-semibold">
              Click to Zoom
            </span>
          </div>
        </div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
        >
          <div
            onClick={handleImageClick}
            className="relative max-w-4xl w-full px-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-white hover:text-[#00662C] cursor-pointer text-3xl z-50"
            >
              <FiX />
            </button>

            {/* Zoomed Image */}
            <img
              src="/assets/image/att1.png"
              alt="Zoomed Certificate"
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContainerCertificate;
