// src/components/sections/certification/LegalInformation.jsx

import React, { useContext } from "react";
import { RiFileList3Line } from "react-icons/ri";
import CardLegal from "@/components/common/CardLegal";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const LegalInformation = () => {
  // Ambil data legal dari context
  const { legalInformations, loading, error } = useContext(DataContext);

  return (
    <div className="w-full py-4 md:py-8 lg:py-0 flex flex-col px-4 sm:px-8 md:px-20 lg:24 xl:px-36 justify-center items-center gap-10">
      {/* Judul */}
      <div className="flex flex-row gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
        <RiFileList3Line size={22} color="#00662C" />
        <p className="text-base sm:text-lg font-semibold text-[#00662C]">
          Legal Information
        </p>
      </div>

      {/* Grid Informasi Legal */}
      <div className="w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Memuat informasi legal...
          </p>
        ) : error ? (
          <p className="col-span-full text-center text-red-500">
            Gagal memuat informasi.
          </p>
        ) : legalInformations.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Informasi legal tidak tersedia.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10 gap-y-6 py-10">
            {legalInformations.map((item) => (
              <CardLegal
                key={item.id}
                title={item.nama}
                description={item.number}
                icon={RiFileList3Line}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalInformation;
