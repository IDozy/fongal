interface Ganado {
    id: string;
    name: string;
    categoria: string;
    raza: string;
  }
  
  interface GanadoListProps {
    ganadoData: Ganado[];
  }
  
  const GanadoList = ({ ganadoData }: GanadoListProps) => (
    <ul className="list-view">
      {ganadoData.map((ganado) => (
        <li key={ganado.id} className="list-item">
          <span>{ganado.name}</span> - {ganado.categoria} - {ganado.raza}
        </li>
      ))}
    </ul>
  );
  
  export default GanadoList;
  