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
        <div className='text-white '>
          <h1 className='text-4xl font-extrabold text-blue-300 mb-4 px-5'>
            Elevate Your Business with Our Complete Digital Solutions!
          </h1>
          <p className='text-gray-300 text-2xl font-sm p-5'>
            In today's fast-paced digital world, having a solid online presence isn't just a luxury—it's a necessity. At StrongerMe, we believe that every business deserves the chance to thrive online. Whether you're a startup or an established brand, we have the tools and strategies to help you succeed.
          </p>

          <p className='text-gray-300 text-2xl font-sm px-5'>
            We specialize in <strong>digital solutions</strong> that enhance your <strong>online presence</strong> and drive <strong>business growth</strong>. Our services are designed to meet the unique needs of businesses looking to expand their reach.
          </p>
          <p className='text-gray-300 text-xl mt-4 px-5'>
            <strong>Customized digital services for small businesses</strong> help you scale, while our <strong>comprehensive digital solutions</strong> ensure lasting growth.
          </p>

          <p className='text-gray-300 text-xl mt-4 px-5'>
            <strong>Our tailored services ensure your business reaches its target audience, maximizes sales, and stays ahead in the competitive landscape.</strong>
          </p>
          <p className='text-xl text-gray-200 mt-6 italic px-5 py-10'>
            The way you found us is the way your customers will find you. Think about how effortlessly you discovered us, and imagine the same for your business.
          </p>
        </div>

        {/* Section 2: Static Websites and Deployment */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-5 py-10'>
          <img src={Webdev} height={300} width={400} className='w-full' />
          <div className='p-0'>
            <h3 className='text-3xl font-bold text-blue-300'>
              Unlock the Full Potential of Your Business Online with Us!
            </h3>
            <p className='text-xl text-gray-700 mb-4'>
              Partner with us to create a professional website that is tailored to your business needs and drives customer engagement.
            </p>
            <p className='text-gray-300 text-lg mb-4'>
              Our custom website development services ensure your business achieves greater visibility and engagement.
            </p>
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
              <li>Maximize Your Reach: Tap into new markets with a mobile-friendly website that enhances user experience.</li>
              <li>Boost Visibility with SEO: Our SEO-optimized websites help increase your site's ranking on Google.</li>
              <li>Engage and Convert: Turn visitors into loyal customers with content that drives engagement.</li>
              <li>Secure and Scalable: Built to last, ensuring your website can handle growth over time.</li>
              <li>Custom Integrations: Tailored solutions that fit your business workflows and needs.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Google Ads and SEO */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-5 py-25'>
          <img src={Googleads} height={200} width={200} className='w-full' />
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
              Drive More Traffic with Google Ads & SEO
            </h2>
            <p className='text-xl text-gray-700 mb-6'>
              Our Google Ads and SEO services are designed to increase organic traffic and help your business rank higher on Google.
            </p>
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
              <li>Targeted Ads: Personalized Google Ads campaigns to boost traffic and engagement.</li>
              <li>Boost Organic Traffic: Increase your site's visibility without paying for ads.</li>
              <li>Higher Conversion Rates: Optimize your content for better Google rankings.</li>
              <li>Comprehensive Keyword Strategy: Target the right audience with the most effective keywords.</li>
              <li>Continuous Optimization: We regularly adjust campaigns to maximize ROI.</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Facebook & Instagram Ads */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-5 py-25'>
          <img src={Metaads} height={200} width={200} className='w-full' />
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
              Expand Your Reach with Facebook & Instagram Ads
            </h2>
            <p className='text-xl text-gray-700 mb-6'>
              Our tailored Facebook Ads and Instagram advertising strategies increase brand awareness and boost sales.
            </p>
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
              <li>Tailored Campaigns: Ads customized for your target audience, driving engagement.</li>
              <li>Drive Engagement: Increase brand visibility with social media ads that work.</li>
              <li>Increase Conversions: Higher sales through effective social media campaigns.</li>
              <li>In-Depth Analytics: Get real-time insights into how your ads are performing.</li>
              <li>Audience Retargeting: Re-engage customers who have interacted with your brand before.</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Email Marketing */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-5 py-25'>
          <img src={Emailmarketing} height={200} width={200} className='w-full' />
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300 mb-4'>
              Boost Engagement with Email Marketing
            </h2>
            <p className='text-xl text-gray-700 mb-6'>
              Our personalized email marketing strategies are designed to nurture customer relationships, increase customer loyalty, and drive conversions.
            </p>
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-lg'>
              <li>Personalized Emails: Tailored content that resonates with your audience.</li>
              <li>Boost Customer Loyalty: Keep customers coming back with regular, value-driven emails.</li>
              <li>Increase Sales: Use email promotions to drive sales and maximize ROI.</li>
              <li>Track Campaign Performance: Get detailed analytics on open rates, click-throughs, and conversions.</li>
              <li>Automated Campaigns: Set up drip campaigns to continuously engage with leads.</li>
            </ul>
          </div>
        </div>


        <div className=''>
          <hr className='w-full my-4 border-t border-gray-300' />
          <h1 className='block my-5 text-2xl font-bold text-blue-300 hover:text-gray-700 text-center blink-text'>
            Your Graphical User Interface(GUI) Is Not The Best, If It Is Not From Us!
          </h1>
          <hr className='w-full my-4 border-t border-gray-300' />
        </div>
        

        {/* Section 6: Sales Maximization */}
        <div className='px-5'>
          <p className='text-xl text-gray-600'>
            Maximizing sales is the key to long-term success for any business. By reaching your customers at the right time, with the right message, you can drive meaningful engagement and conversions. Our digital strategies ensure that your business remains at the forefront of your industry, consistently attracting new customers
           </p>
          </div>
           
            {/* Section 7: End Section */}
    <div className='px-5 py-20'>
      <h2 className='text-3xl font-extrabold text-blue-300 mb-6'>
        Don't Let Lost Sales Be Your Story
      </h2>
      <p className='text-xl text-gray-200'>
        Not making sales can critically impact your business. When your products or services are not reaching the right audience, you lose opportunities. A strategic, well-optimized digital presence prevents this from happening, keeping your business thriving.
      </p>
    </div>
  </div> 
 </div>
)
}
  
export default Home; 