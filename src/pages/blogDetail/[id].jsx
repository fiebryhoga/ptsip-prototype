// pages/blogDetail/[id].jsx

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FiUser, FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import { format } from "date-fns";
import id from "date-fns/locale/id";
import Link from "next/link";

const BlogDetail = () => {
  const router = useRouter();
  const { id: blogId } = router.query;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Tambahkan state untuk error
  const [processedContent, setProcessedContent] = useState("");

  useEffect(() => {
    if (!blogId) return;

    // Reset state setiap kali blogId berubah
    setLoading(true);
    setError(null);

    const fetchArticle = async () => {
      const apiUrl = `http://127.0.0.1:8000/api/blogs/${blogId}`;
      const token = "2|8veRdrHIjFL4LUrPGs6TB0jjltZlCAuu9F6wNrvl";
      const baseUrl = "http://127.0.0.1:8000";

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Artikel tidak ditemukan atau terjadi kesalahan.");
        }
        const data = await response.json();
        setArticle(data);

        // Proses URL gambar di dalam konten
        if (data.content) {
          const contentWithAbsoluteImageUrls = data.content.replace(
            /src="\/storage\//g,
            `src="${baseUrl}/storage/`
          );
          setProcessedContent(contentWithAbsoluteImageUrls);
        }
      } catch (err) {
        setError(err.message);
        console.error("Gagal mengambil artikel:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [blogId]);

  // Tampilan saat loading atau error
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center py-40">Memuat artikel...</div>
        <Footer />
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <Navbar />
        <div className="text-center py-40">
          <p className="text-red-500">
            {error || "Artikel tidak dapat dimuat."}
          </p>
          <Link href="/blog" className="text-green-700 mt-4 inline-block">
            Kembali ke Blog
          </Link>
        </div>
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
  const formattedTime = format(new Date(article.created_at), "HH:mm");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow mx-auto flex flex-col w-full justify-start items-center px-4 sm:px-8 md:px-20 lg:px-48 xl:px-64 py-10 mt-20">
        {/* Tombol Kembali */}
        <div className="w-full max-w-4xl mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-semibold transition-colors"
          >
            <FiArrowLeft size={16} />
            <span>Kembali ke Daftar Blog</span>
          </Link>
        </div>

        <div className="w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 font-sans text-left">
            {article.title}
          </h1>
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/60 mb-6">
            <div className="flex items-center gap-2">
              <FiUser size={14} />
              <span>{article.author_name || "Admin"}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar size={14} />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock size={14} />
              <span>{formattedTime}</span>
            </div>
          </div>
          {/* Gambar Utama */}
          <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
            <img
              src={imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Konten Artikel */}
          <article
            className="prose prose-sm md:prose-base max-w-none text-justify text-black/80 font-sans"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
