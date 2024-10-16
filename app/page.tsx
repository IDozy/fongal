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
*/

"use client";
import { useEffect, useState } from "react";
import Sponsors from "./components/sponsors/Sponsors";

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

const PlaceholderSVG = () => (
  <svg fill="red" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="-55.6 -55.6 667.21 667.21">

<g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">

<path transform="translate(-55.6, -55.6), scale(20.8503125)" d="M16,26.986328234275184C18.47417306508259,27.011193410950398,20.440498150598835,25.14075549608464,22.308802267136638,23.518537766826586C24.14006745451471,21.92848033043723,25.92800991930703,20.207057554917494,26.51715248881449,17.854457744003177C27.138574737953103,15.372956760219747,26.36680938901288,12.904083091066832,25.57613816632398,10.471214051875805C24.528002946059836,7.246136860379704,24.498155605512295,2.5417856640005296,21.237662122989015,1.6096415863549325C17.92395497653821,0.662284228282385,15.668920456805301,5.125787624725334,12.64179530891838,6.773408441346664C10.326428857438147,8.033629204346319,7.559913122939884,8.180314673258517,5.7118363553769615,10.06012595030996C3.346784311979421,12.46578981667361,-0.023673183259006136,15.425618480634862,0.9645686767469996,18.651152208878678C1.973858625997084,21.945385032474974,6.783390667749876,21.7223016828039,9.796710479052164,23.392792572491594C11.951681992874919,24.5874418320475,13.536166410154944,26.961566968228592,16,26.986328234275184" fill="yellow"/>

</g>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M9.469,226.129c0.992,5.573,2.358,11.102,2.999,16.712c1.428,12.501,3.949,25.108,3.362,37.543 c-0.75,15.896-4.121,31.665-6.361,47.487c0.833-0.347,1.665-0.698,2.501-1.045c3.285,4.998,6.569,9.996,10.127,15.415 c-1.437,4.622-3.129,10.064-5.104,16.409c2.432-1.946,4.268-3.415,4.811-3.848c1.265,7.385,2.636,15.378,4.215,24.599 c2.57-2.117,3.37-2.778,3.949-3.26c0.673,3.578,1.351,7.168,2.028,10.759c0.445-0.024,0.889-0.049,1.334-0.073 c0.698-2.815,1.396-5.635,2.093-8.45c0.665,0.024,1.33,0.05,1.995,0.074c10.18,30.791,22.595,59.535,25.063,90.584 c0,0-1.787,5.594,2.191,8.127c3.978,2.53,44.847,2.893,48.462,0c3.615-2.893-8.604-17.14-17.683-21.049 c-2.848-11.803-6.185-22.097-8.054-34.063c-1.897-12.143-2.746-24.509-3.166-36.806c-0.424-12.379,4.063-23.301,10.897-33.758 c5.161-7.899,8.886-16.883,12.273-25.757c3.566-9.344,5.479-19.319,9.041-28.662c3.007-7.887,6.846-8.025,13.472-2.596 c6.756,5.541,13.337,12.146,21.196,15.271c9.649,3.84,20.518,4.688,30.906,6.577c6.075,1.106,12.26,2.57,18.356,2.407 c18.601-0.497,37.173-1.941,55.773-2.542c8.364-0.269,14.093,4.194,15.602,12.433c2.272,12.402,2.848,25.141,5.528,37.438 c2.677,12.272,2.203,24.99,8.417,36.903c6.691,12.828,9.295,27.394,4.762,41.951c-1.049,3.37-3.721,6.772-6.605,8.771 c0,0-3.383,16.961,0.478,20.82c3.859,3.855,24.112,2.411,35.202,1.448c0,0,27.968,5.786,39.058,2.412 c11.094-3.375,5.304-10.127,4.341-13.982c-0.967-3.855-8.494-4.794-8.494-4.794c-1.469-2.856-6.59-4.125-7.169-7.152 c-2.692-14.125-1.832-28.091,1.832-42.085c4.554-17.381,7.85-35.101,12.677-52.4c1.673-6.001,5.585-11.799,9.739-16.593 c7.747-8.939,21.399-10.972,27.242-22.452c0.085-0.167,0.412-0.225,0.636-0.302c11.29-3.986,16.124-13.081,19.295-23.771 c1.656-5.585,4.06-10.959,6.287-16.36c6.585-15.981,19.185-27.262,31.31-38.695c3.664-3.452,10.024-6.748,14.55-6.079 c13.929,2.057,27.564,5.569,41.302-0.518c0.637-0.281,1.444-0.767,1.991-0.591c9.837,3.174,18.339-0.192,26.487-5.3 c2.366-1.485,6.638-3.162,6.605-4.675c-0.147-6.752-0.204-14.056-2.791-20.082c-3.803-8.845-10.245-16.52-14.586-25.182 c-2.982-5.949-3.064-12.709-0.6-19.56c2.081,0.718,3.427,1.167,4.757,1.648c9.172,3.301,15.745-1.979,14.827-11.473 c-0.245-2.534,0.607-5.757,2.13-7.785c8.282-11.012,6.564-17.997-6.422-23.105c-2.546-1-5.61-1.167-8.385-0.975 c-5.198,0.359-10.354,1.261-14.586,1.812c-2.791-3.929-4.325-8.278-7.303-9.796c-4.99-2.538-8.075-5.112-6.517-10.2 c-8.637-3.207-16.695-6.202-25.561-9.494c2.011-1.057,3.043-1.595,4.076-2.138c-0.245-0.669-0.49-1.338-0.734-2.008 c-7.487,2.277-14.974,4.558-22.697,6.908c0.171,4.602-0.094,9.298-7.308,8.817c-1.15-0.078-2.611,1.212-3.574,2.211 c-4.182,4.333-8.404,6.609-14.517,3.043c-1.828-1.065-5.287-0.245-7.638,0.657c-7.144,2.742-13.293,7.165-22.064,6.096 c-6.116-0.743-12.705,2.844-19.144,4.186c-14.822,3.093-29.376,3.623-42.979-4.818c-1.963-1.22-4.524-1.995-6.83-2.052 c-9.649-0.229-19.318,0.171-28.964-0.2c-6.487-0.249-12.938-1.383-19.4-2.154c-3.239-0.388-6.454-1.012-9.702-1.253 c-7.74-0.571-15.888,0.327-23.113-1.86c-5.985-1.812-12.228-1.318-16.634,0.11c-10.016,3.248-19.56,2.468-28.69-0.286 c-29.192-8.809-59.185-13.072-89.254-16.797c-6.348-0.759-11.358-3.089-16.369-6.181c-3.75-2.318-7.177-5.235-11.383-2.126 c-4.851-1.249-10.392-2.974-14.521-1.273c-5.757,2.371-13.386-0.779-17.572,5.908c-0.171,0.269-1.347-0.008-2.032-0.151 c-7.928-1.648-14.305,2.656-19.854,6.769c-6.393,4.741-12.632,7.229-20.126,5.5c-3.321,4.133-2.644,11.122-9.861,11.42 c-0.604,0.024-1.428,1.367-1.677,2.232C7.764,115.366,6.572,122,4.132,128.144c-4.757,11.991-2.607,24.57-3.941,36.834 c-0.4,3.664-0.139,7.507,0.473,11.159C3.476,192.82,6.503,209.471,9.469,226.129z M317.652,411.418 c0.641-0.032,1.285-0.061,1.926-0.094c1.028,7.426,2.627,14.831,2.93,22.285c0.306,7.613,1.767,15.626-2.689,23.896 C314.625,441.394,312.307,426.494,317.652,411.418z"/> </g> </g> </g>

</svg>

  
);

const Description: React.FC<{ vaca: Ganado }> = ({ vaca }) => (
 
  <div className="card">
  <div className="imgBx">
    {/* <img src={vaca.imageSrc} alt={vaca.name} height="200px"/>
   vaca con solo imagen por defecto*/}

{vaca.imageSrc ? (
        <img src={vaca.imageSrc} alt={vaca.name} height="200px"/>
      ) : (
        <div className="h-[110px] w-1/3 flex items-center justify-center fill-current">
          <PlaceholderSVG />
        </div>
      )} {/* para poner un svg si está vacio */}
  
  </div>
  <div className="contentBx">
    <h3>
      {vaca.name} <span>({vaca.raza})</span>
    </h3>
    <p className="buy"><strong>Nacimiento:</strong> {vaca.nacimiento}</p>
    <p className="buy"><strong>Días Nacida:</strong> {vaca.diasNacida}</p>
    <p className="buy"><strong>Categoría:</strong> {vaca.categoria}</p>
    <p className="buy"><strong>Establo:</strong> {vaca.establo}</p>
    <p className="buy"><strong>Remate:</strong> {vaca.remate ? "Sí" : "No"}</p>
    <p className="buy"><strong>Criador:</strong> {vaca.propietario}</p>
    <p className="buy"><strong>N° Registro:</strong> {vaca.sexo}</p>
   
  </div>
  </div>

);

export default function Home() {
  const [ganadoData, setGanadoData] = useState<Ganado[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6; 

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

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="grid-container">
        {ganadoData.map((vaca) => (
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
      <Sponsors/>
    </>
  );
}
