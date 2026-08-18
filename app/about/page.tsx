"use client";

import Link from "next/link";

export default function About() {
return ( <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-black text-white">

  <section className="flex min-h-screen snap-start items-center bg-black px-6 py-20">
    <div className="mx-auto w-full max-w-7xl">
      <p className="text2x1 font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
        About GC Tickets
      </p>

      <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
        Your Next Event
        <br />
        Starts Here.
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-300">
        Discover live events, find something worth getting excited
        about, and take the next step towards experiencing it.
      </p>

      <Link
        href="/events"
        className="mt-10 inline-flex rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition hover:bg-white"
      >
        Explore Events
      </Link>

      <div className="mt-16 flex items-center gap-3 text-sm text-gray-500">
        <span className="h-10 w-px bg-[#D4AF37]" />
        Scroll to explore
      </div>
    </div>
  </section>


  <section className="flex min-h-screen snap-start items-center bg-gray-100 px-6 py-20 text-black">
    <div className="mx-auto grid w-full max-w-7xl gap-16 md:grid-cols-2 md:items-center">

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
          Who We Are
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
          Built for people who love events.
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          GC Tickets is an event discovery and ticketing platform
          designed to make finding your next event simple.
        </p>

        <p>
          Whether you want live music, sport, comedy, theatre,
          festivals or something completely different, we want
          to make discovering what's happening easier.
        </p>

        <p>
          Finding something exciting to do shouldn't feel like
          hard work. GC Tickets is built around simple discovery
          and a straightforward experience.
        </p>
      </div>

    </div>
  </section>


  <section className="flex min-h-screen snap-start items-center bg-black px-6 py-20">
    <div className="mx-auto w-full max-w-7xl">

      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
        Discover
      </p>

      <div className="mt-5 max-w-4xl">
        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Find something worth
          <span className="text-[#D4AF37]"> getting excited about.</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-gray-800 p-8 transition hover:border-[#D4AF37]">
          <div className="text-5xl">🎵</div>

          <h3 className="mt-6 text-2xl font-bold">
            Live Music
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">
            Find concerts, gigs and unforgettable live
            performances.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-800 p-8 transition hover:border-[#D4AF37]">
          <div className="text-5xl">🏟️</div>

          <h3 className="mt-6 text-2xl font-bold">
            Sport
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">
            Get closer to the action and find your next
            sporting experience.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-800 p-8 transition hover:border-[#D4AF37]">
          <div className="text-5xl">🎭</div>

          <h3 className="mt-6 text-2xl font-bold">
            Entertainment
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">
            Comedy, theatre, festivals and everything in
            between.
          </p>
        </div>

      </div>

    </div>
  </section>


  <section className="flex min-h-screen snap-start items-center bg-[#D4AF37] px-6 py-20 text-black">
    <div className="mx-auto grid w-full max-w-7xl gap-16 md:grid-cols-2 md:items-center">

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em]">
          Events Near You
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
          Your next event could be closer than you think.
        </h2>
      </div>

      <div>
        <div className="rounded-3xl bg-black p-8 text-white md:p-10">

          <div className="text-6xl">📍</div>

          <h3 className="mt-8 text-3xl font-bold">
            Find events near you
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Enter your postcode and discover events happening
            close to where you are.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-[#D4AF37] px-7 py-4 font-bold text-black transition hover:bg-white"
          >
            Find Events Near Me
          </Link>

        </div>
      </div>

    </div>
  </section>


  <section className="flex min-h-screen snap-start items-center bg-gray-100 px-6 py-20 text-black">
    <div className="mx-auto w-full max-w-7xl">

      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
        Your Experience
      </p>

      <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        From discovery to
        <span className="text-[#B18D22]"> event day.</span>
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        <div>
          <div className="text-6xl font-bold text-[#D4AF37]">
            01
          </div>

          <h3 className="mt-5 text-3xl font-bold">
            Find It
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Browse upcoming events and discover something
            you want to experience.
          </p>
        </div>

        <div>
          <div className="text-6xl font-bold text-[#D4AF37]">
            02
          </div>

          <h3 className="mt-5 text-3xl font-bold">
            Choose It
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Explore the event details and decide what's right
            for you.
          </p>
        </div>

        <div>
          <div className="text-6xl font-bold text-[#D4AF37]">
            03
          </div>

          <h3 className="mt-5 text-3xl font-bold">
            Experience It
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Get your tickets and look forward to the day.
          </p>
        </div>

      </div>

    </div>
  </section>


  <section className="flex min-h-screen snap-start items-center bg-black px-6 py-20 text-white">
    <div className="mx-auto w-full max-w-7xl">

      <div className="rounded-[2rem] bg-[#D4AF37] p-10 text-black md:p-20">

        <p className="text-sm font-bold uppercase tracking-[0.3em]">
          Ready?
        </p>

        <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Find something worth getting excited about.
        </h2>

        <p className="mt-6 max-w-2xl text-xl">
          Your next great experience could be just a few clicks
          away.
        </p>

        <Link
          href="/events"
          className="mt-10 inline-flex rounded-xl bg-black px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black"
        >
          Browse All Events
        </Link>

      </div>

      <div className="mt-16 flex flex-col justify-between gap-8 border-t border-gray-800 pt-10 md:flex-row">

        <div>
          <div className="text-3xl font-bold">
            <span className="text-[#D4AF37]">GC</span> TICKETS
          </div>

          <p className="mt-3 text-gray-400">
            No Event Is Ever Sold Out
          </p>
        </div>

        <div className="flex gap-8 text-gray-400">
          <Link href="/events" className="hover:text-[#D4AF37]">
            Events
          </Link>

          <Link href="/about" className="hover:text-[#D4AF37]">
            About
          </Link>

          <Link href="#" className="hover:text-[#D4AF37]">
            Contact
          </Link>
        </div>

      </div>

      <p className="mt-10 text-sm text-gray-600">
        © 2026 GC Tickets. All rights reserved.
      </p>

    </div>
  </section>

</main>

);
}
