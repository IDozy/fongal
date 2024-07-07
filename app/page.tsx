/*
"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Paper {
  id: number;
  front: string;
  back: string;
}

export default function Home() {

  
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentLocation, setCurrentLocation] = useState(1);

  const papers: Paper[] = [
    { id: 1, front: "QR", back: "1" },
    { id: 2, front: "1", back: "2" },
    { id: 3, front: "2", back: "3" },
    { id: 4, front: "3", back: "4" },
    { id: 5, front: "4", back: "5" },
    { id: 6, front: "5", back: "6" },
    { id: 7, front: "6", back: "7" },
    { id: 8, front: "7", back: "8" },
    { id: 9, front: "8", back: "Fin" },
  ];

  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const book = bookRef.current;
    const maxLocation = papers.length + 1;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation}`;
          if (currentLocation === papers.length) closeBook(false);
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        const paper = paperRefs.current[currentLocation - 2];
        if (paper) {
          if (currentLocation === 2) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${papers.length - (currentLocation - 1)}`;
          if (currentLocation === papers.length + 1) openBook();
          setCurrentLocation(currentLocation - 1);
        }
      }
    };

    prevBtn?.addEventListener("click", goPrevPage);
    nextBtn?.addEventListener("click", goNextPage);

    return () => {
      prevBtn?.removeEventListener("click", goPrevPage);
      nextBtn?.removeEventListener("click", goNextPage);
    };
  }, [currentLocation, papers]);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-230px)";
      nextBtn.style.transform = "translateX(230px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  };

  return (
    <div className="box">
      <div className="container">
        <button ref={prevBtnRef} id="prev-btn">
          <FaArrowCircleLeft size={28} fill="#636363" />
        </button>
        <div ref={bookRef} id="book" className="book">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              ref={(element) => {
                paperRefs.current[index] = element;
              }}
              id={`p${paper.id}`}
              style={{ zIndex: `${papers.length - paper.id}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">
                  <h1>{paper.front}</h1>
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  <h1>{paper.back}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button ref={nextBtnRef} id="next-btn">
          <FaArrowCircleRight size={28} fill="#636363" />
        </button>
      </div>
    </div>
  );
}

*/
/*
"use client";

import React, { useEffect, useState } from "react";
import getGanado from "./acctions/getGanado";

export default function Home() {
  const [vacas, setVacas] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGanado = async () => {
      try {
        const ganadoData = await getGanado();
        setVacas(ganadoData);
       
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGanado();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Ganado</h1>
      {vacas.length > 0 ? (
        <ul>
          {vacas.map((vaca, index) => (
            <li key={index}>
              <p>Nombre: {vaca.name}</p>
              <p>Nacimiento: {vaca.nacimiento}</p>
              <p>Días Nacida: {vaca.días}</p>
              <p>Categoría: {vaca.categoria}</p>
              <p>Establo: {vaca.establo}</p>
              <p>Remate: {vaca.remate ? "Sí" : "No"}</p>
              <p>Propietario: {vaca.propietario}</p>
              <p>Descripción: {vaca.descripcion}</p>
              <p>Raza: {vaca.raza}</p>
              <p>Sexo: {vaca.sexo}</p>
           
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de ganado disponibles.</p>
      )}
    </div>
  );
}
*/
"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Description from "./components/Description";

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

export default function Home() {
  const [papers, setPapers] = useState<Ganado[]>([]);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentLocation, setCurrentLocation] = useState(1);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchGanado = async () => {
      try {
        const response = await fetch('/api/ganado', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error fetching ganado');
        }
        const data: Ganado[] = await response.json();
        setPapers(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchGanado();
  }, []);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const maxLocation = papers.length + 1;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation}`;
          if (currentLocation === papers.length) closeBook(false);
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        const paper = paperRefs.current[currentLocation - 2];
        if (paper) {
          if (currentLocation === 2) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${papers.length - (currentLocation - 1)}`;
          if (currentLocation === papers.length + 1) openBook();
          setCurrentLocation(currentLocation - 1);
        }
      }
    };

    prevBtn?.addEventListener("click", goPrevPage);
    nextBtn?.addEventListener("click", goNextPage);

    return () => {
      prevBtn?.removeEventListener("click", goPrevPage);
      nextBtn?.removeEventListener("click", goNextPage);
    };
  }, [currentLocation, papers]);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-230px)";
      nextBtn.style.transform = "translateX(230px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  };

  return (
    <div className="box">
      <div className="container">
        <button ref={prevBtnRef} id="prev-btn">
          <FaArrowCircleLeft size={28} fill="#636363" />
        </button>
        <div ref={bookRef} id="book" className="book">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              ref={(element) => {
                paperRefs.current[index] = element;
              }}
              id={`p${index + 1}`}
              style={{ zIndex: `${papers.length - index}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">
                  {index === 0 ? (
                    <h1>Página de Inicio</h1>
                  ) : (
                    <h1>{paper.name}</h1>
                  )}
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  {index === papers.length - 1 ? (
                    <h1>Página de Fin</h1>
                  ) : (
                    <Description vaca={paper} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button ref={nextBtnRef} id="next-btn">
          <FaArrowCircleRight size={28} fill="#636363" />
        </button>
      </div>
    </div>
  );
}
