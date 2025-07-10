'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsUpDown, AlignJustify, X } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide on scroll down, show on scroll up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); // Close dropdown when hiding
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const serviceLinks = [
    { href: "/ourservice/seo", label: "Google SEO" },
    { href: "/ourservice/websites", label: "Web Design" },
    { href: "/ourservice/profile", label: "Business Profile" },
    { href: "/ourservice/hosting", label: "Email Hosting" },
    { href: "/ourservice/googleAds", label: "Google Ads" }
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Our Pricing" },
    { href: "/About", label: "About us" },
    { href: "/contactus", label: "Contact us" },
    { href: "/blog", label: "Blog" }
  ];

  const isServiceActive = serviceLinks.some(service => isActive(service.href));

  return (
    <header 
      className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="">
        <h1 className="text-2xl font-bold text-blue-600 px-4">Strongerme RSA</h1>
        <p className="text-xsm font-bold text-gray-800 px-4">Popularity | Traffic | Conversions</p>
        
        <nav className="flex items-center justify-between px-6 py-2 mt">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex gap-4 ml-auto mt-0">
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
            <Link href="/blog">
              <Button 
                className={
                  isActive("/blog") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-transparent text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }
              >
                blog
              </Button>
            </Link>

          </div>

          {/* Mobile Hamburger Menu - Only visible on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown - Only visible when open on mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
            {/* Main Navigation Links */}
            {mainLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button
                  variant="ghost"
                  className={
                    isActive(link.href)
                      ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100 mb-1"
                      : "w-full justify-start hover:bg-gray-50 hover:text-blue-600 mb-1"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            {/* Services Section */}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <p className="text-sm font-medium text-gray-500 px-3 py-1">Our Services</p>
              {serviceLinks.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Button
                    variant="ghost"
                    className={
                      isActive(service.href)
                        ? "w-full justify-start bg-blue-50 text-blue-600 hover:bg-blue-100 mb-1 pl-6"
                        : "w-full justify-start hover:bg-gray-50 hover:text-blue-600 mb-1 pl-6"
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};