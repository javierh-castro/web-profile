import { montserrat } from "../components/Fonts/Fonts";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import { NextUIProvider } from '@nextui-org/react';
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

export const metadata = {
  title: "Javier Castro | Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <title>{metadata.title}</title>
      </head>
      <body className={`body ${montserrat.className} antialiased`}>
        {/* <NextUIProvider> */}
        <NavBar />
        {children}
        <Footer />
        {/* </NextUIProvider> */}
      </body>
    </html>
  );
}
