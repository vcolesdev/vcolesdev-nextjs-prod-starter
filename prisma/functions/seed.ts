import { exit } from "node:process";

import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables from local .env file
dotenv.config({ path: ".env.local" });

// Create a new Prisma client
const prisma = new PrismaClient();

/**
 * Function to pretty print the log data to the console.
 * @function prettyPrint
 * @param data
 */
function prettyPrint(data: Record<string, unknown>) {
  console.log(JSON.stringify(data, undefined, 2));
}

/**
 * Main function to seed the database.
 * @function seed
 */
async function seed() {
  const exampleUser = await prisma.exampleUserProfile.create({
    data: {
      email: "hudson.marylin@gmail.com",
      isActive: true,
      name: "Marylin Hudson",
    },
  });

  console.log("========= 🌱 Seed Results 🌱 =========");
  prettyPrint(exampleUser);
}

/**
 * Main function to seed the database.
 * @function main
 */
async function main() {
  await seed();
}

// Run the main function
main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed complete");
    exit(0);
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    exit(1);
  });
