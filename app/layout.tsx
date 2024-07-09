import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import getCurrentUser from "./acctions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import GanadoModal from "./components/modals/GanadoModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
          <GanadoModal />
          <main className="site-content">{children}</main>
          <Footer currentUser={currentUser} />
        </ClientOnly>
      </body>
    </html>
  );
}
