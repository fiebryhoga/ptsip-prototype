import React, { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa6"; // <-- Impor FaWhatsapp
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/contacts";
  const TOKEN = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

  useEffect(() => {
    const fetchContactData = async () => {
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
        if (Array.isArray(data)) {
          setContactData(data[0] || null);
        } else {
          setContactData(data || null);
        }
      } catch (err) {
        console.error("Error fetching contact data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[90vh] bg-white w-full relative bottom-0">
      <img
        className="w-full h-full object-cover absolute"
        src="/assets/image/bg-footer2.png"
        alt="Footer Background"
      />
      <div className="z-10 flex flex-col gap-4 py-10 px-36 justify-center items-center">
        <h1 className="text-4xl font-semibold text-white mt-10">
          PT Sarana Inti Perwira
        </h1>
        <p className="px-52 py-2 text-center text-sm text-white ">
          As a heavy lifting specialist, we provide safe, efficient, and
          reliable lifting and transportation solutions for industrial projects,
          both on-shore and off-shore. Backed by skilled professionals and
          high-standard equipment, we're committed to supporting the success of
          your heavy-duty operations.
        </p>
        {/* --- PERBAIKAN PADA TOMBOL CONTACT US --- */}
        <a
          // Arahkan ke URL wa.me dengan nomor WA dari state
          href={
            contactData?.nomor_wa
              ? `https://wa.me/${contactData.nomor_wa}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 bg-white hover:bg-transparent text-sm font-normal rounded-full text-[#4F7303] hover:text-white border border-white/60 transition-all duration-300 mt-10"
        >
          Contact Us
        </a>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-12 z-10 px-36">
        <div className="w-5/12 flex flex-col gap-4">
          <img
            className="w-80"
            src="/assets/image/logo-putih2.png"
            alt="Company Logo"
          />
          <p className="text-white text-sm font-medium pr-20 text-justify">
            PT. Sarana Inti Perwira is a Heavy Lifting Specialist with over a
            decade of experience, providing safe and reliable solutions for
            steel structures, mechanical installations, heavy transport, and
            equipment rental. We are a trusted partner in major, nationwide
            scale projects across Indonesia.
          </p>
          <h2 className="text-white text-xl font-semibold mt-4">Head Office</h2>
          {loading ? (
            <p className="text-white text-sm">Loading address...</p>
          ) : error ? (
            <p className="text-red-300 text-sm">Error loading address.</p>
          ) : contactData?.alamat ? (
            <p className="text-white font-medium text-sm ">
              {contactData.alamat}
            </p>
          ) : (
            <p className="text-white text-sm">Address not available.</p>
          )}
        </div>
        <div className="w-7/12 flex flex-row gap-20 z-10 justify-start items-start">
          <div className="flex flex-col gap-4 justify-start items-start">
            <h3 className="text-white text-xl font-semibold mb-8">Menu</h3>
            <Link
              className="text-white font-medium text-sm hover:text-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-medium text-sm hover:text-gray-300"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-white font-medium text-sm hover:text-gray-300"
              href="/portofolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-white font-medium text-sm hover:text-gray-300"
              href="/fieldBusiness"
            >
              Our Service
            </Link>
            <Link
              className="text-white font-medium text-sm hover:text-gray-300"
              href="/faq"
            >
              FAQ's
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-start items-start max-w-72">
            <h3 className="text-white text-xl font-semibold mb-8">
              Stay in Touch
            </h3>
            {loading ? (
              <p className="text-white text-sm">Loading contact info...</p>
            ) : error ? (
              <p className="text-red-300 text-sm">
                Error loading contact info.
              </p>
            ) : (
              <>
                {contactData?.gmail && (
                  <a
                    className="flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                    href={`mailto:${contactData.gmail}`}
                  >
                    <IoMdMail />
                    {contactData.gmail}
                  </a>
                )}
                {contactData?.nomor && (
                  <a
                    className="flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                    href={`tel:${contactData.nomor}`}
                  >
                    <FaPhone />
                    {contactData.nomor}
                  </a>
                )}
                {/* Menambahkan Nomor WhatsApp */}
                {contactData?.nomor_wa && (
                  <a
                    className="flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                    href={`https://wa.me/${contactData.nomor_wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    {contactData.nomor_wa}
                  </a>
                )}
                {contactData?.alamat_workshop && (
                  <a
                    className="flex flex-row gap-1 justify-start items-start text-white font-medium text-sm hover:text-gray-300"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      contactData.alamat_workshop.replace("(Workshop) ", "")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdLocationPin size={40} />
                    <p className="pt-2">{contactData.alamat_workshop}</p>
                  </a>
                )}
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 justify-start items-start">
            <h3 className="text-white text-xl font-semibold mb-8">
              Find us on
            </h3>
            <div className="flex flex-row gap-4">
              {loading ? (
                <p className="text-white text-sm">Loading social media...</p>
              ) : error ? (
                <p className="text-red-300 text-sm">
                  Error loading social media.
                </p>
              ) : (
                <>
                  {contactData?.linkedin && (
                    <a
                      className="py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  )}
                  {contactData?.youtube && (
                    <a
                      className="py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                      href={contactData.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <FaYoutube size={40} />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white text-sm py-4 bg-opacity-30 z-10">
        © {new Date().getFullYear()} PT Sarana Inti Perwira. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
