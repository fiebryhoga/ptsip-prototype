import React, { useContext } from "react";
import CardOrg from "@/components/common/CardOrg";
import { RiBuilding3Fill } from "react-icons/ri";
import { DataContext } from "@/context/DataContext";

// Import gambar lokal sebagai foto default
// import `/assets/image/org/orang.jpg` from "@`/assets/image/org/orang.jpg`";

const OrgChart = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-36 py-20 bg-white gap-16">
      <div className="flex flex-row justify-center items-center gap-4 rounded-full px-10 py-2 bg-[#00662C]/10">
        <RiBuilding3Fill size={22} color="#00662C" />
        <p className="text-xs md:text-lg font-semibold text-[#00662C]">
          Company Organization Structure
        </p>
      </div>

      {/* Desktop view */}
      <div className="block w-full overflow-x-auto lg:overflow-hidden">
        <table
          className="table-auto border-transparent w-full text-center"
          style={{ minWidth: "800px" }}
        >
          <tbody>
            {/* Director */}
            <tr>
              <td align="center" colSpan={8} className="border-0 h-24">
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
            </tr>
            <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-t-0 border-b-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-b-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-t-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-t-0 border-r-0 border-l-0">
              <td className="border-t-0 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-2 border-r-2 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-t-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>

            <tr className="border-0 border-r-0 border-l-0">
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                
                    <CardOrg
                      key={1}
                      name={"nama"}
                      position={"jabatan"}
                      imageUrl={`/assets/image/org/orang.jpg`}
                    />
                  
              </td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            <tr className="border-0 border-r-0 border-l-0">
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
              <td className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 border-green-800 h-10 md:h-16"></td>
            </tr>
            {/* ... (Struktur tabel Anda yang kompleks tetap di sini) ... */}
            {/* Anda bisa melanjutkan mengisi struktur tabel seperti kode asli Anda */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgChart;
