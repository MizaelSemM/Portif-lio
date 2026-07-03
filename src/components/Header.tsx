"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "sobre", idx: "01" },
  { href: "#stack", label: "tecnologias", idx: "02" },
  { href: "#projetos", label: "projetos", idx: "03" },
  { href: "#contato", label: "contato", idx: "04" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="inline-block h-[9px] w-[9px] rounded-[2px] bg-teal shadow-[0_0_12px_#5EEAD4]" />
          dev_portfolio
        </div>

        <div
          className={`absolute left-0 right-0 top-16 flex-col gap-4 border-b border-line bg-panel px-6 py-4 font-mono text-sm text-muted sm:static sm:flex sm:flex-row sm:gap-7 sm:border-none sm:bg-transparent sm:p-0 ${
            open ? "flex" : "hidden"
          }`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-teal"
            >
              <span className="mr-1 text-violet">{link.idx}</span>
              {link.label}
            </a>
          ))}
        </div>

        <button
          aria-label="abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line sm:hidden"
        >
          <Menu size={16} />
        </button>
      </nav>
    </header>
  );
}
