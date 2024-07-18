/*import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/acctions/getCurrentUser";

export async function GET(request: NextRequest) {
  try {
    const ganado = await prisma.ganado.findMany();
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
    remate,
    descripcion,
    raza,
    sexo,
    imageSrc,
    puntaje
  } = body;

  const nacimientoDate = new Date(nacimiento);

  const hoy = new Date();
  const diferenciaEnMilisegundos = hoy.getTime() - nacimientoDate.getTime();
  const diasNacida = Math.floor(
    diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
  );

  const requiredFields = [
    "name",
    "propietario",
    "nacimiento",
    "categoria",
    "establo",
    "descripcion",
    "raza",
    "sexo",
    "puntaje",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.error();
    }
  }

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
      puntaje,
    },
  });

  return NextResponse.json(listing);
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
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
      puntaje,
    } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const ganado = await prisma.ganado.update({
      where: { id },
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
        puntaje,
      },
    });

    return NextResponse.json(ganado, { status: 200 });
  } catch (error: any) {
    console.error("Error al actualizar el concursante", error);
    return NextResponse.json(
      { error: "Error al actualizar el concursante" },
      { status: 500 }
    );
  }
}*/

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(request: NextRequest) {
  try {
    const ganado = await prisma.ganado.findMany();
    return NextResponse.json(ganado, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching ganado:", error);
    return NextResponse.json(
      { error: "Error fetching ganado" },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    name,
    propietario,
    categoria,
    nacimiento,
    establo,
    remate,
    descripcion,
    raza,
    sexo,
    imageSrc,
    puntaje,
  } = body;

  // Función para convertir la fecha en formato DD/MM/YYYY a YYYY-MM-DD
  function convertirFecha(formato: string): string {
    const [dia, mes, año] = formato.split('/');
    return `${año}-${mes}-${dia}`;
  }


  const nacimientoISO = convertirFecha(nacimiento);
  const nacimientoDate = new Date(nacimientoISO);
  const hoy = new Date();
  const diferenciaEnMilisegundos = hoy.getTime() - nacimientoDate.getTime();
  const diasNacida = Math.floor(
    diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
  );

  const requiredFields = [
    "name",
    "propietario",
    "nacimiento",
    "categoria",
    "establo",
    "descripcion",
    "raza",
    "sexo",
    "puntaje",
  ];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `${field} is required` },
        { status: 400 }
      );
    }
  }

  const listing = await prisma.ganado.create({
    data: {
      name,
      propietario,
      nacimiento: nacimientoISO, // Guarda la fecha en formato ISO en la base de datos
      categoria,
      diasNacida,
      establo,
      remate,
      descripcion,
      raza,
      sexo,
      imageSrc,
      puntaje,
    },
  });

  return NextResponse.json(listing);
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
      name,
      propietario,
      nacimiento,
      categoria,
      establo,
      remate,
      descripcion,
      raza,
      sexo,
      imageSrc,
      puntaje,
    } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const nacimientoDate = new Date(nacimiento);
    const hoy = new Date();
    const diferenciaEnMilisegundos = hoy.getTime() - nacimientoDate.getTime();
    const diasNacida = Math.floor(
      diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
    );

    const ganado = await prisma.ganado.update({
      where: { id },
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
        puntaje,
      },
    });

    return NextResponse.json(ganado, { status: 200 });
  } catch (error: any) {
    console.error("Error al actualizar el concursante", error);
    return NextResponse.json(
      { error: "Error al actualizar el concursante" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.ganado.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Concursante eliminado correctamente" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error al eliminar el concursante", error);
    return NextResponse.json(
      { error: "Error al eliminar el concursante" },
      { status: 500 }
    );
  }
}
