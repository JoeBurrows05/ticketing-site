import { prisma } from "@/app/lib/prisma";

type OfficialEventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OfficialEventPage({
  params,
}: OfficialEventPageProps) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    return (
      <main className="min-h-screen bg-white px-6 py-16 text-black">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <p className="mt-4 text-gray-600">
            We couldn't find that event.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
          {event.category}
        </p>

        <h1 className="text-4xl font-bold">{event.name}</h1>

        <div className="mt-6 space-y-2 text-gray-700">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
      </div>
    </main>
  );
}