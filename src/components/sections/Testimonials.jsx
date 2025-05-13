import React, { useRef, useEffect } from "react";
import { GoReport } from "react-icons/go";
import CardTestimonials from "../common/CardTestimonials";

const testimonialData = [
  {
    name: "Zahra Fitriani",
    date: "12/24/2022",
    message:
      "Perusahaan ini adalah pilihan terbaik untuk setiap proyek konstruksi. Mereka memiliki pengalaman dan keahlian yang dibutuhkan untuk menyelesaikan setiap proyek dengan sukses. Sangat direkomendasikan!",
    initial: "ZF",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Zainal Arifin",
    date: "04/27/2021",
    message:
      "Perusahaan ini adalah pilihan terbaik untuk setiap proyek konstruksi. Mereka memiliki tim yang handal dan mampu memberikan solusi terbaik untuk setiap masalah yang muncul. Sangat direkomendasikan!",
    initial: "ZA",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Lia Sutanto",
    date: "04/21/2023",
    message:
      "Bangunan yang dibangun oleh perusahaan ini memiliki kualitas yang sangat tinggi. Mereka menggunakan bahan-bahan terbaik dan pekerja yang terampil. Sangat direkomendasikan!",
    initial: "LS",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Indra Saputra",
    date: "10/18/2021",
    message:
      "Sangat senang dengan kerja sama yang baik dari perusahaan ini. Mereka sangat mendengarkan kebutuhan klien dan memberikan solusi terbaik. Saya sangat merekomendasikan mereka.",
    initial: "IS",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Budi Santoso",
    date: "03/08/2021",
    message:
      "Pelayanan dari perusahaan ini sangat ramah dan membantu. Staffnya sangat responsif terhadap kebutuhan klien. Saya sangat puas dengan kerja mereka.",
    initial: "BS",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Ani Widarti",
    date: "06/03/2024",
    message:
      "Saya sangat terkesan dengan kualitas bangunan yang diberikan oleh perusahaan ini. Semua pekerjaan dilakukan dengan teliti dan berkualitas tinggi. Sangat direkomendasikan!",
    initial: "AW",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    name: "Budi",
    date: "02/10/2023",
    message:
      "Perusahaan ini sungguh luar biasa dalam pekerjaan mereka. Kualitasnya tidak diragukan lagi!",
    initial: "B",
    stars: 5,
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const track = trackRef.current;

    const animate = () => {
      if (!isHovered.current && track) {
        position.current -= 0.4;
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
    <div className="flex flex-col w-full py-20 items-center px-36 gap-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
          <GoReport size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">Testimonials</p>
        </div>
        <h2 className="text-4xl font-bold text-[#00662C]">
          What Do They Say About Us?
        </h2>
      </div>

      <div
        className="w-full overflow-hidden relative"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div
          ref={trackRef}
          className="flex gap-0 w-max h-max transition-transform duration-300 ease-linear"
          style={{ willChange: "transform" }}
        >
          {[...testimonialData, ...testimonialData].map((item, index) => (
            <div key={index} className="inline-block min-w-[300px]">
              <CardTestimonials {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
