"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
const [sent, setSent] = useState(false);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();
setSent(true);
}

return ( <main className="min-h-screen bg-gray-100 text-black">

  <section className="bg-black px-6 pb-24 pt-20 text-white">
    <div className="mx-auto max-w-7xl">

      <p className="text-2xl font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
        Contact GC Tickets
      </p>

      <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
        Let's Talk.
      </h1>

      <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">
        Have a question about an event, your tickets, or GC
        Tickets? Send us a message and we'll get back to you.
      </p>

    </div>
  </section>


  <section className="mx-auto max-w-7xl px-6 py-20">

    <div className="grid gap-16 md:grid-cols-2">

      <div>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
          Get In Touch
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          How can we help?
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
          Whether you need help with an event, have a question
          about tickets, or simply want to get in touch, we'd
          love to hear from you.
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#B18D22]">
              Email
            </p>

            <p className="mt-2 text-xl font-semibold">
              hello@gctickets.co.uk
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#B18D22]">
              Response Time
            </p>

            <p className="mt-2 text-lg text-gray-600">
              We aim to respond as soon as possible.
            </p>
          </div>

        </div>

      </div>


      <div className="rounded-3xl bg-black p-8 text-white md:p-10">

        {sent ? (
          <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

            <div className="text-6xl">
              ✓
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              Message Sent
            </h2>

            <p className="mt-4 max-w-md text-lg text-gray-400">
              Thanks for getting in touch. We'll get back to
              you as soon as we can.
            </p>

            <button
              onClick={() => setSent(false)}
              className="mt-8 rounded-xl bg-[#D4AF37] px-7 py-4 font-bold text-black transition hover:bg-white"
            >
              Send Another Message
            </button>

          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label className="mb-2 block font-semibold">
                Name
              </label>

              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Email
              </label>

              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Subject
              </label>

              <select className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#D4AF37]">
                <option>General Enquiry</option>
                <option>Event Question</option>
                <option>Ticket Question</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Message
              </label>

              <textarea
                required
                rows={6}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl bg-white px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#D4AF37] px-6 py-4 text-lg font-bold text-black transition hover:bg-white"
            >
              Send Message
            </button>

          </form>
        )}

      </div>

    </div>

  </section>


  <section className="bg-black px-6 py-20 text-white">

    <div className="mx-auto max-w-7xl">

      <p className="text-2xl font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
        Stay Connected
      </p>

      <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
        Don't miss what's happening next.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
        Join the GC Tickets community, discover upcoming events,
        share recommendations and stay connected with us.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <a
          href="https://chat.whatsapp.com/K1FsShDkkUPBTP8BfOuxED"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-gray-800 p-8 transition hover:border-[#D4AF37] hover:bg-gray-900"
        >

          <div className="flex items-start justify-between">

            <div className="text-5xl">
              💬
            </div>

            <span className="text-2xl text-gray-600 transition group-hover:text-[#D4AF37]">
              →
            </span>

          </div>

          <h3 className="mt-8 text-3xl font-bold">
            Join the GC Tickets Community
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Join our WhatsApp group, connect with other event lovers
            and stay involved with the GC Tickets community.
          </p>

          <p className="mt-6 font-bold text-[#D4AF37]">
            Join WhatsApp →
          </p>

        </a>


        <a
          href="https://www.instagram.com/gctickets/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-gray-800 p-8 transition hover:border-[#D4AF37] hover:bg-gray-900"
        >

          <div className="flex items-start justify-between">

            <div className="text-5xl">
              📸
            </div>

            <span className="text-2xl text-gray-600 transition group-hover:text-[#D4AF37]">
              →
            </span>

          </div>

          <h3 className="mt-8 text-3xl font-bold">
            Follow @gctickets
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Follow us on Instagram for upcoming events, announcements,
            ticket updates and more.
          </p>

          <p className="mt-6 font-bold text-[#D4AF37]">
            Follow Instagram →
          </p>

        </a>

      </div>

      <div className="mt-12 rounded-3xl bg-[#D4AF37] p-8 text-black md:flex md:items-center md:justify-between md:p-10">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            Ready to go?
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            Find your next event.
          </h3>
        </div>

        <Link
          href="/events"
          className="mt-6 inline-flex rounded-xl bg-black px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black md:mt-0"
        >
          Browse Events
        </Link>

      </div>

    </div>

  </section>

</main>

);
}
