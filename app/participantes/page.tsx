/*// Student.tsx
"use client";
import React, { useEffect, useState } from "react";
import ListPublic from "./component/ListPublic";
import Sidebar from "../components/sidebar/Sidebar";

const Student = () => {
  const [ganadoList, setStudentList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    GetAllGanado();
  }, []);

  const GetAllGanado = async () => {
    try {
      const response = await fetch("/api/ganado/participantes");
      if (!response.ok) throw new Error("Error fetching ganado");

      const data = await response.json();
      setStudentList(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = ganadoList.filter((ganado) =>
      Object.values(ganado)
        .join(" ")
        .toLowerCase()
        .includes(searchValue)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex">
      <Sidebar onSearchChange={handleSearchChange} />
      <div className="p-10 mt-12 pb-20 bg-[#f3fdff] w-[85%]">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Ganadores
        </h2>
        <ListPublic ganadoList={filteredData} refreshData={GetAllGanado} />
      </div>
    </div>
  );
};

export default Student;
*/



"use client";
import React, { useEffect, useState } from "react";
import ListPublic from "./component/ListPublic";
import Sidebar from "../components/sidebar/Sidebar";

interface Ganado {
  id: number;
  nombre: string;
  establo: string;
  categoria: string;
  [key: string]: any; // Para otras propiedades opcionales
}

const Student = () => {
  const [ganadoList, setGanadoList] = useState<Ganado[]>([]);
  const [filteredData, setFilteredData] = useState<Ganado[]>([]);

  useEffect(() => {
    GetAllGanado();
  }, []);

  const GetAllGanado = async () => {
    try {
      const response = await fetch("/api/ganado/participantes");
      if (!response.ok) throw new Error("Error fetching ganado");

      const data: Ganado[] = await response.json(); // Tipamos la respuesta
      setGanadoList(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
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
      ganado.nombre.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const handleSearchByCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = ganadoList.filter((ganado) =>
      ganado.categoria.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex">
      <Sidebar
        onSearchByStable={handleSearchByStable}
        onSearchByName={handleSearchByName}
        onSearchByCategory={handleSearchByCategory}
      />
      <div className="p-10 mt-12 pb-20 bg-[#f3fdff] w-[85%]">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Ganadores
        </h2>
        <ListPublic ganadoList={filteredData} refreshData={GetAllGanado} />
      </div>
    </div>
  );
};

export default Student;
