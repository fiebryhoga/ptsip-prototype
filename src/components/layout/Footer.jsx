import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";






const Footer = () => {
  return (
    <div className=" flex flex-col gap-10 justify items-center h-[90vh] bg-white w-full relative bottom-0">
      <img
        className="w-full h-full object-cover absolute"
        src="/assets/image/bg-footer2.png"
        alt=""
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
        <a
          className="px-10 py-3 bg-white hover:bg-transparent text-sm font-normal rounded-full text-[#4F7303] hover:text-white border border-white/60 transition-all hover:transition-all duration-300 hover:duration-300 ease-in-out hover:ease-in-out mt-10"
          href=""
        >
          Contact Us
        </a>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-12 z-10 px-36">
        <div className="w-5/12 flex flex-col gap-4">
          <img className="w-80" src="/assets/image/logo-putih2.png" alt="" />
          <p className="text-white text-sm font-medium pr-20 text-justify">
            PT. Sarana Inti Perwira is a Heavy Lifting Specialist with over a
            decade of experience, providing safe and reliable solutions for
            steel structures, mechanical installations, heavy transport, and
            equipment rental. We are a trusted partner in major, nationwide
            scale projects across Indonesia.
          </p>

          <h2 className="text-white text-xl font-semibold mt-4">Head Office</h2>
          <p className="text-white font-medium text-sm ">
            Jl. Dakota No. 7A, Jati Asih, Kota Bekasi (17423)
          </p>
        </div>
        <div className="w-7/12 flex flex-row gap-20 z-10 jutify-start items-start">
          <div className="flex flex-col gap-4 jutify-start items-start">
            <h3 className="text-white text-xl font-semibold mb-8">Menu</h3>
            <a className="text-white font-medium text-sm" href="">
              Home
            </a>
            <a className="text-white font-medium text-sm" href="">
              About Us
            </a>
            <a className="text-white font-medium text-sm" href="">
              Portofolio
            </a>
            <a className="text-white font-medium text-sm" href="">
              Our Service
            </a>

            <a className="text-white font-medium text-sm" href="">
              FAQ's
            </a>
          </div>

          <div className="flex flex-col gap-4 jutify-start items-start max-w-72">
            <h3 className="text-white text-xl font-semibold mb-8">
              Stay in Touch
            </h3>
            <a
              className=" flex flex-row gap-2 justify-center items-center text-white font-medium text-sm"
              href=""
            >
              <IoMdMail />
              saranaintiperwira@gmail.com
            </a>
            <a
              className=" flex flex-row gap-2 justify-center items-center text-white font-medium text-sm"
              href=""
            >
              <FaPhone />
              +62 813 3208 2286
            </a>

            <a
              className=" flex flex-row gap-1 justify-start items-start text-white font-medium text-sm"
              href=""
            >
              <MdLocationPin size={40} />
              <p className="pt-2">
                (Workshop) Jalan Raya Kedep, Tlajung Udik, Gunung Putri,
                Kabupaten Bogor (16962)
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-4 jutify-start items-start">
            <h3 className="text-white text-xl font-semibold mb-8">
              Find us on
            </h3>
            <div className="flex flex-row gap-4">
              <a
                className=" py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm"
                href=""
              >
                <FaLinkedin size={40}/>
              </a>
              <a
                className=" py-2 rounded-full flex flex-row gap-2 justify-center items-center text-white font-medium text-sm"
                href=""
              >
                <FaYoutube size={40}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
