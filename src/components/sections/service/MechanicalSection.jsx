import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardService from "@/components/common/CardService";

// Data dummy langsung
const services = [
  {
    id: 1,
    nama_service: "Steel Structure and Precast Erection",
    description:
      "Installation and erection of steel frameworks and precast concrete elements for various industrial, commercial, and infrastructure projects. We ensure structural integrity, alignment accuracy, and compliance with safety standards throughout the process.",
    jenis: "Mechanical, Construction, and Lifting",
    gambar_url:
      "/storage/services/qNBM6Md5U9Bx9gueOMZCVgcxFR6bbwgSYxi9w1r1.webp",
  },
  {
    id: 2,
    nama_service: "Mechanical",
    description:
      "Mechanical services including fabrication, assembly, maintenance, and repair of machinery and industrial components. Our team delivers reliable solutions for both static and rotating equipment across multiple sectors.",
    jenis: "Mechanical, Construction, and Lifting",
    gambar_url:
      "/storage/services/HfmQF5pwGu8vDOR46JFe3VEzoNRZhSqaXW4DrdWK.jpg",
  },
  {
    id: 3,
    nama_service: "Installation",
    description:
      "Installation of machines, equipment, and heavy industrial systems with high precision. We manage end-to-end processes, from alignment and fitting to testing and commissioning, tailored to client specifications.",
    jenis: "Mechanical, Construction, and Lifting",
    gambar_url:
      "/storage/services/otXE9L8mQ5x82wIUUp4BuelmNBPme174ifp1yutq.webp",
  },
  {
    id: 4,
    nama_service: "Piping Work",
    description:
      "Engineering, fabrication, and installation of piping systems for fluid and gas transport. We handle various piping materials and standards, ensuring leak-proof and long-lasting systems for industrial applications.",
    jenis: "Mechanical, Construction, and Lifting",
    gambar_url:
      "/storage/services/YhC8sicYrtELTXya8hcXc7Lce5T30zFNiG5LIixR.jpg",
  },
  {
    id: 5,
    nama_service: "Lifting Work (On-shore & Off-shore)",
    description:
      "Specialized heavy lifting operations on land and offshore sites using advanced equipment and certified personnel. We emphasize safety, precision, and efficiency in moving large and sensitive structures or equipment.",
    jenis: "Mechanical, Construction, and Lifting",
    gambar_url:
      "/storage/services/3HMlhPXDZpIhVOrXQWLue52W9Q9t7vXyXFyPlip7.png",
  },
];

const MechanicalSection = () => {
  const categoryFilter = "Mechanical, Construction, and Lifting";

  const filteredServices = services.filter(
    (service) => service.jenis === categoryFilter
  );

  return (
    <div className="w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 py-10">
      {/* Judul Section */}
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 bg-[#00662C]/10">
          <RiBuilding3Fill size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            {categoryFilter}
          </p>
        </div>
      </div>

      {/* Grid untuk daftar layanan */}
      <div className="w-full">
        {filteredServices.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No services found for this category.
          </p>
        ) : (
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 py-8">
            {filteredServices.map((service) => (
              <CardService
                key={service.id}
                imageUrl={service.gambar_url}
                title={service.nama_service}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="mt-8">
        <a
          className="group flex flex-row font-normal text-sm justify-center items-center py-3 px-8 gap-2 bg-[#00662C] text-white rounded-full hover:bg-transparent hover:text-[#00662C] transition-colors ease-in-out duration-300 border border-transparent hover:border-[#00662C]"
          href="/fieldBusiness"
        >
          <span>Go to Field of Business Services</span>
          <IoIosArrowRoundForward
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

export default MechanicalSection;
