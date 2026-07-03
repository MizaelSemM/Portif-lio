import { PrismaClient, ProjectStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        order: 1,
        title: "Loja Nimbus — E-commerce Full-Stack",
        description:
          "Plataforma de e-commerce com catálogo dinâmico, carrinho persistente e checkout. API própria em Node.js com Prisma sobre PostgreSQL.",
        badges: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
        githubUrl: "https://github.com/seunomeaqui/loja-nimbus",
        demoUrl: "https://loja-nimbus.vercel.app",
        status: ProjectStatus.PRODUCAO,
      },
      {
        order: 2,
        title: "Orbit — Dashboard de Métricas SaaS",
        description:
          "Painel de métricas em tempo real com cache inteligente via TanStack Query e gráficos responsivos. Autenticação e permissões por time.",
        badges: ["React", "TanStack Query", "Node.js", "PostgreSQL"],
        githubUrl: "https://github.com/seunomeaqui/orbit-dashboard",
        demoUrl: "https://orbit-dashboard.vercel.app",
        status: ProjectStatus.PRODUCAO,
      },
      {
        order: 3,
        title: "Foco — Gerenciador de Tarefas",
        description:
          "App de produtividade com formulários complexos validados via React Hook Form + Zod, e sincronização otimista de dados.",
        badges: ["Next.js", "React Hook Form", "TypeScript", "Prisma"],
        githubUrl: "https://github.com/seunomeaqui/foco-app",
        demoUrl: "https://foco-app.vercel.app",
        status: ProjectStatus.EM_DESENVOLVIMENTO,
      },
    ],
  });

  console.log("Seed concluído com sucesso.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
