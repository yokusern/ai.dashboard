import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Dashboard | SES & Development Support",
  description: "Advanced AI-powered dashboard for SES sales and development support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} font-sans h-full bg-[#f8f9fa] text-[#111111] antialiased`}>
        {children}
      </body>
    </html>
  );
}
