import React from "react";

import ContactBanner from "../Components/Contact/ContactBanner";
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactForm from "../Components/Contact/ContactForm";
import ContactMap from "../Components/Contact/ContactMap";
import ContactFaq from "../Components/Contact/ContactFaq";

export default function Contact() {
  return (
    <>
      {/* Banner */}
      <ContactBanner />

      {/* Contact Info + Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="grid lg:grid-cols-[380px_1fr]">
              
              {/* Left Side */}
              <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
                <ContactInfo />
              </div>

              {/* Right Side */}
              <div className="p-8 lg:p-10">
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map + FAQ */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Map */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <ContactMap />
            </div>

            {/* FAQ */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 lg:p-8">
              <ContactFaq />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}