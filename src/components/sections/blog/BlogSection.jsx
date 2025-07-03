// src/components/sections/blog/BlogSection.jsx

import React, { useContext } from "react"; // Impor useContext, hapus useState dan useEffect
import CardBlog from "@/components/common/CardBlog";
import { DataContext } from "@/context/DataContext"; // Impor DataContext

const BlogSection = () => {
  // 1. Ambil data blogs, loading, dan error dari DataContext
  const { blogs, loading, error } = useContext(DataContext);

  return (
    <div className="w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 py-10">
      {/* Grid untuk daftar blog */}
      <div className="w-full">
        {loading ? (
          <p className="text-center text-gray-500 py-20">Memuat blog...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-20">
            Gagal memuat data blog.
          </p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            Belum ada artikel blog yang tersedia.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* 2. Lakukan perulangan pada data dari context */}
            {blogs.map((blog) => (
              <CardBlog key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
