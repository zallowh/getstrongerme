
{/*import Features from "@/components/features";*/}
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Strongerme Digital marketing agency | Affordable Business Websites in Johannesburg",
  description: "We build SEO-optimized, mobile-friendly websites for small businesses in Johannesburg. Boost your online visibility, traffic, and sales today.",
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
                "description": "websites, SEO, and hosting for small businesses in Johannesburg.",
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
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h2 className="text-5xl font-extrabold text-white">Get Your Business found</h2>
          <p className="mt-4 text-3xl text-gray-900 font-bold">
            SEO and Google Ads , Website design, email hosting, and Google profile/map
          </p>
          <Link href="/pricing">
            <Button className=" bg-blue-600 hover:bg-blue-100 text-white mt-6">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
            
      <section>
        <div className="mt-12 text-center px-6 md:px-20">
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
    We&apos;re not just a professional digital marketing agency —
  </h2>
  <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
    At <span className="text-blue-700 font-semibold">Strongerme</span>, we prioritize people over profits.
    That means clear communication, strategies aligned with your goals, and NO one-size-fits-all packages.
    Whether you&apos;re a startup or local business, we work as if your business were our own —
    because real growth starts with partnership, not pressure.
  </p>

  <p className="mt-6 text-lg text-gray-800">
    Learn more <a href="/About" className="text-blue-700 underline hover:text-blue-300 font-semibold">about who we are</a> or see
    <a href="/faq/choose-us" className="ml-1 text-blue-700 underline hover:text-blue-300 font-semibold">how to choose the right agency</a> for your business.
  </p>
</div>

      </section>

      {/* Features */}
      {/* <Features /> */}
    </div>
  );
}
