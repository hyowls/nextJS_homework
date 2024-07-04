import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "포켓몬 도감 웹 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[90px] bg-[#34d399] text-center">
          <h1 className="text-bold pt-6 text-2xl">포켓몬스터 도감</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
