import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import getCurrentUser from "./acctions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import GanadoModal from "./components/modals/GanadoModal";
import { Sponsors } from "./components/sponsors/Sponsors";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feria Fongal 2024",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${inter.className} site`}>
        <ClientOnly>
          <NavBar />
          <LoginModal />
          <RegisterModal />
         
          <main className="site-content">{children}</main>
         {/*  <Sponsors/> */}
          <Footer currentUser={currentUser} />
        </ClientOnly>
      </body>
    </html>
  );
}
