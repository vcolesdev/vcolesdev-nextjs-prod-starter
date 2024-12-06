import { PrismaClient } from "@prisma/client";

declare global {
  // Declare a global variable to hold the PrismaClient instance.
  // eslint-disable-next-line no-var
  var __prismaDatabase__: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__prismaDatabase__) {
    global.__prismaDatabase__ = new PrismaClient();
  }
  prisma = global.__prismaDatabase__;
}

export default prisma;
