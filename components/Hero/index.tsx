"use client";
import Image from "next/image";
import { useState } from "react";

type HeroProps = {
  title: string;
  heading: string;
  subheading: string;
  description: string;
  image: string;
  showExtraSection?: boolean;
};

const Hero = ({
  title,
  description,
  image,
  heading,
  subheading,
  showExtraSection = false,
}: HeroProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            {/* LEFT: TEXT */}
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-3xl font-medium text-black dark:text-white">
                {title}
              </h4>
              <h1 className="mb-5 pr-16 text-xl font-bold text-black dark:text-white">
                {heading}
                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  {subheading}
                </span>
              </h1>
              <p className="text-base leading-relaxed text-black dark:text-white">
                {description}
              </p>

              {showExtraSection && (
                <div className="mt-10">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-5">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your email for early access"
                        className="border-stroke shadow-solid-2 focus:border-primary dark:border-strokedark dark:focus:border-primary rounded-full border px-6 py-2.5 focus:outline-hidden dark:bg-black dark:shadow-none"
                      />
                      <button
                        aria-label="join waitlist button"
                        className="hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>

                  <p className="mt-5 text-black dark:text-white">
                    Be among the first to simplify your world with Blinkkaro —
                    services, events, and more, all in one app.
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT: IMAGE */}
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative mx-auto w-full max-w-sm 2xl:-mr-7.5">
                {/* Background glow / gradient */}
                <div className="from-primary/10 absolute inset-0 rounded-full bg-gradient-to-tr via-purple-200/20 to-transparent blur-3xl"></div>

                {/* Floating shapes */}
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={80}
                  height={300}
                  className="animate-bounce-slow absolute top-10 -left-14"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={40}
                  height={40}
                  className="animate-float absolute top-20 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={20}
                  height={20}
                  className="animate-spin-slow absolute -right-8 bottom-10"
                />

                {/* Example mini card (floating around phone) */}
                <div className="animate-float-slow absolute bottom-20 -left-20 rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-lg dark:bg-gray-800">
                  🚀 Fast & Easy
                </div>
                <div className="animate-float-slow absolute top-24 -right-24 rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-lg delay-200 dark:bg-gray-800">
                  🎉 Coming Soon
                </div>

                {/* APP IMAGE */}
                <div className="relative z-20 h-[600px] w-full">
                  <Image
                    src="/images/blinkkaro-mobile/Login1.png"
                    alt="App Screenshot"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
