// File: components/sections/BlogSection.jsx

import React, { useState, useEffect } from "react";
import CardBlog from "@/components/common/CardBlog";

const BlogSection = () => {
  // State untuk menyimpan data dari API
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data blog dari API Laravel Anda
    const fetchBlogs = async () => {
      const apiUrl = "http://127.0.0.1:8000/api/blogs";
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl"; // Token Anda

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // Data blog berada di dalam properti 'data' pada respons paginasi
        setBlogs(result.data);
      } catch (error) {
        console.error("Gagal mengambil data blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // [] memastikan fetch hanya berjalan sekali

  if (loading) {
    return <div className="text-center py-10">Memuat blog...</div>;
  }

  return (
    <div className="flex flex-col w-full justify-start items-center px-4 md:px-36 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Lakukan perulangan pada state 'blogs' dan render CardBlog untuk setiap item */}
        {blogs.map((blog) => (
          <CardBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
