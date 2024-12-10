import React from "react";

import SignIn from "@/components/SignIn/sign-in";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/features/posts/posts-model";

async function Posts() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <div className="my-10" key={post.id}>
          <h2>{post.title}</h2>
          <p>Slug: {post.slug}</p>
          <p>Status: {post.published ? "Published" : "Draft"}</p>
          <p>Created At: {post.createdAt.toDateString()}</p>
          <p>{post.content}</p>
          <Button id="btnEditPost">Edit Post</Button>
          <Button id="btnViewPost">View Post</Button>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <SignIn />
      <hr />
      <Posts />
    </div>
  );
}
