import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { events } from "../app/events";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log(`Found ${events.length} events to migrate.`);

  for (const event of events) {
    await prisma.event.upsert({
      where: {
        id: event.id,
      },

      update: {
        name: event.name,
        date: event.date,
        location: event.location,
        category: event.category,
        latitude: event.latitude,
        longitude: event.longitude,
        type: "resale",
      },

      create: {
        id: event.id,
        name: event.name,
        date: event.date,
        location: event.location,
        category: event.category,
        latitude: event.latitude,
        longitude: event.longitude,
        type: "resale",
      },
    });

    console.log(`Migrated: ${event.name}`);
  }

  console.log("Event migration complete.");
}

main()
  .catch((error) => {
    console.error("Migration failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });