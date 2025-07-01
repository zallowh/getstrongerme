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
    color: "bg-blue-50",
    titleColor: "text-blue-600",
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
    why: "First impressions count! Your website will work on all devices and load fast. We'll also check for technical SEO leaks.",
    color: "bg-green-50",
    titleColor: "text-blue-600",
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
    color: "bg-blue-50",
    titleColor: "text-blue-600",
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center mb-10 mt-16">
        <h1 className="text-4xl font-extrabold text-black mb-4">
          Our Features
        </h1>
        <p className="text-lg text-black font-bold mb-16">
          Everything you need to establish and grow your online presence
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="flex flex-col justify-between shadow-lg bg-white text-black hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200"
          >
            <CardHeader className={`${feature.color} rounded-t-lg`}>
              <CardTitle className={`text-2xl font-extrabold text-center ${feature.titleColor}`}>
                {feature.title}
              </CardTitle>
              <CardDescription className="text-black text-center font-medium">
                {feature.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-black">
                {feature.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-6">
              <div className="w-full">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium italic">
                    <span className="font-bold text-blue-600">Why this matters:</span> {feature.why}
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;