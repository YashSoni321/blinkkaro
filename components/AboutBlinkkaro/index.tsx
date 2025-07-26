import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const AboutBlinkkaro = () => {
  return (
    <section
      id="about"
      className="bg-[#f9f9f9] py-20 lg:py-25 xl:py-30 dark:bg-black"
    >
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/about-blinkkaro.png" // Replace with your actual image path
              alt="About Blinkkaro"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg dark:shadow-none"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              headerInfo={{
                title: "WHAT IS BLINK KARO ?",
                subtitle: "Your Daily Life, Simplified",
                description: "",
              }}
            />

            <p className="mt-6 text-base text-gray-700 dark:text-gray-300">
              Built for modern India, Blinkkaro connects users with trusted
              service providers, event planners, taskers, and more — bringing
              convenience, transparency, and smart scheduling into your hands.
              No more jumping across apps. Everything you need, one Blink away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlinkkaro;
