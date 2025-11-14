import React from "react";

export const metadata = {
  title: "About Us | Strongerme - Business Website, Google Ads, SEO, email hosting and copywriting Experts",
  description:
    "Learn more about Strongerme, our vision, and how we help South African businesses dominate online through Competitive digital marketing services.",
  alternates: {
    canonical: "https://www.getstrongerme.com/About",
  },
};

const AboutUs = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    description:
      "Strongerme is a digital agency helping Johannesburg businesses Dominate online through Competitive digital tools.",
    url: "https://www.getstrongerme.com/About",
  };

  return (
    <section className="py-20 bg-white">
      {/* JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[700px] mx-auto font-semibold mt-10">
      <h1 className="text-3xl font-bold mb-4">Who We Are</h1>
          <p className="text-gray-700 mb-4 font-semibold">
            At <strong>Strongerme</strong>, we're passionate digital partners committed to helping South African businesses thrive online.
            Founded in 2023 and headquartered in Johannesburg, Strongerme Digital Marketing Agency was created out of a challenge — when our founder, Mr. Sabelo Mncube, realized that being "average" online was no longer enough. To solve that problem, he assembled a team of experts dedicated to helping businesses not just exist online, but compete for the #1 rank on Google and become trusted leaders in their industries.
            We specialize in building and optimizing your entire digital presence — from Google Business Profiles, websites, SEO, and Ads, Copywriting, to email hosting and comprehensive digital audits.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            We know what it feels like to appear on Google yet struggle with low traffic, poor conversions, or lack of visibility. That's why we go beyond basic services — we offer a partnership built on transparency, creativity, and a genuine commitment to measurable success.
            Whether you're launching your first website or upgrading your existing digital footprint, we're here to guide you every step of the way.
            Let's make you compete to dominate your industry.
          </p>

          <p className="text-gray-700 mb-6 font-semibold">
            Whether you're launching your first website or looking to upgrade
            your existing digital footprint, we're here to guide you every step
            of the way.
          </p>
        </div>


      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/aboutus.png"
            alt="about-us"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 md:pl-12">
          
          
          <h4 className="text-2xl font-semibold mb-3">Why Choose Us?</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6 font-semibold">
            <li>A results-driven team focused on ROI, visibility, and real competitive growth.</li>
            <li>Experts who move your business from simply being online to dominating your industry.</li>
            <li>Transparent, honest guidance with measurable improvements—not empty promises.</li>
            <li>Deep understanding of the South African digital landscape, especially Johannesburg and Gauteng.</li>
            <li>No confusing jargon — just clear strategies, skilled execution, and consistent support.</li>
          </ul>

          
        </div>
      </div>

      <div className="max-w-[700px] mx-auto font-semibold mt-10">
            <h4 className="text-2xl font-semibold mb-3">Our Mission</h4>
            <p className="text-gray-700 mb-4">
              At <strong>Strongerme</strong>, our mission is simple: to help South African businesses break free from digital agencies that deliver the bare minimum while charging premium prices.
              We are ROI-focused, transforming your business from just existing online to becoming competitive, visible, and dominant in your industry.
            </p>

            <h4 className="text-2xl font-semibold mb-3">Our Vision</h4>
            <p className="text-gray-700 mb-6">
              Our vision is to become South Africa's most trusted digital partner, helping businesses transition from simply being online to achieving aggressive growth and meaningful competition. Helping hundreds of different business range.
              We believe incompetence—not lack of funds—is what holds many businesses back. Our goal is to provide the competent, high-performing team that finally delivers the results you've been paying for.
            </p>
          </div>
    </section>
  );
};

export default AboutUs;