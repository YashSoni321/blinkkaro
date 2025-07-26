import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Blinkkaro – Simplify Your Daily Services",
  description:
    "Create your Blinkkaro account to book services, hire professionals, and manage events — all in one easy-to-use app made for modern India.",
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
    </div>
  );
};

export default SupportPage;
