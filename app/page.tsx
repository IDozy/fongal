/*"use client";
import { useEffect, useState } from "react";

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

const Description: React.FC<{ vaca: Ganado }> = ({ vaca }) => (
  <div className="card">
    <img
      className="card-image"
      src={vaca.imageSrc}
      alt={vaca.name}
    />
    <div className="card-content">
      <h3>{vaca.name}</h3>
      <p><strong>Nacimiento:</strong> {vaca.nacimiento}</p>
      <p><strong>Días Nacida:</strong> {vaca.diasNacida}</p>
      <p><strong>Categoría:</strong> {vaca.categoria}</p>
      <p><strong>Establo:</strong> {vaca.establo}</p>
      <p><strong>Remate:</strong> {vaca.remate ? "Sí" : "No"}</p>
      <p><strong>Criador:</strong> {vaca.propietario}</p>
      <p><strong>Raza:</strong> {vaca.raza}</p>
      <p><strong>N° Registro:</strong> {vaca.sexo}</p>
    </div>
  </div>
);

export default function Home() {
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);

  useEffect(() => {
    const fetchGanado = async () => {
      try {
        const response = await fetch("/api/ganado");
        if (!response.ok) throw new Error("Error fetching ganado");
        const data = await response.json();
        setGanadoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGanado();
  }, []);

  return (
    <div className="grid-container">
      {ganadoData.map((vaca) => (
        <Description key={vaca.id} vaca={vaca} />
      ))}
    </div>
  );
}
*/

"use client";
import { useEffect, useState } from "react";

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

const Description: React.FC<{ vaca: Ganado }> = ({ vaca }) => (
  <div className="card">
    <img className="card-image" src={vaca.imageSrc} alt={vaca.name} />
    <div className="card-content">
      <h3>{vaca.name}</h3>
      <p><strong>Nacimiento:</strong> {vaca.nacimiento}</p>
      <p><strong>Días Nacida:</strong> {vaca.diasNacida}</p>
      <p><strong>Categoría:</strong> {vaca.categoria}</p>
      <p><strong>Establo:</strong> {vaca.establo}</p>
      <p><strong>Remate:</strong> {vaca.remate ? "Sí" : "No"}</p>
      <p><strong>Criador:</strong> {vaca.propietario}</p>
      <p><strong>Raza:</strong> {vaca.raza}</p>
      <p><strong>N° Registro:</strong> {vaca.sexo}</p>
    </div>
  </div>
);

export default function Home() {
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Número de tarjetas por página

  useEffect(() => {
    const fetchGanado = async () => {
      try {
        const response = await fetch("/api/ganado");
        if (!response.ok) throw new Error("Error fetching ganado");
        const data = await response.json();
        setGanadoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGanado();
  }, []);

  // Calcular el rango de elementos mostrados en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ganadoData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ganadoData.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="grid-container ">
        {currentItems.map((vaca) => (
          <Description key={vaca.id} vaca={vaca} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </>
  );
}
