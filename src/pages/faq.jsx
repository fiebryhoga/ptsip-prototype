import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faq = () => {
  return (
    <div
      className={` flex flex-col justify-start items-start bg-white min-h-[100vh]`}
    >
      <Navbar />

      <Footer />
    </div>
  );
}

export default faq