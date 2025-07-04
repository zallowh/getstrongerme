'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const serviceLinks = [
    { href: "/ourservice/seo", label: "Google SEO" },
    { href: "/ourservice/websites", label: "Web Design" },
    { href: "/ourservice/profile", label: "Business Profile" },
    { href: "/ourservice/hosting", label: "Email Hosting" }
  ];

  // Check if any service page is active
  const isServiceActive = serviceLinks.some(service => isActive(service.href));

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="">
        <h1 className="text-2xl font-bold text-blue-600 px-4">Strongerme RSA</h1>
        <p className="text-xsm font-bold text-gray-800 px-4">Popularity | Traffic | Conversions</p>
        <nav className="flex items-center px-6 py-2 mt">
          <div className="flex gap-4 ml-auto mt-0">
            <Link href="/">
              <Button 
                className={
                  isActive("/") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-gray-900 hover:text-blue-600 hover:bg-gray-100"
                }
              >
                Home
              </Button>
            </Link>
            
            {/* Collapsible Services Dropdown */}
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="relative"
            >
              <CollapsibleTrigger asChild>
                <Button
                  className={
                    isServiceActive
                      ? "bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                      : "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-gray-100 flex items-center gap-2"
                  }
                  onMouseEnter={() => setIsOpen(true)}
                >
                  Our Services
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent
                className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg min-w-48 z-50"
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="py-2">
                  {serviceLinks.map((service, index) => (
                    <Link key={index} href={service.href}>
                      <Button
                        variant="ghost"
                        className={
                          isActive(service.href)
                            ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100"
                            : "w-full justify-start hover:bg-gray-50 hover:text-blue-600"
                        }
                      >
                        {service.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Link href="/pricing">
              <Button 
                className={
                  isActive("/pricing") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }
              >
                Our Pricing
              </Button>
            </Link>
            <Link href="/About">
              <Button 
                className={
                  isActive("/About") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }
              >
                About us
              </Button>
            </Link>
            <Link href="/contactus">
              <Button 
                className={
                  isActive("/contactus") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }
              >
                Contact us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};