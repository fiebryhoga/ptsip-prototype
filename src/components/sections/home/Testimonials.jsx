// src/components/sections/home/Testimonials.jsx

import React, { useRef, useEffect, useContext } from "react"; // Impor useContext
import { GoReport } from "react-icons/go";
import CardTestimonials from "../../common/CardTestimonials";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const Testimonials = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  // 1. Ambil data testimoni dari context, bukan dari data dummy
  const { testimonials, loading, error } = useContext(DataContext);

  // 2. Hapus array `testimonialData` yang dummy
  // const testimonialData = [ ... ]; // <-- HAPUS INI

  useEffect(() => {
    // Jalankan animasi hanya jika data sudah ada
    if (!trackRef.current || loading || testimonials.length === 0) return;

    let animationFrameId;
    const animate = () => {
      if (!isHovered.current && trackRef.current) {
        position.current -= 0.4;
        if (Math.abs(position.current) >= trackRef.current.scrollWidth / 2) {
          position.current = 0;
        }
        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [testimonials, loading]); // Tambahkan dependensi

  // Helper function untuk mendapatkan inisial dari nama
  const getInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    if (names.length > 1) {
      return names[0].charAt(0) + names[names.length - 1].charAt(0);
    }
    return name.charAt(0);
  };

  // Helper function untuk format tanggal
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col w-full py-20 items-center px-4 sm:px-8 md:px-20 lg:px-36 gap-16 md:gap-20">
      <div className="flex flex-col gap-10 justify-center items-center text-center">
        <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <GoReport size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            What Do They Say About Us?
          </p>
        </div>
      </div>

      <div
        className="w-full overflow-hidden relative"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading testimonials...</p>
        ) : error ? (
          <p className="text-center text-red-500">
            Error loading testimonials.
          </p>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-500">
            No testimonials available.
          </p>
        ) : (
          <div
            ref={trackRef}
            className="flex gap-0 w-max h-max"
            style={{ willChange: "transform" }}
          >
            {/* 3. Gandakan data dari API dan map untuk render CardTestimonials */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="inline-block px-2 min-w-[300px]"
              >
                <CardTestimonials
                  name={item.nama_pelanggan}
                  date={formatDate(item.tanggal)}
                  message={item.pesan}
                  initial={getInitials(item.nama_pelanggan)}
                  stars={5} // Bintang bisa di-hardcode jika tidak ada di API
                  link={item.link}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
