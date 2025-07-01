'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="">
        <h1 className="text-2xl font-bold text-blue-600 px-4">Getstrongerme</h1>
        <p className="text-xsm font-bold text-black px-4">popularity | traffic | conversions</p>
        <nav className="flex items-center px-6 py-2 mt">
          <div className="flex gap-4 ml-auto mt-0">
            <Link href="/">
              <Button 
                className={
                  isActive("/") 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-black  hover:text-blue-600 hover:bg-gray-100"
                }
              >
                Home
              </Button>
            </Link>
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

export default NavBar;