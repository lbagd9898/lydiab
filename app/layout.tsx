import type { Metadata } from "next";
import { Work_Sans, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["300", "400", "600", "700"],
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lydia Bagdon",
  description: "Full-stack web developer and bilingual STEM educator based in New York.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="min-h-full flex flex-col">
          <Nav />
          {children}
        </body>
    </html>
  );
}
