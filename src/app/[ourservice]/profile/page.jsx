import React from "react";

export const metadata = {
  title: "Business Profile Creation | Google Business & Map Setup",
  description: "We create and optimize your Google Business Profile to help you appear on Maps and local search results.",
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
    "name": "GetStrongerMe"
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
      <h3 className="text-3xl font-bold mb-4">Google Business Profile/Map</h3>
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
</section>
    )
}

export default profiling;