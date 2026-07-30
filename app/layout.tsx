import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import DisableContextMenu from "@/components/util/DisableContextMenu";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Cindy Tsai — Product Designer",
  description: "Cindy Tsai's design portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans bg-portfolio-background text-portfolio-primary`}>
        <DisableContextMenu />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
