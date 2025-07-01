"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Business Profile & Hosting",
    description: "Official online business profile setup + fast web hosting",
    content: [
      "Google Business Profile setup (Google Maps visibility)",
      "Business contact info, address, hours, and service details",
      "Hosting for your basic website (blazing fast South African server)",
      "Optional email setup like info@yourbusiness.co.za",
    ],
    why: "Be found when customers search your business name on Google! Stay online 24/7 with fast hosting.",
  },
  {
    title: "Website Design & Auditing",
    description: "Mobile-friendly website design plus technical site audit",
    content: [
      "Up to 5 pages (Home, Services, About Us, Contact, Gallery)",
      "Fast-loading and SEO-ready layout",
      "Contact forms and click-to-call buttons",
      "Free speed and performance audit",
      "Domain and SSL Security setup",
    ],
    why: "First impressions count! Your website will work on all devices and load fast. We’ll also check for technical SEO leaks.",
  },
  {
    title: "Organic SEO (12-Month Growth Plan)",
    description: "Boost your Google rankings and get free organic traffic",
    content: [
      "Monthly On-page SEO optimization",
      "Local SEO (Geo-targeting in Johannesburg)",
      "Answer Engine Optimization (AEO) for voice search",
      "Monthly SEO performance reports",
      "Google Maps ranking improvements",
      "Keyword research & meta descriptions",
    ],
    why: "Get more free traffic, calls, and leads from customers searching online without paying for ads. This is a long-term growth plan.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                {feature.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">{feature.why}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
