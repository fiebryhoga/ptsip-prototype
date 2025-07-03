import React from "react";
import CardEquipment from "@/components/common/CardEquipment";

// Data dummy langsung di file
const dummyEquipments = [
  {
    id: 9,
    nama_alat: "Hitachi KH 500-3",
    versi: "KH 500-3",
    tahun: 2012,
    jenis_alat: "Crawler Crane",
    description:
      "A powerful crawler crane known for its stability and lifting capacity in various construction environments.",
    berat: 100,
    gambar_url:
      "/assets/image/Contoh.png",
  },
  {
    id: 10,
    nama_alat: "Kobelco CKE2500-1",
    versi: "CKE2500-1",
    tahun: 2013,
    jenis_alat: "Crawler Crane",
    description:
      "High-performance crawler crane designed for heavy-duty lifting and large-scale construction projects.",
    berat: 250,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 11,
    nama_alat: "Kobelco CKE2500-2",
    versi: "CKE2500-2",
    tahun: 2013,
    jenis_alat: "Crawler Crane",
    description:
      "Another robust model of Kobelco crawler crane, offering exceptional lifting capabilities and operational efficiency.",
    berat: 250,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 12,
    nama_alat: "Sumitomo SCX1500-2",
    versi: "SCX1500-2",
    tahun: 2014,
    jenis_alat: "Crawler Crane",
    description:
      "A versatile Sumitomo crawler crane, ideal for various construction and infrastructure lifting tasks.",
    berat: 150,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 13,
    nama_alat: "Sumitomo SCX1500-1",
    versi: "SCX1500-1",
    tahun: 2010,
    jenis_alat: "Crawler Crane",
    description:
      "Reliable Sumitomo crawler crane model, providing solid performance for medium to heavy lifting applications.",
    berat: 150,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 14,
    nama_alat: "Sumitomo LS248-3",
    versi: "LS248-3",
    tahun: 2009,
    jenis_alat: "Crawler Crane",
    description:
      "A durable Sumitomo crawler crane, suitable for a range of construction and lifting demands.",
    berat: 150,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 15,
    nama_alat: "Kobelco RK 450-2",
    versi: "RK 450-2",
    tahun: 2012,
    jenis_alat: "Rough-Terrain Crane",
    description:
      "A compact yet powerful rough-terrain crane from Kobelco, perfect for demanding job sites with uneven ground.",
    berat: 45,
    gambar_url:       "/assets/image/Contoh.png",
  },
  {
    id: 16,
    nama_alat: "KATO SR250-2",
    versi: "SR250-2",
    tahun: 2011,
    jenis_alat: "Rough-Terrain Crane",
    description:
      "KATO rough-terrain crane, offering excellent maneuverability and lifting capacity for tight and challenging spaces.",
    berat: 25,
    gambar_url:       "/assets/image/Contoh.png",
  },
];

const ListEquipment = () => {
  return (
    <div className="w-full py-20 flex flex-col px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center gap-10">
      <div className="flex flex-row gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[#00662C]"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" />
          <path
            fillRule="evenodd"
            d="M11.662 3.39a.75.75 0 0 1 .626.866l-1.334 4.336a.75.75 0 0 1-1.403-.433L10.885 4.25a.75.75 0 0 1 .777-.86ZM14.339 6.25a.75.75 0 0 0 .626-.866L13.63 1.048a.75.75 0 0 0-1.402.434l1.333 4.334a.75.75 0 0 0 .778.834Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm font-semibold text-[#00662C]">
          List of Equipment
        </p>
      </div>

      {dummyEquipments.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Tidak ada equipment yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full pt-10">
          {dummyEquipments.map((equipment) => (
            <CardEquipment key={equipment.id} equipment={equipment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListEquipment;
