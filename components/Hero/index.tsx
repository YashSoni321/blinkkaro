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
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
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

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute top-0 -left-11.5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
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
