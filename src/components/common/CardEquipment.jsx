import React from "react";
import Image from "next/image";

const CardEquipment = ({ equipment }) => {
  const {
    nama_alat,
    versi,
    tahun,
    jenis_alat,
    description,
    berat,
    gambar_url,
  } = equipment;

  const imagePath = gambar_url || "/assets/image/default-equipment.jpg";

  return (
    <div className="w-full flex flex-col h-auto border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-56 relative">
        <Image src={imagePath} alt={nama_alat} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{nama_alat}</h3>
        <p className="text-sm text-gray-600">
          {jenis_alat} • {versi} • {tahun}
        </p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm font-medium text-gray-700">Berat: {berat} Ton</p>
      </div>
    </div>
  );
};

export default CardEquipment;
