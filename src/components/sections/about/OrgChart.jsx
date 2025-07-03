// src/components/sections/about/OrgChart.jsx

import React, { useEffect, useState, useContext } from "react";
import CardOrg from "@/components/common/CardOrg";
import { RiBuilding3Fill } from "react-icons/ri";
import { DataContext } from "@/context/DataContext"; // Menggunakan DataContext

const OrgChart = () => {
  // Mengambil data dari DataContext
  const { organizations: orgs, loading, error } = useContext(DataContext);

  const BASE_URL = "http://127.0.0.1:8000";

  // Helper untuk mencari data berdasarkan jabatan
  const findByPosition = (position) => orgs.find((o) => o.jabatan === position);

  // Urutan jabatan untuk tampilan mobile
  const mobileOrder = [
    "Director",
    "Project Manager",
    "Technical Manager",
    "General Affair",
    "Finance Manager",
    "Supervisor",
    "Site Engineer",
    "Crawler Crane Operator Leader",
    "Helper Leader",
    "Rigger Leader",
    "Rough-Terrain Crane Operator Leader",
  ];

  if (loading)
    return <p className="text-center py-20">Loading struktur organisasi...</p>;
  if (error)
    return (
      <p className="text-center py-20 text-red-600">
        Gagal memuat struktur: {error}
      </p>
    );

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-36 py-20 bg-white gap-16">
      <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-xs md:text-lg font-semibold text-[#00662C]">
          Company Organization Structure
        </p>
      </div>

      {/* Tampilan Mobile: Daftar Vertikal (Hanya tampil di layar kecil) */}
      {/* <div className="md:hidden w-full flex flex-col items-center gap-4">
        {mobileOrder.map((position) => {
          const org = findByPosition(position);
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
        })}
      </div> */}

      {/* Tampilan Desktop: Tabel (Hanya tampil di layar medium ke atas) */}
      <div className="block w-full overflow-x-auto lg:overflow-hidden">
        <table
          className="table-auto border-transparent w-full text-center"
          style={{ minWidth: "800px" }}
        >
          <tbody>
            {/* Director */}
            <tr>
              <td align="center" colSpan={8} className="border-0 h-24">
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
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-t-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-t-0 border-r-0 border-l-0">
              <td className="border-t-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
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
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            {/* ... (Struktur tabel Anda yang kompleks tetap di sini) ... */}
            {/* Anda bisa melanjutkan mengisi struktur tabel seperti kode asli Anda */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgChart;
