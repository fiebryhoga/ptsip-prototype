import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import ContainerCertificate from "@/components/common/ContainerCertificate";

// Data dummy langsung
const certifications = [
  {
    id: 1,
    nama: "ISO 9001:2015",
    gambar_url: "/assets/image/certificate/certificate1.png",
  },
  {
    id: 2,
    nama: "ISO 45001:2018",
    gambar_url: "/assets/image/certificate/certificate2.png",
  },
  {
    id: 3,
    nama: "Izin Usaha Jasa Kontruksi Nasional",
    gambar_url: "/assets/image/certificate/certificate3.png",
  },
];

const Attachment = () => {
  return (
    <div className="w-full md:py-8 py-4 lg:py-20 flex flex-col px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center gap-4 md:gap-8 lg:gap-10">
      {/* Judul */}
      <div className="flex flex-row justify-center items-center gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-base sm:text-lg font-semibold text-[#00662C]">
          Attachment
        </p>
      </div>

      {/* Grid Sertifikat */}
      <div className="w-full py-10">
        {certifications.length === 0 ? (
          <p className="text-gray-500 text-center">No attachments available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-8 md:gap-10">
            {certifications.map((item) => (
              <ContainerCertificate
                key={item.id}
                imageUrl={item.gambar_url}
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
