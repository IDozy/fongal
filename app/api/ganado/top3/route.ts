import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export async function GET(request: NextRequest) {
  try {
    const ganado = await prisma.ganado.findMany();
    console.log("Ganado Data:", ganado); // Verifica los datos obtenidos

    const top3Ganado = ganado
      .map((g) => ({ ...g, puntaje: g.puntaje ? parseFloat(g.puntaje) : 0 }))
      .sort((a, b) => b.puntaje - a.puntaje)
      .slice(0, 3)
      .map((g, index) => ({ ...g, puesto: index + 1 })); // Añadir el campo puesto

    console.log("Top 3 Ganado:", top3Ganado); // Verifica los datos procesados
    return NextResponse.json(top3Ganado, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching top 3 ganado:", error);
    return NextResponse.json(
      { error: "Error fetching top 3 ganado" },
      { status: 500 }
    );
  }
}
