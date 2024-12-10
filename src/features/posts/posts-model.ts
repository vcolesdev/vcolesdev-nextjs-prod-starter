import prisma from "@/lib/prisma";

/**
 * Function to get all posts from the database.
 * @function getAllPosts
 */
export async function getAllPosts() {
  return prisma.post.findMany();
}
