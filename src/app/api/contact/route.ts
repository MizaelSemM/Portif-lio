import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres."),
});

// POST /api/contact
// Valida o corpo da requisição e grava a mensagem no PostgreSQL via Prisma.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const contact = await prisma.contactMessage.create({
      data: parsed.data,
    });

    return NextResponse.json({ contact }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
