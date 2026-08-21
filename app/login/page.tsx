"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError("Unable to sign in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B18D22]">
            GC Tickets
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-black">
            Welcome back.
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Sign in to your GC Tickets account.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="h-2 bg-[#D4AF37]" />

          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-black"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-black"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-gray-500 transition hover:text-black hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-black px-5 py-4 text-lg font-bold text-white transition hover:bg-[#D4AF37] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-gray-500">
                Don't have a GC Tickets account?
              </p>

              <Link
                href="/register"
                className="mt-2 inline-block font-bold text-black underline decoration-[#D4AF37] decoration-2 underline-offset-4 transition hover:text-[#B18D22]"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Your account gives you access to the GC Tickets platform.
        </p>
      </div>
    </main>
  );
}