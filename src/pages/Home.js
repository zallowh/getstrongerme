import React from 'react';
import '../home.css';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import Emailmarketing from '../assets/emailmarketing.png';
import Googleads from '../assets/googleads.png';
import Webdev from '../assets/webdev.jpeg';
import Metaads from '../assets/metaads.jpg';

const Home = () => {
  return (
    <div className='px-5 py-0'>

      {/* Social media icons */}
      <div className='px-5 py-0'>
        <h4 className='text-blue-300 text-right px-5 text-3xl font-sm blink-text'>CONTACT US</h4>
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
    Transform Your Business with Our All-Inclusive Digital Solutions!
  </h1>
  <p className='text-gray-300 text-2xl font-sm p-5'>
    Welcome to StrongerMe! We empower businesses to thrive in the digital world by providing expert solutions that yield measurable results. In a rapidly changing digital landscape, simply having a website or social media presence is not enough. Success requires a carefully crafted strategy, consistent execution, and the right tools to unlock your business's full potential. Our focus is on helping you grow with our comprehensive services tailored to your unique needs. We pride ourselves on being one of the <strong>leading digital marketing agencies in South Africa</strong>, and we are here to assist you in building a powerful <strong>online presence</strong> that stands out in the competitive market.
  </p>

  <p className='text-gray-300 text-2xl font-sm px-5'>
    In this fast-paced era, effective <strong>digital marketing</strong> is essential for the growth and sustainability of any business. Whether you're targeting local customers through <strong>digital marketing in Johannesburg</strong> or expanding your reach across the country with <strong>digital marketing in South Africa</strong>, our team provides customized solutions to help you meet your goals. We understand the importance of reaching the right audience at the right time, which is why we specialize in <strong>advertising online</strong> through various platforms including <strong>social media advertising</strong>, search engines, and email campaigns. With StrongerMe, your business will thrive in an increasingly digital world.
  </p>

  <p className='text-gray-300 text-xl mt-4 px-5'>
    <strong>Our mission is to help your business connect with the right audience, increase sales, and maintain a competitive edge.</strong>
    We offer a wide range of services, from <strong>brand advertising</strong> and search engine optimization (SEO), to web development, content creation, and <strong>social media marketing in South Africa</strong>. By leveraging data-driven insights and industry trends, we ensure that your business stays ahead of competitors while delivering personalized, impactful campaigns that resonate with your customers. Whether it’s building brand awareness or driving sales, we’ve got the expertise to help your business succeed.
  </p>

  <p className='text-xl text-gray-200 mt-6 italic px-5 py-10'>
    Just as you’ve easily discovered us, your customers can discover you. Let us help your business achieve visibility and growth in the digital world with our strategic, data-driven approach to <strong>digital marketing</strong>. Success is just one click away.
  </p>
</div>


        {/* Section 2: Static Websites and Deployment */}
    <div className=' px-5 py-10 m-0'>
          <div className='py-0 px-5 m-0'>
            <h3 className='text-3xl font-bold text-blue-300'>
              Unlock the Full Potential of Your Business Online with Us! Static Websites and Custom Web Development
            </h3>
            <p className='text-xl text-gray-700 '>
              Partner with us to create a professional website that is tailored to your business needs and drives customer engagement.
            </p>
            <p className='text-gray-300 text-lg '>
              Our custom website development services ensure your business achieves greater visibility and engagement.
              In today’s competitive market, having a user-friendly, secure, and visually appealing website is crucial for any business. At StrongerMe, we develop custom static websites designed to:
            </p>

            <div className='text-gray-300 text-lg p-5 mb-6'>
            <p>
              <strong>Capture User Attention:</strong> Beautifully designed, responsive websites that work seamlessly across all devices.
            </p>
            <p>
              <strong>Faster Load Times:</strong> Optimized websites that load quickly, reducing bounce rates and increasing user engagement.
            </p>
            <p>
              <strong>Cost-Effective Development:</strong> A static website is ideal for businesses looking to establish an online presence quickly and affordably.
            </p>
            <p>
              <strong>Easy Maintenance:</strong> Our static websites require minimal updates and are perfect for small businesses or startups.
            </p>
            <p>
              <strong>Optimized for Conversions:</strong> Every element of the website is designed to turn visitors into customers, through various methods or clear calls to action.
            </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start py-0 px-5 m-0'>
            <img src={Webdev} height={300} width={400} alt='webdev img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Maximize Your Reach: Tap into new markets with a mobile-friendly website that enhances user experience.</li>
              <li>Boost Visibility with SEO: Our SEO-optimized websites help increase your site's ranking on Google.</li>
              <li>Engage and Convert: Turn visitors into loyal customers with content that drives engagement.</li>
              <li>Secure and Scalable: Built to last, ensuring your website can handle growth over time.</li>
              <li>Custom Integrations: Tailored solutions that fit your business workflows and needs.</li>
            </ul>
          </div>

        <p className='text-xl text-gray-200 italic p-5'>
          <strong>Stats:</strong> Did you know that 94% of first impressions of your business website are design-related? Moreover, 88% of online consumers are less likely to return to a site after a bad experience.
        </p> 
      </div>

        {/* Section 3: Google Ads and SEO */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300 '>
              Drive More Traffic with Google Ads & Search Engine Optimization (SEO)
            </h2>
            <p className='text-xl text-gray-700 '>
              Our Google Ads and SEO services are designed to increase organic traffic and help your business rank higher on Google.
            </p>
            <p className='text-gray-300 text-lg '>
            Get your business in front of the people who are searching for your services with our expert Google Ads and SEO strategies. Here’s how we do it:
            </p>

            <div className='text-gray-300 text-lg p-5 mb-6'>
              <p>
                <strong>Precise Targeting:</strong> We identify your target market and create ads that speak directly to their needs.
              </p>
              <p>
                <strong>Local SEO Focus:</strong> Target customers in your geographical area with local SEO techniques that help your business rank on Google Maps and local searches.
              </p>
              <p>
                <strong>Competitor Analysis:</strong> Stay ahead of your competitors by understanding their strategies and optimizing your campaigns accordingly.
              </p>
              <p>
                <strong>Performance Tracking:</strong> We use advanced analytics to track and optimize the performance of your ads, ensuring the best possible ROI.
              </p>
              <p>
                <strong>Ad Extensions:</strong> Enhance your Google Ads with location, call, and site link extensions that boost visibility.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Googleads} height={200} width={200} alt='googleleads img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Targeted Ads: Personalized Google Ads campaigns to boost traffic and engagement.</li>
              <li>Boost Organic Traffic: Increase your site's visibility without paying for ads.</li>
              <li>Higher Conversion Rates: Optimize your content for better Google rankings.</li>
              <li>Comprehensive Keyword Strategy: Target the right audience with the most effective keywords.</li>
              <li>Continuous Optimization: We regularly adjust campaigns to maximize ROI.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> Companies using SEO experience an average increase in lead generation by 14.6%. Meanwhile, businesses earn R2 for every R1 spent on Google Ads, making it one of the most cost-effective marketing strategies.
          </p>
      </div>

        {/* Section 4: Facebook & Instagram Ads */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300'>
              Expand Your Reach with Facebook & Instagram Ads
            </h2>
            <p className='text-xl text-gray-700'>
              Our tailored Facebook Ads and Instagram advertising strategies increase brand awareness and boost sales.
            </p>
            <p className='text-gray-300 text-lg '>
            With billions of active users on Facebook and Instagram, social media advertising is one of the most effective ways to reach your audience. Here’s what we offer:
            </p>

            <div className='text-gray-300 text-lg  p-5 mb-6'>
              <p>
                <strong>Creative Content:</strong> Our team creates engaging, scroll-stopping content that resonates with your audience.
              </p>
              <p>
                <strong>Lookalike Audiences:</strong> Reach new potential customers who are similar to your existing customer base with our advanced targeting strategies.
              </p>
              <p>
                <strong>Conversion Tracking:</strong> Know exactly which ads are driving traffic and sales with our comprehensive conversion tracking tools.
              </p>
              <p>
                <strong>Ad Optimization:</strong> We continuously test and refine your ads to ensure optimal performance across Facebook and Instagram.
              </p>
              <p>
               <strong> Brand Storytelling:</strong> Use powerful visuals and engaging narratives to connect with your audience on a deeper level.
              </p>
            </div>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Metaads} height={200} width={200} alt='metaAds img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Tailored Campaigns: Ads customized for your target audience, driving engagement.</li>
              <li>Drive Engagement: Increase brand visibility with social media ads that work.</li>
              <li>Increase Conversions: Higher sales through effective social media campaigns.</li>
              <li>In-Depth Analytics: Get real-time insights into how your ads are performing.</li>
              <li>Audience Retargeting: Re-engage customers who have interacted with your brand before.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> On average, Facebook Ads convert at 9.21%, making it one of the highest-converting platforms. Additionally, 68% of users say they have purchased a product directly from seeing an Instagram ad.
          </p>
        </div>

        {/* Section 5: Email Marketing */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h2 className='text-3xl font-extrabold text-blue-300 '>
              Boost Engagement with Email Marketing
            </h2>
            <p className='text-xl text-gray-700'>
              Our personalized email marketing strategies are designed to nurture customer relationships, increase customer loyalty, and drive conversions.
            </p>
            <p className='text-gray-300 text-lg '>
              Keep your customers engaged and coming back for more with personalized, targeted email campaigns. Our email marketing services include:
            </p>

            <div className='text-gray-300 text-lg  p-5 mb-6'>
              <p>
                <strong>Segmentation: </strong>We segment your audience to ensure each customer receives emails tailored to their interests and behavior.
              </p>
              <p>
                <strong>Automated Workflows:</strong> Set up drip campaigns that nurture leads and convert them into customers over time.
              </p>
              <p>
                <strong>Interactive Content:</strong> Use polls, surveys, and interactive elements to engage your email subscribers.
              </p>
              <p>
                <strong>Personalization:</strong> Send emails with personalized subject lines and content to increase open rates and engagement.
              </p>
              <p>
                <strong>Re-Engagement Campaigns:</strong> Win back inactive subscribers with strategic re-engagement campaigns that reignite their interest in your business.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Emailmarketing} height={200} width={200} alt='email marketing img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Personalized Emails: Tailored content that resonates with your audience.</li>
              <li>Boost Customer Loyalty: Keep customers coming back with regular, value-driven emails.</li>
              <li>Increase Sales: Use email promotions to drive sales and maximize ROI.</li>
              <li>Track Campaign Performance: Get detailed analytics on open rates, click-throughs, and conversions.</li>
              <li>Automated Campaigns: Set up drip campaigns to continuously engage with leads.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> Email marketing delivers an average ROI of R4 for every R1 spent. Moreover, personalized email campaigns have been shown to increase click-through rates by 14% and conversion rates by 10%.
          </p>
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
    <div className='px-5 py-10'>
      <h2 className='text-3xl font-extrabold text-blue-300 mb-6'>
        Don't Let Lost Sales Be Your Story
      </h2>
      <p className='text-xl text-gray-200'>
        Not making sales can critically impact your business. When your products or services are not reaching the right audience, you lose opportunities. A strategic, well-optimized digital presence prevents this from happening, keeping your business thriving.
        Losing sales due to poor visibility or lack of engagement can be detrimental to your growth. At StrongerMe, we help businesses like yours avoid these pitfalls by creating tailored marketing strategies that ensure you are always one step ahead of the competition.

      </p>
    </div>

    <div className="gap-0 items-center py-15 px-0 m-0">
      <IoLocationSharp style={{ color: '#ea4335', fontSize: '30px', gap:0 }} />
      <p className="text-xl text-gray-200 italic">Johannesburg, South Africa</p>
    </div>

  </div> 
 </div>
)
}
  
export default Home; 