import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/acctions/getCurrentUser";

export async function GET(request: NextRequest) {
  try {
    const ganado = await prisma.ganado.findMany(/*{
      orderBy: {
        createdAt: "desc",
      },
    }*/);
    return NextResponse.json(ganado, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching ganado:", error);
    return NextResponse.json(
      { error: "Error fetching ganado" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    name,
    propietario,
    categoria,
    nacimiento,
    establo,
    remate, // Este campo lo transformaremos a booleano
    descripcion,
    raza,
    sexo,
    imageSrc,
  } = body;


  const nacimientoDate = new Date(nacimiento);

  const hoy = new Date();
  const diferenciaEnMilisegundos = hoy.getTime() - nacimientoDate.getTime();
  const diasNacida = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  // Validar campos requeridos
  const requiredFields = [
    "name",
    "propietario",
    "nacimiento",
    "categoria",
    "establo",
    "descripcion",
    "raza",
    "sexo",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.error();
    }
  }

  // Crear el registro en la base de datos
  const listing = await prisma?.ganado.create({
    data: {
      name,
      propietario,
      nacimiento,
      categoria,
      diasNacida,
      establo,
      remate,
      descripcion,
      raza,
      sexo,
      imageSrc,
    },
  });

  return NextResponse.json(listing);
}
