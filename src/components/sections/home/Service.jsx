import React, { useEffect, useState } from "react"; // Tambahkan useEffect dan useState
import { MdMiscellaneousServices } from "react-icons/md";
import CardService from "@/components/common/CardService"; // Pastikan path ini benar

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/services";
  const BASE_URL = "http://127.0.0.1:8000"; // Base URL untuk gambar dari Laravel storage

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer 2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl`, // Token Bearer Anda
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to fetch services: ${response.status} ${
              errorData.message || ""
            }`
          );
        }

        const data = await response.json();
        // Ambil hanya 4 service pertama
        const mainServices = data.slice(0, 4);
        setServices(mainServices);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="flex flex-col w-full py-10 h-auto items-center px-4 md:px-36 gap-10">
      {" "}
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-8 bg-[#00662C]/10">
          <MdMiscellaneousServices size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">Our Service</p>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#00662C] text-center">
          {" "}
          The Services We Provide
        </h2>
        <p className="text-sm font-normal px-4 md:px-60 text-center text-[#000000]">
          From mechanical and structural works to heavy lifting and logistics,
          we offer end-to-end industrial service solutions. Our lifting services
          are available for both on-shore and off-shore environments, handled
          with strict safety standards and technical excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 md:gap-10 w-full">
        {" "}
        {/* Sesuaikan grid */}
        {loading ? (
          <p className="col-span-full text-center text-gray-600">
            Loading services...
          </p>
        ) : error ? (
          <p className="col-span-full text-center text-red-600">
            Error: {error}
          </p>
        ) : services.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No main services found.
          </p>
        ) : (
          services.map((service) => (
            <CardService
              key={service.id}
              imageUrl={`${BASE_URL}${service.gambar_url}`}
              title={service.nama_service}
              description={service.description}
            />
          ))
        )}
      </div>
      <div className="flex flex-row justify-center items-center mt-8">
        <a
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] hover:transition-all hover:duration-300 duration-300 transition-all hover:ease-in-out ease-in-out"
          href="/mechanicalService" // Ganti dengan rute yang sesuai untuk melihat semua layanan
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Service;
