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
*/ /*
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
                  {index === papers.length -1 ? (
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
*/ /*

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

type Paper = 
  | { id: string; type: 'start' | 'end'; name: string }
  | { id: string; type: 'name' | 'description'; ganado: Ganado };

export default function Home() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentLocation, setCurrentLocation] = useState(0);

  useEffect(() => {
    const fetchGanado = async () => {
      try {
        const response = await fetch('/api/ganado', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Error fetching ganado');
        }
        const data: Ganado[] = await response.json();
        const formattedData: Paper[] = [
          { id: 'start', type: 'start', name: 'Página de Inicio' },
          ...data.flatMap((g) => [
            { id: `${g.id}-name`, type: 'name' as const, ganado: g },
            { id: `${g.id}-description`, type: 'description' as const, ganado: g },
          ]),
          { id: 'end', type: 'end', name: 'Página de Fin' },
        ];
        setPapers(formattedData);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchGanado();
  }, []);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const maxLocation = papers.length; // Total de páginas

    const goNextPage = () => {
      if (currentLocation < maxLocation - 1) {
        const paper = paperRefs.current[currentLocation];
        if (paper) {
          if (currentLocation === 0) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation + 1}`;
          if (currentLocation === maxLocation - 2) closeBook(false); // para fin
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 0) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${maxLocation - currentLocation}`;
          if (currentLocation === maxLocation - 1) openBook(); // para inicio
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
                  {paper.type === 'start' ? (
                    <h1>Página de Inicio</h1>
                  ) : paper.type === 'description' ? (
                    <Description vaca={paper.ganado} />
                  ) : null}
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  {paper.type === 'end' ? (
                    <h1>Página de Fin</h1>
                  ) : paper.type === 'name' ? (
                    <h1>{paper.ganado.name}</h1>
                  ) : null}
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
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Paper {
  id: number;
  front: React.ReactNode;
  back: React.ReactNode;
}

const DataComponent: React.FC<{ data: string }> = ({ data }) => (
  <div>{data}</div>
);

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentLocation, setCurrentLocation] = useState(0);

  const papers: Paper[] = [
    { id: 1, front: "QR", back: <DataComponent data="datos nombre 1" /> },
    { id: 2, front: <DataComponent data="datos informarcion 1" />, back: <DataComponent data="datos nombre 2" /> },
    { id: 3, front: <DataComponent data="datos informarcion 2" />, back: <DataComponent data="datos nombre 3" /> },
    { id: 4, front: <DataComponent data="datos informarcion 3" />, back: <DataComponent data="datos nombre 4" /> },
    { id: 5, front: <DataComponent data="datos informarcion 4" />, back: <DataComponent data="datos nombre 5" /> },
    { id: 6, front: <DataComponent data="datos informarcion 5" />, back: "Fin" }
  ];

  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const maxLocation = papers.length;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        const paper = paperRefs.current[currentLocation];
        if (paper) {
          if (currentLocation === 0) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation}`;
          if (currentLocation === papers.length - 1) closeBook(false);
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 0) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${papers.length - currentLocation}`;
          if (currentLocation === papers.length) openBook();
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
              style={{ zIndex: `${papers.length - index}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">
                  {paper.front}
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  {paper.back}
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

"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

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

interface Paper {
  id: number;
  front: React.ReactNode;
  back: React.ReactNode;
}

const Description: React.FC<{ vaca: Ganado; type?: string }> = ({
  vaca,
  type,
}) => (
  <div>
    {type === "front" ? (
      <>
        <p>
          <strong>Nombre:</strong> <div className="vacadescripcion-container">{vaca.name}</div>
        </p>

        <p>
          <strong>Nacimiento:</strong> {vaca.nacimiento}
        </p>
        <p>
          <strong>Días Nacida:</strong> {vaca.diasNacida}
        </p>
        <p>
          <strong>Categoria:</strong> {vaca.categoria}
        </p>
        <p>
          <strong>Establo:</strong> {vaca.establo}
        </p>
        <p>
          <strong>Remate:</strong> {vaca.remate ? "Sí" : "No"}
        </p>
        <p>
          <strong>Propietario:</strong> {vaca.propietario}
        </p>
        <p>
          <strong>Descripción:</strong> {vaca.descripcion}
        </p>
        <p>
          <strong>Raza:</strong> {vaca.raza}
        </p>
        <p>
          <strong>Sexo:</strong> {vaca.sexo}
        </p>
      </>
    ) : (
      <>
        <img className="fotovaca" width={"350px"} src={vaca.imageSrc} alt={vaca.name} style={{ position: 'relative', zIndex: 2 }} />
        
        <div className="vacanombre" style={{ position: 'relative', zIndex: 2 }}>
          <strong></strong> {vaca.name}
        </div>
      </>
    )}
  </div>
);

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);

  useEffect(() => {
    const fetchGanado = async () => {
      try {
        const response = await fetch("/api/ganado", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Error fetching ganado");
        }
        const data = await response.json();
        setGanadoData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchGanado();
  }, []);
  console.log(ganadoData);
  const papers: Paper[] =
    ganadoData.length > 0
      ? [
          { id: 1, front: "QR", back: <Description vaca={ganadoData[0]} /> },
          ...ganadoData
            .slice(0, ganadoData.length - 1)
            .map((ganado, index) => ({
              id: index + 2,
              front: <Description vaca={ganado} type="front" />,
              
              back: <Description vaca={ganadoData[index + 1]} />,
            })),
          {
            id: ganadoData.length + 1,
            front: (
              <Description
                vaca={ganadoData[ganadoData.length - 1]}
                type="front"
              />
            ),
            back: "Fin",
          },
        ]
      : [];

  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const maxLocation = papers.length;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        const paper = paperRefs.current[currentLocation];
        if (paper) {
          if (currentLocation === 0) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation}`;
          if (currentLocation === papers.length - 1) closeBook(false);
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 0) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${papers.length - currentLocation}`;
          if (currentLocation === papers.length) openBook();
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
      book.style.transform = isAtBeginning
        ? "translateX(0%)"
        : "translateX(100%)";
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
              style={{ zIndex: `${papers.length - index}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">{paper.front}

                </div>
              </div>
              <div className="back">
                <div className="back-content">{paper.back}


{/* Rectángulos alineados */}
<div className="rectangle" style={{ position: 'absolute', width: '450px', height: '40.29px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: '#5C3C35', zIndex: 1 }}></div>
<div className="rectangle" style={{ position: 'absolute', width: '450px', height: '40.29px', left: '50%', top: '60%', transform: 'translate(-50%, -50%)', background: '#5C3C35', zIndex: 1 }}></div>
<div className="rectangle" style={{ position: 'absolute', width: '450px', height: '40.29px', left: '50%', top: '70%', transform: 'translate(-50%, -50%)', background: '#5C3C35', zIndex: 1 }}></div>
         



                </div>
              </div>
            </div>
          ))}
        </div>
        <button ref={nextBtnRef} id="next-btn">
          <FaArrowCircleRight size={28} fill="#5C3C35" />
        </button>
      </div>
    </div>
  );
}
