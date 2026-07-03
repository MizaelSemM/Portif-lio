"use client";

import { useEffect, useState } from "react";

const NAME = "Mizael Borges";
const ROLE = "Full-Stack Developer";

const LINES = [
  <>
    <span className="text-violet">model</span> <span className="text-amber">Developer</span> {"{"}
  </>,
  <>
    &nbsp;&nbsp;name&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;&nbsp;&nbsp;<span className="text-teal">"{NAME}"</span>
  </>,
  <>
    &nbsp;&nbsp;role&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;&nbsp;&nbsp;<span className="text-teal">"{ROLE}"</span>
  </>,
  <>
    &nbsp;&nbsp;stack&nbsp;&nbsp;&nbsp;String[]{" "}
    <span className="text-teal">["React","Next.js","Node.js","PostgreSQL"]</span>
  </>,
  <>
    &nbsp;&nbsp;status&nbsp;&nbsp;Enum&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal">"OPEN_TO_WORK"</span>
  </>,
  <>{"}"}</>,
];

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 260);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section id="sobre" className="pb-16 pt-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_#F5B85A]" />
            disponível para novos projetos
          </div>

          <h1 className="mb-4 font-mono text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="text-teal">Mizael</span> Borges
          </h1>

          <p className="mb-7 max-w-md text-[16.5px] text-muted">
            Desenvolvedor Full-Stack focado em construir produtos completos — da
            interface ao banco de dados — com React, Next.js e Node.js.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projetos"
              className="rounded-lg border border-teal bg-teal px-5 py-3 font-mono text-sm font-medium text-[#08161A] transition-transform hover:-translate-y-0.5"
            >
              Ver projetos →
            </a>
            <a
              href="#contato"
              className="rounded-lg border border-line px-5 py-3 font-mono text-sm font-medium transition-colors hover:border-teal hover:text-teal"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[10px] border border-line bg-panel shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-line bg-panel2 px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-[11.5px] text-muted">schema.prisma</span>
          </div>
          <div className="min-h-[210px] p-5 font-mono text-[13px] text-muted">
            {LINES.slice(0, visible).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {visible >= LINES.length && (
              <span className="cursor-blink inline-block h-[15px] w-[7px] bg-teal align-middle" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
