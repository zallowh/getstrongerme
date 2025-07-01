"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        &copy; {new Date().getFullYear()} getstrongerme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
