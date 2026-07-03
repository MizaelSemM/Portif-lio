export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-center font-mono text-xs text-muted">
      <span className="text-teal">$</span> built with React · Next.js · Tailwind · Prisma — ©{" "}
      {new Date().getFullYear()} Mizael Borges
    </footer>
  );
}
