import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 text-black">

      {/* HERO */}
      <section className="bg-black px-6 pb-24 pt-20 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            GC Tickets
          </p>

          <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
            Resale Tickets.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">
            Looking for tickets to an event? Browse our available
            resale tickets and contact GC Tickets directly to
            enquire about availability and pricing.
          </p>

        </div>
      </section>


      {/* AVAILABLE EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Available Tickets
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Find Your Event
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Browse the events currently listed with GC Tickets.
            Our resale tickets are handled directly by GC, so
            contact us to confirm availability, pricing and the
            next steps for purchasing.
          </p>

        </div>


        {/* EVENTS GRID */}
        {events.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {events.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* GOLD TOP BORDER */}
                <div className="h-2 bg-[#D4AF37]" />

                <div className="p-8">

                  {/* CATEGORY */}
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B18D22]">
                    {event.category}
                  </p>

                  {/* EVENT NAME */}
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-black">
                    {event.name}
                  </h3>

                  {/* EVENT DETAILS */}
                  <div className="mt-7 space-y-3 text-lg">

                    <p className="font-medium text-gray-800">
                      📅 {event.date}
                    </p>

                    <p className="font-medium text-gray-800">
                      📍 {event.location}
                    </p>

                  </div>


                  {/* RESALE INFORMATION */}
                  <div className="mt-7 rounded-xl bg-gray-100 p-5">

                    <p className="text-sm font-bold uppercase tracking-wider text-[#B18D22]">
                      GC Resale
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      Tickets may be available through GC Tickets.
                      Contact us directly to check availability and
                      pricing.
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
        ) : (
          /* EMPTY STATE */
          <div className="mt-12 rounded-3xl bg-white p-10 shadow-sm md:p-14">

            <div className="max-w-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-3xl">
                🎟️
              </div>

              <h3 className="mt-7 text-3xl font-bold">
                No events currently listed.
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We don't currently have any resale events listed.
                Check back soon or contact GC Tickets directly if
                you're looking for tickets to a particular event.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-black px-7 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
              >
                Contact GC Tickets
              </Link>

            </div>

          </div>
        )}

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

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            We keep the resale process straightforward. Find the
            event you're interested in, contact GC Tickets and
            we'll confirm what's available.
          </p>


          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* STEP 01 */}
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


            {/* STEP 02 */}
            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Contact GC
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Contact GC Tickets directly to ask about ticket
                availability, pricing and seating.
              </p>

            </div>


            {/* STEP 03 */}
            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-5xl font-bold text-[#D4AF37]">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Secure Your Ticket
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Once everything has been confirmed, we'll arrange
                the next steps directly with you.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="bg-gray-100 px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-sm md:p-16">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            Looking For Something Specific?
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Can't find the event you're after?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
            Get in touch with GC Tickets. If we don't have the
            event listed, we may still be able to help.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
          >
            Contact GC Tickets
          </Link>

        </div>

      </section>

    </main>
  );
}