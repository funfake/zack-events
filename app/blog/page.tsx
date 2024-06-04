import Link from "next/link";
import { reader } from "@/app/reader";

export default async function BlogPage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Keystatic ⚡️</h1>
      <div>
        This homepage shows how to load a collection from the reader API.
      </div>
      <div>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
