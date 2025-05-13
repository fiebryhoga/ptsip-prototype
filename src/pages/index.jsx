import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import CoreValue from "@/components/sections/CoreValue";
import Testimonials from "@/components/sections/Testimonials";
import Service from "@/components/sections/Service";
import Footer from "@/components/layout/Footer";

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
    <div className={` flex flex-col justify-start items-start bg-white gap-12`}>
      <Navbar />
      <Hero />
      <Clients />
      <CoreValue />
      <Service />
      <Testimonials />
      <Footer />
    </div>
  );
}
