import type { Metadata } from "next";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/footerLanding";
import getCurrentUser from "./acctions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import GanadoModal from "./components/modals/GanadoModal";
import { Sponsors } from "./components/sponsors/Sponsors";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ConcursoGanadero from "./components/ganadores/Concurso";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concurso Ganadero 2024",
  description: "Concursos Cajamarca",
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
        
          <LoginModal />
          <RegisterModal />
        
          <main className="site-content">{children}</main>
          <div>
            {/* Your other components */}
            <Footer />
          </div>
        
        </ClientOnly>
      </body>
    </html>
  );
}
