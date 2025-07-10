'use client';

import React, { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Music2 // used as TikTok icon substitute
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior for footer
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Always show footer when user is near the bottom of the page
      if (currentScrollY + windowHeight >= documentHeight - 100) {
        setIsVisible(true);
      }
      // Show footer when scrolling down (user might be looking for it)
      else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(true);
      }
      // Hide footer when scrolling up (user is reading content)
      else if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
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

  return (
    <footer 
      className={`bg-gray-900 text-gray-300 py-6 mt-10 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/4 md:pl-12">
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-blue-600 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/ourservice/googleAds" className="text-blue-600 hover:text-white">
                Google Ads
              </a>
            </li>
            <li>
              <a href="/ourservice/seo" className="text-blue-600 hover:text-white">
                SEO packages
              </a>
            </li>
            <li>
              <a href="/ourservice/websites" className="text-blue-600 hover:text-white">
                Website designs
              </a>
            </li>
            <li>
              <a href="/ourservice/hosting" className="text-blue-600 hover:text-white">
                Professional emails
              </a>
            </li>
            <li>
              <a href="/About" className="text-blue-600 hover:text-white">
                Who we are?
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="m-6">
          <a href="/contactus" className="text-blue-600 hover:text-white mb-4">Leave a message</a>
          <p className="font-semibold mb-2">Follow us:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-blue-600 hover:text-white">
              <Facebook className="h-5 w-5" />
              <a href="https://www.facebook.com/profile.php?id=61565659931076" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 text-blue-600 hover:text-white">
              <Instagram className="h-5 w-5" />
              <a href="https://instagram.com/strongermersa" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 text-blue-600 hover:text-white">
              <Music2 className="h-5 w-5" />
              <a href="https://www.tiktok.com/@strongerme_rsa" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 md:pl-12">
        <p className="font-semibold">Resources</p>
          <ul className="space-y-2">
            <li>
              <a href="/blog" className="text-blue-600 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/blog/free-backlinks-sa" className="text-blue-600 hover:text-white">
                free backlinks
              </a>
            </li>
            <li>
              <a href="/blog/domain-rating-vs-authority" className="text-blue-600 hover:text-white">
                Domain Rating + Domain Authority
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4 md:pl-16">
          <p className="font-semibold mb-2">FAQ?</p>
          <ul className="space-y-2">
            <li>
              <a href="/faq/choose-us" className="text-blue-600 hover:text-white">
                choosing an agency
              </a>
            </li>
            <li>
              <a href="/faq/creating-googleads" className="text-blue-600 hover:text-white">
                Starting your Ads
              </a>
            </li>
            <li>
              <a href="/faq/seo-basics" className="text-blue-600 hover:text-white">
                What is SEO
              </a>
            </li>
            <li>
              <a href="/faq/website-design-project" className="text-blue-600 hover:text-white">
                website factors
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        &copy; {new Date().getFullYear()} getstrongerme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;