import React from "react";

const CardProject = ({ project }) => {
  if (!project) return null;

  // `project.gambar_url` sekarang berisi path string dari data dummy.
  // Jika path tidak ada, gambar placeholder akan digunakan.
  const imageUrl = project.gambar_url || "/assets/image/placeholder.png";

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto border border-green-700/20 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      {/* Gambar */}
      <div className="w-full h-52 bg-gray-200 relative">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={project.nama_project}
          // onError tetap berguna sebagai fallback jika path gambar salah
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/image/placeholder.png";
          }}
        />
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col gap-1 text-sm text-gray-700 w-full">
        <div className="flex flex-row justify-between items-start gap-2">
          <h3
            className="text-base font-semibold text-[#00662C] line-clamp-2"
            title={project.nama_project}
          >
            {project.nama_project}
          </h3>
          <p className="text-sm font-semibold text-gray-500 flex-shrink-0">
            {project.tahun}
          </p>
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
