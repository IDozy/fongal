import React from "react";
import Link from "next/link";

interface SidebarProps {
  onSearchByStable: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchByName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchByCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onSearchByStable,
  onSearchByName,
  onSearchByCategory,
}) => {
  return (
    <div className="bg-gray-800 w-64 h-screen p-4 mt-20">
      <h2 className="text-xl font-bold mb-4 text-white">Menú</h2>

      {/* Buscador por Establo */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por Establo..."
          className="w-full p-2 rounded"
          onChange={onSearchByStable}
        />
      </div>

      {/* Buscador por Nombre */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por Nombre..."
          className="w-full p-2 rounded"
          onChange={onSearchByName}
        />
      </div>

      {/* Buscador por Categoría */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por Categoría..."
          className="w-full p-2 rounded"
          onChange={onSearchByCategory}
        />
      </div>

      
      
    </div>
  );
};

export default Sidebar;
