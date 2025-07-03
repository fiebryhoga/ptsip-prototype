import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FiUser, FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import { format } from "date-fns";
import id from "date-fns/locale/id";
import Link from "next/link";

// Data blog pertama (statis)
const blog = {
  id: 4,
  hero_image:
    "/storage/blog_heroes/eCWOwnRj1aLIaLHyGzKOZEg5g0s5ysVsBascv9fd.jpg",
  title: "5 Tips Memilih Jasa Konstruksi Profesional untuk Proyek Anda",
  description:
    "Panduan praktis untuk membantu Anda memilih penyedia jasa konstruksi yang tepat agar proyek impian Anda berjalan lancar dan sesuai harapan.",
  content: `<div><br>Membangun atau merenovasi sebuah bangunan adalah investasi besar yang melibatkan waktu, uang, dan emosi. Salah satu kunci utama keberhasilan proyek konstruksi, baik itu rumah tinggal, ruko, maupun gedung perkantoran, adalah pemilihan penyedia jasa konstruksi yang tepat dan profesional. Kesalahan dalam memilih kontraktor tidak hanya berisiko pada pembengkakan biaya yang tidak terduga, tetapi juga dapat membahayakan kualitas, keamanan, dan ketepatan waktu penyelesaian proyek. Oleh karena itu, penting bagi setiap pemilik proyek untuk melakukan riset mendalam sebelum menjatuhkan pilihan.<br><br><strong>Langkah pertama</strong> dan paling fundamental adalah memeriksa legalitas dan rekam jejak perusahaan. Kontraktor profesional harus memiliki izin usaha yang sah dan terdaftar, seperti <em>Surat Izin Usaha Jasa Konstruksi</em> (SIUJK) yang menunjukkan bahwa mereka diakui oleh otoritas terkait. Selain itu, jangan ragu untuk meminta dan meninjau portofolio proyek-proyek yang pernah mereka kerjakan. Portofolio yang solid, yang menampilkan berbagai jenis dan skala proyek, adalah bukti nyata dari pengalaman dan kemampuan teknis mereka. Jika memungkinkan, kunjungi salah satu lokasi proyek yang telah mereka selesaikan untuk melihat langsung kualitas hasil pekerjaan mereka.<br><img src="/storage/trix_attachments/9JgMIvsqwc4CbriRgyAviPCjmDI9FKyw2p0LSH4M.jpg" width="1200" height="921" alt="image-1"><br><br><br>Selanjutnya, <strong>transparansi dalam perencanaan biaya</strong> adalah hal yang mutlak. Kontraktor yang dapat dipercaya akan selalu bersedia menyediakan Rencana Anggaran Biaya (RAB) yang terperinci dan mudah dipahami. RAB yang baik tidak hanya mencantumkan total biaya, tetapi juga merinci semua komponen pengeluaran, mulai dari harga material bangunan, upah tenaga kerja harian atau borongan, biaya sewa alat berat jika diperlukan, hingga biaya operasional lainnya. Dengan RAB yang jelas, Anda dapat menghindari adanya biaya tersembunyi yang seringkali menjadi sumber perselisihan di kemudian hari. Bandingkan penawaran dari beberapa kontraktor untuk mendapatkan gambaran yang lebih baik mengenai kewajaran harga.<br><br>Aspek lain yang seringkali diabaikan namun sangat berpengaruh adalah kualitas komunikasi. Selama proses pembangunan yang bisa memakan waktu berbulan-bulan, Anda akan sering berinteraksi dengan tim kontraktor. Pilihlah penyedia jasa yang responsif, mudah dihubungi, dan proaktif dalam memberikan laporan perkembangan. Komunikasi yang baik akan sangat membantu dalam menyelesaikan setiap masalah yang mungkin timbul di lapangan dan memastikan bahwa visi Anda sebagai pemilik proyek dapat diwujudkan dengan baik.<img src="/storage/trix_attachments/cjicYjOPFvkJL7ga6ltT9eTq90G7DE3P6HemIYBR.jpg" width="800" height="492" alt="image-2"><br><img src="/storage/trix_attachments/ZJQXRA1uDBbZikh6XNZ2HHLmH0otPALCC6G4kMHr.jpg" width="1024" height="683" alt="image-3"><br><br><br></div><div>Terakhir, dan yang paling penting, adalah adanya kontrak kerja yang mengikat secara hukum. Jangan pernah memulai proyek besar hanya berdasarkan kesepakatan lisan. Semua detail yang telah disetujui, mulai dari ruang lingkup pekerjaan, jadwal pengerjaan setiap tahap, total biaya dan skema pembayaran, hingga hak dan kewajiban masing-masing pihak, harus tertuang secara jelas dalam dokumen kontrak. Kontrak ini akan menjadi payung hukum yang melindungi Anda jika terjadi wanprestasi atau sengketa di masa mendatang. Memastikan semua poin ini terpenuhi akan memberikan Anda ketenangan pikiran dan jaminan bahwa proyek Anda berada di tangan yang tepat.</div>`,
  author_name: "Andi Pratama",
  created_at: "2025-07-01T13:13:13.000000Z",
};

const BlogDetail = () => {
  const formattedDate = format(new Date(blog.created_at), "d MMMM yyyy", {
    locale: id,
  });
  const formattedTime = format(new Date(blog.created_at), "HH:mm");

  // const processedContent = blog.content.replace(
  //   /src="\/storage/g,
  //   'src="http://127.0.0.1:8000/storage'
  // );

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
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/60 mb-6">
            <div className="flex items-center gap-2">
              <FiUser size={14} />
              <span>{blog.author_name}</span>
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
              src={`http://127.0.0.1:8000${blog.hero_image}`}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Konten Artikel */}
          <article
            className="prose prose-sm md:prose-base max-w-none text-justify text-black/80 font-sans"
            // dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
