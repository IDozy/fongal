

"use client";
import React, { useEffect, useState } from "react";
import ListPublic from "../app/participantes/component/ListPublic";
import CategoryFilter from "../app/components/categoryfilter/categoryFilter";
import NavBar from "../app/components/navbar/Navbar";
//import Sidebar from "../components/sidebar/Sidebar";

interface Ganado {
  id: number;
  name: string;
  establo: string;
  categoria: string;
  [key: string]: any; // Para otras propiedades opcionales
}

const Participante = () => {
  const [ganadoList, setGanadoList] = useState<Ganado[]>([]);
  const [filteredData, setFilteredData] = useState<Ganado[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<number[]>([]); // Estado para las categorías filtradas

  useEffect(() => {
    GetAllGanado();
  }, []);

  useEffect(() => {
    applyFilters(); // Filtrar cuando cambien las categorías seleccionadas
  }, [filteredCategories]);

  const GetAllGanado = async () => {
    try {
      const response = await fetch("/api/ganado/participantes");
      if (!response.ok) throw new Error("Error fetching ganado");

      const data: Ganado[] = await response.json(); // Tipamos la respuesta
      setGanadoList(data);
      setFilteredData(data); // Inicialmente, todos los datos
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const applyCategoryFilters = (selectedCategories: number[]) => {
    setFilteredCategories(selectedCategories); // Actualizar las categorías seleccionadas
  };

  const applyFilters = () => {
    if (filteredCategories.length === 0) {
      setFilteredData(ganadoList); // Si no hay categorías seleccionadas, mostrar todo
    } else {
      const filtered = ganadoList.filter((ganado) =>
        filteredCategories.some(
          (category) => category === parseInt(ganado.categoria) // Asegúrate de que `ganado.categoria` sea comparable con `category`
        )
      );
      setFilteredData(filtered);
    }
  };

  const handleSearchByStable = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = ganadoList.filter((ganado) =>
      ganado.establo.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = ganadoList.filter((ganado) =>
      ganado.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  return (
    <div >
     <NavBar/>
      <div className="p-10 mt-12 pb-20 ">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Participantes
        </h2>
        <CategoryFilter onCategoryChange={applyCategoryFilters} />
        <ListPublic ganadoList={filteredData} refreshData={GetAllGanado} />
      </div>
    </div>
  );
};

export default Participante;
