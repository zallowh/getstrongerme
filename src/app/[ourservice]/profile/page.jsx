import React from "react";

export const metadata = {
  title: "Google Business Profile Management Johannesburg",
  description: "Google Business Profile setup and optimization for Johannesburg businesses. Maps listings.",
  alternates: {
    canonical: "https://www.getstrongerme.com/ourservice/profile",
  },
};


const profiling = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Google Business Profile Setup",
  "provider": {
    "@type": "Organization",
    "name": "Strongerme"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gauteng"
  },
  "url": "https://www.getstrongerme.com/ourservice/profile",
  "description": "We help small businesses create and manage their Google Business profiles for better visibility on Maps and local results."
}

    return(
       <section className="py-20 bg-white">
         {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Placeholder */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img src="/profile.png" alt="Google Business Profile" className="rounded-xl shadow-lg" />
    </div>

    {/* Content */}
    <div className="md:w-1/2 md:pl-10 font-semibold">
      <h1 className="text-3xl font-bold mb-4">Google Business Profile/Map</h1>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Your business deserves to be found where customers are searching — on Google.
        We help you set up your official Google Business Profile and provide fast local hosting to make sure you're visible, trusted, and always online.
      </p>
      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        <li>Google Business Profile setup (Google Maps visibility)</li>
        <li>Business contact info, address, hours, and service details</li>
        <li>build transparency (confirm your service rating public)</li>
        <li>Google business maps</li>
      </ul>
      <p className="mt-6 text-blue-800 font-medium">
        Be found when customers search your business name on Google! Stay online 24/7 with fast hosting.
      </p>
    </div>
  </div>
        {/* Hidden keyword index for Google Business Profile (GBP) SEO */}
<div className="hidden">
  <ul>
    {[
      "affordable Google Business Profile setup and optimization Johannesburg",
      "professional Google Business Profile management services Johannesburg",
      "local SEO Google Business Profile optimization for Johannesburg SMEs",
      "Google Maps listing optimization for small businesses Johannesburg",
      "Google Business Profile review management services Johannesburg",
      "Google Business Profile photo and video content management Johannesburg",
      "monthly Google Business Profile updates and posts Johannesburg",
      "Google Business Profile keyword optimization for Johannesburg startups",
      "Google Maps marketing agency for Johannesburg local businesses",
      "Google Business Profile competitor analysis and local SEO Johannesburg",
      "Google Business Profile customer review monitoring Johannesburg",
      "Google Business Profile service area targeting setup Johannesburg",
      "Google Business Profile Q&A management services Johannesburg",
      "Google Business Profile insights and performance reporting Johannesburg",
      "Google Business Profile local search ranking improvement Johannesburg",
      "Google Business Profile for Johannesburg restaurants and retail shops",
      "Google Business Profile setup with map pin verification Johannesburg",
      "Google Business Profile optimization for Johannesburg professional services",
      "Google Business Profile local listing management for Johannesburg entrepreneurs",
      "Google Business Profile posts and offers management Johannesburg"
    ].map((keyword, i) => (
      <li key={i}>{keyword}</li>
    ))}
  </ul>
</div>

</section>
    )
}

export default profiling;