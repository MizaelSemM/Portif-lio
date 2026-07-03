import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

const LINKS = [
  { k: "email", v: "mizael.borges.dev@gmail.com", href: "mizaelborges44444@gmail.com", Icon: Mail },
  { k: "github", v: "github.com/MizaelSemM", href: "https://github.com/MizaelSemM", Icon: Github },
  { k: "linkedin", v: "linkedin.com/in/mizaelsemm", href: "https://www.linkedin.com/in/mizael-borges-453560378/", Icon: Linkedin },
  { k: "instagram", v: "instagram.com/m4z7el", href: "https://www.instagram.com/m4z7el/", Icon: Instagram },
  { k: "whatsapp", v: "Wa.me/5594984255663", href: "https://wa.me/5594984255663?text=Ol%C3%A1!", Icon: MessageCircle },
];

export default function ContactSection() {
  return (
    <section id="contato" className="border-t border-line py-16">
      <div className="mb-10 flex flex-wrap items-baseline gap-3.5">
        <span className="rounded-md bg-teal px-2 py-0.5 font-mono text-xs font-semibold text-ink">
          04
        </span>
        <h2 className="font-mono text-2xl font-semibold">Contato</h2>
      </div>

      <div className="grid gap-8 rounded-[10px] border border-line bg-panel p-8 sm:grid-cols-2 sm:p-10">
        <div>
          <h3 className="mb-3 font-mono text-xl">Vamos construir algo?</h3>
          <p className="mb-5 max-w-sm text-[14.5px] text-muted">
            Aberto a oportunidades como desenvolvedor full-stack, freelas e
            colaborações. A mensagem abaixo vai direto para o banco de dados —
            respondo por e-mail em seguida.
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-3.5">
          {LINKS.map(({ k, v, href, Icon }) => (
            <a
              key={k}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line px-3.5 py-3 text-[14.5px] transition-all hover:border-teal hover:bg-panel2"
            >
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                <Icon size={14} /> {k}
              </span>
              <span>{v}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
