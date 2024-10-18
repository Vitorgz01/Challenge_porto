"use client"; // Adicione isso para marcar o componente cliente

import localFont from "next/font/local";
import Head from 'next/head'; // Import Head for SEO
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Your App Title</title>
        <meta name="description" content="Your app description here." />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noHeaderFooterRoutes = ['/Cadastro']; // Remover a barra final

  const showHeaderFooter = !noHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};
