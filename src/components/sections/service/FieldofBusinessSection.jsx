import React from "react";
import { RiBuilding3Fill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardService from "@/components/common/CardService";

// Data dummy langsung
const services = [
  {
    id: 6,
    nama_service: "Power Plant",
    description:
      "Full-service support for the construction, installation, and maintenance of power generation plants, including mechanical and lifting operations for turbines, boilers, and auxiliary systems.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 7,
    nama_service: "Concrete Plant",
    description:
      "Comprehensive services for building and equipping concrete batching and production plants. We provide reliable structural and mechanical solutions to support high-output production facilities.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 8,
    nama_service: "Material Handling Plant",
    description:
      "Development of infrastructure and systems for efficient handling, movement, and processing of raw materials and goods, including conveyor systems, silos, and loading equipment.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 9,
    nama_service: "Lifting Consultant",
    description:
      "Expert consultancy services for complex lifting operations, including planning, risk assessment, and method statements to ensure safe, efficient, and cost-effective lifting activities.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 10,
    nama_service: "Infrastructures (Bridge, Toll Road, Jetty)",
    description:
      "Construction services for major infrastructure projects, such as bridges, toll roads, and marine jetties. We offer integrated solutions from foundation to superstructure, tailored to project requirements.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 11,
    nama_service: "Heavy Equipment Rental (Crane)",
    description:
      "Rental services for various types of cranes and lifting equipment to support construction, industrial maintenance, and special projects, including operator support and logistical planning.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 12,
    nama_service: "Warehouse Construction",
    description:
      "Design and construction of modern warehouse facilities optimized for storage, logistics, and distribution. We focus on functionality, scalability, and durability for long-term operations.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
  {
    id: 13,
    nama_service: "Piling (Land, Off-shore, On-shore)",
    description:
      "Foundation piling services for diverse terrains and environments, including soft soil and coastal areas. We use modern piling techniques to ensure strong, reliable foundations for any type of structure.",
    jenis: "Fields of Business",
    gambar_url: "/assets/image/contoh.png",
  },
];

const FieldofBusinessSection = () => {
  const categoryFilter = "Fields of Business";

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
          href="/mechanicalService"
        >
          <span>Go to Mechanical & Lifting Service</span>
          <IoIosArrowRoundForward
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
};

export default FieldofBusinessSection;
