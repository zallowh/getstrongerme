import Link from "next/link";

export const metadata = {
  title: "Strongerme Blog | SEO, Marketing, and Website Tips for Small Businesses",
  description:
    "Explore our blog for expert insights on SEO, Google Ads, web design, and digital growth strategies tailored to South African entrepreneurs.",
  alternates: {
    canonical: "https://www.getstrongerme.com/blog",
  },
};


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
   const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Strongerme Blog",
  "url": "https://www.getstrongerme.com/blog",
  "description": "SEO, Google Ads, web design, and digital strategy tips for small businesses in South Africa.",
  "publisher": {
    "@type": "Organization",
    "name": "Strongerme",
    "url": "https://www.getstrongerme.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.getstrongerme.com/logo.png",
      "width": 512,
      "height": 512
    }
  }
}

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
