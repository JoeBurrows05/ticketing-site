import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

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
  const email = "joecburrows@icloud.com";
  const password = "password123";
  const name = "Site Admin";

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.user.upsert({
    where: {
      email,
    },

    update: {
      name,
      passwordHash,
      role: "ADMIN",
    },

    create: {
      email,
      name,
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin account created/updated:");
  console.log(`Email: ${admin.email}`);
  console.log(`Role: ${admin.role}`);
}

main()
  .catch((error) => {
    console.error("Failed to create admin:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });