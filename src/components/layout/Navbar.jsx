import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

// 🔁 Data dummy
const dummyContact = {
  gmail: "saranaintiperwira@gmail.com",
  nomor: "+62 813 3208 2286",
  nomor_wa: "6281332082286",
  alamat: "Jl. Dakota No. 7A, Jati Asih, Kota Bekasi (17423)",
  alamat_workshop:
    "(Workshop) Jalan Raya Kedep, Tlajung Udik, Gunung Putri, Kabupaten Bogor (16962)",
  linkedin: "https://id.linkedin.com/company/pt-sarana-inti-perwira",
  youtube: "https://www.youtube.com/@saranaintiperwira7813",
};

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
      if (window.scrollY > 10 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const getIsActive = (paths = []) => {
    return paths.some((path) => {
      if (path === "/") return currentPath === path;
      return currentPath.startsWith(path);
    });
  };

  const getLinkClasses = (paths = []) => {
    const isActive = getIsActive(paths);
    return `font-medium transition-colors duration-300 ${
      isActive ? "text-[#00662C]" : "text-black hover:text-[#00662C]"
    }`;
  };

  const getItemContainerClasses = (paths = []) => {
    const isActive = getIsActive(paths);
    return `border-b-2 transition-colors duration-300 h-10 px-2 xl:px-4 flex flex-wrap items-center ${
      isActive
        ? "border-b-[#00662C]"
        : "border-transparent hover:border-b-[#00662C]"
    }`;
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`font-sans fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isTop && !isMenuOpen ? "bg-white" : "bg-white/95 backdrop-blur-sm"
      } shadow-sm shadow-gray-400/10`}
    >
      <div className="flex flex-row justify-between items-center w-full px-4 sm:px-8 md:px-20 xl:px-36 py-4">
        <Link
          href="/"
          className="h-12 flex-shrink-0"
          onClick={() => isMenuOpen && handleMobileLinkClick()}
        >
          <img className="h-full" src="/assets/image/logo2.png" alt="Logo" />
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden lg:flex flex-row items-center font-normal xl:text-sm">
          <div className={getItemContainerClasses(["/"])}>
            <Link href="/" className={getLinkClasses(["/"])}>
              Home
            </Link>
          </div>

          <div className="relative group">
            <div className={getItemContainerClasses(["/about", "/portofolio"])}>
              <div
                className={`${getLinkClasses([
                  "/about",
                  "/portofolio",
                ])} pl-2 flex items-center gap-1 cursor-pointer`}
              >
                Profile <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-md hidden group-hover:block z-50">
              <Link
                href="/about"
                className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
              >
                About Us
              </Link>
              <Link
                href="/portofolio"
                className="block px-4 py-2 text-sm rounded-b-md text-[#00662C] hover:bg-[#00662C]/20"
              >
                Portfolio
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div
              className={getItemContainerClasses([
                "/equipment",
                "/certification",
              ])}
            >
              <div
                className={`${getLinkClasses([
                  "/equipment",
                  "/certification",
                ])} pl-2 flex items-center gap-1 cursor-pointer`}
              >
                Equipment & Certification <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-md hidden group-hover:block z-50">
              <Link
                href="/equipment"
                className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
              >
                Equipment
              </Link>
              <Link
                href="/certification"
                className="block px-4 py-2 text-sm rounded-b-md text-[#00662C] hover:bg-[#00662C]/20"
              >
                Certification
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div
              className={getItemContainerClasses([
                "/mechanicalService",
                "/fieldBusiness",
              ])}
            >
              <div
                className={`${getLinkClasses([
                  "/mechanicalService",
                  "/fieldBusiness",
                ])} pl-2 flex items-center gap-1 cursor-pointer`}
              >
                Service <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-md hidden group-hover:block z-50">
              <Link
                href="/mechanicalService"
                className="block px-4 py-2 text-sm text-[#00662C] hover:bg-[#00662C]/20"
              >
                Mechanical, Construction & Lifting
              </Link>
              <Link
                href="/fieldBusiness"
                className="block px-4 py-2 text-sm rounded-b-md text-[#00662C] hover:bg-[#00662C]/20"
              >
                Fields of Business
              </Link>
            </div>
          </div>

          <div className={getItemContainerClasses(["/faq"])}>
            <Link href="/faq" className={getLinkClasses(["/faq"])}>
              FAQ's
            </Link>
          </div>
          <div className={getItemContainerClasses(["/blog"])}>
            <Link href="/blog" className={getLinkClasses(["/blog"])}>
              Blogs
            </Link>
          </div>
        </nav>

        {/* Tombol Contact Us */}
        <div className="hidden lg:block ml-4">
          <a
            href={`https://wa.me/${dummyContact.nomor_wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center text-xs xl:text-sm py-3 lg:px-3 xl:px-6 gap-4 bg-[#00662C] text-white rounded-full hover:bg-transparent hover:text-[#00662C] transition-colors duration-300 border border-transparent hover:border-[#00662C]"
          >
            <BsFillTelephoneFill size={15} />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Tombol Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-2"
          >
            {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white w-full px-4 pt-2 pb-6 flex flex-col items-center gap-2 shadow-lg">
          <Link
            href="/"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/portofolio"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Portfolio
          </Link>
          <Link
            href="/equipment"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Equipment
          </Link>
          <Link
            href="/certification"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Certification
          </Link>
          <Link
            href="/mechanicalService"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Our Services
          </Link>
          <Link
            href="/faq"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            FAQ's
          </Link>
          <Link
            href="/blog"
            className="w-full text-center py-3 text-black font-medium hover:bg-gray-100 rounded-lg"
            onClick={handleMobileLinkClick}
          >
            Blogs
          </Link>
          <a
            href={`https://wa.me/${dummyContact.nomor_wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-4 py-3 px-6 bg-[#00662C] text-white rounded-full"
          >
            Contact Us
          </a>
        </nav>
      )}
    </div>
  );
}
