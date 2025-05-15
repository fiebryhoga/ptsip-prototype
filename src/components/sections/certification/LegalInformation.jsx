import React from "react";
import {
  RiInfoCardFill,
  RiFileList3Line,
  RiGovernmentLine,
  RiFilePaper2Line,
  RiShieldCheckLine,
  RiBuildingLine,
  RiFileCopyLine,
  RiUser3Line,
  RiSettings3Line,
  RiFileTextLine,
} from "react-icons/ri";
import CardLegal from "@/components/common/CardLegal";

const legalData = [
  {
    title: "Date of Establishment",
    description: "Jakarta, 17 April 2018",
    icon: RiFileList3Line,
  },
  {
    title: "SK Ministry of Justice",
    description: "AHU-0022283.ah.01.01/2018",
    icon: RiGovernmentLine,
  },
  {
    title: "Tax Number (NPWP)",
    description: "84.702.452.8-447.000",
    icon: RiFilePaper2Line,
  },
  {
    title: "Tax License (SKT)",
    description: "S-6667KT/WPJ.33/KP.0103/2018",
    icon: RiShieldCheckLine,
  },
  {
    title: "Trade License (SIUP)",
    description: "510/01600/PM/DPMPTSP.PPJU/OL",
    icon: RiBuildingLine,
  },
  {
    title: "Company Registration (TDP)",
    description: "1026.1770.2681/0L",
    icon: RiFileCopyLine,
  },
  {
    title: "Sertifikat Keahlian Dermaga",
    description: "10778501077850 a/n Dono Murdiyanto",
    icon: RiUser3Line,
  },
  {
    title: "Sertifikat Keahlian Mekanikal",
    description: "1077837 a/n Pantyo Ardi KS",
    icon: RiUser3Line,
  },
  {
    title: "Sertifikat Keahlian Mekanikal",
    description: "1077836 a/n Hanif Rusidy",
    icon: RiUser3Line,
  },
  {
    title: "Kartu Tanda Anggota AKSDAI",
    description: "00314.32.3275.0618",
    icon: RiFileList3Line,
  },
  {
    title: "SBU Jasa Pelaksana Konstruksi",
    description: "0624780 : Instalasi Mekanikal & Elektrikal",
    icon: RiSettings3Line,
  },
  {
    title: "SBU Jasa Pelaksana Konstruksi",
    description: "0624781 : Bangunan Sipil",
    icon: RiSettings3Line,
  },
  {
    title: "Izin Usaha Jasa Konstruksi",
    description: "1-110576-3275-00297/OL",
    icon: RiFileTextLine,
  },
  {
    title: "Sertifikat ISO 45001:2018",
    description: "ID825235C-1",
    icon: RiShieldCheckLine,
  },
  {
    title: "Sertifikat ISO 9001:2015",
    description: "ID825235A",
    icon: RiShieldCheckLine,
  },
];

const LegalInformation = () => {
  return (
    <div className="px-36 flex flex-col justify-center items-center w-full pb-20">
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiInfoCardFill size={22} color="#00662C" />
        <p className="text-sm font-semibold text-[#00662C]">
          Legal Informations
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-10 py-10 w-full">
        {legalData.map((item, index) => (
          <CardLegal
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LegalInformation;
