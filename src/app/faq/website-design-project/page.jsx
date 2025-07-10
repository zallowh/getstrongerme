// app/faq/website-design-project/page.jsx
import React from "react";

export const metadata = {
  title: "What to Expect from a Website Design Project | Strongerme",
  description:
    "Explore the full lifecycle of a website design project—from discovery and planning to launch and maintenance. Learn the importance of mobile design, SEO best practices, and 2025 design trends.",
  alternates: {
    canonical: "https://www.getstrongerme.com/faq/website-design-project",
  },
};

export default function WebsiteDesignProjectPage() {
  const jsonLd ={
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.getstrongerme.com/faq/website-design-project"
  },
  "headline": "What to Expect from a Website Design Project in 2025",
  "description": "Learn the full process of a professional website design project — from discovery to design, development, launch, mobile readiness, SEO, and ongoing audits.",
  "author": {
    "@type": "Organization",
    "name": "Strongerme",
    "url": "https://www.getstrongerme.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Strongerme",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.getstrongerme.com/logo.png",
      "width": 512,
      "height": 512
    }
  },
  "datePublished": "2025-07-09",
  "dateModified": "2025-07-09"
}
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8 text-gray-800">
      {/* ✅ JSON-LD injected here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold text-center">
        What to Expect from a Website Design Project
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Discovery and Research</h2>
        <p>
          This initial phase involves understanding your brand, audience, competitors, and industry trends.
          It sets clear project goals, timelines, and expectations for all stakeholders.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Planning and Strategy</h2>
        <p>
          Involves creating a sitemap, mapping user journeys, and selecting the right tech stack.
          This roadmap ensures alignment and smooth execution across design and development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Design: Wireframes & Mockups</h2>
        <p>
          Wireframes focus on layout and functionality without distraction. Mockups introduce branding, colors, and typography
          to craft an intuitive and engaging interface.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Content Creation</h2>
        <p>
          Copywriters produce SEO-friendly, conversion-driven content that communicates your brand’s value and
          supports both user goals and search engine visibility.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Development</h2>
        <p>
          The design is brought to life using modern front-end and back-end technologies, focusing on responsiveness,
          interactivity, speed, and security.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Testing and Launch</h2>
        <p>
          Usability, speed, and cross-device compatibility are thoroughly tested. After launch, performance is monitored
          and fine-tuned for ongoing success.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Ongoing Maintenance</h2>
        <p>
          A successful website needs continuous content updates, technical maintenance, performance optimization, and
          security checks to remain effective.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-10">Importance of Mobile-Friendly Websites</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Majority Mobile Traffic:</strong> Over half of web traffic comes from mobile users.</li>
          <li><strong>Google’s Mobile-First Indexing:</strong> Mobile usability directly impacts search rankings.</li>
          <li><strong>Improved UX:</strong> Mobile-optimized sites reduce bounce rates and boost engagement.</li>
          <li><strong>Competitive Edge:</strong> Superior mobile experience fosters trust and loyalty.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Best Practices for Website Redesigns</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Audit existing site performance, user behavior, and SEO data.</li>
          <li>Set clear, measurable redesign objectives.</li>
          <li>Preserve SEO equity through careful URL and redirect planning.</li>
          <li>Improve navigation, accessibility, and overall user flow.</li>
          <li>Focus on speed and clean performance metrics.</li>
          <li>Test extensively across devices and browsers pre-launch.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How Web Design Affects SEO</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Site Structure:</strong> Logical architecture improves crawlability and indexing.</li>
          <li><strong>Page Speed:</strong> Faster websites rank and convert better.</li>
          <li><strong>Mobile Responsiveness:</strong> Essential for ranking and usability.</li>
          <li><strong>Content Formatting:</strong> Clear headings, readable fonts, and image optimization matter.</li>
          <li><strong>Technical SEO:</strong> Meta tags, schema, and clean URLs enhance visibility.</li>
          <li><strong>User Behavior Signals:</strong> Longer sessions and low bounce rates help rankings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Website Design Trends for 2025</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Minimalist Layouts:</strong> Simple, clear interfaces improve usability and speed.</li>
          <li><strong>Dark Mode & Theme Options:</strong> Enhances user comfort and accessibility.</li>
          <li><strong>Micro-Interactions:</strong> Adds subtle, engaging animations.</li>
          <li><strong>AI Personalization:</strong> Content adapts to user behavior.</li>
          <li><strong>Voice UI:</strong> Prepares sites for voice commands and search.</li>
          <li><strong>Eco-Friendly Design:</strong> Optimize for energy and hosting efficiency.</li>
          <li><strong>Inclusive Design:</strong> Focus on accessibility, ethics, and user equity.</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-4 rounded-md border border-blue-300">
        <h3 className="text-xl font-bold mb-2">Conclusion</h3>
        <p className="mb-2">
          A well-planned website design project ensures your brand has a professional, high-performing, and user-centered presence online.
        </p>
        <p>
          By following modern design practices and aligning strategy with business goals, your site will serve as a powerful tool for growth in 2025 and beyond.
        </p>
      </section>
      
    </main>
  );
}
