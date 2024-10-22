/*"use client";
import { useEffect, useState } from "react";
import Sponsors from "./components/sponsors/Sponsors";

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

// Componente principal
const GanadoView = () => {
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const itemsPerPage = 10;

  // Fetch de ganado con paginación
  useEffect(() => {
    const fetchGanado = async (page: number) => {
      try {
        const response = await fetch(`/api/ganado?page=${page}&limit=${itemsPerPage}`);
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

  // Cambio de vista entre tarjeta y lista
  const toggleView = () =>
    setViewMode((prev) => (prev === "card" ? "list" : "card"));

  // Funciones para cambiar de página
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <div className="view-toggle">
        <button onClick={toggleView}>
          Cambiar a {viewMode === "card" ? "Lista" : "Tarjeta"}
        </button>
      </div>
      {viewMode === "card" ? (
        <div className="card-view">
          {ganadoData.map((ganado) => (
            <div key={ganado.id} className="card">
              <img src={ganado.imageSrc} alt={ganado.name} className="card-img" />
              <div className="card-content">
                <h3>{ganado.name}</h3>
                <p>Categoría: {ganado.categoria}</p>
                <p>Establo: {ganado.establo}</p>
                <p>Raza: {ganado.raza}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-view">
          {ganadoData.map((ganado) => (
            <li key={ganado.id} className="list-item">
              <span>{ganado.name}</span> - {ganado.categoria} - {ganado.raza}
            </li>
          ))}
        </ul>
      )}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>

      <Sponsors />
    </div>
  );
};
export default GanadoView;
*/
"use client";
import { useEffect, useState } from "react";
import Sponsors from "./components/sponsors/Sponsors";
import GanadoCard from "./components/card/GanadoCard";
import GanadoList from "./components/card/GanadoList";
import Pagination from "./components/card/Pagination";
import ViewToggle from "./components/card/ViewToggle";

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
        const response = await fetch(`/api/ganado?page=${page}&limit=${itemsPerPage}`);
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

  const toggleView = () => setViewMode((prev) => (prev === "card" ? "list" : "card"));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
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
