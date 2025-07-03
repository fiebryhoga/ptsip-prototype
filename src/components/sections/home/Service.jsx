// src/components/sections/home/Service.jsx

import React, { useContext } from "react"; // Impor useContext
import { MdMiscellaneousServices } from "react-icons/md";
import CardService from "@/components/common/CardService";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

import { HiArrowRight } from "react-icons/hi"; // Import icon panah kanan (Tailwind-friendly)


const Service = () => {
  // Ambil data services, loading, dan error dari context
  const { services, loading, error } = useContext(DataContext);

  const BASE_URL = "http://127.0.0.1:8000";

  // Ambil hanya 4 service pertama untuk ditampilkan di halaman utama
  const mainServices = services.slice(0, 4);

  return (
    <div className="flex flex-col w-full py-10 md:h-screen items-center px-4 sm:px-8 md:px-20 lg:px-36 gap-12">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-4 bg-[#00662C]/10">
          <MdMiscellaneousServices size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            The Services We Provide
          </p>
        </div>
        <p className="text-sm font-normal px-0 sm:px-4 md:px-20 lg:px-60 text-[#000000]">
          From mechanical and structural works to heavy lifting and logistics,
          we offer end-to-end industrial service solutions. Our lifting services
          are available for both on-shore and off-shore environments, handled
          with strict safety standards and technical excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 md:gap-10 w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-600">
            Loading services...
          </p>
        ) : error ? (
          <p className="col-span-full text-center text-red-600">
            Error: {error}
          </p>
        ) : mainServices.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No main services found.
          </p>
        ) : (
          mainServices.map((service) => (
            <CardService
              key={service.id}
              imageUrl={`${BASE_URL}${service.gambar_url}`}
              title={service.nama_service}
              description={service.description}
            />
          ))
        )}
      </div>
      <div className="flex flex-row justify-center items-center">
        <a
          href="/fieldBusiness"
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] transition-all duration-300 ease-in-out"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Service;