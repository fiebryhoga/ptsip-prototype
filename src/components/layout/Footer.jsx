import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

// 🔁 Dummy data
const contactData = {
  gmail: "saranaintiperwira@gmail.com",
  nomor: "+62 813 3208 2286",
  nomor_wa: "6281332082286",
  alamat: "Jl. Dakota No. 7A, Jati Asih, Kota Bekasi (17423)",
  alamat_workshop:
    "(Workshop) Jalan Raya Kedep, Tlajung Udik, Gunung Putri, Kabupaten Bogor (16962)",
  linkedin: "https://id.linkedin.com/company/pt-sarana-inti-perwira",
  youtube: "https://www.youtube.com/@saranaintiperwira7813",
};

const Footer = () => {
  return (
    <footer className="w-full bg-white relative">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src="/assets/image/bg-footer2.png"
        alt="Footer Background"
      />

      <div className="relative z-10 text-white pt-20 pb-10 px-4 sm:px-8 md:px-20 lg:px-36">
        <div className="md:flex flex-col items-center text-center gap-4 mb-20 hidden">
          <h1 className="text-3xl md:text-4xl font-semibold">
            PT Sarana Inti Perwira
          </h1>
          <p className="max-w-3xl text-sm">
            As a heavy lifting specialist, we provide safe, efficient, and
            reliable lifting and transportation solutions for industrial
            projects, both on-shore and off-shore. Backed by skilled
            professionals and high-standard equipment, we're committed to
            supporting the success of your heavy-duty operations.
          </p>
          <a
            href={`https://wa.me/${contactData.nomor_wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-10 py-3 bg-white hover:bg-transparent text-sm font-medium rounded-full text-[#4F7303] hover:text-white border border-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-5/12 flex flex-col gap-4">
            <img
              className="w-60 md:w-80 mb-2"
              src="/assets/image/logo-putih2.png"
              alt="Company Logo"
            />
            <p className="text-sm font-medium text-justify">
              PT. Sarana Inti Perwira is a Heavy Lifting Specialist with over a
              decade of experience, providing safe and reliable solutions for
              steel structures, mechanical installations, heavy transport, and
              equipment rental. We are a trusted partner in major, nationwide
              scale projects across Indonesia.
            </p>
            <h2 className="text-white text-xl font-semibold mt-4">
              Head Office
            </h2>
            <p className="text-white font-medium text-sm ">
              {contactData.alamat}
            </p>
          </div>

          <div className="md:w-7/12 flex flex-row sm:flex-row flex-wrap sm:flex-nowrap gap-12 sm:gap-8">
            <div className="w-full sm:w-1/5 flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-4">Menu</h3>
              <Link className="text-sm hover:text-gray-300" href="/">
                Home
              </Link>
              <Link className="text-sm hover:text-gray-300" href="/about">
                About Us
              </Link>
              <Link className="text-sm hover:text-gray-300" href="/portofolio">
                Portfolio
              </Link>
              <Link
                className="text-sm hover:text-gray-300"
                href="/fieldBusiness"
              >
                Our Service
              </Link>
              <Link className="text-sm hover:text-gray-300" href="/faq">
                FAQ's
              </Link>
            </div>

            <div className="w-full sm:w-3/5 flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-4">Stay in Touch</h3>

              <a
                className="flex items-center gap-2 text-sm hover:text-gray-300"
                href={`mailto:${contactData.gmail}`}
              >
                <IoMdMail /> {contactData.gmail}
              </a>

              <a
                className="flex items-center gap-2 text-sm hover:text-gray-300"
                href={`tel:${contactData.nomor}`}
              >
                <FaPhone />
                {contactData.nomor}
              </a>

              <a
                className="flex items-center gap-2 text-sm hover:text-gray-300"
                href={`https://wa.me/${contactData.nomor_wa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> {contactData.nomor_wa}
              </a>

              <a
                className="flex justify-start items-start gap-2 text-sm hover:text-gray-300"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contactData.alamat_workshop.replace("(Workshop) ", "")
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLocationPin size={30} className="sm:mt-1" />
                <p className="pt-2">{contactData.alamat_workshop}</p>
              </a>
            </div>

            <div className="flex w-full sm:w-1/5 flex-col gap-4 justify-start items-start">
              <h3 className="text-white text-xl font-semibold mb-8">
                Find us on
              </h3>
              <div className="flex flex-row gap-4">
                <a
                  className="py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  className="py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm hover:text-gray-300"
                  href={contactData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p className="text-sm w-full text-center">
            © {new Date().getFullYear()} PT Sarana Inti Perwira. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
