// File: pages/blogDetail/[id].jsx (Contoh struktur file Next.js)

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Hook untuk mendapatkan parameter URL di Next.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FiUser, FiCalendar } from "react-icons/fi";
import { format } from "date-fns";
import id from "date-fns/locale/id";

const BlogDetail = () => {
  const router = useRouter();
  const { id: blogId } = router.query; // Ambil 'id' dari URL (contoh: /blogDetail/3)

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Jangan fetch jika blogId belum tersedia
    if (!blogId) return;

    const fetchArticle = async () => {
      const apiUrl = `http://127.0.0.1:8000/api/blogs/${blogId}`;
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (!response.ok) throw new Error("Artikel tidak ditemukan");
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Gagal mengambil artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [blogId]); // Jalankan ulang effect jika blogId berubah

  if (loading || !article) {
    return (
      <>
        <Navbar />
        <div className="text-center py-40">Memuat artikel...</div>
        <Footer />
      </>
    );
  }

  const imageUrl = article.hero_image
    ? `http://127.0.0.1:8000${article.hero_image}`
    : "/assets/image/placeholder.png";
  const formattedDate = format(new Date(article.created_at), "d MMMM yyyy", {
    locale: id,
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow mx-auto flex flex-col w-full justify-start items-center px-4 md:px-52 py-10 mt-20">
        <div className="w-full h-[400px] overflow-hidden rounded-xl shadow mb-8">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 font-sans text-center">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-black/60 mb-6">
          <div className="flex items-center gap-2">
            <FiUser size={14} />
            <span>{article.author_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar size={14} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Render konten HTML dari API dengan aman */}
        <article
          className="prose prose-sm md:prose-base max-w-none text-justify text-black/80 font-sans"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
