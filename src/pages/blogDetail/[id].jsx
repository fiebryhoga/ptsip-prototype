// File: pages/blogDetail/[id].jsx (atau di mana pun file Anda berada)

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// 1. Tambahkan FiArrowLeft untuk ikon kembali
import { FiUser, FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import { format } from "date-fns";
import id from "date-fns/locale/id";
import Link from "next/link"; // Pastikan Link diimpor

const BlogDetail = () => {
  const router = useRouter();
  const { id: blogId } = router.query;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processedContent, setProcessedContent] = useState("");

  useEffect(() => {
    if (!blogId) return;

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
        if (!response.ok) throw new Error("Artikel tidak ditemukan");

        const data = await response.json();
        setArticle(data);

        if (data.content) {
          const contentWithAbsoluteImageUrls = data.content.replace(
            /src="\/storage\//g,
            `src="${baseUrl}/storage/`
          );
          setProcessedContent(contentWithAbsoluteImageUrls);
        }
      } catch (error) {
        console.error("Gagal mengambil artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [blogId]);

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
  const formattedTime = format(new Date(article.created_at), "HH:mm");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow mx-auto flex flex-col w-full justify-start items-start px-4 md:px-96 py-10 mt-20">
        {/* --- TOMBOL KEMBALI DITAMBAHKAN DI SINI --- */}
        <div className="mb-8">
          <Link href="/blog" legacyBehavior>
            <a className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-semibold transition-colors">
              <FiArrowLeft size={16} />
              Kembali ke Daftar Blog
            </a>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 font-sans text-left">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-black/60 mb-6">
          <div className="flex items-center gap-2">
            <FiUser size={14} />
            <span>Admin - {article.author_name}</span>
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
        <div className="w-full h-[400px] overflow-hidden rounded-xl shadow mb-8">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article
          className="prose prose-sm md:prose-base max-w-none text-justify text-black/80 font-sans"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
