import React from "react";

export const metadata = {
  title: "Website Design & landing page Audit | GetStrongerMe - Mobile-Friendly Web Services",
  description:
    "Get a fast, mobile-optimized website with up to 5 pages, contact forms, and SEO-ready layout. Includes free performance audit and SSL-secured hosting.",
};


const Websites = () => {
    return(
       <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Side */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img
        src="/website.jpg"
        alt="Website Design & Auditing"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Content Side */}
    <div className="md:w-1/2 md:pl-10">
      <h3 className="text-3xl font-bold  mb-4">Website Design & Auditing</h3>
      <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
        Get a professional, mobile-friendly website built to impress and perform. We design with your brand in mind, and then audit your site to make sure it's optimized for speed, security, and SEO.
      </p>
      <ul className="list-disc pl-6 text-gray-800 space-y-2 font-semibold">
        <li>unlimited custom pages (Home, Services, About Us, Contact, Gallery)</li>
        <li>website user-journey and UX-writing</li>
        <li>Mobile friendly and responsive designs</li>
        <li>Contact forms and click-to-call buttons</li>
        <li>speed and performance audit</li>
        <li>landing page audit</li>
        <li>Domain registration and SSL security setup</li>
      </ul>
      <p className="mt-6 text-blue-800 font-medium">
        Don’t just have a website — have one that works hard for your brand. Fast. Functional. Found online.
      </p>
    </div>
  </div>
</section>

    )
}

export default Websites;