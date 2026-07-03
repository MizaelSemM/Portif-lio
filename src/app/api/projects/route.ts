import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects
// Retorna a lista de projetos ordenada, direto do PostgreSQL via Prisma.
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("[GET /api/projects]", error);
    return NextResponse.json(
      { error: "Não foi possível carregar os projetos." },
      { status: 500 }
    );
  }
}
