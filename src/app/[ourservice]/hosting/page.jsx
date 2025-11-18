import React from "react";

export const metadata = {
  title: "Business Email Hosting with Custom Domain | Reliable & Secure",
  description: "Professional, secure email hosting for businesses and freelancers in Johannesburg. Custom domain setup",
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
  "description": "Professional business email hosting for small teams in South Africa using your own domain."
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
      <h1 className="text-3xl font-bold mb-4">Professional Email Hosting</h1>
      <h2 className="mb-6 text-gray-700 leading-relaxed font-semibold">
        An email address like yourname@gmail.com doesn’t reflect the professionalism of your brand.
        We set you up with reliable, custom business emails that help you look legit and win trust.
      </h2>
      <ul className="list-disc pl-6 text-gray-800 space-y-2 font-semibold">
        <li>Google or Microsoft (e.g. info@yourbusiness.co.za)</li>
        <li>Spam-free, secure mailboxes</li>
        <li>Web, mobile, and desktop access</li>
        <li>Domain & hosting integration</li>
      </ul>
      <p className="mt-6 text-blue-600 font-medium">
        A branded email shows professionalism and builds trust. Make a strong impression with every email you send.
      </p>
    </div>
  </div>

   <div className="max-w-[700px] mx-auto bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md m-8">
  <p className="text-sm text-gray-800">
     <strong className="font-semibold">recommended</strong> get done with basics of Professional already have{' '}
    <a
      href="/ourservice/profile"
      className="text-blue-600 underline hover:text-blue-800 font-medium"
    >
      Google Business Profile?
    </a>
  </p>
</div>

{/* Hidden keyword index for Email Hosting SEO */}
<div className="hidden">
  <ul>
    {[
      "affordable custom domain email hosting for small businesses",
      "professional email hosting services with custom domain",
      "secure email hosting for startups with own domain",
      "cheap email hosting plans for business domains",
      "email hosting with spam protection for professionals",
      "reliable email hosting for entrepreneurs with custom domain",
      "business email hosting with 24/7 support and custom domain",
      "scalable email hosting solutions for small companies",
      "email hosting with collaboration tools for startups",
      "professional domain-based email hosting with easy setup",
      "email hosting for freelancers with personalized domain",
      "affordable email hosting with mobile access and custom domain",
      "email hosting for local businesses with domain integration",
      "email hosting with enhanced security for small business domains",
      "email hosting services for remote teams with custom domain"
    ].map((keyword, index) => (
      <li key={index}>{keyword}</li>
    ))}
  </ul>
</div>

</section>

    )
}

export default Hosting;