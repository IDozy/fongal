export interface Ganado {
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

export default async function getGanado(): Promise<Ganado[]> {
  try {
    const response = await fetch("/api/ganado", {
      method: "GET",
    });
  

    if (!response.ok) {
      throw new Error("Error fetching ganado");
    }

    const data = await response.json();
  
    const ganadoList: Ganado[] = data.map((g: any) => ({
      name: g.name,
      nacimiento: g.nacimiento,
      diasNacida: g.diasNacida,
      categoria: g.categoria,
      establo: g.establo,
      remate: g.remate,
      propietario: g.propietario,
      descripcion: g.descripcion,
      raza: g.raza,
      sexo: g.sexo,
    }));

    return ganadoList;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
