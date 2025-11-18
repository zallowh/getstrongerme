import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Strongerme | Performance & ROI-focused Digital marketing agency in South Africa",
  description: "We optimize & amplify your business’s presence on Google, making you the preferred choice in your industry.",
  alternates: {
    canonical: "https://www.getstrongerme.com",
  },
};


export default function Home() {
  
  return (
    <div>
  
    {/* JSON-LD for Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Strongerme",
                "url": "https://www.getstrongerme.com",
                "logo": "https://www.getstrongerme.com/favicon-32x32.png",  // Update with your actual logo url
                "description": "websites, SEO, Ads, hosting and copywriting digital marketing in Johannesburg.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Johannesburg",
                  "addressRegion": "Gauteng",
                  "addressCountry": "South Africa"
                          },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+27 66 397 3313",
                  "contactType": "Customer Support"
                },
                "sameAs": [
                  "https://www.facebook.com/share/1ZYxpsHbRX/"  // If you have socials
                  
                ]
              })
            }}
          />


      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url("/landingpage.jpg")',
            }}
      >
</section>

  <div className="mt-12 text-center px-6 md:px-20">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
    How Do Customers Find You on Google When They Don’t Know Your Name?
  </h1>
  <h2 className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
    At <span className="text-blue-700 font-semibold">Strongerme</span>, we optimize & amplify your business’s presence on Google, making you the top preferred choice in your industry.
  </h2>
</div>


<section className="m-12">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img
        src="/googleCTR.png"
        alt="Google CTR Illustration"
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Text */}
<div className="md:w-1/2 md:pl-12">
  <h3 className="text-3xl font-bold mb-4">90 Days Fast-Track to Visibility</h3>
  <h4 className="text-gray-700 mb-4 font-semibold">
    Experience our high-performance growth program that has delivered measurable ROI and sustained growth in
    <strong> Popularity, Traffic,</strong> and <strong>Conversions</strong>—in just <strong>90 days</strong> of proven results.
  </h4>
  <ul className="text-gray-700 mb-4">
    <strong>Data from real campaigns shows where the clicks truly go:</strong>
    <li>#1 Organic Rank: 23.3% CTR</li>
    <li>#1 Rank + Featured Snippet: 35.3% CTR</li>
  </ul>
  <p className="text-gray-700 mb-4 font-semibold">
    The Result: Capturing the Featured Snippet boosts clicks by over 50%, positioning us as the trusted answer—before prospects even know our name.
  </p>
</div>
</div>
</section>


  

<div className="text-center m-8">
  <Link href="/pricing">
            <Button className=" bg-blue-600 hover:bg-blue-100 text-white mt-6">
              Get Started
            </Button>
          </Link>
</div>

  <p className="mt-6 text-lg text-gray-800 text-center">
    Learn more <a href="/About" className="text-blue-700 underline hover:text-blue-300 font-semibold">about who we are</a> or see
    <a href="/faq/choose-us" className="ml-1 text-blue-700 underline hover:text-blue-300 font-semibold">how to choose the right agency</a> for your business.
  </p>
      
    </div>
  );
}
