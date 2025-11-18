import React from "react";

export const metadata = {
  title: "Google SEO & Maps Management in South Africa | Local SEO Experts ",
  description: "Google SEO and Maps services for businesses in Johannesburg. local search optimization, audits | Rank Higher on Google .",
  alternates: {
    canonical: "https://www.getstrongerme.com/ourservice/seo",
  },
};


const Seo = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "Strongerme",
    "url": "https://www.getstrongerme.com"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gauteng"
  },
  "url": "https://www.getstrongerme.com/ourservice/seo",
  "description": "Improve your business's visibility with on-page SEO, local targeting, and Google ranking improvements."
}

    return(
       <section className="py-20 bg-gray-50">
        {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[700px] mx-auto font-semibold mt-10">
      <h1 className="text-3xl font-bold mb-4">Organic SEO (3–12 Month Growth Plan)</h1>
  <h2 className="mb-6 text-gray-700 leading-relaxed">
    Ranking on Google isn’t about tricks — it’s about strategy, consistency, and knowing how search engines and users behave.
    Our Organic SEO service is a tailored, long-term plan that builds real visibility, trust, and traffic over time.
    Whether you’re a small business or scaling startup, we help you dominate search results for keywords that matter to your customers.
  </h2>
</div>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img
        src="/local-seo.webp"
        alt="Organic SEO Growth Plan"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="md:w-1/2 md:pl-10 font-semibold">
  
  <ul className="list-disc pl-6 text-gray-800 space-y-2">
    <li><strong>Monthly On-page SEO:</strong> We optimize title tags, meta descriptions, headers, keyword placement, image alt text, and internal linking — refreshed monthly based on analytics.</li>
    <li><strong>Local SEO Targeting:</strong> Rank higher in Johannesburg and surrounding areas with geo-targeted keywords, business citations, and Google Maps optimization.</li>
    <li><strong>Answer Engine Optimization (AEO):</strong> Win featured snippets, AI answers, and voice search results by structuring content around how people ask real questions.</li>
    <li><strong>Keyword Research & Metadata:</strong> Every month, we research your industry's high-volume keywords and apply them to metadata, service pages, and blog posts.</li>
    <li><strong>Technical SEO Audits:</strong> We fix what Google sees — broken links, crawl errors, page speed issues, mobile responsiveness, and indexation problems.</li>
    <li><strong>Monthly SEO Reports:</strong> Stay informed with easy-to-understand reporting that tracks ranking gains, traffic sources, and site health.</li>
    <li><strong>Content Strategy & Blog Ideas:</strong> Get guidance on what to write, when to publish, and how to target “bottom-of-funnel” queries that convert visitors into leads.</li>
    <li><strong>Google Maps Ranking:</strong> Optimize your Google Business Profile to appear in map results for services like “near me” and local intent searches.</li>
    <li><strong>Competitor Benchmarking:</strong> Know how your rivals are ranking and discover what keywords or backlinks they’re using — and how to beat them.</li>
  </ul>
 
</div>
  </div>
  <div className="max-w-[700px] mx-auto font-semibold mt-10">
        <p className="mt-6 text-gray-700 leading-relaxed">
    Our SEO approach evolves with Google’s algorithms — including Core Web Vitals, AI-generated results, and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
    With Strongerme, you're not just buying an SEO package; you're investing in long-term digital growth.
  </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md m-8">
  <p className="text-sm text-gray-800">
     Want to understand Google SEO and local SEO? see the introduction{' '}
    <a
      href="/faq/seo-basics"
      className="text-blue-600 underline hover:text-blue-800 font-medium"
    >
      what is SEO?
    </a>
  </p>
</div>
  
      </div>

      {/* Hidden keyword index for Google SEO services */}
<div className="hidden">
  <ul>
    {[
      "affordable Google SEO and maps management services for small businesses Johannesburg",
      "local Google SEO experts for startups in Johannesburg",
      "Google search engine optimization campaign setup for Johannesburg SMEs",
      "best Seo agency for Johannesburg small businesses",
      "Google SEO management for Johannesburg retail stores",
      "Google SEO audit and optimization services Johannesburg",
      "Google SEO and maps remarketing services for Johannesburg startups",
      "Google Ads and SEO package deals for Johannesburg businesses",
      "certified Google SEO partner agency Johannesburg",
      "Google Maps advertising services Johannesburg",
      "Google SEO shopping campaigns for Johannesburg e-commerce",
      "Google SEO management for Johannesburg service providers",
      "SEO and Google Ads combo services in Johannesburg",
      "Google SEO local search optimization Johannesburg",
      "Google SEO performance max campaigns for Johannesburg startups",
      "Google SEO consulting services Johannesburg",
      "Google SEO and maps for Johannesburg real estate agencies",
      "Google SEO expert for Johannesburg tech startups"
    ].map((keyword, i) => (
      <li key={i}>{keyword}</li>
    ))}
  </ul>
</div>

</section>

    )
}

export default Seo;