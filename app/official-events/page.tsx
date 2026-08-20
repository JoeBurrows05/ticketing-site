import Link from "next/link";
import { officialEvents } from "../officialEvents";

export default function OfficialEventsPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-black">

      {/* HEADER */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <Link
            href="/"
            className="text-3xl font-bold tracking-wide"
          >
            <span className="text-[#D4AF37]">GC</span> TICKETS
          </Link>

          <nav className="flex items-center gap-8 text-lg">

            <Link
              href="/official-events"
              className="font-semibold text-[#D4AF37]"
            >
              Official Tickets
            </Link>

            <Link
              href="/events"
              className="font-semibold transition hover:text-[#D4AF37]"
            >
              Resale
            </Link>

            <Link
              href="/about"
              className="font-semibold transition hover:text-[#D4AF37]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="font-semibold transition hover:text-[#D4AF37]"
            >
              Contact
            </Link>

          </nav>

          <button
            type="button"
            className="hidden rounded-lg border border-[#D4AF37] px-5 py-2 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:block"
          >
            Login
          </button>

        </div>
      </header>


      {/* HERO */}
      <section className="bg-black px-6 pb-24 pt-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            GC Tickets
          </p>

          <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
            Official Tickets.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">
            Official tickets sold directly through GC Tickets
            in partnership with venues, promoters and event
            organisers.
          </p>

        </div>

      </section>


      {/* OFFICIAL EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Official GC Events
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Official tickets coming soon.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            We're currently working with venues, promoters and
            event organisers to bring official ticketed events
            directly to GC Tickets.
          </p>

        </div>


        {/* EMPTY STATE */}
        {officialEvents.length === 0 && (
          <div className="mt-12 rounded-3xl bg-white p-10 shadow-sm md:p-14">

            <div className="max-w-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-3xl">
                🎟️
              </div>

              <h3 className="mt-7 text-3xl font-bold">
                No official events yet.
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Our official ticketing partnerships are currently
                being developed. Check back soon to see events
                available directly through GC Tickets.
              </p>

              <Link
                href="/events"
                className="mt-8 inline-flex rounded-xl bg-black px-7 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
              >
                Browse GC Resale Tickets
              </Link>

            </div>

          </div>
        )}


        {/* OFFICIAL EVENT CARDS */}
        {officialEvents.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {officialEvents.map((event) => (

              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-2 bg-[#D4AF37]" />

                <div className="p-8">

                  <div className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Official GC Ticket
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#B18D22]">
                    {event.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight">
                    {event.name}
                  </h3>

                  <div className="mt-7 space-y-3 text-lg">

                    <p className="font-medium text-gray-800">
                      📅 {event.date}
                    </p>

                    <p className="font-medium text-gray-800">
                      📍 {event.location}
                    </p>

                  </div>

                  <Link
                    href={`/official-events/${event.id}`}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    Get Tickets
                  </Link>

                </div>

              </article>

            ))}

          </div>
        )}

      </section>


      {/* WHY OFFICIAL GC */}
      <section className="bg-black px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            The GC Difference
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-bold">
            Official tickets. Direct from GC.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Official Partnerships
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                GC works directly with venues, promoters and
                event organisers.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Direct Ticketing
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Official tickets can be supplied directly through
                GC Tickets.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Built for Events
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                We're building GC Tickets to become a trusted
                ticketing partner for events.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="bg-gray-100 px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-sm md:p-16">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Interested in Working With GC?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Want GC to ticket your event?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
            We're looking to work with venues, promoters and
            event organisers on official ticketing partnerships.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
          >
            Contact GC Tickets
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-black px-6 pb-10 text-white">

        <div className="mx-auto max-w-7xl border-t border-gray-800 pt-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>

              <Link
                href="/"
                className="text-3xl font-bold"
              >
                <span className="text-[#D4AF37]">GC</span> TICKETS
              </Link>

              <p className="mt-3 text-gray-300">
                No Event Is Ever Sold Out
              </p>

            </div>

            <div className="flex gap-8 text-gray-300">

              <Link
                href="/official-events"
                className="font-semibold text-[#D4AF37]"
              >
                Official Tickets
              </Link>

              <Link
                href="/events"
                className="transition hover:text-[#D4AF37]"
              >
                Resale
              </Link>

              <Link
                href="/about"
                className="transition hover:text-[#D4AF37]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#D4AF37]"
              >
                Contact
              </Link>

            </div>

          </div>

          <p className="mt-10 text-sm text-gray-500">
            © 2026 GC Tickets. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
