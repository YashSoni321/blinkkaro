import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Blinkkaro - Simplifying Daily Life Across India",
  description:
    "Learn how Blinkkaro is revolutionizing service booking and task management in India with our all-in-one platform for services, events, and shopping.",
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Blinkkaro"
        description="Learn how Blinkkaro is revolutionizing service booking and task management in India with our all-in-one platform for services, events, and shopping."
        image="/images/hero/hero-image.png"
        heading="Blinkkaro - "
        subheading="Simplifying Daily Life Across India"
        showExtraSection={false}
      />

      {/* Our Story Section */}
      <section className="dark:bg-blacksection bg-white py-20">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse xl:gap-32.5">
            <div className="md:w-1/2">
              <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
                Our Story
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-8 text-base">
                Born from the frustration of juggling multiple apps for
                different services, Blinkkaro was created to simplify the chaos
                of modern life. We saw how people struggled with managing
                various apps for home services, event bookings, and shopping.
              </p>
              <p className="text-body-color dark:text-body-color-dark mb-8 text-base">
                Our solution? A single, powerful platform that brings together
                verified professionals, instant bookings, and secure payments.
                Whether you need a plumber, want to plan an event, or hire a
                professional photographer — Blinkkaro makes it happen with just
                a few taps.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/about/about-light-02.svg"
                  alt="Blinkkaro Story"
                  width={500}
                  height={500}
                  className="dark:hidden"
                />
                <Image
                  src="/images/about/about-dark-02.svg"
                  alt="Blinkkaro Story"
                  width={500}
                  height={500}
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="dark:bg-blacksection bg-gray-50 py-20">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Our Mission
            </h2>
            <p className="text-body-color dark:text-body-color-dark mx-auto max-w-2xl text-lg">
              To empower every Indian with easy access to quality services,
              seamless task management, and time-saving solutions through
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Trust & Quality",
                description:
                  "Every service provider on our platform is thoroughly verified and continuously rated by our community.",
                icon: "/images/icon/icon-01.svg",
              },
              {
                title: "Innovation",
                description:
                  "We leverage technology to create intuitive solutions that make daily life simpler and more efficient.",
                icon: "/images/icon/icon-02.svg",
              },
              {
                title: "Community",
                description:
                  "Building a network of trusted professionals and satisfied customers across India.",
                icon: "/images/icon/icon-03.svg",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group dark:bg-blacksection border-stroke dark:border-strokedark hover:border-primary dark:hover:border-primary rounded-lg border bg-white p-8 text-center transition-all duration-300"
              >
                <div className="bg-primary/10 dark:bg-primary/20 group-hover:bg-primary mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="group-hover:text-primary mb-4 text-xl font-semibold text-black transition-colors duration-300 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="dark:bg-blacksection bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white">
              Meet Our Founders
            </h2>
            <p className="text-body-color dark:text-body-color-dark mx-auto mt-4 max-w-2xl text-lg">
              Tech-driven entrepreneurs with a vision to revolutionize how India
              accesses and manages services.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Yash Sharma",
                role: "CEO & Co-founder",
                bio: "A tech enthusiast with extensive experience in building scalable platforms. Yash envisions Blinkkaro as the future of service booking in India.",
                image: "/images/user/user-01.png",
              },
              {
                name: "Ankit Kumar",
                role: "CTO & Co-founder",
                bio: "With a background in AI and mobile development, Rahul leads the technical innovation that powers Blinkkaro's seamless user experience.",
                image: "/images/user/user-02.png",
              },
              {
                name: "Gaurang Tyagi",
                role: "COO & Co-founder",
                bio: "Gaurang ensures operational excellence and strategic growth, bridging innovation with execution across all facets of Blinkkaro.",
                image: "/images/user/user-03.png",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className="group dark:bg-blacksection border-stroke dark:border-strokedark rounded-2xl border bg-white p-6 transition duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-5">
                  <div className="border-primary relative h-20 w-20 overflow-hidden rounded-full border-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="group-hover:text-primary text-xl font-bold text-black transition-colors duration-300 dark:text-white">
                      {founder.name}
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark text-sm font-medium">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mt-5 text-base leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="dark:bg-blacksection bg-gray-50 py-20">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Join Our Journey
            </h2>
            <p className="text-body-color dark:text-body-color-dark mx-auto mb-8 max-w-2xl text-lg">
              Be part of the revolution that's making daily life simpler for
              millions of Indians.
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

export default AboutPage;
