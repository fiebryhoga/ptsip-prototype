import React from "react";

const CardProject = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full h-96 border border-green-700/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="w-full h-3/5 bg-green-700">
        <img
          className="w-full h-full object-cover rounded-t-2xl opacity-90"
          src="/assets/image/service/img4.jpg"
          alt="Binjai Langsa Project"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-0 text-sm text-gray-700">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-base font-semibold text-[#00662C] line-clamp-1">
            Toll Road Trans Sumatera (Binjai – Langsa)
          </h3>
          <p className="text-sm font-semibold font-gray-200">2022</p>
        </div>

        <p className="text-sm font-semibold font-sans text-[#526600] mb-2 line-clamp-1">
          Precast Girder Installation (102 girders)
        </p>

        <p className="mt-1 text-xs text-gray-600 line-clamp-4">
          We successfully completed the precast girder installation for the
          Binjai Langsa section of the Trans Sumatera Toll Road. This project
          involved precision engineering and efficient logistics to install over
          100 girders on schedule.
        </p>
      </div>
    </div>
  );
};

export default CardProject;
