import React, { useState } from "react";
import Link from "next/link";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpenEstablos, setIsOpenEstablos] = useState(false);
  const [isOpenGanadores, setIsOpenGanadores] = useState(false);
  const [isOpenCategorias, setIsOpenCategorias] = useState(false);


  const toggleDropdown = (setDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Categorías de Animales</h2>
      <ul>
        <li className="mb-2">
          <button
            onClick={() => toggleDropdown(setIsOpenEstablos)}
            className="w-full text-left hover:text-gray-400 focus:outline-none"
          >
            Establos
          </button>
          {/* Subcategorías: Establos Drop-Down */}
          <ul className={`ml-4 mt-2 space-y-2 ${isOpenEstablos ? 'block' : 'hidden'}`}>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Gold</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Premium</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Silver</span>
              </label>
            </li>
          </ul>
        </li>

        <li className="mb-2">
          <button
            onClick={() => toggleDropdown(setIsOpenGanadores)}
            className="w-full text-left hover:text-gray-400 focus:outline-none"
          >
            Ganadores
          </button>
          {/* Subcategorías: Ganadores Drop-Down */}
          <ul className={`ml-4 mt-2 space-y-2 ${isOpenGanadores ? 'block' : 'hidden'}`}>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Raza A</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Raza B</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Raza C</span>
              </label>
            </li>
          </ul>
        </li>

        {/* Categoría con Drop-Down y Checkboxes */}
        <li className="mb-2">
          <button
            onClick={() => toggleDropdown(setIsOpenCategorias)}
            className="w-full text-left hover:text-gray-400 focus:outline-none"
          >
            Categorías de Razas
          </button>

          {/* Subcategorías con Checkboxes: Drop-Down */}
          <ul className={`ml-4 mt-2 space-y-2 ${isOpenCategorias ? 'block' : 'hidden'}`}>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Pedigree</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Pura Sangre</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="hover:text-gray-400">Chuscos</span>
              </label>
            </li>
          </ul>
        </li>

        <li className="mb-2">
          <Link href="/animales/raza" className="hover:text-gray-400">
            Raza
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
