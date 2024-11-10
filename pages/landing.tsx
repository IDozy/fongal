






"use client";
import { useEffect, useState } from "react";
import Sponsors from "../app/components/sponsors/Sponsors"; 
import GanadoCard from "../app/components/card/GanadoCard"; 
import GanadoList from "../app/components/card/GanadoList";
import Pagination from "../app/components/card/Pagination";
import ViewToggle from "../app/components/card/ViewToggle";
import ConcursoGanadero from "../app/components/ganadores/Concurso";
import NavBar from "../app/components/navbar/Navbar";

// Interfaz Ganado
interface Ganado {
  id: string;
  name: string;
  nacimiento: string;
  diasNacida: number;
  categoria: string;
  establo: string;
  remate: boolean;
  propietario: string;
  descripcion: string;
  raza: string;
  sexo: string;
  imageSrc: string;
}

const GanadoView = () => {
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const itemsPerPage = 10;

  // Fetch de ganado
  useEffect(() => {
    const fetchGanado = async (page: number) => {
      try {
        const response = await fetch(
          `/api/ganado?page=${page}&limit=${itemsPerPage}`
        );
        if (!response.ok) throw new Error("Error fetching ganado");
        const data = await response.json();
        setGanadoData(data.ganado);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGanado(currentPage);
  }, [currentPage]);

  const toggleView = () =>
    setViewMode((prev) => (prev === "card" ? "list" : "card"));
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
        <NavBar />
      <ConcursoGanadero />
      <ViewToggle viewMode={viewMode} toggleView={toggleView} />
      {viewMode === "card" ? (
        <GanadoCard ganadoData={ganadoData} />
      ) : (
        <GanadoList ganadoData={ganadoData} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Sponsors />
    </div>
  );
};

export default GanadoView;
