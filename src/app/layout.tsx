import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const font = localFont({ src: "../../public/fonts/yekan.ttf" });
export const metadata: Metadata = {
  title: "ایرانگردی",
  description: "ایرانگردی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl" className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
