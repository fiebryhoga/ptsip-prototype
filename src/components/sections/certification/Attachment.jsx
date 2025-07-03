// src/components/sections/certification/Attachment.jsx

import React, { useContext } from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import ContainerCertificate from "@/components/common/ContainerCertificate";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const Attachment = () => {
  // Ambil data sertifikat dari context
  const { certifications, loading, error } = useContext(DataContext);
  const BASE_URL = "http://127.0.0.1:8000";

  return (
    <div className="w-full md:py-8 py-4 lg:py-20 flex flex-col px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center gap-4 md:gap-8 lg:gap-10">
      {/* Judul */}
      <div className="flex flex-row justify-center items-center gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-base sm:text-lg font-semibold text-[#00662C]">
          Attachment
        </p>
      </div>

      {/* Grid Lampiran Sertifikat */}
      <div className="w-full">
        {loading ? (
          <p className="text-gray-600 col-span-full text-center">
            Loading attachments...
          </p>
        ) : error ? (
          <p className="text-red-500 col-span-full text-center">
            Failed to load attachments.
          </p>
        ) : certifications.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No attachments available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-8 md:gap-10 py-10">
            {certifications.map((item) => (
              <ContainerCertificate
                key={item.id}
                imageUrl={`${BASE_URL}${item.gambar_url}`}
                altText={item.nama}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Attachment;
