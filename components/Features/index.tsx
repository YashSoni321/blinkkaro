"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="relative py-20 lg:py-25 xl:py-30">
        {/* Background decoration */}
        <div className="dark:from-blacksection dark:to-blacksection absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="max-w-c-1315 relative mx-auto px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "WHY BLINKKARO?",
              subtitle: "Everything You Need, All in One App",
              description: `Discover the power of having all your services, tasks, and shopping needs in a single platform. 
              Blinkkaro simplifies your life with instant bookings, verified professionals, and seamless management of all your daily needs.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}
            {featuresData.map((feature, key) => (
              <div
                key={key}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
            {/* <!-- Features item End --> */}
          </div>

          {/* <!-- Bottom CTA Start --> */}
          <div className="mt-20 text-center">
            <p className="mb-6 text-lg text-black dark:text-white">
              Ready to simplify your life with Blinkkaro?
            </p>
            <button className="hover:bg-opacity-90 dark:bg-btndark dark:hover:bg-opacity-90 rounded-full bg-black px-8 py-4 text-white transition-all duration-300">
              Join the Waitlist
            </button>
          </div>
          {/* <!-- Bottom CTA End --> */}
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
