import { montserrat } from "../../components/Fonts/Fonts";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import { NextUIProvider } from '@nextui-org/react';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar";
import NavBarResponsive from "../../components/Navbar/NavBarResponsive/NavBarResponsive";
import { TranslationsProvider } from "@neiderruiz/translate-files/next-js";
import i18nConfig from "@/i18nConfig";
import { resources } from "@/src/services/langs";

export const metadata = {
  title: "Javier Castro | Developer",
  description: "Generate by create next app",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <title>{metadata.title}</title>
      </head>
      <body className={`body ${montserrat.className} antialiased`}>
        <TranslationsProvider
          fallbackLng={i18nConfig.locales}
          locale={locale}
          resources={resources}
        >
          <NavBar />
          {children}
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
