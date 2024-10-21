import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";


const normalizeCategory = (category: string): string => {
  return category.trim().toLowerCase(); 
};

export async function GET(request: NextRequest) {
  try {
    const categories = await prisma.ganado.findMany({
      select: { categoria: true },
    });
    const uniqueCategories = Array.from(new Set(
      categories
        .map(c => c.categoria) 
        .filter((c): c is string => c !== null) 
        .map(normalizeCategory) 
    ));

    return NextResponse.json({ categorias: uniqueCategories }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Error fetching categories" },
      { status: 500 }
    );
  }
}
