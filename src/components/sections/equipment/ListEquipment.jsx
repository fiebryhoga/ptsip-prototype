// src/components/sections/equipment/ListEquipment.jsx

import React, { useContext } from "react"; // Impor useContext, hapus useState dan useEffect
import CardEquipment from "@/components/common/CardEquipment";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const ListEquipment = () => {
  // Ambil data dari context, bukan dari state lokal
  const { equipments, loading, error } = useContext(DataContext);

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
          <path d="M19.5 9.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z" />
          <path
            fillRule="evenodd"
            d="M20.662 10.39a.75.75 0 0 1 .866.626l-1.333 4.336a.75.75 0 0 1-1.403-.433L20.125 11a.75.75 0 0 1 .537-.61ZM17.339 12.25a.75.75 0 0 0 .866-.626l1.333-4.334a.75.75 0 1 0-1.402-.434l-1.334 4.336a.75.75 0 0 0 .537.958Z"
            clipRule="evenodd"
          />
          <path d="M18.75 19.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Z" />
          <path d="M16.5 21.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Z" />
          <path d="M14.25 19.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Z" />
          <path d="m2.25 12 5.023 5.023a.75.75 0 0 1 0 1.06-1.5 1.5 0 0 0 0 2.122.75.75 0 0 1-1.06 1.061L.47 15.53a.75.75 0 0 1 0-1.06l5.023-5.023a.75.75 0 0 1 1.06 0l3.758 3.757a.75.75 0 0 1 0 1.061-1.5 1.5 0 0 0 0 2.121.75.75 0 0 1-1.06 1.061L3.97 12.97a.75.75 0 0 1 0-1.06l5.023-5.023a.75.75 0 1 1 1.06 1.06L5.023 12.97a.75.75 0 0 0 0 1.06l3.53-3.53-3.757-3.757a.75.75 0 0 1 0-1.06l5.024-5.023a.75.75 0 0 1 1.06 0l5.023 5.023a.75.75 0 0 1 0 1.06L15.97 12.97a.75.75 0 0 0 0 1.06l3.53-3.53-3.757-3.757a.75.75 0 0 1 0-1.06l5.024-5.023a.75.75 0 0 1 1.06 0l5.023 5.023a.75.75 0 0 1 0 1.06l-5.023 5.023a.75.75 0 0 1-1.06 0l-3.758-3.757a.75.75 0 0 1 0-1.061 1.5 1.5 0 0 0 0-2.121.75.75 0 0 1 1.06-1.061l5.293 5.293a.75.75 0 0 1 0 1.06l-5.023 5.023a.75.75 0 0 1-1.06 0l-3.758-3.757a.75.75 0 0 1 0-1.061 1.5 1.5 0 0 0 0-2.121.75.75 0 0 1 1.06-1.061l5.293 5.293a.75.75 0 0 1 0 1.06l-5.023 5.023a.75.75 0 0 1-1.06 0-1.5 1.5 0 0 0-2.121 0 .75.75 0 0 1-1.06-1.06l5.023-5.023a.75.75 0 0 1 1.06 0l3.757 3.757a.75.75 0 0 0 1.06 0l-5.292-5.293a.75.75 0 0 1 0-1.06Z" />
        </svg>
        <p className="text-sm font-semibold text-[#00662C]">
          List of Equipment
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">
          Memuat data equipment...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">
          Gagal memuat data equipment.
        </p>
      ) : equipments.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Tidak ada equipment yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full pt-10">
          {equipments.map((equipment) => (
            <CardEquipment key={equipment.id} equipment={equipment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListEquipment;
