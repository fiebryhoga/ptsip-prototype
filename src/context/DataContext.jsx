// src/context/DataContext.js

import React, { createContext, useState, useEffect, useContext } from "react";

// Pastikan "export" ada di sini
export const DataContext = createContext(null);

// Hook kustom untuk kemudahan (opsional, tapi bagus)
export const useData = () => useContext(DataContext);

// Pastikan "export" juga ada di sini
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    contactInfo: null,
    blogs: [],
    portofolios: [],
    services: [],
    faqs: [],
    equipments: [],
    mitras: [],
    certifications: [],
    legalInformations: [],
    organizations: [],
    testimonials: [],
    loading: true,
    error: null,
  });

  const API_BASE_URL = "http://127.0.0.1:8000/api";
  const TOKEN = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

  useEffect(() => {
    const fetchData = async (endpoint) => {
      try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(
            `Gagal memuat ${endpoint}: Status ${response.status}`
          );
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const fetchAllData = async () => {
      const results = await Promise.allSettled([
        fetchData("contacts"),
        fetchData("blogs"),
        fetchData("portofolios"),
        fetchData("services"),
        fetchData("faqs"),
        fetchData("equipments"),
        fetchData("mitras"),
        fetchData("certifications"),
        fetchData("legal_informations"),
        fetchData("organizations"),
        fetchData("testimonials"),
      ]);

      const getDataFromResult = (result) => {
        if (result.status === "fulfilled") {
          return result.value.data || result.value;
        }
        console.error("Gagal fetch:", result.reason);
        return null;
      };

      const contactData = getDataFromResult(results[0]);

      setData({
        contactInfo: Array.isArray(contactData) ? contactData[0] : contactData,
        blogs: getDataFromResult(results[1]) || [],
        portofolios: getDataFromResult(results[2]) || [],
        services: getDataFromResult(results[3]) || [],
        faqs: getDataFromResult(results[4]) || [],
        equipments: getDataFromResult(results[5]) || [],
        mitras: getDataFromResult(results[6]) || [],
        certifications: getDataFromResult(results[7]) || [],
        legalInformations: getDataFromResult(results[8]) || [],
        organizations: getDataFromResult(results[9]) || [],
        testimonials: getDataFromResult(results[10]) || [],
        loading: false,
        error: results.some((r) => r.status === "rejected")
          ? "Sebagian data gagal dimuat"
          : null,
      });
    };

    fetchAllData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
