// /app/blog/page.jsx
import Link from "next/link";

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "/blog/free-backlinks-sa",
      title: "Free Backlinks in South Africa (High DR/DA Sites)",
      description:
        "A curated list of South African and global guest post sites with Domain Rating (DR) and Domain Authority (DA) above 40. Includes tips on how to maximize backlink value.",
    },
    {
      slug: "/blog/domain-rating-vs-authority",
      title: "Domain Rating (DR) vs Domain Authority (DA): What’s the Difference?",
      description:
        "An in-depth comparison of DR and DA SEO metrics. Learn how each is calculated, why they matter, and when to use one over the other for SEO and link-building.",
    },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SEO Blog & Resources</h1>
      <p className="mb-8 text-gray-700">
        Learn how to grow your site's authority, build backlinks, and improve your SEO using proven strategies tailored for South African websites and beyond.
      </p>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Link href={post.slug}>
              <h2 className="text-2xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link href={post.slug} className="text-sm text-blue-600 mt-4 inline-block hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
