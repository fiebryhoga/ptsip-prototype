// File: components/common/CardProject.jsx

import React from "react";

// 1. Komponen sekarang menerima prop 'project' yang berisi data dari API
const CardProject = ({ project }) => {
  // Mencegah error jika data belum tersedia
  if (!project) {
    return null;
  }

  // 2. Membuat URL gambar yang lengkap
  const imageUrl = project.gambar_url
    ? `http://127.0.0.1:8000${project.gambar_url}`
    : "/assets/image/placeholder.png"; // Gambar pengganti jika tidak ada

  return (
    <div className="flex flex-col justify-start items-start w-full h-[450px] border border-green-700/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="w-full h-3/5 bg-gray-200 relative">
        <img
          className="w-full h-full object-cover rounded-t-2xl"
          src={imageUrl} // Menggunakan URL dinamis
          alt={project.nama_project} // Alt text yang deskriptif
          onError={(e) => {
            e.target.onerror = null;
            // e.target.src = "/assets/image/placeholder.png";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-0 text-sm text-gray-700 w-full h-2/5">
        <div className="flex flex-row justify-between items-start">
          {/* 3. Menampilkan data dinamis */}
          <h3
            className="text-base font-semibold text-[#00662C] pr-4"
            title={project.nama_project}
          >
            {project.nama_project}
          </h3>
          <p className="text-sm font-semibold text-gray-500">{project.tahun}</p>
        </div>

        <p
          className="text-sm font-semibold font-sans text-gray-500 mb-2 line-clamp-1"
          title={project.jenis_project}
        >
          {project.jenis_project}
        </p>

        <p className="mt-1 text-sm text-gray-600 line-clamp-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
