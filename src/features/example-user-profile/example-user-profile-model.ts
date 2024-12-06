import { ExampleUserProfile } from "@prisma/client";

import prisma from "@/lib/prisma";

/**
 * Function to get an example user profile from the database by email.
 * @function getExampleUserProfileFromDatabaseByEmail
 * @param email - The email of the user to get.
 */
export async function getExampleUserProfileFromDatabaseByEmail(
  email: ExampleUserProfile["email"],
) {
  return prisma.exampleUserProfile.findUnique({ where: { email } });
}
