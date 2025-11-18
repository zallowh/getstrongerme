import React from "react";

export const metadata = {
  title: "Website Design & Landing Page Audit in South Africa",
  description:
    "Professional, SEO-friendly, mobile-optimized websites for all businesses in Johannesburg. AI-ready, fast-loading, and lead-focused.",
  alternates: {
    canonical: "https://www.getstrongerme.com/ourservice/websites",
  },
};

const Websites = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Design",
    "provider": {
      "@type": "Organization",
      "name": "Strongerme"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Gauteng"
    },
    "url": "https://www.getstrongerme.com/ourservice/websites",
    "description": "We build modern, mobile-first websites for all businesses with SEO and Google Ads integration."
  };

  const keywordGroups = {
    locationSpecific: [
      "affordable website design for small businesses in Johannesburg",
      "custom web design packages for startups in Gauteng",
      "ecommerce website development for local shops Johannesburg",
      "responsive website design for service providers in Johannesburg",
      "small business website redesign services near Johannesburg",
      "professional website solutions for new businesses in Johannesburg",
      "website design agency for entrepreneurs in johannesburg",
      "SEO-friendly website design for small businesses Johannesburg",
      "fast-loading websites for startups in Johannesburg",
      "mobile-optimized web design for Gauteng startups",
    ],
    trendFocused: [
      "AI-driven website design services Johannesburg",
      "modern minimalist web design for small businesses Gauteng",
      "eco-friendly website design solutions Johannesburg",
      "affordable website maintenance for small businesses Johannesburg",
      "website speed optimization for local businesses Gauteng",
      "secure website design for new businesses Johannesburg",
      "local business website packages with free SSL Johannesburg",
      "social media integration website design Gauteng",
      "online booking website design for small businesses Johannesburg",
    ],
    serviceFeatures: [
      "landing page design for lead generation Johannesburg",
      "website design with WhatsApp integration Gauteng",
      "multilingual website design for Johannesburg businesses",
      "website design for home-based businesses Gauteng",
      "one-page website design for startups Johannesburg",
      "website design with free business email setup Gauteng",
    ],
    userIntent: [
      "best website design for startups with limited budget Johannesburg",
      "web design for startups looking to scale Gauteng",
      "web design for women-owned businesses Johannesburg",
      "web design for local artisans and crafters Gauteng",
      "website design for online appointment scheduling Johannesburg",
    ]
  };

  return (
    <section className="py-20 bg-white">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[700px] mx-auto font-semibold mt-10">
        <h1 className="text-3xl font-bold mb-4">Website Design & Auditing</h1>

        <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
          Think you're too local to need a website? Think again. In 2025, even neighborhood businesses are being Googled before they’re visited. Whether you run a salon in Soweto, a plumbing service in Durban, or a law firm in Cape Town — a clean, fast, mobile-ready website is no longer optional. It's where first impressions are made, trust is built, and leads are captured. A website lets you show up when people search for your service, explain what makes you different, and prove you're legit.
        </p>

        <h2 className="mb-6 text-gray-700 leading-relaxed font-semibold">
          At StrongerMe, we design sites that do more than look good — they rank, load fast, and help you grow. We pair modern design with SEO and performance audits to make sure your site actually drives business.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/website.jpg"
            alt="Website Design & Auditing"
            className="rounded-xl shadow-lg"
          />
          <h3 className="mt-6 text-blue-800 font-medium">
            Don’t just have a website — have a strategic digital asset that works 24/7 to build trust, attract visitors, and convert leads. Fast. Functional. Found online.
          </h3>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 md:pl-10">
          <ul className="list-disc pl-6 text-gray-800 space-y-2 font-semibold">
            <li>Unlimited custom-designed pages (Home, Services, About Us, Contact, Gallery, etc.)</li>
            <li>Website user journey design & persuasive UX writing to drive engagement</li>
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>Click-to-call buttons, contact forms, and WhatsApp chat integration</li>
            <li>Core Web Vitals optimization for page speed and performance</li>
            <li>Landing page audit for bounce rate and conversion improvement</li>
            <li>Domain registration, DNS setup, and SSL certificate implementation</li>
            <li>Complete SEO audit covering metadata, heading structure, crawlability</li>
            <li>AI-powered chat integration for lead capture or FAQ automation</li>
            <li>Dark mode toggle and accessible design (ADA/WCAG compliance)</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto font-semibold mt-10">
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-md">
          <p className="text-gray-800">
            Curious about what goes into a high-performance website or how audits improve your SEO?
            <br />
            <a
              href="/faq/website-design-project"
              className="inline-block mt-2 text-blue-600 underline hover:text-blue-800 font-semibold"
            >
              Read our Website Design FAQ for insights on process, timelines, and strategy.
            </a>
          </p>
        </div>
      </div>

      {/* Hidden but SEO-relevant keyword section */}
      <div className="hidden">
        <ul>
          {Object.entries(keywordGroups).map(([groupName, keywords]) =>
            keywords.map((kw, idx) => (
              <li key={`${groupName}-${idx}`}>{kw}</li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Websites;
