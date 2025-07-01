import React, { useEffect, useState } from "react";
import CardOrg from "@/components/common/CardOrg";

import { RiBuilding3Fill } from "react-icons/ri";




const OrgChart = () => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://127.0.0.1:8000/api/organizations";
  const TOKEN = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

  const BASE_URL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${
              errorBody.message || "Unknown error"
            }`
          );
        }

        const data = await response.json();
        setOrgs(data);
      } catch (err) {
        console.error("Error fetching organizations:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrgs();
  }, []);

  // Helper untuk cari berdasarkan jabatan
  const findByPosition = (position) => orgs.find((o) => o.jabatan === position);

  // Render loading/error
  if (loading) return <p>Loading struktur organisasi...</p>;
  if (error) return <p className="text-red-600">Gagal: {error}</p>;

  return (
    <div className="flex flex-col md:flex-col justify-center items-center w-full min-h-screen px-8 md:px-36 py-12 bg-white gap-16 ">
      
      <div className="flex flex-row gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-lg font-semibold text-[#00662C]">
          Company Organization Structure
        </p>
      </div>

      <table className="table-auto border-transparent w-full text-center">
        <tbody>
          <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
            <td
              align="center"
              colSpan={8}
              className="border-0 border-t-0 border-b-0 border-r-0 border-l-0 border-green-800 h-16 font-semibold"
            >
              {(() => {
                const org = findByPosition("Director");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
          </tr>

          <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>

          <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
            <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>
          <tr className="border-0 border-r-0 border-l-0">
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Project Manager");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Technical Manager");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("General Affair");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Finance Manager");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
          </tr>

          <tr className="border-0 border-r-0 border-l-0">
            <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>
          <tr className="border-0 border-r-0 border-l-0">
            <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>

          <tr className="border-0 border-r-0 border-l-0">
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Supervisor");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Site Engineer");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>

          <tr className="border-0 border-r-0 border-l-0">
            <td className="border-t-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>
          <tr className="border-t-0 border-r-0 border-l-0">
            <td className="border-t-0 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-2 border-r-2 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-t-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>

          <tr className="border-0 border-r-0 border-l-0">
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Crawler Crane Operator Leader");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Helper Leader");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition("Rigger Leader");
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
            <td
              align="center"
              className="border-0 border-r-0 border-l-0 w-16 h-16"
              colSpan={2}
            >
              {(() => {
                const org = findByPosition(
                  "Rough-Terrain Crane Operator Leader"
                );
                if (!org) return null;
                return (
                  <CardOrg
                    key={org.id}
                    name={org.nama}
                    position={org.jabatan}
                    imageUrl={
                      org.foto
                        ? `${BASE_URL}/storage/${org.foto}`
                        : "https://via.placeholder.com/60"
                    }
                  />
                );
              })()}
            </td>
          </tr>
          <tr className="border-0 border-r-0 border-l-0">
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>
          <tr className="border-0 border-r-0 border-l-0">
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
            <td className="border-0 border-r-0 border-l-0 w-16 border-green-800 h-16"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrgChart;
