'use client';

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xwpbybvo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  }; 

  return (
    <section id="contact" className="py-20 bg-gray-300 w-[500] rounded-[16px] justify-center mx-auto">
      <div className="max-w-xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">leave us a message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <Input type="text" name="name" required placeholder="Your Name" className="bg-amber-50" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <Input type="email" name="email" required placeholder="you@example.com" className="bg-amber-50" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <Input type="tel" name="phone" placeholder="+27..." className="bg-amber-50" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <Textarea name="message" required placeholder="Tell us about your project..." className="bg-amber-50" />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>

          {status && (
            <p className="text-center text-sm text-green-600 mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
