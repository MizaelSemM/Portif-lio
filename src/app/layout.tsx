import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Rafael Andrade — Full-Stack Developer",
  description:
    "Portfólio de Rafael Andrade, desenvolvedor full-stack especializado em React, Next.js, Node.js e PostgreSQL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans text-[#E8EDF3] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
