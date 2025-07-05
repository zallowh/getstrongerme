import React from "react";

export const metadata = {
  title: "3-12-Month SEO Growth Plan | GetStrongerMe - Organic SEO & Local Rankings",
  description:
    "Boost your Google rankings with monthly SEO, local Johannesburg targeting, keyword research, AEO for voice search, and detailed SEO reports.",
};


const Seo = () => {
    return(
       <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img
        src="/seo.png"
        alt="Organic SEO Growth Plan"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="md:w-1/2 md:pl-10 font-semibold">
      <h2 className="text-3xl font-bold mb-4">Organic SEO (3-12-Month Growth Plan)</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Consistent visibility on Google is not a one-time task — it's a strategic, ongoing effort.
        Our 3-12-month SEO growth plan is designed to help your website rank higher, attract more clicks, and generate free organic traffic that converts into real business.
      </p>

      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        <li><strong>Monthly On-page SEO:</strong> Page titles, meta tags, keyword density, alt tags, and internal linking optimized monthly.</li>
        <li><strong>Local SEO targeting:</strong> Focused visibility in Johannesburg and surrounding regions through local keyword optimization.</li>
        <li><strong>Answer Engine Optimization (AEO):</strong> Structure your site to appear in AI-generated and voice search results like “Hey Google...” queries.</li>
        <li><strong>Monthly SEO Reports:</strong> Track ranking progress, keyword trends, and technical issues with clear reporting.</li>
        <li><strong>Google Maps Ranking:</strong> Improve your Google Business Profile’s position in local search and map packs.</li>
        <li><strong>Keyword Research & Metadata:</strong> Target relevant, high-volume search terms and optimize page metadata for every section.</li>
        <li><strong>Technical SEO Audits:</strong> Check crawlability, page speed, mobile usability, and indexation issues.</li>
        <li><strong>Content Recommendations:</strong> Get monthly guidance on blog topics, service pages, and FAQs that drive SEO performance.</li>
        <li><strong>Competitor Analysis:</strong> Benchmark against local rivals to find gaps and outrank them on Google.</li>
      </ul>

      <p className="mt-6 text-blue-700 font-medium">
        Google is constantly evolving — and so are we. This long-term plan ensures your brand stays on top of algorithm changes, user intent trends, and local search behavior.
        Let us do the heavy lifting so you can focus on your business, while your traffic grows naturally month after month.
      </p>
    </div>
  </div>
</section>

    )
}

export default Seo;