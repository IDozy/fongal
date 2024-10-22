interface Ganado {
    id: string;
    name: string;
    categoria: string;
    establo: string;
    raza: string;
    imageSrc: string;
  }
  
  interface GanadoCardProps {
    ganadoData: Ganado[];
  }
  
  const GanadoCard = ({ ganadoData }: GanadoCardProps) => (
    <div className="grid-container">
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
  );
  
  export default GanadoCard;
  