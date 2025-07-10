import React from "react";

export const metadata = {
  title: "Professional Email Hosting | Strongerme - Branded Email Setup",
  description: "Professional email hosting for small businesses. Branded emails that improve trust and communication.",
  alternates: {
    canonical: "https://www.getstrongerme.com/ourservice/hosting",
  },
};

const Hosting = () => {
  const jsonLd ={
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Email Hosting",
  "provider": {
    "@type": "Organization",
    "name": "GetStrongerMe"
  },
  "url": "https://www.getstrongerme.com/ourservice/hosting",
  "description": "Affordable business email hosting for small teams in South Africa using your own domain."
}

    return(
       <section className="py-20 bg-gray-50">
        {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Placeholder */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img src="/hosting.jpg" alt="Professional Email Hosting" className="rounded-xl shadow-lg" />
    </div>

    {/* Content */}
    <div className="md:w-1/2 md:pl-10">
      <h3 className="text-3xl font-bold mb-4">Professional Email Hosting</h3>
      <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
        An email address like yourname@gmail.com doesn’t reflect the professionalism of your brand.
        We set you up with reliable, custom business emails that help you look legit and win trust.
      </p>
      <ul className="list-disc pl-6 text-gray-800 space-y-2 font-semibold">
        <li>Google or Microsoft (e.g. info@yourbusiness.co.za)</li>
        <li>Spam-free, secure mailboxes</li>
        <li>Web, mobile, and desktop access</li>
        <li>Domain & hosting integration</li>
      </ul>
      <p className="mt-6 text-blue-700 font-medium">
        A branded email shows professionalism and builds trust. Make a strong impression with every email you send.
      </p>
    </div>
  </div>
</section>

    )
}

export default Hosting;