import { events } from "../../events";

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-100 p-10 text-black">
        <h1 className="text-5xl font-bold">Event not found</h1>
        <p className="mt-4 text-lg text-gray-800">
          Sorry, we couldn't find that event.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-black">

      {/* HEADER */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <a
            href="/"
            className="text-3xl font-bold tracking-wide"
          >
            <span className="text-[#D4AF37]">GC</span> TICKETS
          </a>

          <nav className="flex items-center gap-8 text-lg">

            <a
              href="/events"
              className="font-semibold text-[#D4AF37]"
            >
              Events
            </a>

            <a
              href="#"
              className="hidden font-medium transition hover:text-[#D4AF37] md:block"
            >
              About
            </a>

            <a
              href="#"
              className="hidden font-medium transition hover:text-[#D4AF37] md:block"
            >
              My Tickets
            </a>

          </nav>

        </div>
      </header>


      {/* EVENT HERO */}
      <section className="bg-black px-6 pb-20 pt-16 text-white">

        <div className="mx-auto max-w-7xl">

          <a
            href="/events"
            className="text-base font-medium text-gray-300 transition hover:text-[#D4AF37]"
          >
            ← Back to all events
          </a>

          <div className="mt-12">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              {event.category}
            </p>

            <h1 className="mt-5 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
              {event.name}
            </h1>

            <div className="mt-10 flex flex-col gap-5 text-xl text-gray-200 md:flex-row md:gap-12">

              <p>
                📅 {event.date}
              </p>

              <p>
                📍 {event.location}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-3">


          {/* EVENT INFORMATION */}
          <div className="lg:col-span-2">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B18D22]">
              Event Information
            </p>

            <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">
              About this event
            </h2>

            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-gray-800">
              Get ready for{" "}
              <strong className="font-bold text-black">
                {event.name}
              </strong>
              .
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-800">
              Secure your tickets through GC Tickets and get ready
              for an unforgettable event.
            </p>


            {/* EVENT DETAILS */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-8 shadow-sm">

                <p className="text-sm font-bold uppercase tracking-wider text-gray-700">
                  Date
                </p>

                <p className="mt-3 text-2xl font-bold text-black">
                  {event.date}
                </p>

              </div>


              <div className="rounded-2xl bg-white p-8 shadow-sm">

                <p className="text-sm font-bold uppercase tracking-wider text-gray-700">
                  Location
                </p>

                <p className="mt-3 text-2xl font-bold text-black">
                  {event.location}
                </p>

              </div>

            </div>


            {/* GC TICKETS MESSAGE */}
            <div className="mt-10 rounded-2xl bg-black p-10 text-white">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                GC Tickets
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                No Event Is Ever Sold Out.
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
                Find the tickets you need for the events you don't
                want to miss.
              </p>

            </div>

          </div>


          {/* TICKET BOX */}
          <div>

            <div className="sticky top-8 overflow-hidden rounded-2xl bg-white shadow-xl">

              {/* GOLD STRIPE */}
              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-8">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B18D22]">
                  Tickets
                </p>

                <h2 className="mt-3 text-4xl font-bold text-black">
                  Get your tickets
                </h2>

                <p className="mt-3 text-base text-gray-700">
                  Select your ticket below.
                </p>


                {/* TICKET */}
                <div className="mt-8 rounded-xl border-2 border-gray-200 p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-xl font-bold text-black">
                        General Admission
                      </h3>

                      <p className="mt-2 text-sm text-gray-700">
                        Standard entry
                      </p>

                    </div>

                    <p className="text-2xl font-bold text-black">
                      £25
                    </p>

                  </div>


                  {/* QUANTITY */}
                  <div className="mt-8 flex items-center justify-between">

                    <p className="font-bold text-black">
                      Quantity
                    </p>

                    <div className="flex items-center gap-4">

                      <button className="h-11 w-11 rounded-lg border-2 border-gray-300 text-xl font-bold text-black transition hover:border-[#D4AF37]">
                        −
                      </button>

                      <span className="w-6 text-center text-lg font-bold text-black">
                        1
                      </span>

                      <button className="h-11 w-11 rounded-lg border-2 border-gray-300 text-xl font-bold text-black transition hover:border-[#D4AF37]">
                        +
                      </button>

                    </div>

                  </div>

                </div>


                {/* TOTAL */}
                <div className="mt-8 flex items-center justify-between border-t-2 border-gray-200 pt-6">

                  <p className="text-xl font-bold text-black">
                    Total
                  </p>

                  <p className="text-3xl font-bold text-black">
                    £25
                  </p>

                </div>


                {/* BUY BUTTON */}
                <button className="mt-8 w-full rounded-xl bg-black px-6 py-5 text-xl font-bold text-white transition hover:bg-[#D4AF37] hover:text-black">
                  Buy Tickets
                </button>

                <p className="mt-5 text-center text-sm text-gray-600">
                  Secure checkout · Instant confirmation
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-black px-6 py-12 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>

              <div className="text-3xl font-bold">
                <span className="text-[#D4AF37]">GC</span> TICKETS
              </div>

              <p className="mt-3 text-gray-300">
                No Event Is Ever Sold Out
              </p>

            </div>

            <div className="flex gap-8 text-gray-300">

              <a
                href="/events"
                className="transition hover:text-[#D4AF37]"
              >
                Events
              </a>

              <a
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                About
              </a>

              <a
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
            © 2026 GC Tickets. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}