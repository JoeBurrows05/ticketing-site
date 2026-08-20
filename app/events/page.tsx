import Link from "next/link";
import { events } from "../events";

const instagramUrl =
  "https://www.instagram.com/gctickets?igsh=dHp0bWYxNW1wdWk5";

const whatsappUrl =
  "https://chat.whatsapp.com/K1FsShDkkUPBTP8BfOuxED";

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

            <Link
              href="#"
              className="hidden font-semibold transition hover:text-[#D4AF37] md:block"
            >
              My Tickets
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


      {/* PAGE HEADER */}
      <section className="bg-black px-6 pb-24 pt-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            GC Tickets
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight md:text-8xl">
            Resale Tickets.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">
            Looking for tickets to an event? Browse our available
            resale tickets and contact GC directly to enquire.
          </p>

        </div>

      </section>


      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Available Tickets
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Find Your Event
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
            These tickets are available through GC Tickets.
            To enquire about availability, pricing or purchasing,
            contact us directly via Instagram or WhatsApp.
          </p>

        </div>


        {/* EVENT CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (

            <article
              key={event.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B18D22]">
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


                {/* RESALE MESSAGE */}
                <div className="mt-7 rounded-xl bg-gray-100 p-5">

                  <p className="text-sm font-bold uppercase tracking-wider text-[#B18D22]">
                    GC Resale
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    Tickets may be available through GC.
                    Contact us to check availability.
                  </p>

                </div>


                {/* VIEW EVENT */}
                <Link
                  href={`/events/${event.id}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
                >
                  View Ticket Details
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* CONTACT GC */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Ready For Your Event?
          </p>

          <h2 className="mt-4 text-5xl font-bold text-black md:text-6xl">
            Contact GC Directly.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
            We don't sell tickets directly through the website.
            Instead, message GC on Instagram or WhatsApp and
            we'll confirm availability, pricing and the next steps.
          </p>


          {/* CONTACT BUTTONS */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
            >
              Message GC on Instagram
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-black px-8 py-4 text-lg font-bold text-black transition hover:bg-black hover:text-white"
            >
              Message GC on WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="bg-black px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            How It Works
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-bold">
            Simple resale. Direct with GC.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Find Your Event
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Browse our available resale tickets and find the
                event you're looking for.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Contact GC
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Message us through Instagram or WhatsApp to ask
                about availability and pricing.
              </p>

            </div>


            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Secure Your Ticket
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Once availability is confirmed, we'll arrange the
                next steps directly with you.
              </p>

            </div>

          </div>

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
                className="font-semibold text-[#D4AF37]"
              >
                Events
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