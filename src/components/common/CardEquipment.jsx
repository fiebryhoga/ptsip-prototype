import React from 'react'

const CardEquipment = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start w-full h-xl border border-green-700/20 shadow-xl rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="w-full h-3/5 bg-green-700">
          <img
            className="w-full h-full object-cover rounded-t-2xl opacity-90"
            src="/assets/image/eq1.png"
            alt="eq.1"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-0 text-sm text-gray-700">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-semibold text-[#00662C] line-clamp-1">
              Sumitomo
            </h3>
            <p className="text-sm font-semibold font-gray-200">SCX1500-1</p>
          </div>

          <p className="text-sm font-semibold font-sans text-[#526600] mb-2 line-clamp-1">
            Crawler Crane{" "}
          </p>

          <p className="mt-1 text-xs text-gray-600 line-clamp-4">
            This equipment has a maximum lifting capacity of 150 tons and was
            manufactured in 2010, ensuring reliable performance for heavy-duty
            lifting operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardEquipment
