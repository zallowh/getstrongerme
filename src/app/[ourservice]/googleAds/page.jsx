import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Google Ads Management | Paid Search for Small Businesses",
  description: "Get instant visibility with Google Ads. We build, optimize, and track ad campaigns for Johannesburg-based businesses.",
  alternates: {
    canonical: "https://www.getstrongerme.com/ourservice/googleAds",
  },
};

const GoogleAds = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Google Ads Management",
  "provider": {
    "@type": "Organization",
    "name": "Strongerme"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Johannesburg"
  },
  "url": "https://www.getstrongerme.com/ourservice/googleAds",
  "description": "We manage Google Ads for small businesses — setup, content writing, optimization, and performance tracking."
}

    return(
     <div>
          {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="max-w-[700px] mx-auto font-semibold">
  <div className="w-full">
    <h1 className="text-4xl font-bold m-8">Google Ads Management Services</h1>
    <p className="mb-10">Instant traffic. Measurable results. Smart advertising.</p>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Why Choose Google Ads?</h2>
      <p className="mb-4">Google Ads gives your business immediate visibility on search engines, YouTube, and across the web. Whether you're launching a new product, running a special offer, or need consistent leads, Google Ads helps you appear exactly when your customers are searching.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Appear at the top of Google Search instantly</li>
        <li>Target customers by location, interest, or behavior</li>
        <li>Only pay for real results (pay-per-click)</li>
        <li>Complete control over budget, timing, and messaging</li>
        <li>Ideal for both local and national businesses</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">What’s Included in Our Google Ads Services</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Keyword & Campaign Strategy</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Keyword planning & match type optimization</li>
        <li>Competitor research and market targeting</li>
        <li>Search, Display, Shopping, Local, and YouTube campaign setup</li>
        <li>Budget planning and bidding strategy</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Google Ads Content Creation</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>High-quality ad headlines and descriptions</li>
        <li>Display banners and YouTube video ad scripts</li>
        <li>CTAs designed to boost click-through rates (CTR)</li>
        <li>Ad extensions for more visibility (callouts, sitelinks, etc.)</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Landing Page & Conversion Optimization</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Custom or optimized landing page design for better performance</li>
        <li>Lead generation tools: forms, WhatsApp buttons, clickable CTAs</li>
        <li>Fast-loading, mobile-friendly pages</li>
        <li>Content alignment between ads and landing pages for better Quality Score</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Ad Scheduling & Targeting</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Location-based targeting (local, regional, or national)</li>
        <li>Day & time scheduling based on audience behavior</li>
        <li>Device targeting (mobile vs. desktop users)</li>
        <li>Demographic and interest-based targeting</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Ongoing Optimization & A/B Testing</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Split testing ad copies and creatives</li>
        <li>Adjusting underperforming keywords</li>
        <li>Adding negative keywords to reduce wasted spend</li>
        <li>Adjusting bids based on ROI and conversion rate</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Monthly Reporting & Insights</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Campaign performance reports via Google Looker Studio</li>
        <li>Ad spend breakdown and ROI metrics</li>
        <li>Clicks, conversions, and engagement insights</li>
        <li>Expert recommendations for scaling or improving results</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Who Is Google Ads Best For?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Service-based businesses looking for consistent leads</li>
        <li>E-commerce stores wanting to increase product sales</li>
        <li>Local businesses targeting nearby customers</li>
        <li>Businesses launching a new product, event, or promo</li>
      </ul>
    </section>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md m-8">
  <p className="text-sm text-gray-800">
     Want a step-by-step guide on setting up and optimizing Google Ads campaigns?{' '}
    <a
      href="/faq/creating-googleads"
      className="text-blue-600 underline hover:text-blue-800 font-medium"
    >
      Read our full Google Ads FAQ here.
    </a>
  </p>
</div>


    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Pricing Plans</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Plan</th>
              <th className="border px-4 py-2">Monthly Ad Budget</th>
              <th className="border px-4 py-2">Management Fee</th>
              <th className="border px-4 py-2">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Starter</td>
              <td className="border px-4 py-2">R1000 – R1,900</td>
              <td className="border px-4 py-2">R500</td>
              <td className="border px-4 py-2">Small businesses testing Google Ads</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Growth</td>
              <td className="border px-4 py-2">R2,000 – R5,000</td>
              <td className="border px-4 py-2">R950 – R1,500</td>
              <td className="border px-4 py-2">Growing brands seeking quality leads</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pro</td>
              <td className="border px-4 py-2">R6,000+</td>
              <td className="border px-4 py-2">15% of ad spend</td>
              <td className="border px-4 py-2">Businesses scaling nationally</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-center font-bold">Custom packages available. Contact us for a free strategy call.</p>
        
        <div className="flex flex-col items-center justify-center">
        <Link href="/contactus">
            <Button className=" bg-blue-600 hover:bg-blue-100 text-white mt-6">
              Get Started
            </Button>
          </Link>
        </div>  
      <h2 className="text-2xl font-bold m-8 text-center">Let’s Get Started with Google Ads</h2>
    </section>
  </div>
</div>

        </div>
    )
}

export default GoogleAds;