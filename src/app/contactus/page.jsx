import React from "react";
import ContactForm from "@/components/contactForm";

export const metadata = {
  title: "Contact Us | Speak to a Digital Expert",
  description: "Get in touch for web design, SEO, and Google Ads services. Serving all businesses.",
  alternates: {
    canonical: "https://www.getstrongerme.com/contactus",
  },
};


export default function ContactPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "url": "https://www.getstrongerme.com/contactus",
  "mainEntity": {
    "@type": "Organization",
    "name": "GetStrongerMe",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27663973313",
      "contactType": "Customer Support",
      "areaServed": "ZA",
      "availableLanguage": "en"
    }
  }
}

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold m-16 text-center text-gray-800">We Value Your Time: We Respond Instantly to Every Inquiry!</h1>
      
      <div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-10 text-center font-semibold">
    <a
      href="tel:+27663973313"
      className="inline-block bg-blue-700 hover:text-gray-900 text-white text-md font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300"
    >
      Call Us: +27 66 397 3313
    </a>

    <a
      href="mailto:info@getstrongerme.com"
      className="inline-block bg-gray-800 hover:text-blue-600 text-white text-md font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300"
    >
      Email Us: info@getstrongerme.com
    </a>
  </div>
</div>

      <ContactForm />
    </main>
  );
}
