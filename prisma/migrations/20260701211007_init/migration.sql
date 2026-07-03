-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('PRODUCAO', 'EM_DESENVOLVIMENTO', 'ARQUIVADO');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "badges" TEXT[],
    "githubUrl" TEXT NOT NULL,
    "demoUrl" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'PRODUCAO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_messages_pkey" PRIMARY KEY ("id")
);
