"use client"; // Adicione isso para marcar o componente cliente

import localFont from "next/font/local";
import Head from 'next/head'; // Import Head for SEO
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"; // Adicionar hooks para mudança dinâmica
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

// Fontes personalizadas
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState('Suporte - 4Wheels'); // Título padrão
  const noHeaderFooterRoutes = ['/Cadastro']; // Rotas onde não queremos Header e Footer

  const showHeaderFooter = !noHeaderFooterRoutes.includes(pathname);

  useEffect(() => {
    switch (pathname) {
      case '/Servicos':
        setPageTitle('Serviços - 4Wheels');
        break;
      case '/Contato':
        setPageTitle('Contato - 4Wheels');
        break;
      case '/Cadastro':
        setPageTitle('Cadastro - 4Wheels');
        break;
      case '/form':
        setPageTitle('Cadastro - 4Wheels');
        break;
      default:
        setPageTitle('Suporte - 4Wheels');
        break;
    }
  }, [pathname]); // Atualiza o título quando o pathname mudar

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Descrição dinâmica da página." />
      </Head>

      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};
