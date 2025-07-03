// src/components/sections/service/MechanicalSection.jsx

import React, { useContext } from "react"; // Impor useContext, hapus useState dan useEffect
import { RiBuilding3Fill } from "react-icons/ri";
import CardService from "@/components/common/CardService";
import { IoIosArrowRoundForward } from "react-icons/io";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const MechanicalSection = () => {
  // 1. Ambil data services dari DataContext
  const { services, loading, error } = useContext(DataContext);

  const BASE_URL = "http://127.0.0.1:8000";
  const categoryFilter = "Mechanical, Construction, and Lifting";

  // 2. Lakukan filter data di sini, setelah diambil dari context
  const filteredServices = services.filter(
    (service) => service.jenis === categoryFilter
  );

  return (
    <div className="w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 py-10">
      {/* Judul Section */}
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            {categoryFilter}
          </p>
        </div>
      </div>

      {/* Grid untuk daftar layanan */}
      <div className="w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-600">
            Loading services...
          </p>
        ) : error ? (
          <p className="col-span-full text-center text-red-600">
            Error: {error}
          </p>
        ) : filteredServices.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No services found for this category.
          </p>
        ) : (
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 py-8">
            {filteredServices.map((service) => (
              <CardService
                key={service.id}
                imageUrl={`${BASE_URL}${service.gambar_url}`}
                title={service.nama_service}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="mt-8">
        <a
          className="group flex flex-row font-normal text-sm justify-center items-center py-3 px-8 gap-2 bg-[#00662C] text-white rounded-full hover:bg-transparent hover:text-[#00662C] transition-colors ease-in-out duration-300 border border-transparent hover:border-[#00662C]"
          href="/fieldBusiness"
        >
          <span>Go to Field of Business Services</span>
          <IoIosArrowRoundForward
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

export default MechanicalSection;
