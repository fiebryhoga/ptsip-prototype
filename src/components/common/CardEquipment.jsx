// components/common/CardEquipment.jsx

import React from "react";

// 1. Komponen sekarang menerima prop 'equipment' yang berisi data dari API
const CardEquipment = ({ equipment }) => {
  // Handle jika data belum tersedia untuk menghindari error
  if (!equipment) {
    return <div>Memuat data...</div>;
  }

  const imageUrl = equipment.gambar_url ? `http://127.0.0.1:8000${equipment.gambar_url}` : '/assets/image/placeholder.png';


  return (
    <div>
      <div className="flex flex-col justify-start h-[540px] items-start w-full border border-green-700/20 shadow-xl rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="w-full h-3/4 bg-green-700 relative">
          {/* 2. Menampilkan gambar dinamis dari 'gambar_url' */}
          <img
            className="w-full h-full object-cover rounded-t-2xl"
            src={imageUrl} // Menggunakan URL dari API
            alt={equipment.nama_alat} // Menambahkan alt text yang deskriptif
            // Menambahkan fallback jika gambar gagal dimuat
            onError={(e) => {
              e.target.onerror = null;
              // e.target.src = "/assets/image/placeholder.png";
            }}
          />
          <div className="flex flex-row gap-2 absolute bottom-2 left-4">
            {/* 3. Menampilkan data dinamis di overlay gambar */}
            <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
              Tahun: {equipment.tahun}
            </p>
            <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
              Berat: {equipment.berat} kg
            </p>
            <p className="text-xs text-white bg-black/40 rounded-full py-1 px-2">
              Versi: {equipment.versi}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 py-4 flex flex-col justify-between text-sm text-gray-700 w-full h-1/4">
          <div className="flex flex-row justify-between items-center">
            {/* 4. Menampilkan nama alat dan jenis alat secara dinamis */}
            <h3 className="text-xl font-semibold text-[#00662C] line-clamp-1">
              {equipment.nama_alat}
            </h3>
            <p className="text-sm font-semibold text-gray-500">
              {equipment.jenis_alat}
            </p>
          </div>

          <p className="mt-1 text-sm text-gray-600 line-clamp-3">
            {/* 5. Menampilkan deskripsi dinamis */}
            {equipment.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEquipment;
