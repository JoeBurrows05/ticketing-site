"use client";

import { useState } from "react";
import { events } from "../events";

type EventWithDistance = (typeof events)[number] & {
  distance: number;
};

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const earthRadius = 3958.8;

  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;

  const deltaLat = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(deltaLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

export default function NearMePage() {
  const [postcode, setPostcode] = useState("");
  const [results, setResults] = useState<EventWithDistance[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function findEvents() {
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

      const eventsWithDistance = events
        .filter(
          (event) =>
            typeof event.latitude === "number" &&
            typeof event.longitude === "number"
        )
        .map((event) => ({
          ...event,
          distance: calculateDistance(
            data.latitude,
            data.longitude,
            event.latitude,
            event.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance);

      setResults(eventsWithDistance);
    } catch (err) {
      setResults([]);

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
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Events Near Me
          </h1>

          <p className="mt-3 text-lg text-gray-700">
            Enter your postcode to find the closest events.
          </p>
        </div>

        <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  findEvents();
                }
              }}
              placeholder="Enter your postcode"
              className="flex-1 rounded-xl border border-gray-300 px-5 py-4 text-lg text-black outline-none focus:border-black"
            />

            <button
              onClick={findEvents}
              disabled={loading}
              className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Finding..." : "Find Events"}
            </button>
          </div>

          {error && (
            <p className="mt-4 font-medium text-red-600">
              {error}
            </p>
          )}
        </div>

        {results.length > 0 && (
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black">
                Events closest to you
              </h2>

              <p className="text-gray-600">
                {results.length} events found
              </p>
            </div>

            <div className="grid gap-5">
              {results.map((event) => (
                <a
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-black group-hover:underline">
                        {event.name}
                      </h3>

                      <p className="mt-2 text-lg text-gray-700">
                        {event.location}
                      </p>

                      <p className="mt-1 text-gray-600">
                        {event.date}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <p className="text-2xl font-bold text-black">
                        {event.distance < 10
                          ? event.distance.toFixed(1)
                          : Math.round(event.distance)}{" "}
                        miles
                      </p>

                      <p className="text-sm text-gray-500">
                        away
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {!loading && results.length === 0 && !error && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-black">
              Find events near you
            </h2>

            <p className="mt-2 text-gray-600">
              Enter your postcode above to see the closest
              events.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}