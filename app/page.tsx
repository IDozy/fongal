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
