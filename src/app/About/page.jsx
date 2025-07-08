import React from "react";

export const metadata = {
  title: "About Us | GetStrongerMe - Business Website Experts",
  description:
    "Learn more about GetStrongerMe, our mission, and how we help small businesses grow online through affordable websites, SEO, and digital marketing services.",
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
      "GetStrongerMe is a digital agency helping Johannesburg small businesses grow online through SEO, web design, and digital tools.",
    url: "https://www.getstrongerme.com/About",
  };

  return (
    <section className="py-20 bg-white">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-4 font-semibold">
            <strong>Strongerme</strong>, we’re passionate digital partners
            dedicated to helping Gauteng and Johannesburg start-ups thrive
            online. We specialize in building and optimizing your entire digital
            presence—from Google Business Profiles and websites to email
            hosting and comprehensive audits of your current online business
            life.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            We know what it’s like to start from scratch—because we’re doing it
            too. Our team combines fresh perspectives with up-to-date digital
            know-how, focusing on practical solutions that deliver real impact
            for emerging businesses. We don’t just offer services; we offer a
            partnership built on transparency, creativity, and a genuine
            commitment to your success.
          </p>
          <p className="text-gray-700 mb-6 font-semibold">
            Whether you’re launching your first website or looking to upgrade
            your existing digital footprint, we’re here to guide you every step
            of the way. Let’s grow together—your success is our first case
            study.
          </p>

          <h4 className="text-2xl font-semibold mb-3">Why Choose Us?</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6 font-semibold">
            <li>We’re startup-friendly and understand budget realities.</li>
            <li>Fast turnaround times tailored for small businesses.</li>
            <li>
              Genuine local support for Johannesburg and Gauteng businesses.
            </li>
            <li>No complicated tech jargon — just simple, real solutions.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[700px] mx-auto font-semibold mt-10">
        <h4 className="text-2xl font-semibold mb-3">Our Mission</h4>
        <p className="text-gray-700 mb-4">
          At <strong>Strongerme</strong>, our mission is simple: to empower
          small businesses and start-ups in Johannesburg and across Gauteng by
          delivering affordable, effective, and conversion-driven digital
          solutions. We aim to level the playing field for emerging businesses
          by giving them access to high-quality websites, SEO, and digital
          tools that drive real growth.
        </p>

        <h4 className="text-2xl font-semibold mb-3">Our Vision</h4>
        <p className="text-gray-700 mb-6">
          Our vision is to become Gauteng’s most trusted digital partner for
          small businesses and entrepreneurs. We see a future where every local
          business—no matter how small—can build a strong online presence,
          attract customers, and compete confidently in the digital space.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
