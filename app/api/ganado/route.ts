import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

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
