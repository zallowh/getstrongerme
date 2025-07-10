// app/faq/seo-basics/page.jsx
import React from "react";
import FAQAccordion from "@/components/faqSeo";

export const metadata = {
  title: "SEO Basics, Improve Google Rankings",
  description:
    "Learn the fundamentals of SEO, how to rank higher on Google Maps, local SEO.",
  alternates: {
    canonical: "https://www.getstrongerme.com/faq/seo-basics",
  },
};

export default function SeoBasicsPage() {
  const jsonLd ={
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.getstrongerme.com/faq/seo-basics"
  },
  "headline": "SEO Basics for Beginners | StrongerMe Guide",
  "description": "Understand the fundamentals of SEO, including technical SEO, on-page optimization, keyword targeting, Google Maps ranking, and local SEO strategies.",
  "author": {
    "@type": "Organization",
    "name": "Strongerme",
    "url": "https://www.getstrongerme.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Strongerme",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.getstrongerme.com/logo.png",
      "width": 512,
      "height": 512
    }
  },
  "datePublished": "2025-07-09",
  "dateModified": "2025-07-09"
}

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8 text-gray-800">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold text-center">SEO Basics for Beginners</h1>

      <section>
        <p className="text-lg">
          SEO (Search Engine Optimization) improves your website’s visibility in organic search results, attracting users actively searching for your offerings.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Core Pillars of SEO</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Technical SEO:</strong> Site speed, mobile-friendliness, crawlability, error-free structure.</li>
          <li><strong>On-page SEO:</strong> Optimized content, meta tags, headings, and internal linking.</li>
          <li><strong>Content SEO:</strong> High-value, original content aligned with user intent.</li>
          <li><strong>Off-page SEO:</strong> Backlinks from authoritative sites to build trust.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Getting Started with SEO</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Do keyword research to discover search terms your audience uses.</li>
          <li>Create valuable, well-organized content that targets these terms.</li>
          <li>Optimize titles, meta descriptions, headings, and image alt text.</li>
          <li>Improve page speed and ensure mobile usability.</li>
          <li>Build backlinks through guest posts, partnerships, and outreach.</li>
        </ul>
        <p className="mt-2">SEO is a long-term investment that delivers consistent traffic without ongoing ad spend.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Rank Higher on Google Maps</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Google Business Profile (GBP):</strong> Complete and regularly update your profile.</li>
          <li><strong>Use Local Keywords:</strong> Include city names in your site and GBP descriptions.</li>
          <li><strong>Collect Reviews:</strong> Encourage detailed, positive feedback.</li>
          <li><strong>Add Photos & Posts:</strong> Keep your profile active and engaging.</li>
          <li><strong>Local Citations:</strong> List your business in consistent format across directories.</li>
          <li><strong>Backlinks from Local Sites:</strong> Partner with blogs, news sites, and associations.</li>
          <li><strong>NAP Consistency:</strong> Ensure your Name, Address, Phone number are identical everywhere.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Local SEO for Service Businesses</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Target location-based keywords (e.g., “electrician in Durban”).</li>
          <li>Create location-specific landing pages with unique content.</li>
          <li>Optimize your Google Business Profile fully and regularly.</li>
          <li>Request and respond to reviews to build trust.</li>
          <li>Earn backlinks from local business directories and networks.</li>
          <li>Use local schema markup to help Google understand your service area.</li>
          <li>Ensure mobile optimization for a fast and intuitive experience.</li>
          <li>Engage with your local community through social media.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">On-Page SEO Checklist for 2025</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Target one main keyword per page.</li>
          <li>Use compelling meta titles and descriptions.</li>
          <li>Maintain clear heading structure with H1, H2, H3 elements.</li>
          <li>Write original, helpful content tailored to user intent.</li>
          <li>Use internal links to connect relevant pages.</li>
          <li>Optimize images with file names and alt text.</li>
          <li>Ensure pages load fast, especially on mobile.</li>
          <li>Use responsive design for mobile-friendliness.</li>
          <li>Implement structured data (schema markup).</li>
          <li>Use short, descriptive URLs with keywords.</li>
          <li>Avoid duplicate content using canonical tags.</li>
          <li>Improve user experience with intuitive design and CTAs.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Common SEO Myths Debunked</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Myth:</strong> SEO is a one-time task. <br /><strong>Reality:</strong> It’s ongoing and ever-changing.</li>
          <li><strong>Myth:</strong> More keywords = better rankings. <br /><strong>Reality:</strong> Keyword stuffing hurts SEO. Focus on relevance.</li>
          <li><strong>Myth:</strong> Paid ads help organic ranking. <br /><strong>Reality:</strong> Ads and organic results are separate.</li>
          <li><strong>Myth:</strong> All backlinks are good. <br /><strong>Reality:</strong> Only quality, relevant backlinks count.</li>
          <li><strong>Myth:</strong> SEO guarantees #1 rank. <br /><strong>Reality:</strong> No guarantees—focus on consistency.</li>
          <li><strong>Myth:</strong> Social signals directly improve ranking. <br /><strong>Reality:</strong> They don’t, but can generate backlinks.</li>
          <li><strong>Myth:</strong> Meta keywords matter. <br /><strong>Reality:</strong> Google ignores them—focus on titles and meta descriptions.</li>
        </ul>
      </section>

        <FAQAccordion/>

      <section className="bg-green-50 p-4 rounded-md border border-green-300">
        <h3 className="text-xl font-bold mb-2">Final Thoughts</h3>
        <p className="mb-2">
          SEO is essential for driving free, long-term traffic. Understanding the basics of technical, content, and local SEO gives your business a competitive edge in search visibility.
        </p>
        <p>
          Whether you're optimizing for global reach or local dominance, consistent effort and strategic content will pay off.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-300 rounded-md p-6 mt-10 text-center shadow-sm">
  <h2 className="text-xl font-semibold text-blue-900 mb-2">Need Expert Help With Your Google Ads?</h2>
  <p className="text-gray-700 mb-4 font-semibold">
    Don’t waste your time guessing. Let Strongerme set up, manage, or optimize your Google organic SEO for better
  </p>
  <p className="text-gray-700 mb-4 font-semibold">
    Popularity | Traffic | Conversion.
  </p>
  <a
    href="/contactus"
    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-300 transition"
  >
    Contact us
  </a>
</div>

    </main>
  );
}
