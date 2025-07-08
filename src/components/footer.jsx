import React from "react";

import {
  Facebook,
  Instagram,
  Music2 // used as TikTok icon substitute
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-[700px] mx-auto px-6 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 md:pl-12">
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
  <p className="font-semibold mb-2">Call us: +27 66 397 3313</p>
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



      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        &copy; {new Date().getFullYear()} getstrongerme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
