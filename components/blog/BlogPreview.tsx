import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-16 tracking-tight">
          Latest Insights
        </h2>

        <div className="space-y-12">
          {posts.map((post) => (
            <div key={post.slug} className="border-b pb-10">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold hover:underline"
              >
                {post.title}
              </Link>

              <p className="text-neutral-600 mt-3">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/blog"
            className="text-black font-medium hover:underline"
          >
            View All Articles →
          </Link>
        </div>

      </div>
    </section>
  );
}