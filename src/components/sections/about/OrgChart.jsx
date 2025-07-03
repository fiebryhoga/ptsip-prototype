import React, { useContext } from "react";
import CardOrg from "@/components/common/CardOrg";
import { RiBuilding3Fill } from "react-icons/ri";
import { DataContext } from "@/context/DataContext";

// Import gambar lokal sebagai foto default
// import `/assets/image/org/1.png` from "@`/assets/image/org/1.png`";

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
                  name={"Ir Wahyu Wuryanto"}
                  position={"Director"}
                  imageUrl={`/assets/image/org/1.png`}
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
                  key={2}
                  name={"Darmadi"}
                  position={"Project Manage"}
                  imageUrl={`/assets/image/org/2.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={3}
                  name={"Hanif Rusidy, S.T"}
                  position={"Technical Manager"}
                  imageUrl={`/assets/image/org/3.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={4}
                  name={"Muhamad Bayurizki"}
                  position={"General Affair"}
                  imageUrl={`/assets/image/org/4.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={5}
                  name={"Teddy Arief Setyawan"}
                  position={"Finance Manager"}
                  imageUrl={`/assets/image/org/5.png`}
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
                  key={6}
                  name={"M. Saminudin"}
                  position={"Supervisor"}
                  imageUrl={`/assets/image/org/6.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={7}
                  name={"Bagus Krida, S.T"}
                  position={"Site Engineer"}
                  imageUrl={`/assets/image/org/7.png`}
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
                  key={8}
                  name={"Subhan"}
                  position={"Crawler Crane Operator Leader"}
                  imageUrl={`/assets/image/org/8.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={9}
                  name={"Slamet Haeroni"}
                  position={"Helper Leader"}
                  imageUrl={`/assets/image/org/9.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={10}
                  name={"Yudi Winarno"}
                  position={"Rigger Leader"}
                  imageUrl={`/assets/image/org/10.png`}
                />
              </td>
              <td
                align="center"
                className="border-0 border-r-0 border-l-0 w-10 sm:w-14 md:w-16 h-10 md:h-16"
                colSpan={2}
              >
                <CardOrg
                  key={11}
                  name={"Supriyanto"}
                  position={"Rough-Terrain Crane Operator Leader"}
                  imageUrl={`/assets/image/org/11.png`}
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
