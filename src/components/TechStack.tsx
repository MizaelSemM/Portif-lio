const GROUPS = [
  {
    table: "// frontend",
    title: "Interface & Cliente",
    cols: [
      { name: "React", type: "library" },
      { name: "Next.js (App & Pages Router)", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "Tailwind CSS", type: "styling" },
    ],
  },
  {
    table: "// state_layer",
    title: "Estado & Requisições",
    cols: [
      { name: "TanStack Query", type: "data-fetch" },
      { name: "React Hook Form", type: "forms" },
      { name: "Zod", type: "validation" },
    ],
  },
  {
    table: "// backend",
    title: "Servidor & Dados",
    cols: [
      { name: "Node.js", type: "runtime" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma ORM", type: "orm" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line py-16">
      <div className="mb-10 flex flex-wrap items-baseline gap-3.5">
        <span className="rounded-md bg-teal px-2 py-0.5 font-mono text-xs font-semibold text-ink">
          02
        </span>
        <h2 className="font-mono text-2xl font-semibold">Tecnologias</h2>
      </div>
      <p className="mb-9 max-w-md text-[14.5px] text-muted">
        O stack que uso no dia a dia para levar um produto da ideia ao deploy.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.table} className="rounded-[10px] border border-line bg-panel p-5">
            <div className="mb-1 font-mono text-[12.5px] text-violet">{group.table}</div>
            <h3 className="mb-4 text-[17px] font-semibold">{group.title}</h3>
            {group.cols.map((col, i) => (
              <div
                key={col.name}
                className={`flex items-center justify-between py-2.5 text-[13.5px] ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <span>{col.name}</span>
                <span className="font-mono text-[11.5px] text-muted">{col.type}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
