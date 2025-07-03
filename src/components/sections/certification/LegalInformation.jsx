import React from "react";
import { RiFileList3Line } from "react-icons/ri";
import CardLegal from "@/components/common/CardLegal";

// ✅ Data dummy langsung
const dummyLegalInformations = [
  {
    id: 2,
    nama: "SK Ministry of Justice",
    number: "AHU-0022283.ah.01.01/2018",
  },
  { id: 3, nama: "Tax Number (NPWP)", number: "84.702.452.8-447.000" },
  { id: 4, nama: "Tax License (SKT)", number: "S-6667KT/WPJ.33/KP.0103/2018" },
  {
    id: 5,
    nama: "Trade License (SIUP)",
    number: "510/01600/PM/DPMPTSP.PPJU/OL",
  },
  { id: 6, nama: "Company Registration (TDP)", number: "1026.1770.2681/0L" },
  {
    id: 7,
    nama: "Sertifikat Keahlian Dermaga",
    number: "1077850 a/n Dono Murdiyanto",
  },
  {
    id: 8,
    nama: "Sertifikat Keahlian Mekanikal",
    number: "1077837 a/n Pantyo Ardi KS",
  },
  {
    id: 9,
    nama: "Sertifikat Keahlian Mekanikal",
    number: "1077836 a/n Hanif Rusidy",
  },
  { id: 10, nama: "Kartu tanda anggota AKSDAI", number: "00314.32.3275.0618" },
  {
    id: 11,
    nama: "SBU Jasa Pelaksana Konstruksi (Instalasi Mekanikal & Elektrikal)",
    number: "0624780",
  },
  {
    id: 12,
    nama: "SBU Jasa Pelaksana Konstruksi (Bangunan Sipil)",
    number: "0624781",
  },
  {
    id: 13,
    nama: "Izin Usaha Jasa Konstruksi",
    number: "1-110576-3275-00297/OL",
  },
  { id: 14, nama: "Sertifikat ISO 45001:2018", number: "ID825235C-1" },
  { id: 15, nama: "Sertifikat ISO 9001:2015", number: "ID825235A" },
  { id: 16, nama: "Date of Establishment", number: "Jakarta 17 April 2018" },
];

const LegalInformation = () => {
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
      <div className="w-full py-10">
        {dummyLegalInformations.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Informasi legal tidak tersedia.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10 gap-y-6">
            {dummyLegalInformations.map((item) => (
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
