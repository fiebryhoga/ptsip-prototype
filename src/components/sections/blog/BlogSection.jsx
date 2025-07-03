import React from "react";
import CardBlog from "@/components/common/CardBlog";

// Data dummy blog
const blogs = [
  {
    id: 4,
    hero_image:
      "/storage/blog_heroes/eCWOwnRj1aLIaLHyGzKOZEg5g0s5ysVsBascv9fd.jpg",
    title: "5 Tips Memilih Jasa Konstruksi Profesional untuk Proyek Anda",
    description:
      "Panduan praktis untuk membantu Anda memilih penyedia jasa konstruksi yang tepat agar proyek impian Anda berjalan lancar dan sesuai harapan.",
    content: "<div>Konten HTML panjang…</div>",
    author_name: "Andi Pratama",
    created_at: "2025-07-01T13:13:13.000000Z",
    updated_at: "2025-07-01T13:34:36.000000Z",
  },
  {
    id: 3,
    hero_image:
      "/storage/blog_heroes/cqMajgRkCnHoMCRliZNRpLpbmsnL4TvxTqLkGUDO.jpg",
    title: "wefef",
    description: "wefewf",
    content: "<div>wefwef <strong>wefef</strong> ...</div>",
    author_name: "wefef",
    created_at: "2025-07-01T12:24:28.000000Z",
    updated_at: "2025-07-01T12:24:28.000000Z",
  },
];

const BlogSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-20 lg:px-24 xl:px-36 py-10">
      <div className="w-full">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            Belum ada artikel blog yang tersedia.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
