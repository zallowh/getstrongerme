import React from 'react';
import '../home.css';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Emailmarketing from '../assets/emailmarketing.png';
import Googleads from '../assets/googleads.png';
import Webdev from '../assets/webdev.jpeg';
import Metaads from '../assets/metaads.jpg';

const Home = () => {
  return (
    <div className='px-5 py-0'>

      {/* Social media icons */}
<div className='px-5 py-0'>
<h1 className='text-blue-300 text-right px-5 text-3xl font-sm blink-text'>CONTACT US</h1>
<div className='mb-4 px-5 py-2'>
            <div style={{ display: 'flex', gap: '20px', fontSize: '4vw', justifyContent: 'flex-end' }}>
              <a href="https://www.facebook.com/profile.php?id=61565659931076&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ color: '#3b5998' }} />
              </a>

              <a href="https://www.instagram.com/strongermersa" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ color: '#E1306C' }} />
              </a>

              <a href="https://x.com/_strongerme?t=qmSwghjZWNxbuuhzaIiEkw&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#1da1f2' }} />
              </a>

              <a href="https://wa.me/27663973313" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ color: '#25d366' }} />
              </a>

              <a href="mailto:info@getstrongerme.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope style={{ color: '#ea4335' }} />
              </a>

              <a href="tel:+27663973313" target="_blank" rel="noopener noreferrer">
                <FaPhone style={{ color: '#4caf50' }} />
              </a>
            </div>
            </div>

      {/* Section 1: Introduction and Overview */}
      <div className='text-white py-12'>
        <h1 className='text-4xl font-extrabold text-blue-300 mb-4'>
          Elevate Your Business with Our Complete Digital Solutions!
        </h1>
        <p className=' text-gray-300 text-2xl font-sm'>
          We deliver customized digital services, including web design, SEO, and marketing strategies, that boost your online presence and help your business grow.
        </p>
      </div>

      {/* Section 2: Static Websites and Deployment */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start p-5'>
        <img src={Webdev} height={300} width={400} className='w-full' />
        <div className='p-0'>
          <h3 className='text-3xl font-bold text-blue-300'>
            Unlock the Full Potential of Your Business Online with Us!
          </h3>
          <h5 className='text-xl text-gray-700 mb-4'>
            Partner with us to create a professional, customized website that drives results.
          </h5>
          <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
            <li>Maximize Your Reach: Tap into new markets and reach customers worldwide.</li>
            <li>Boost Visibility with SEO: Our websites are optimized for search engines.</li>
            <li>Enhanced User Experience: Fast, mobile-friendly, and easy to navigate websites.</li>
            <li>Engage and Convert: Turn visitors into loyal customers with compelling content.</li>
            <li>Secure and Reliable: Enjoy peace of mind with secure and trusted website hosting.</li>
            <li>Ongoing Support and Maintenance: Receive dedicated support after launch.</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Google Ads and SEO */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start  p-10'>
        <img src={Googleads} height={200} width={200} className='w-full' />
        <div className='p-0'>
          <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
            Drive More Traffic with Google Ads & SEO
          </h2>
          <p className='text-xl text-gray-700 mb-6'>
            Our Google Ads and SEO services will help your business attract more visitors and generate higher returns.
          </p>
          <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
            <li>Targeted Ads: Reach the right customers with personalized Google Ads campaigns.</li>
            <li>Keyword Optimization: Optimize your website with effective keywords for relevant searches.</li>
            <li>Boost Organic Traffic: Increase your site's visibility on Google without paying for ads.</li>
            <li>Higher Conversion Rates: Convert more clicks into customers with optimized content.</li>
          </ul>
        </div>
      </div>

      {/* Section 4: Facebook & Instagram Ads */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start p-10'>
        <img src={Metaads} height={200} width={200} className='w-full' />
        <div className='p-0'>
          <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
            Expand Your Reach with Facebook & Instagram Ads
          </h2>
          <p className='text-xl text-gray-700 mb-6'>
            We create and manage effective social media ads that resonate with your audience and drive results.
          </p>
          <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
            <li>Tailored Campaigns: Customized ads based on your business goals and target audience.</li>
            <li>Drive Engagement: Reach users where they’re most active with ads that increase likes, shares, and comments.</li>
            <li>Increase Conversions: Our ads drive sales and maximize ROI for your business.</li>
            <li>Detailed Analytics: Track your ad performance with in-depth reports.</li>
          </ul>
        </div>
      </div>

      {/* Section 5: Email Marketing */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start p-10'>
        <img src={Emailmarketing} height={200} width={200} className='w-full' />
        <div className='p-0'>
          <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
            Boost Engagement with Email Marketing
          </h2>
          <p className='text-xl text-gray-700 mb-6'>
            Email marketing is one of the most powerful ways to stay connected with your customers. Our campaigns are designed to nurture relationships and drive conversions.
          </p>
          <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
            <li>Personalized Emails: Tailor your message to each customer with targeted content.</li>
            <li>Boost Customer Loyalty: Keep customers coming back with regular, value-driven emails.</li>
            <li>Increase Sales: Use email promotions to drive sales and maximize ROI.</li>
            <li>Track Campaign Performance: Get detailed analytics on open rates, click-throughs, and conversions.</li>
          </ul>
        </div>
      </div>

      <div className='p-10'>
        <hr className='w-full my-4 border-t border-gray-300' />
        <h1 className='block my-5 text-2xl font-bold text-blue-300 hover:text-gray-700 text-center blink-text'>
          Your Graphical User Interface(GUI) Is Not The Best, If It Is Not From Us!
        </h1>
        <hr className='w-full my-4 border-t border-gray-300' />
      </div>

          </div>

    </div>
  );
};

export default Home;
