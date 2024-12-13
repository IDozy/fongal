"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teamImage = "/nosotrosImages/nosotros1.webp";
const teamMembers = [
  {
    name: "Josemartin Cabrera",
    role: "Project Manager",
    description:
      "Con años de experiencia en el rubro ganadero y gestión de proyectos, se encarga de planificar, organizar y supervisar cada etapa del desarrollo del proyecto web, asegurándose de cumplir con los objetivos en tiempo y forma.",
    photo: "/nosotrosImages/nosotros2.webp",
  },
  {
    name: "Alex Huatay",
    role: "Desarrollador Backend",
    description:
      "Especialista en la arquitectura del servidor y base de datos, Alex garantiza que los sistemas internos funcionen de manera eficiente, segura y escalable, proporcionando un soporte sólido para las funcionalidades del proyecto.",
    photo: "/nosotrosImages/nosotros3.webp",
  },
  {
    name: "Jairo Vargas",
    role: "Desarrollador Frontend",
    description:
      "Responsable de la creación de interfaces atractivas y funcionales, Jairo transforma las ideas en experiencias visuales intuitivas para los usuarios, priorizando usabilidad y diseño.",
    photo: "/nosotrosImages/nosotros3.webp",
  },
  {
    name: "Gerson Silva",
    role: "Desarrollador Full-Stack",
    description:
      "Con conocimientos integrales en frontend y backend, Gerson conecta el diseño visual con la lógica del servidor, asegurando que el sistema funcione perfectamente de extremo a extremo.",
    photo: "/nosotrosImages/nosotros3.webp",
  },
];

const NosotrosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fondo Hero */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={teamImage}
            alt="Fondo nosotros"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Contenido centrado encima del fondo */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-lg text-white">
            Somos un equipo apasionado y dedicado a impulsar los concursos
            ganaderos, brindando herramientas modernas y soluciones
            tecnológicas para destacar el esfuerzo y dedicación de los
            ganaderos.
          </p>
        </div>

        {/* Navegación */}
        <motion.nav
          className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-white text-2xl font-bold">
            Concursos Ganaderos
          </div>

          {/* Menú de Escritorio */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/participantes"
              >
                Concursos
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/comunidad"
              >
                Comunidad
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/contacto"
              >
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Menú Móvil */}
          <button className="text-white md:hidden">☰</button>
        </motion.nav>
      </div>
      {/* Espaciado adicional */}
      <div className="h-40 bg-opacity-60 bg-gray-100"></div>
      {/* Separación entre Hero y Miembros del Equipo */}
      <div className="bg-gray-100 bg-opacity-60 flex-grow py-16">
        {/* espacio duplicado oculto, vista solo en mobile */}
        <div className="block sm:hidden bg-gray-100 bg-opacity-60 flex-grow p-80">
              
            </div>
        {/* Miembros del Equipo */}
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white bg-opacity-60 shadow-lg rounded-lg p-6"
              >
                {/* Imagen del miembro */}
                <div className="mb-6">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className="rounded-full shadow-md"
                    width={150}
                    height={150}
                  />
                </div>
                {/* Detalles del miembro */}
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-700 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-6">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Espaciado adicional para el footer */}
      <div className="h-20"></div>
            
    </div>
  );
};

export default NosotrosPage;
