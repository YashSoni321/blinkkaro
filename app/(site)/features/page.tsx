import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features - Blinkkaro | Your All-in-One Service Booking Platform",
  description:
    "Discover how Blinkkaro simplifies your life with instant service bookings, professional hiring, event planning, task management, and shopping - all in one seamless platform.",
};

const FeatureSection = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-8 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center`}
    >
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative aspect-[4/3] w-full md:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="rounded-2xl object-contain"
        />
      </div>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-25 xl:py-30">
        <div className="dark:from-blacksection dark:to-blacksection absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-c-1315 relative mx-auto px-4 md:px-8 xl:px-0">
          <div className="text-center">
            <h1 className="xl:text-hero mb-5 text-3xl font-bold text-black md:text-4xl dark:text-white">
              Everything You Need in{" "}
              <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                One App
              </span>
            </h1>
            <p className="text-body-color dark:text-body-color-dark mx-auto mb-10 max-w-2xl text-base">
                Blinkkaro brings together all your daily service needs in one
                powerful platform. From home services to event planning, we're
                revolutionizing how you manage your daily tasks.
            </p>
          </div>
        </div>
      </section> */}
      <Hero
        title="Everything You Need, Just a Tap Away"
        description="     Blinkkaro brings together all your daily service needs in one
              powerful platform. From home services to event planning, we're
              revolutionizing how you manage your daily tasks."
        image="/images/hero/hero-image.png"
        heading="Your All-in-One"
        subheading="Booking & Services App"
        showExtraSection={true}
      />

      {/* Main Features Section */}
      <section className="dark:bg-blacksection bg-white py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <div className="space-y-20">
            <FeatureSection
              title="Quick & Easy Service Booking"
              description="Book any service with just a few taps. Whether you need a plumber, electrician, or photographer, Blinkkaro connects you with verified professionals instantly. Get real-time availability, instant confirmation, and automatic reminders for all your bookings."
              image="/images/about/about-light-01.png"
              imageAlt="Service Booking Interface"
            />

            <FeatureSection
              title="Professional Event Planning"
              description="Plan your perfect event effortlessly. From booking venues and caterers to hiring photographers and entertainers, manage all aspects of your event in one place. Purchase tickets, track RSVPs, and coordinate with vendors seamlessly."
              image="/images/about/about-light-02.svg"
              imageAlt="Event Planning Dashboard"
              reverse
            />

            <FeatureSection
              title="Smart Task Management"
              description="Stay on top of your schedule with our intelligent task manager. Track service appointments, get timely reminders, and manage recurring bookings effortlessly. Our smart calendar keeps everything organized and sends notifications when action is needed."
              image="/images/features/features-light-01.png"
              imageAlt="Task Management Interface"
            />

            <FeatureSection
              title="Integrated Shopping Experience"
              description="Shop for products while booking related services. Need new appliances installed? Purchase them through Blinkkaro and book installation services in one go. Compare prices, read reviews, and enjoy secure checkout with multiple payment options."
              image="/images/hero/hero-light.svg"
              imageAlt="Shopping Interface"
              reverse
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="dark:bg-blacksection bg-gray-50 py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <h2 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl dark:text-white">
            Why Choose Blinkkaro?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "/images/icon/icon-01.svg",
                title: "Verified Professionals",
                description:
                  "Every service provider is thoroughly vetted, background-checked, and continuously rated by the community.",
              },
              {
                icon: "/images/icon/icon-02.svg",
                title: "Secure Payments",
                description:
                  "Multiple payment options with secure processing. Pay only after service completion with our escrow system.",
              },
              {
                icon: "/images/icon/icon-03.svg",
                title: "24/7 Support",
                description:
                  "Our dedicated support team is always ready to help with any questions or concerns about your bookings.",
              },
              {
                icon: "/images/icon/icon-04.svg",
                title: "Real-time Updates",
                description:
                  "Get instant notifications about booking confirmations, provider arrivals, and service completion.",
              },
              {
                icon: "/images/icon/icon-05.svg",
                title: "Quality Guarantee",
                description:
                  "All services come with a satisfaction guarantee. Not happy? We'll make it right.",
              },
              {
                icon: "/images/icon/icon-06.svg",
                title: "Smart Matching",
                description:
                  "Our AI-powered system matches you with the perfect service providers based on your needs and preferences.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group border-stroke shadow-solid-3 hover:border-primary dark:border-strokedark dark:bg-blacksection dark:hover:border-primary rounded-xl border bg-white p-7.5 transition-all"
              >
                <div className="bg-primary/10 group-hover:bg-primary dark:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-lg transition-all duration-300">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={36}
                    height={36}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="group-hover:text-primary dark:group-hover:text-primary mb-4 text-xl font-semibold text-black transition-colors duration-300 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl dark:text-white">
              Ready to Simplify Your Life?
            </h2>
            <p className="text-body-color dark:text-body-color-dark mx-auto mb-8 max-w-2xl text-base">
              Join thousands of users who are already enjoying the convenience
              of managing all their services and tasks in one place.
            </p>
            <button className="hover:bg-opacity-90 dark:bg-btndark inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-base font-medium text-white transition duration-300 ease-in-out">
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
