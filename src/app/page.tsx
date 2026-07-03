import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsList from "@/components/ProjectsList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1080px] px-6">
        <Hero />

        <TechStack />

        <section id="projetos" className="border-t border-line py-16">
          <div className="mb-3 flex flex-wrap items-baseline gap-3.5">
            <span className="rounded-md bg-teal px-2 py-0.5 font-mono text-xs font-semibold text-ink">
              03
            </span>
            <h2 className="font-mono text-2xl font-semibold">Projetos</h2>
          </div>
          <p className="mb-9 max-w-md text-[14.5px] text-muted">
            Uma seleção de projetos com código aberto e ambiente em produção —
            carregados em tempo real via API (Node.js + Prisma + PostgreSQL).
          </p>
          <ProjectsList />
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
