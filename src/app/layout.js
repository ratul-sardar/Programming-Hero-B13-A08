import { ToastContainer, toast } from "react-toastify";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Gorur Hatt",
  description: "Find your Qurbanir animal in a affordable price!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="relative bg-background-secondary min-h-full flex flex-col"
      >
        {/* Header area*/}
        <header className="sticky top-0 z-50">
          <Navbar></Navbar>
        </header>

        {/* Main contents*/}
        <main>{children}</main>

        {/* Footer area*/}
        <Footer></Footer>

        <ToastContainer />
      </body>
      <SpeedInsights />
    </html>
  );
}
