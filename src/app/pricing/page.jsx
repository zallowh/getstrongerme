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
import Features from "@/components/features";
import Link from "next/link";
import { 
  Globe, 
  Shield, 
  Mail, 
  TrendingUp, 
  Check, 
  Star,
  Phone,
  Users
} from 'lucide-react';

const plans = [
  {
    tier: "Bronze",
    name: "Business Profile + Basic Website",
    icon: Globe,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
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
    icon: Shield,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
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
    icon: Mail,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
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
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
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
        <div className="flex items-center justify-center mb-4">
          
          <h3 className="text-4xl font-extrabold">
            Get a Custom Personalized Quote
          </h3>
          
        </div>
        <p className="text-lg text-gray-800 font-bold mb-16">
          Not sure which package fits your business? Contact us for a tailored solution.
        </p>
        <Link href="/contactus">
          <Button className="bg-blue-600 hover:bg-blue-300 text-white px-6 py-5 text-lg rounded-lg">
            
            Contact Us
          </Button>
        </Link>
      </div>

      {/* ✅ features section */}
      <Features />

      {/* ✅ Pricing Tiers */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 mt-16">
          Our Tiers
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon;
          return (
            <Card 
              key={index} 
              className={`flex flex-col justify-between shadow-lg bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200`}
            >
              <CardHeader className={`${plan.bgColor} rounded-t-lg`}>
                <div className="flex items-center justify-center mb-2">
                  <IconComponent className={`w-12 h-12 ${plan.color}`} />
                </div>
                <CardTitle className="text-2xl font-extrabold text-center">
                  {plan.tier}
                </CardTitle>
                <CardDescription className="text-gray-800 text-center font-medium">
                  {plan.name}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm text-gray-800 font-semibold">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex flex-col items-start space-y-2 pt-6">
                <div className="text-center w-full">
                  <p className="text-2xl font-bold text-blue-600">{plan.price}</p>
                  <p className="text-sm text-gray-600 font-semibold">{plan.setup}</p>
                </div>
                <Button
                  className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-300 transition-colors duration-200"
                  onClick={() => handleEnquiry(plan.name)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire Now
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;