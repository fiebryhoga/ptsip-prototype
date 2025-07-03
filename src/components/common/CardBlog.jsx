// src/components/common/CardBlog.jsx

import React from "react";
import { FiUser, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { format } from "date-fns";
import id from "date-fns/locale/id";

const CardBlog = ({ blog }) => {
  if (!blog) return null;

  const imageUrl = blog.hero_image
    ? `http://127.0.0.1:8000${blog.hero_image}`
    : "/assets/image/placeholder.png";

  const formattedDate = format(new Date(blog.created_at), "d MMMM yyyy", {
    locale: id,
  });
  const formattedTime = format(new Date(blog.created_at), "HH:mm");

  return (
    <Link
      href={`/blogDetail/${blog.id}`}
      className="w-full border border-green-900/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col"
    >
      <div className="w-full h-52 overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt={blog.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/image/placeholder.png";
          }}
        />
      </div>

      <div className="px-4 py-3 flex flex-col gap-2 flex-grow">
        <h4 className="font-semibold text-green-900 text-lg leading-6 line-clamp-2">
          {blog.title}
        </h4>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-black/60 mb-2">
          <div className="flex items-center gap-1">
            <FiUser size={12} />
            <span>{blog.author_name}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiCalendar size={12} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock size={12} />
            <span>{formattedTime}</span>
          </div>
        </div>
        <p className="text-sm text-black/80 font-sans line-clamp-4">
          {blog.description}
        </p>

        <div className="mt-auto pt-2">
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-green-900/60 hover:text-green-900 cursor-pointer transition-colors">
            Lihat Selengkapnya <FiArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
