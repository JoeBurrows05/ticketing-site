"use client";

import { useState } from "react";
import Link from "next/link";
import { events } from "./events";

function NearMeSearch() {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!postcode.trim()) {
      setError("Please enter a postcode.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/postcode?postcode=${encodeURIComponent(postcode)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to find that postcode."
        );
      }

      window.location.href = `/near-me?postcode=${encodeURIComponent(
        data.postcode
      )}`;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-3xl bg-black p-8 text-white shadow-lg sm:p-10">
        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Find Your Next Event
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Events Near You
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
            Enter your postcode and discover the events closest
            to you.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Enter your postcode"
              className="min-w-0 flex-1 rounded-xl bg-white px-5 py-4 text-lg text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#D4AF37]"
            />

            <button
              onClick={handleSearch}
              disabled={loading}
              className="rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Finding..." : "Find Events"}
            </button>

          </div>

          {error && (
            <p className="mt-4 font-medium text-red-400">
              {error}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const uniqueEvents = Array.from(
    new Map(events.map((event) => [event.id, event])).values()
  );

  const featuredEvents = uniqueEvents.slice(0, 3);

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

            {/* OFFICIAL EVENTS FIRST */}
            <Link
              href="/official-events"
              className="font-semibold text-[#D4AF37] transition hover:text-white"
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
              className="hidden font-medium transition hover:text-[#D4AF37] md:block"
            >
              About
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
            No Event Is
            <br />
            Ever Sold Out.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">
            Discover official GC events, find resale tickets and
            get closer to the events you don't want to miss.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {/* PRIMARY CTA */}
            <Link
              href="/official-events"
              className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition hover:bg-white"
            >
              Official GC Events
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black"
            >
              Browse Resale Tickets
            </Link>

          </div>

        </div>

      </section>


      {/* OFFICIAL EVENTS FEATURE */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
                Official GC Events
              </p>

              <h2 className="mt-4 text-5xl font-bold text-black">
                Tickets directly through GC.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
                We're building a dedicated ticketing platform for
                events where GC works directly with venues,
                promoters and event organisers.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
                Official GC events will give customers a simple
                place to discover and purchase tickets directly
                through GC Tickets.
              </p>

              <Link
                href="/official-events"
                className="mt-8 inline-flex rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black"
              >
                Explore Official Events
              </Link>

            </div>


            <div className="rounded-3xl bg-black p-10 text-white">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Coming Soon
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                Your event could be next.
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                GC Tickets is looking to work with venues,
                promoters and event organisers to become an
                official ticketing partner.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl border-2 border-[#D4AF37] px-7 py-4 font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Work With GC
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* RESALE TICKETS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
              GC Resale
            </p>

            <h2 className="mt-3 text-5xl font-bold text-black">
              Resale Tickets
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-700">
              Looking for tickets to an upcoming event?
              Browse tickets currently available through GC Tickets.
            </p>

          </div>

          <Link
            href="/events"
            className="font-bold text-black underline decoration-[#D4AF37] decoration-2 underline-offset-4 transition hover:text-[#B18D22]"
          >
            View all resale tickets →
          </Link>

        </div>


        {/* EVENT CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {featuredEvents.map((event) => (

            <article
              key={event.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-2 bg-[#D4AF37]" />

              <div className="p-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B18D22]">
                  {event.category}
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-black transition group-hover:text-[#B18D22]">
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

                <div className="mt-7 rounded-xl bg-gray-100 p-5">

                  <p className="text-sm font-bold uppercase tracking-wider text-[#B18D22]">
                    GC Resale
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    Tickets may be available through GC.
                    Contact us to check availability.
                  </p>

                </div>

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


      {/* EVENTS NEAR YOU */}
      <NearMeSearch />


      {/* WHY GC TICKETS */}
      <section className="bg-black px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Why GC Tickets
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-bold">
            Your next event starts here.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* OFFICIAL */}
            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-3xl">
                ⭐
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Official Events
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                Discover events where GC works directly with
                organisers and venues to provide official tickets.
              </p>

            </div>


            {/* RESALE */}
            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-3xl">
                🎟️
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Resale Tickets
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                Browse tickets currently available through GC and
                contact us directly to enquire.
              </p>

            </div>


            {/* DIRECT */}
            <div className="rounded-2xl border border-gray-800 p-8">

              <div className="text-3xl">
                🔒
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Direct With GC
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                Whether you're attending an official GC event or
                enquiring about resale tickets, we're here to help.
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

            <div className="flex flex-wrap gap-8 text-gray-300">

              <Link
                href="/official-events"
                className="transition hover:text-[#D4AF37]"
              >
                Official Events
              </Link>

              <Link
                href="/events"
                className="transition hover:text-[#D4AF37]"
              >
                Resale Tickets
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