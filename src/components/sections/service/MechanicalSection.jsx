import React, { useEffect, useState } from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import CardService from "@/components/common/CardService"; // Pastikan path ini benar
import { IoIosArrowRoundForward } from "react-icons/io";

const MechanicalSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/services";
  const BASE_URL = "http://127.0.0.1:8000"; // Base URL untuk gambar dari Laravel storage

  const categoryFilter = "Mechanical, Construction, and Lifting"; // Kategori yang ingin ditampilkan

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
        // Filter data berdasarkan jenis (jenis: "Mechanical, Construction, and Lifting")
        const filteredServices = data.filter(
          (service) => service.jenis === categoryFilter
        );
        setServices(filteredServices);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // [] agar fetch hanya berjalan sekali saat komponen di-mount

  return (
    <div className="flex flex-col w-full justify-start items-center px-4 md:px-36 py-10">
      <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 bg-[#00662C]/10 mb-8">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">{categoryFilter}</p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-8 gap-6 md:gap-10">
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
            No services found for this category.
          </p>
        ) : (
          services.map((service) => (
            <CardService
              key={service.id}
              imageUrl={`${BASE_URL}${service.gambar_url}`} // Gabungkan BASE_URL dengan gambar_url
              title={service.nama_service}
              description={service.description}
            />
          ))
        )}
      </div>

      <div className="mt-8">
        <a
          className="group flex flex-row font-normal text-sm justify-center items-center py-2 px-6 gap-4 bg-[#00662C] text-white rounded-full hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out duration-500 border border-[#00662C]/20"
          href="/fieldBusiness" // Anda bisa ganti ini dengan route yang sesuai
        >
          Go to Field of Business Services <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
};

export default MechanicalSection;
