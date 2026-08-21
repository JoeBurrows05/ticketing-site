import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-10 text-white">
      <div className="mx-auto max-w-7xl border-t border-gray-800 pt-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-wide"
            >
              <span className="text-[#D4AF37]">GC</span> TICKETS
            </Link>

            <p className="mt-3 text-gray-300">
              No Event Is Ever Sold Out
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-gray-300">
            <Link href="/official-events" className="transition hover:text-[#D4AF37]">
              Official Events
            </Link>

            <Link href="/events" className="transition hover:text-[#D4AF37]">
              Resale Tickets
            </Link>

            <Link href="/about" className="transition hover:text-[#D4AF37]">
              About
            </Link>

            <Link href="/contact" className="transition hover:text-[#D4AF37]">
              Contact
            </Link>

            <Link href="/login" className="transition hover:text-[#D4AF37]">
              Login
            </Link>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          © 2026 GC Tickets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}