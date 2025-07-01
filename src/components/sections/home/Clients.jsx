import React, { useRef, useEffect, useState } from "react"; // Tambahkan useState

const Clients = () => {
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const position = useRef(0);

  const [mitras, setMitras] = useState([]); // State untuk menyimpan data mitra
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  const API_URL = "http://127.0.0.1:8000/api/mitras"; // Endpoint API untuk mitra
  const BASE_URL = "http://127.0.0.1:8000"; // Base URL untuk gambar dari Laravel storage

  useEffect(() => {
    const fetchMitras = async () => {
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl"; // Token Bearer Anda

      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${
              errorBody.message || "Unknown error"
            }`
          );
        }

        const data = await response.json();
        // Filter mitra yang punya logo (karena kita set null di seeder)
        // Jika Anda akan mengedit dan mengupload semua logo, filter ini bisa dihapus nanti
        const mitrasWithLogo = data.filter((mitra) => mitra.logo_url);
        setMitras(mitrasWithLogo); // Simpan data mitra ke state
      } catch (err) {
        console.error("Error fetching mitras:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMitras();
  }, []); // [] agar fetch hanya berjalan sekali saat komponen di-mount

  useEffect(() => {
    const track = trackRef.current;
    if (!track || mitras.length === 0) return; // Hentikan animasi jika tidak ada track/mitra

    let animationFrameId;

    const animate = () => {
      if (!isHovered.current) {
        position.current -= 0.5; // speed
        // Jika posisi sudah melewati setengah panjang track, reset ke 0
        // Ini menciptakan efek loop tak terbatas
        if (Math.abs(position.current) >= track.scrollWidth / 2) {
          position.current = 0;
        }
        track.style.transform = `translateX(${position.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId); // Bersihkan saat komponen unmount
  }, [mitras]); // Jalankan ulang animasi jika data mitra berubah

  return (
    <div className="flex flex-col items-center px-4 md:px-40 py-12 w-full gap-12 mb-20">
      {" "}
      {/* Tambahkan responsivitas */}
      {/* ... Bagian Trusted by Companies dan Statistik Branding (tetap dikomentari atau sesuaikan) ... */}
      {/* Carousel */}
      <div
        className="logo-scroll-container w-full overflow-hidden relative" // Tambahkan lebar penuh dan overflow
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {loading ? (
          <p className="text-center text-gray-600">Loading client logos...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
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
            {/* Gandakan data mitra untuk efek loop tak terbatas */}
            {[...mitras, ...mitras].map((mitra, index) => (
              <img
                key={mitra.id ? `${mitra.id}-${index}` : `placeholder-${index}`} // Key unik
                src={`${BASE_URL}${mitra.logo_url}`} // Menggunakan logo_url dari API
                alt={`client-${mitra.nama_perusahaan}`} // Alt text dari nama perusahaan
                className="h-24 px-10 object-contain inline-block"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
