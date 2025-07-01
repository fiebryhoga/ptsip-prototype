import React, { useEffect, useState } from "react";
import { RiBuilding3Fill } from "react-icons/ri";
// import ContainerCertificate from "@/components/common/ContainerCertificate";

import ContainerCertificate from "@/components/common/ContainerCertificate";

const Attachment = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://127.0.0.1:8000/api/certifications";
  const BASE_URL = "http://127.0.0.1:8000"; // untuk prepend path gambar

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer 2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className="px-36 flex flex-col justify-center items-center w-full pb-20">
      <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-lg font-semibold text-[#00662C]">Attachment</p>
      </div>

      <div className="grid grid-cols-3 justify-center items-start gap-10 py-10 w-full">
        {loading ? (
          <p className="text-gray-600 col-span-3 text-center">Loading...</p>
        ) : (
          certificates.map((item) => (
            <ContainerCertificate
              key={item.id}
              imageUrl={`${BASE_URL}${item.gambar_url}`}
              altText={item.nama}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Attachment;
