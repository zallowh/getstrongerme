

import React from "react";
import ContactForm from "@/components/contactForm";

export const metadata = {
  title: "Contact Us | GetStrongerMe - Website & SEO Services",
  description: "Have questions? Need a quote? Contact GetStrongerMe for affordable website design, SEO services, and digital marketing support in Johannesburg.",
};


export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold m-16 text-center">We Value Your Time: We Respond Instantly to Every Inquiry!</h1>
      
      <div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-10 text-center">
    <a
      href="tel:+27663973313"
      className="inline-block bg-black hover:text-blue-600 text-white text-md font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300"
    >
      Call Us: +27 66 397 3313
    </a>

    <a
      href="mailto:zallowhmncube@gmail.com"
      className="inline-block bg-black hover:text-blue-600 text-white text-md font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300"
    >
      Email Us: zallowhmncube@gmail.com
    </a>
  </div>
</div>

      <ContactForm />
    </main>
  );
}
