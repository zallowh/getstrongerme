import React from "react";

export const metadata = {
  title: "Website Design & landing page Audit.",
  description: "Mobile-friendly, SEO-optimized websites built for all businesses.",
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
    "name": "Johannesburg"
  },
  "url": "https://www.getstrongerme.com/ourservice/websites",
  "description": "We build modern, mobile-first websites for small businesses with SEO and Google Ads integration."
}

    return(
       <section className="py-20 bg-white">
        {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[700px] mx-auto font-semibold mt-10">
        <h3 className="text-3xl font-bold mb-4">Website Design & Auditing</h3>

  <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
    Think you're too local to need a website? Think again. In 2025, even neighborhood businesses are being Googled before they’re visited. Whether you run a salon in Soweto, a plumbing service in Durban, or a law firm in Cape Town — a clean, fast, mobile-ready website is no longer optional. It's where first impressions are made, trust is built, and leads are captured. A website lets you show up when people search for your service, explain what makes you different, and prove you're legit.
  </p>

  <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
    At StrongerMe, we design sites that do more than look good — they rank, load fast, and help you grow. We pair modern design with SEO and performance audits to make sure your site actually drives business.
  </p>
      </div>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Side */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img
        src="/website.jpg"
        alt="Website Design & Auditing"
        className="rounded-xl shadow-lg"
      />
      <p className="mt-6 text-blue-800 font-medium">
    Don’t just have a website — have a strategic digital asset that works 24/7 to build trust, attract visitors, and convert leads. Fast. Functional. Found online.
  </p>
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
</section>

    )
}

export default Websites;