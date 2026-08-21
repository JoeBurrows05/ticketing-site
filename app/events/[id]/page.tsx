import Link from "next/link";
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
      <main className="min-h-screen bg-gray-100 text-black">

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-5xl font-bold">
            Event not found
          </h1>

          <p className="mt-4 text-lg text-gray-800">
            Sorry, we couldn't find that event.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-flex rounded-xl bg-black px-7 py-4 font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
          >
            Back to Events
          </Link>
        </section>

      </main>
    );
  }

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


      {/* EVENT HERO */}
      <section className="bg-black px-6 pb-20 pt-16 text-white">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/events"
            className="text-base font-medium text-gray-300 transition hover:text-[#D4AF37]"
          >
            ← Back to all events
          </Link>

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
              GC Tickets currently has tickets available for{" "}
              <strong className="font-bold text-black">
                {event.name}
              </strong>
              .
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-800">
              If you're interested in attending, get in touch with
              GC Tickets directly and we'll let you know what
              tickets are currently available.
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
                Looking for tickets? Contact GC Tickets directly
                and we'll help you find out what's available.
              </p>

            </div>

          </div>


          {/* TICKET ENQUIRY BOX */}
          <div>

            <div className="sticky top-8 overflow-hidden rounded-2xl bg-white shadow-xl">

              {/* GOLD STRIPE */}
              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-8">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B18D22]">
                  Tickets Available
                </p>

                <h2 className="mt-3 text-4xl font-bold text-black">
                  Interested in tickets?
                </h2>

                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  GC Tickets handles ticket enquiries directly.
                  Send us a message and we'll confirm availability
                  and pricing.
                </p>


                {/* EVENT SUMMARY */}
                <div className="mt-8 rounded-xl border-2 border-gray-200 p-6">

                  <p className="text-sm font-bold uppercase tracking-wider text-gray-600">
                    Event
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-black">
                    {event.name}
                  </h3>

                  <p className="mt-4 text-sm text-gray-700">
                    📅 {event.date}
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    📍 {event.location}
                  </p>

                </div>


                {/* CONTACT BUTTONS */}
                <div className="mt-8 space-y-3">

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    Message us on Instagram
                  </a>

                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-xl border-2 border-black px-6 py-4 text-lg font-bold text-black transition hover:bg-black hover:text-white"
                  >
                    Message us on WhatsApp
                  </a>

                </div>

                <p className="mt-5 text-center text-sm text-gray-500">
                  Enquiries are handled directly by GC Tickets.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
