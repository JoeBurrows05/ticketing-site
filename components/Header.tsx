import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide"
        >
          <span className="text-[#D4AF37]">GC</span> TICKETS
        </Link>

        <nav className="hidden items-center gap-8 text-lg md:flex">
          <Link
            href="/official-events"
            className="font-semibold transition hover:text-[#D4AF37]"
          >
            Official Events
          </Link>

          <Link
            href="/events"
            className="font-semibold transition hover:text-[#D4AF37]"
          >
            Resale Tickets
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#D4AF37]"
          >
            Contact
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#D4AF37]"
          >
            About
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-lg border border-[#D4AF37] px-5 py-2 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          Login
        </Link>
      </div>
    </header>
  );
}