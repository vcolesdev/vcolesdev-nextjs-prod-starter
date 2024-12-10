import { exit } from "node:process";

import { PrismaClient, User } from "@prisma/client";
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
  // Seed data
  const user: User = await prisma.user.create({
    data: {
      email: "work@vcoles.com",
      name: "Developer",
      posts: {
        create: [
          {
            categories: {
              create: [{ name: "Uncategorized", slug: "uncategorized" }],
            },
            content: "This is som post content.",
            published: true,
            slug: "hello-world",
            tags: {
              create: [
                { name: "typescript", slug: "typescript" },
                { name: "misc", slug: "misc" },
              ],
            },
            title: "Hello, World!",
          },
          {
            categories: {
              create: [{ name: "Uncategorized", slug: "uncategorized" }],
            },
            content: "Lorem ipsum placeholder text content.",
            published: true,
            slug: "this-is-an-example-post",
            tags: {
              create: [
                { name: "typescript", slug: "typescript" },
                { name: "misc", slug: "misc" },
              ],
            },
            title: "This is an Example Post",
          },
        ],
      },
    },
  });

  const getUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      posts: {
        include: {
          categories: true,
          tags: true,
        },
      },
    },
  });

  console.log("========= 🌱 Seed Results 🌱 =========");
  prettyPrint({ getUser });
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
