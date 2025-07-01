

import Features from "@/components/features";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "GetStrongerMe | Affordable Business Websites in Johannesburg",
  description: "We build SEO-optimized, mobile-friendly websites for small businesses in Johannesburg. Boost your online visibility, traffic, and sales today.",
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
                "url": "https://getstrongerme.com",
                "logo": "https://getstrongerme.com/favicon-32x32.png",  // Update with your actual logo url
                "description": "Affordable websites, SEO, and hosting for small businesses in Johannesburg.",
                "address": {
                  "@type": "new town johannesburg",
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
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h2 className="text-5xl font-extrabold text-white">Get Your Business Online</h2>
          <p className="mt-4 text-lg text-black font-extrabold underline decoration-3 max-w-xl">
            POPULARITY | TRAFFIC | CONVERSION
          </p>
          <Link href="/pricing">
            <Button className=" bg-blue-600 hover:bg-blue-100 text-white mt-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <Features />
    </div>
  );
}
