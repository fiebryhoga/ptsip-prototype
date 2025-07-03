import React, { useRef, useEffect } from "react";
import { GoReport } from "react-icons/go";
import CardTestimonials from "../../common/CardTestimonials";

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    nama_pelanggan: "Zahra Fitriani",
    tanggal: "2022-12-24T00:00:00.000000Z",
    pesan:
      "Perusahaan ini adalah pilihan terbaik untuk setiap proyek konstruksi. Mereka memiliki pengalaman dan keahlian yang dibutuhkan untuk menyelesaikan setiap proyek dengan sukses. Sangat direkomendasikan!",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 2,
    nama_pelanggan: "Zainal Arifin",
    tanggal: "2021-04-27T00:00:00.000000Z",
    pesan:
      "Perusahaan ini adalah pilihan terbaik untuk setiap proyek konstruksi. Mereka memiliki tim yang handal dan mampu memberikan solusi terbaik untuk setiap masalah yang muncul. Sangat direkomendasikan!",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 3,
    nama_pelanggan: "Lia Sutanto",
    tanggal: "2023-04-21T00:00:00.000000Z",
    pesan:
      "Bangunan yang dibangun oleh perusahaan ini memiliki kualitas yang sangat tinggi. Mereka menggunakan bahan-bahan terbaik dan pekerja yang terampil. Sangat direkomendasikan!",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 4,
    nama_pelanggan: "Indra Saputra",
    tanggal: "2021-10-18T00:00:00.000000Z",
    pesan:
      "Sangat senang dengan kerja sama yang baik dari perusahaan ini. Mereka sangat mendengarkan kebutuhan klien dan memberikan solusi terbaik. Saya sangat merekomendasikan mereka.",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 5,
    nama_pelanggan: "Budi Santoso",
    tanggal: "2021-03-08T00:00:00.000000Z",
    pesan:
      "Pelayanan dari perusahaan ini sangat ramah dan membantu. Staffnya sangat responsif terhadap kebutuhan klien. Saya sangat puas dengan kerja mereka.",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 6,
    nama_pelanggan: "Ani Widarti",
    tanggal: "2024-06-03T00:00:00.000000Z",
    pesan:
      "Saya sangat terkesan dengan kualitas bangunan yang diberikan oleh perusahaan ini. Semua pekerjaan dilakukan dengan teliti dan berkualitas tinggi. Sangat direkomendasikan!",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
  {
    id: 7,
    nama_pelanggan: "Budi",
    tanggal: "2023-02-10T00:00:00.000000Z",
    pesan:
      "Perusahaan ini sungguh luar biasa dalam pekerjaan mereka. Kualitasnya tidak diragukan lagi!",
    link: "https://indokontraktor.com/business/pt-sarana-inti-perwira-kota-bekasi",
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    if (!trackRef.current || testimonials.length === 0) return;

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
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    if (names.length > 1) {
      return names[0].charAt(0) + names[names.length - 1].charAt(0);
    }
    return name.charAt(0);
  };

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
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">
            No testimonials available.
          </p>
        ) : (
          <div
            ref={trackRef}
            className="flex gap-0 w-max h-max"
            style={{ willChange: "transform" }}
          >
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
                  stars={5}
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
