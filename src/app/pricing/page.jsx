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
import { Button } from "@/components/ui/button";
import Link from "next/link";



const plans = [
  {
    tier: "Bronze",
    name: "Business Profile + Basic Website",
    features: [
      "Mobile-friendly 1-3 page website",
      "Google Maps listing support",
      "Contact form",
      "Business info & services page",
      "Basic design (no ongoing support)",
      "1 revision",
    ],
    price: "R0.00/month",
    setup: "R800 setup",
  },
  {
    tier: "Silver",
    name: "Profile + Basic Maintenance Plan",
    features: [
      "Everything in Bronze, plus:",
      "Monthly site updates (text/images)",
      "Website backups",
      "Minor bug fixes",
      "Security updates",
    ],
    price: "R250/month",
    setup: "R1000 setup",
  },
  {
    tier: "Gold",
    name: "Maintenance + Email Hosting",
    features: [
      "Everything in Silver, plus:",
      "Business email hosting (e.g., info@yourdomain.co.za)",
      "Up to 5 email accounts",
      "Email support",
      "Monthly uptime monitoring",
    ],
    price: "R500/month",
    setup: "R1250 setup",
  },
  {
    tier: "Platinum",
    name: "Full Maintenance + Organic SEO",
    features: [
      "Everything in Gold, plus:",
      "Basic monthly SEO (on-page SEO)",
      "Google My Business optimization",
      "Monthly keyword tracking",
      "Content updates (blog/news if needed)",
      "Sitemap & SEO meta tags management",
    ],
    price: "R750/month",
    setup: "R1500 setup",
  },
];

const Pricing = () => {
  const handleEnquiry = (planName) => {
    const body = encodeURIComponent(
      `Hi, I'm interested in your ${planName} plan. Please send me more info.`
    );
    window.open(`https://wa.me/27663973313?text=${body}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* ✅ Header */}
      <div className="text-center mb-10 mt-16">
        <h1 className="text-4xl font-extrabold text-black mb-4">
          Get a Custom Personalized Quote
        </h1>
        <p className="text-lg text-black font-bold mb-16">
          Not sure which package fits your business? Contact us for a tailored solution.
        </p>
        <Link href="/contactus">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-lg rounded-lg">
            Contact Us
          </Button>
        </Link>
      </div>

      {/* ✅ Pricing Tiers */}
      <h1 className="text-4xl font-extrabold text-black mb-4 mt-16 text-center">
          Our tiers
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-lg bg-white text-black">
            <CardHeader>
              <CardTitle className="text-2xl font-extrabold">{plan.tier}</CardTitle>
              <CardDescription className="text-black">{plan.name}</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="list-disc pl-4 space-y-2 text-sm text-black">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col items-start space-y-2">
              <p className="text-lg font-bold">{plan.price}</p>
              <p className="text-sm">{plan.setup}</p>
              <Button
                className="w-full mt-2 bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => handleEnquiry(plan.name)}
              >
                Enquire Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
