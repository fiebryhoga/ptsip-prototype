import React, { useRef, useEffect } from "react";

// Dummy data logo client lokal
const dummyMitras = [
  {
    id: 1,
    nama_perusahaan: "Adhi Beyond Construction",
    logo_url: "/assets/image/company1.png",
  },
  {
    id: 2,
    nama_perusahaan: "PT Wijaya Karya",
    logo_url: "/assets/image/company2.png",
  },
  { id: 3, nama_perusahaan: "HK", logo_url: "/assets/image/company3.png" },
  { id: 4, nama_perusahaan: "Waskita", logo_url: "/assets/image/company4.png" },
  {
    id: 5,
    nama_perusahaan: "Bakrie Metal Industries",
    logo_url: "/assets/image/company5.png",
  },
  {
    id: 6,
    nama_perusahaan: "HK Infrastruktur",
    logo_url: "/assets/image/company6.png",
  },
];

const Clients = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    if (!trackRef.current || dummyMitras.length === 0) return;

    let animationFrameId;

    const animate = () => {
      if (!isHovered.current && trackRef.current) {
        position.current -= 0.5;
        if (Math.abs(position.current) >= trackRef.current.scrollWidth / 2) {
          position.current = 0;
        }
        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 mt-10 sm:px-6 md:px-24 xl:px-40 py-4 md:py-12 w-full gap-24 mb-20">
      <div
        className="logo-scroll-container w-full overflow-hidden relative"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div
          className="logo-track flex w-max h-max transition-transform duration-300 ease-linear"
          ref={trackRef}
          style={{ willChange: "transform" }}
        >
          {[...dummyMitras, ...dummyMitras].map((mitra, index) => (
            <img
              key={`${mitra.id}-${index}`}
              src={mitra.logo_url}
              alt={mitra.nama_perusahaan || `client-logo-${index}`}
              className="h-12 sm:h-14 md:h-20 lg:h-24 px-4 sm:px-6 md:px-8 lg:10 object-contain inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
