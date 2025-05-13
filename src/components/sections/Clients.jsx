import React, { useRef, useEffect } from "react";

const logos = [
  "/assets/image/company1.png",
  "/assets/image/company2.png",
  "/assets/image/company3.png",
  "/assets/image/company4.png",
  "/assets/image/company5.png",
  "/assets/image/company6.png",
];

const Clients = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    const animate = () => {
      if (!isHovered.current) {
        position.current -= 0.5; // speed
        if (Math.abs(position.current) >= track.scrollWidth / 2) {
          position.current = 0;
        }
        track.style.transform = `translateX(${position.current}px)`;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="flex flex-col items-center px-40 py-12 w-full gap-12 mb-20">
      {/* <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-6xl text-center font-bold text-[#00662C]">
          Trusted by Companies
        </h2>
        <p className="text-center text-sm px-52  text-gray-500">
          Our solutions have empowered leading enterprises and multinational
          corporations. We are proud to be trusted by companies across diverse
          sectors including technology, education, finance, healthcare, and
          manufacturing.
        </p>
      </div> */}

      {/* Statistik Branding */}
      {/* <div className="flex flex-row justify-center gap-24 w-full mb-12">
        <div className="text-center">
          <h3 className="text-5xl mb-2 font-extrabold text-[#00662C]">Since 2007</h3>
          <p className="text-sm text-gray-500">Years of Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl mb-2 font-extrabold text-[#00662C]">20+</h3>
          <p className="text-sm text-gray-500">Major Projects</p>
        </div>
        <div className="text-center">
          <h3 className="text-5xl mb-2 font-extrabold text-[#00662C]">50+</h3>
          <p className="text-sm text-gray-500">Corporate Clients</p>
        </div>
      </div> */}

      {/* Carousel */}
      <div
        className="logo-scroll-container"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div className="logo-track" ref={trackRef}>
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`client-${index}`}
              className="h-24 px-10 object-contain inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
