import Link from "next/link";

export const metadata = {
  title: "5 Reassessment Questions for Your Digital Marketing Strategy",
  description:
    "Before you stay loyal to a digital agency that isn't delivering ROI, ask yourself these tough but essential questions. Reassess your SEO, ad performance, and competition strategy today.",
  alternates: {
    canonical: "https://www.getstrongerme.com/blog/reassessment-questions",
  },
};

export default function BlogReassessmentPage() {
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "5 Reassessment Questions for Your Digital Marketing Strategy",
  "description": "Before you stay loyal to a digital agency that isn't delivering ROI, ask yourself these 5 critical questions. Reassess your SEO, ad performance, and online growth.",
  "url": "https://www.getstrongerme.com/blog/reassessment-questions",
  "datePublished": "2025-07-09",
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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.getstrongerme.com/blog/reassessment-questions"
  }
};

  return (
    <div className="px-6 md:px-20 py-10 max-w-5xl mx-auto text-gray-800">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

      <h1 className="text-4xl font-bold mb-6">
        5 Reassessment Questions for Your Digital Marketing Strategy
      </h1>
      <p className="text-lg mb-6">
        Refuse to let your business settle for a digital agency that looks busy but isn't delivering ROI. A good relationship doesn't always equal good results.
      </p>

      <div className="space-y-6 text-[1.05rem] leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl mb-1">1. Where does your business rank on search engines?</h2>
          <p>
            Be frank—are you on page one? Ranking first on Google for your most important keywords should be a clear goal. If your agency isn't getting you there, why?
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">2. Are your ads producing real engagement?</h2>
          <p>
            Do you receive tons of leads, form submissions, or messages from your ads? Or do they just feel like another line item in your marketing budget—busy work without results?
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">3. What growth have you seen in the past 3 months?</h2>
          <p>
            Look at your analytics. Has there been meaningful SEO progress? Are your website traffic, rankings, or conversions trending upward? Or are you simply maintaining visibility without growth?
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">4. Do you know how your top competitors are performing?</h2>
          <p>
            Your digital agency should give you insights—not just on your business, but your competitors too. How many clicks are they getting? What keywords are they dominating?
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-1">5. Are you doing enough to compete and win?</h2>
          <p>
            Being online isn’t enough anymore. The digital space is crowded. Your business doesn’t just need a presence—it needs results. The question isn’t “Are we online?” anymore. It’s “Are we leading?”
          </p>
        </div>
      </div>

      <div className="mt-10 text-blue-800 font-medium text-[1.05rem]">
        <p>
          Maybe your agency was a good fit when you were just getting started. But if they’re no longer helping you move forward, it’s okay to reassess. Growth demands change.
        </p>
      </div>

      <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-700 rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-blue-800">
          Not Sure How to Choose the Right Digital Agency?
        </h3>
        <p className="mb-3 text-gray-700">
          Explore our detailed guide on what truly matters when selecting a marketing partner. Don’t settle for “good enough”—choose an agency that works for your success.
        </p>
        <Link
          href="/faq/choose-us"
          className="text-blue-700 underline font-semibold"
        >
          Read: Choosing the Right Digital Marketing Agency →
        </Link>
      </div>
    </div>
  );
}
