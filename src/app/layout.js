import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header_top from "@/components/Header_top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SiteHome",
  description: "SiteHome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" fixed top-0 left-0 right-0 z-50">
          <Header_top />
        </div>
        {children}
      </body>
    </html>
  );
}
