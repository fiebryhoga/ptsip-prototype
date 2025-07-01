import React from 'react'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBlog from '@/components/sections/blog/HeroBlog';
import BlogSection from '@/components/sections/blog/BlogSection';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroBlog/>
      <BlogSection/>
      
      <Footer />
    </div>
  );
}

export default Blog
