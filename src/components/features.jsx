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
  {
  title: "Google Ads (Pay-Per-Click Campaigns)",
  description: "Drive instant traffic and leads with targeted Google Ads",
  content: [
    "Search & Display Ads setup and management",
    "Keyword research and ad copywriting",
    "Conversion tracking (calls, forms, WhatsApp)",
    "Ad scheduling and location targeting",
    "Performance reports via Looker Studio",
    "A/B testing and budget optimization",
  ],
  why: "Reach potential customers instantly. Perfect for businesses that want fast results and measurable ROI.",
  color: "bg-green-50",
  titleColor: "text-blue-600",
}

];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center mb-10 mt-16">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Our Features
        </h2>
        <p className="text-lg text-gray-700 font-bold mb-16">
          Everything you need to establish and grow your online presence
        </p>
      </div>

      {/* Features Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, index) => (
    <Card 
      key={index} 
      className="flex flex-col justify-between shadow-lg bg-white text-gray-800 border-2 border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 cursor-pointer group"
    >
      <CardHeader className={`${feature.color} rounded-t-lg transition-all duration-300 group-hover:brightness-110`}>
        <CardTitle className={`text-2xl font-extrabold text-center ${feature.titleColor} transition-all duration-300 group-hover:scale-105`}>
          {feature.title}
        </CardTitle>
        <CardDescription className="text-gray-800 text-center font-bold transition-all duration-300 group-hover:text-gray-900">
          {feature.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6 transition-all duration-300 group-hover:bg-gray-50">
        <ul className="space-y-3 text-sm text-gray-900 font-semibold">
          {feature.content.map((item, idx) => (
            <li key={idx} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-125"></span>
              <span className="transition-all duration-300 group-hover:text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6">
        <div className="w-full">
          <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-inner">
            <p className="text-sm text-gray-700 font-medium italic transition-all duration-300 group-hover:text-gray-800">
              <span className="font-bold text-blue-600 transition-all duration-300 group-hover:text-blue-700">Why this matters:</span> {feature.why}
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