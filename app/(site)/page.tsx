import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import AboutBlinkkaro from "@/components/AboutBlinkkaro";

export const metadata: Metadata = {
  title: "Blinkkaro - Your All-in-One Service Booking & Lifestyle Platform",
  description:
    "Book services, hire professionals, manage tasks, shop online, and register for events - all from a single app. Experience the convenience of Blinkkaro's unified ecosystem for all your daily needs.",
};

export default function Home() {
  return (
    <main>
      <Hero
        title="Everything You Need, Just a Tap Away"
        description="Blinkkaro makes life simpler by bringing services, tasks, events, hiring, and shopping together in one easy-to-use app. Just browse, pay, and get automatic reminders — your booking, your way. Whether it’s a plumber, a party, or a product, Blinkkaro delivers it all in just a few taps."
        image="/images/hero/hero-image.png"
        heading="Your All-in-One"
        subheading="Booking & Services App"
        showExtraSection={true}
      />
      <AboutBlinkkaro />
      <Feature />
      <About />
      <FeaturesTab />
      <Integration />
      <Testimonial />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  );
}
