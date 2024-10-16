// Sidebar.jsx
import React from "react";
import Link from "next/link"; // Importa el Link de Next.js

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menú</h2>
      <ul>
        <li className="mb-2">
          <Link href="/dashboard/estudiantes" className="hover:text-gray-400">
            Estudiantes
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard/cursos" className="hover:text-gray-400">
            Cursos
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard/ganadores" className="hover:text-gray-400">
            Ganadores
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
