// app/faq/creating-googleads/page.jsx
import React from "react";

export const metadata = {
  title: "Creating Google Ads Campaigns – FAQ | GetStrongerMe",
  description:
    "Comprehensive guide on setting up and optimizing Google Ads campaigns, including comparison with Facebook Ads and local PPC strategies.",
};

export default function CreatingGoogleAdsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center">Creating Google Ads & PPC Campaigns</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Step-by-Step Google Ads Setup</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Create a Google Ads Account:</strong> Visit <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ads.google.com</a> and start a campaign. Use Expert Mode for more control.</li>
          <li><strong>Choose Your Campaign Goal:</strong> Options include traffic, leads, sales, brand awareness, or app installs.</li>
          <li><strong>Pick a Campaign Type:</strong> Choose from Search, Display, Shopping, Video, App, or Performance Max.</li>
          <li><strong>Define Your Audience:</strong> Target by location, language, keywords, demographics, interests, and behaviors.</li>
          <li><strong>Set Budget and Bidding:</strong> Decide on daily/monthly budget and bidding strategy (e.g., Maximize Clicks or Target CPA).</li>
          <li><strong>Create Your Ads:</strong> Write strong headlines/descriptions or upload creatives. Include clear calls-to-action.</li>
          <li><strong>Review and Launch:</strong> Check settings, keywords, ad copy, and submit for review.</li>
          <li><strong>Optimize Continuously:</strong> Monitor results, refine keywords, adjust bids, and test variations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Google Ads vs. Facebook Ads</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Aspect</th>
                <th className="border p-2">Google Ads</th>
                <th className="border p-2">Facebook Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Intent</td>
                <td className="border p-2">High intent – active searchers</td>
                <td className="border p-2">Passive intent – interest-based</td>
              </tr>
              <tr>
                <td className="border p-2">Ad Formats</td>
                <td className="border p-2">Text, Display, Video</td>
                <td className="border p-2">Image, Video, Carousel, Stories</td>
              </tr>
              <tr>
                <td className="border p-2">Audience Targeting</td>
                <td className="border p-2">Keywords, location, device</td>
                <td className="border p-2">Interests, demographics, behavior</td>
              </tr>
              <tr>
                <td className="border p-2">Cost</td>
                <td className="border p-2">Higher CPC, better conversion</td>
                <td className="border p-2">Lower CPC, lower conversion</td>
              </tr>
              <tr>
                <td className="border p-2">Best For</td>
                <td className="border p-2">Sales, lead gen</td>
                <td className="border p-2">Brand awareness, engagement</td>
              </tr>
              <tr>
                <td className="border p-2">Learning Curve</td>
                <td className="border p-2">Steeper, more complex</td>
                <td className="border p-2">Simpler, but creative-heavy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Common Google Ads Mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No Clear Goals:</strong> Set measurable objectives like leads or sales.</li>
          <li><strong>Poor Keyword Research:</strong> Use Keyword Planner, avoid broad or irrelevant keywords.</li>
          <li><strong>Ignoring Ad Scheduling/Location:</strong> Set specific hours and local focus.</li>
          <li><strong>Weak Ad Copy:</strong> Use benefit-driven messaging and strong CTAs.</li>
          <li><strong>No Conversion Tracking:</strong> Install tracking before running ads.</li>
          <li><strong>Mobile Neglect:</strong> Ensure mobile optimization of both ads and landing pages.</li>
          <li><strong>Not Testing:</strong> Run multiple ad variants to improve performance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Local PPC Strategies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Geo Targeting:</strong> Focus on specific cities or radius around your business.</li>
          <li><strong>Local Keywords:</strong> Include city or neighborhood terms in keywords.</li>
          <li><strong>Ad Scheduling:</strong> Match ads to your peak hours or business hours.</li>
          <li><strong>Location Extensions:</strong> Show your address/contact in the ads.</li>
          <li><strong>Callout Extensions & Reviews:</strong> Highlight local credibility and offers.</li>
          <li><strong>Landing Page Optimization:</strong> Include maps, address, and local content.</li>
          <li><strong>Integrate Google Business Profile:</strong> Sync with GMB for enhanced visibility.</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-4 rounded-md border border-blue-300">
        <h3 className="text-xl font-bold mb-2">Summary</h3>
        <p className="mb-2">
          Google Ads success starts with well-defined goals, accurate targeting, and high-quality ad content.
        </p>
        <p className="mb-2">
          Use Facebook Ads for broader reach and brand building; choose Google Ads for high-intent conversion-focused traffic.
        </p>
        <p>
          Small businesses should leverage local PPC strategies to attract nearby customers and drive local growth.
        </p>
      </section>

        <div className="bg-blue-50 border border-blue-300 rounded-md p-6 mt-10 text-center shadow-sm">
  <h2 className="text-xl font-semibold text-blue-900 mb-2">Need Expert Help With Your Google Ads?</h2>
  <p className="text-gray-700 mb-4 font-semibold">
    Don’t waste your budget guessing. Let Strongerme set up, manage, or optimize your Google Ads for better ROI.
  </p>
  <a
    href="/contactus"
    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-300 transition"
  >
    Contact us
  </a>
</div>


    </main>
  );
}
