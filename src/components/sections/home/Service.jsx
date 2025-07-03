import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import CardService from "@/components/common/CardService";
import { HiArrowRight } from "react-icons/hi";

// Data dummy services (hanya 4 pertama)
const dummyServices = [
  {
    id: 1,
    nama_service: "Steel Structure and Precast Erection",
    description:
      "Installation and erection of steel frameworks and precast concrete elements for various industrial, commercial, and infrastructure projects. We ensure structural integrity, alignment accuracy, and compliance with safety standards throughout the process.",
  },
  {
    id: 2,
    nama_service: "Mechanical",
    description:
      "Mechanical services including fabrication, assembly, maintenance, and repair of machinery and industrial components. Our team delivers reliable solutions for both static and rotating equipment across multiple sectors.",
  },
  {
    id: 3,
    nama_service: "Installation",
    description:
      "Installation of machines, equipment, and heavy industrial systems with high precision. We manage end-to-end processes, from alignment and fitting to testing and commissioning, tailored to client specifications.",
  },
  {
    id: 4,
    nama_service: "Piping Work",
    description:
      "Engineering, fabrication, and installation of piping systems for fluid and gas transport. We handle various piping materials and standards, ensuring leak-proof and long-lasting systems for industrial applications.",
  },
];

const Service = () => {
  const mainServices = dummyServices.slice(0, 4);

  return (
    <div className="flex flex-col w-full py-10 md:h-screen items-center px-4 sm:px-8 md:px-20 lg:px-36 gap-12">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <div className="flex flex-row gap-4 rounded-full px-6 md:px-10 py-2 mb-4 bg-[#00662C]/10">
          <MdMiscellaneousServices size={22} color="#00662C" />
          <p className="text-sm font-semibold text-[#00662C]">
            The Services We Provide
          </p>
        </div>
        <p className="text-sm font-normal px-0 sm:px-4 md:px-20 lg:px-60 text-[#000000]">
          From mechanical and structural works to heavy lifting and logistics,
          we offer end-to-end industrial service solutions. Our lifting services
          are available for both on-shore and off-shore environments, handled
          with strict safety standards and technical excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-6 md:gap-10 w-full">
        {mainServices.map((service) => (
          <CardService
            key={service.id}
            imageUrl="/assets/image/service/img5.jpg"
            title={service.nama_service}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <a
          href="/fieldBusiness"
          className="px-8 py-3 text-base font-medium text-white bg-[#00662C] rounded-full hover:text-[#00662C] hover:bg-transparent border border-[#00662C] transition-all duration-300 ease-in-out"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Service;
