  "use client";

  import React, { useState } from "react";
  import { useRouter } from "next/navigation";
  import { motion } from "framer-motion";
  import Link from "next/link";
  import Image from "next/image";
  import landscape from "@/public/landingImages/landscape.webp";

  const concursos = [
    {
      id: 1,
      name: "Fongal 2024",
      image: "/concursosImages/Fongal2024.webp",
      link: "/participantes",
    },
  ];

  const ConcursosPage = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <div className="min-h-screen">
        <div className="relative h-screen overflow-hidden">
          {/* Background Layer */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={landscape}
              alt="Landscape Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-white text-2xl font-bold">Concursos Ganaderos</div>
            <ul className="hidden md:flex space-x-6 text-white">
              <li>
                <Link href="/" className="hover:text-green-200 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="hover:text-green-200 transition">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-green-200 transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-green-200 transition">
                  Contáctanos
                </Link>
              </li>
            </ul>
            <button className="text-white md:hidden" onClick={toggleMobileMenu}>
              ☰
            </button>
          </motion.nav>

          {/* Hero Section */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Nuestros Concursos
            </motion.h1>
          </div>
        </div>

        {/* Concursos Section */}
        <div className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {concursos.map((concurso) => (
              <div key={concurso.id} className="text-center">
                <Link href={concurso.link}>
                  <Image
                    src={concurso.image}
                    alt={concurso.name}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <h3 className="mt-4 text-2xl font-bold text-green-600">
                  {concurso.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ConcursosPage;
