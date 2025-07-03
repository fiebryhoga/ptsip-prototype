import React from "react";
import CardProject from "@/components/common/CardProject";

// Data sekarang berada di dalam komponen
const portfoliosData = [
    {
        "id": 1,
        "nama_project": "Suramadu Bridge",
        "tahun": 2007,
        "jenis_project": "Precast Installation",
        "description": "Comprehensive precast installation for the iconic Suramadu Bridge, ensuring structural integrity and timely completion.",
        "gambar_url": "/assets/image/portfolio/suramadu.jpg"
    },
    {
        "id": 2,
        "nama_project": "PLTU Karang Kandri 2 x 350 MW",
        "tahun": 2005,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Execution of steel structure and mechanical installation for the Karang Kandri Coal-fired Power Plant, contributing to vital energy infrastructure.",
        "gambar_url": "/assets/image/portfolio/pltu-karang-kandri.jpg"
    },
    {
        "id": 3,
        "nama_project": "PLTU Asam-Asam",
        "tahun": 2011,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Provided robust steel structure and mechanical installation services for the Asam-Asam Coal-fired Power Plant.",
        "gambar_url": "/assets/image/portfolio/pltu-asam-asam.jpeg"
    },
    {
        "id": 4,
        "nama_project": "OLC-CPP West Mulia Project, Kintap, South Kalimantan",
        "tahun": 2013,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Comprehensive steel structure and mechanical installation for the OLC-CPP West Mulia Project in Kintap, South Kalimantan, ensuring operational efficiency.",
        "gambar_url": "/assets/image/portfolio/west-mulia-project.jpg"
    },
    {
        "id": 5,
        "nama_project": "Lamongan Jetty",
        "tahun": 2013,
        "jenis_project": "Precast Installation",
        "description": "Specialized precast installation for the Lamongan Jetty, contributing to enhanced maritime logistics.",
        "gambar_url": "/assets/image/portfolio/lamongan-jetty.jpg"
    },
    {
        "id": 6,
        "nama_project": "Indocement Limestone Transportation System",
        "tahun": 2014,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Design and implementation of steel structure and mechanical installation for Indocement's limestone transportation system, optimizing material flow.",
        "gambar_url": "/assets/image/portfolio/indocement.jpg"
    },
    {
        "id": 7,
        "nama_project": "Holcim Geocycle",
        "tahun": 2015,
        "jenis_project": "Steel Structure Installation",
        "description": "Executed high-quality steel structure installation for Holcim Geocycle facilities, supporting sustainable waste management.",
        "gambar_url": "/assets/image/portfolio/holcim-geocycle.jpg"
    },
    {
        "id": 8,
        "nama_project": "Semen Padang",
        "tahun": 2016,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Delivered precise steel structure and mechanical installation services for Semen Padang's industrial operations.",
        "gambar_url": "/assets/image/portfolio/semen-padang.webp"
    },
    {
        "id": 9,
        "nama_project": "Bukit Asam",
        "tahun": 2016,
        "jenis_project": "Steel Structure and Mechanical Installation",
        "description": "Provided essential steel structure and mechanical installation for infrastructure projects at Bukit Asam mining sites.",
        "gambar_url": "/assets/image/portfolio/bukit-asam.jpg"
    },
    {
        "id": 10,
        "nama_project": "Cibitung – Cilincing",
        "tahun": 2018,
        "jenis_project": "Steel Structure",
        "description": "Contribution to the Cibitung – Cilincing toll road project with robust steel structure construction.",
        "gambar_url": "/assets/image/portfolio/cibitung-cilincing.jpg"
    },
    {
        "id": 11,
        "nama_project": "Petrokimia Jetty",
        "tahun": 2018,
        "jenis_project": "Precast Installation",
        "description": "Specialized precast installation work for the Petrokimia Jetty, enhancing port infrastructure.",
        "gambar_url": "/assets/image/portfolio/petrokimia-jetty.jpg"
    },
    {
        "id": 12,
        "nama_project": "Toll Road Trans Sumatera (Pekanbaru – Dumai)",
        "tahun": 2019,
        "jenis_project": "Precast Installation (996 Girder)",
        "description": "Large-scale precast girder installation for the Pekanbaru – Dumai segment of the Trans Sumatera Toll Road, covering 996 girders.",
        "gambar_url": "/assets/image/portfolio/tol-pekanbaru-dumai.jpg"
    },
    {
        "id": 13,
        "nama_project": "Toll Road Trans Sumatera (Bengkulu – Taba)",
        "tahun": 2020,
        "jenis_project": "Precast Installation (668 Girder)",
        "description": "Extensive precast girder installation for the Bengkulu – Taba section of Trans Sumatera Toll Road, involving 668 girders.",
        "gambar_url": "/assets/image/portfolio/tol-bengkulu-taba.jpeg"
    },
    {
        "id": 14,
        "nama_project": "Berlian Manyar Sejahtera Jetty, Gresik",
        "tahun": 2020,
        "jenis_project": "Precast Concrete Installation",
        "description": "Executed specialized precast concrete installation for the Berlian Manyar Sejahtera Jetty in Gresik.",
        "gambar_url": "/assets/image/portfolio/berlian-manyar-jetty.webp"
    },
    {
        "id": 15,
        "nama_project": "Toll Road Trans Sumatera (Indralaya – Prabumulih)",
        "tahun": 2021,
        "jenis_project": "Precast Installation (132 Girder)",
        "description": "Precast girder installation for the Indralaya – Prabumulih segment of Trans Sumatera Toll Road, completing 132 girders.",
        "gambar_url": "/assets/image/portfolio/tol-indralaya-prabumulih.jpeg"
    },
    {
        "id": 16,
        "nama_project": "Toll Road Trans Sumatera (Binjai – Langsa)",
        "tahun": 2022,
        "jenis_project": "Precast Installation (102 Girder)",
        "description": "Efficient precast girder installation for the Binjai – Langsa section of Trans Sumatera Toll Road, totaling 102 girders.",
        "gambar_url": "/assets/image/portfolio/tol-binjai-langsa.jpeg"
    },
    {
        "id": 17,
        "nama_project": "Pembangunan Dermaga Tanjung Benoa",
        "tahun": 2023,
        "jenis_project": "Marine Infrastructure",
        "description": "Involved in the construction and development of the Tanjung Benoa Jetty, enhancing maritime access.",
        "gambar_url": "/assets/image/portfolio/dermaga-tanjung-benoa.jpeg"
    }
];

const ListPortofolio = () => {
  // 1. Langsung gunakan data yang sudah didefinisikan di atas dan urutkan
  const sortedPortofolios = portfoliosData
    .slice()
    .sort((a, b) => b.tahun - a.tahun); // Mengurutkan dari tahun terbesar ke terkecil

  return (
    <div className="w-full py-20 flex flex-col px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 justify-center items-center gap-10 bg-gray-50">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-row gap-4 rounded-full px-8 sm:px-10 py-2 bg-[#00662C]/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#00662C]"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.25-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm font-semibold text-[#00662C]">
            Portfolio Project's
          </p>
        </div>
        <h1 className="text-[#00662C] text-2xl sm:text-3xl font-semibold max-w-lg">
          Successful Projects We've Handled
        </h1>
      </div>

      {sortedPortofolios.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Belum ada portofolio yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {/* 2. Gunakan array yang sudah diurutkan untuk di-render */}
          {sortedPortofolios.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPortofolio;
