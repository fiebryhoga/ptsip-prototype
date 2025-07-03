// src/pages/_app.jsx
import "@/styles/globals.css";
// Pastikan impor ini menggunakan kurung kurawal { DataProvider }
import { DataProvider } from "@/context/DataContext";

export default function App({ Component, pageProps }) {
  return (
    // Jika DataProvider diimpor dengan benar, ini tidak akan error
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
