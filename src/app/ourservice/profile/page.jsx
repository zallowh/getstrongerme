import React from "react";

const profiling = () => {
    return(
       <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Placeholder */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <img src="/profile.png" alt="Google Business Profile" className="rounded-xl shadow-lg" />
    </div>

    {/* Content */}
    <div className="md:w-1/2 md:pl-10 font-semibold">
      <h3 className="text-3xl font-bold mb-4">Business Profile & Hosting</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Your business deserves to be found where customers are searching — on Google.
        We help you set up your official Google Business Profile and provide fast local hosting to make sure you're visible, trusted, and always online.
      </p>
      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        <li>Google Business Profile setup (Google Maps visibility)</li>
        <li>Business contact info, address, hours, and service details</li>
        <li>Hosting for your basic website (blazing fast South African server)</li>
        <li>Optional email setup like info@yourbusiness.co.za</li>
      </ul>
      <p className="mt-6 text-blue-800 font-medium">
        Be found when customers search your business name on Google! Stay online 24/7 with fast hosting.
      </p>
    </div>
  </div>
</section>
    )
}

export default profiling;