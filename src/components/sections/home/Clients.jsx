// src/components/sections/home/Clients.jsx

import React, { useRef, useEffect, useContext } from "react"; // Impor useContext
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const Clients = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  // Ambil data mitras, loading, dan error dari context
  const { mitras, loading, error } = useContext(DataContext);

  const BASE_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    // Animasi hanya berjalan jika data sudah ada dan tidak sedang di-hover
    if (!trackRef.current || loading || error || mitras.length === 0) return;

    let animationFrameId;

    const animate = () => {
      if (!isHovered.current && trackRef.current) {
        position.current -= 0.5; // Kecepatan scroll
        if (Math.abs(position.current) >= trackRef.current.scrollWidth / 2) {
          position.current = 0;
        }
        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [mitras, loading, error]); // Jalankan ulang efek jika dependensi berubah

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-24 xl:px-40 py-4 md:py-12 w-full gap-24 mb-20">
      
      <div
        className="logo-scroll-container w-full overflow-hidden relative"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {loading ? (
          <p className="text-center text-gray-600">Loading client logos...</p>
        ) : error ? (
          <p className="text-center text-red-600">
            Error loading clients: {error}
          </p>
        ) : mitras.length === 0 ? (
          <p className="text-center text-gray-600">
            No client logos available.
          </p>
        ) : (
          <div
            className="logo-track flex w-max h-max transition-transform duration-300 ease-linear"
            ref={trackRef}
            style={{ willChange: "transform" }}
          >
            {/* Gandakan data untuk efek loop tak terbatas */}
            {[...mitras, ...mitras].map(
              (mitra, index) =>
                mitra.logo_url && (
                  <img
                    key={`${mitra.id}-${index}`}
                    src={`${BASE_URL}${mitra.logo_url}`}
                    alt={mitra.nama_perusahaan || `client-logo-${index}`}
                    className="h-12 sm:h-14 md:h-20 lg:h-24 px-4 sm:px-6 md:px-8 lg:10 object-contain inline-block"
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
