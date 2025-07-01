import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const [isTop, setIsTop] = useState(true);
  // --- LOGIKA BARU UNTUK MENGAMBIL NOMOR WA ---
  const [whatsAppNumber, setWhatsAppNumber] = useState("");

  useEffect(() => {
    // Fungsi untuk mendeteksi scroll
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Fungsi untuk mengambil data kontak dari API
    const fetchContactInfo = async () => {
      const apiUrl = "http://127.0.0.1:8000/api/contacts";
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          // Simpan hanya nomor WhatsApp ke state
          if (data && data.nomor_wa) {
            setWhatsAppNumber(data.nomor_wa);
          }
        }
      } catch (error) {
        console.error("Gagal mengambil info kontak untuk Navbar:", error);
      }
    };

    fetchContactInfo();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // --- AKHIR LOGIKA BARU ---

  const navItemClass = (path) =>
    `border-b-2 ${
      currentPath === path
        ? "border-b-[#00662C]"
        : "border-transparent hover:border-b-[#00662C]"
    } transition-all duration-300 ease-in-out h-10 px-4 flex flex-row justify-center items-center`;

  const linkClass = `cursor-pointer text-[#00662C] font-medium hover:text-[#00662C]`;

  const navItemClassMulti = (paths = []) =>
    `border-b-2 ${
      paths.includes(currentPath)
        ? "border-b-[#00662C]"
        : "border-transparent hover:border-b-[#00662C]"
    } transition-all duration-300 ease-in-out h-10 px-4 flex flex-row justify-center items-center`;

  return (
    <div
      className={`font-sans flex flex-row justify-between items-center fixed px-36 py-4 pb-5 w-full ${
        isTop ? "bg-white" : "bg-white/50"
      } shadow shadow-gray-400/10 z-50 transition-colors duration-300`}
    >
      <div className="h-12">
        <img className="h-full" src="/assets/image/logo2.png" alt="Logo" />
      </div>
      <nav className="flex flex-row font-normal text-sm">
        {/* ... menu navigasi lainnya ... */}
        <ul className={navItemClass("/")}>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </ul>
        <div className="relative group">
          <ul className={navItemClassMulti(["/about", "/portofolio"])}>
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Profile <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-md hidden group-hover:block z-50">
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              About Us
            </Link>
            <Link
              href="/portofolio"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="relative group">
          <ul className={navItemClassMulti(["/equipment", "/certification"])}>
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Equipment & Certification <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-md hidden group-hover:block z-50">
            <Link
              href="/equipment"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              Equipment
            </Link>
            <Link
              href="/certification"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              Certification
            </Link>
          </div>
        </div>
        <div className="relative group">
          <ul
            className={navItemClassMulti([
              "/mechanicalService",
              "/fieldBusiness",
            ])}
          >
            <div
              className={`${linkClass} pl-2 flex flex-row gap-1 items-center`}
            >
              Service <MdKeyboardArrowDown size={20} />
            </div>
          </ul>
          <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-md hidden group-hover:block z-50">
            <Link
              href="/mechanicalService"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              Mechanical, Construction & Lifting
            </Link>
            <Link
              href="/fieldBusiness"
              className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
            >
              Fields of Business
            </Link>
          </div>
        </div>
        <ul className={navItemClass("/faq")}>
          <Link href="/faq" className={linkClass}>
            FAQ's
          </Link>
        </ul>
        <ul className={navItemClass("/blog")}>
          <Link href="/blog" className={linkClass}>
            Blogs
          </Link>
        </ul>
      </nav>
      <div className="rounded-4xl text-white border border-[#00662C]">
        <a
          
          href={whatsAppNumber ? `https://wa.me/${whatsAppNumber}` : "#"}
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer" // Praktik keamanan terbaik untuk link eksternal
          className="group flex flex-row font-normal text-sm justify-center items-center py-3 px-6 gap-4 bg-[#00662C] text-white rounded-4xl hover:bg-transparent hover:text-[#4F7303] transition-colors ease-in-out duration-500"
        >
          <BsFillTelephoneFill
            size={15}
            className="text-white group-hover:text-[#00662C] transition-colors duration-500 ease-in-out"
          />
          Contact Us
        </a>
      </div>
    </div>
  );
}
