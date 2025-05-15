import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import Clients from "@/components/sections/home/Clients";
import CoreValue from "@/components/sections/home/CoreValue";
import Testimonials from "@/components/sections/home/Testimonials";
import Service from "@/components/sections/home/Service";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/home/FAQ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={` flex flex-col justify-start items-start bg-white`}>
      <Navbar />
      <Hero />
      <Clients />
      <CoreValue />
      <Service />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
