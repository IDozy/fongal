"use client"

import React from "react";

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
  }
  
  interface DescriptionProps {
    vaca: Ganado;
  }
  
  const Description: React.FC<DescriptionProps> = ({ vaca }) => {
    return (
      <div>
        <h2>{vaca.name}</h2>
        <p><strong>Nacimiento:</strong> {vaca.nacimiento}</p>
        <p><strong>Días Nacida:</strong> {vaca.diasNacida}</p>
        <p><strong>Categoria:</strong> {vaca.categoria}</p>
        <p><strong>Establo:</strong> {vaca.establo}</p>
        <p><strong>Remate:</strong> {vaca.remate ? 'Sí' : 'No'}</p>
        <p><strong>Propietario:</strong> {vaca.propietario}</p>
        <p><strong>Descripción:</strong> {vaca.descripcion}</p>
        <p><strong>Raza:</strong> {vaca.raza}</p>
        <p><strong>Sexo:</strong> {vaca.sexo}</p>
      </div>
    );
  };
  
  export default Description;
  