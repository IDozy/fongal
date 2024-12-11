"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const teamImage = "/nosotrosImages/nosotros1.webp";
const teamMembers = [
  {
    name: "Juan Pérez",
    role: "Coordinador General",
    description: "Juan es el líder del equipo, con años de experiencia en la organización de concursos ganaderos y un compromiso firme con la excelencia.",
    photo: "/nosotrosImages/nosotros2.webp",
  },
  {
    name: "María García",
    role: "Especialista en Comunicación",
    description: "María se encarga de conectar con la comunidad ganadera y garantizar la mejor experiencia para los participantes.",
    photo: "/nosotrosImages/nosotros3.webp",
  },
];

const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src={teamImage}
          alt="Fondo nosotros"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold">NOSOTROS</h1>
        </div>
      </div>

      {/* Reseña del Equipo */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-gray-700 mb-6">
          Somos un equipo apasionado y dedicado a impulsar los concursos ganaderos, brindando herramientas modernas y soluciones tecnológicas para destacar el esfuerzo y dedicación de los ganaderos.
        </p>
      </div>

      {/* Miembros del Equipo */}
      <div className="container mx-auto py-12 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                {member.name}
              </h3>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-lg text-gray-700">{member.description}</p>
            </div>

            {/* Image Section */}
            <div className="text-center">
              <Image
                src={member.photo}
                alt={member.name}
                className="rounded-lg shadow-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NosotrosPage;
