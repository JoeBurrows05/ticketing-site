import Link from "next/link";
import { events } from "../events";

export default function EventsPage() {
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
              href="/events"
              className="font-semibold text-[#D4AF37]"
            >
              Events
            </Link>

            <Link
              href="#"
              className="hidden font-medium transition hover:text-[#D4AF37] md:block"
            >
              About
            </Link>

            <Link
              href="#"
              className="hidden font-medium transition hover:text-[#D4AF37] md:block"
            >
              My Tickets
            </Link>

          </nav>

        </div>
      </header>


      {/* PAGE HEADER */}
      <section className="bg-black px-6 pb-20 pt-14 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            GC Tickets
          </p>

          <h1 className="mt-4 text-6xl font-bold md:text-7xl">
            All Events
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">
            Explore all upcoming events and find your next night out.
          </p>

        </div>

      </section>


      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 flex items-end justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B18D22]">
              What's Coming Up
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Upcoming Events
            </h2>

          </div>

          <p className="hidden text-lg font-medium text-gray-700 md:block">
            {events.length} events
          </p>

        </div>


        {/* EVENT GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event, index) => (

            <article
              key={`${event.name}-${event.date}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* GOLD STRIPE */}
              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-7">

                {/* CATEGORY */}
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B18D22]">
                  {event.category}
                </p>


                {/* EVENT NAME */}
                <h3 className="mt-3 min-h-[4.5rem] text-2xl font-bold leading-tight text-black transition group-hover:text-[#B18D22]">
                  {event.name}
                </h3>


                {/* EVENT DETAILS */}
                <div className="mt-6 space-y-3">

                  <p className="text-base font-medium text-gray-800">
                    📅 {event.date}
                  </p>

                  <p className="text-base font-medium text-gray-800">
                    📍 {event.location}
                  </p>

                </div>


                {/* BUTTON */}
                <Link
                  href={`/events/${event.id}`}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-black px-5 py-4 font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
                >
                  View Event
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl rounded-3xl bg-black px-8 py-14 text-center text-white">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            GC Tickets
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            No Event Is Ever Sold Out.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Keep checking back for upcoming events and new tickets.
          </p>

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
                href="/events"
                className="transition hover:text-[#D4AF37]"
              >
                Events
              </Link>

              <Link
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                About
              </Link>

              <Link
                href="#"
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