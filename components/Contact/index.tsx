"use client";
import { BASE_API_URL } from "@/app/common/common";
import emailjs from "emailjs-com";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^[0-9]{6,15}$/.test(phone); // digits only, length between 6–15

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        // Send to backend first
        const res = await axios.post(BASE_API_URL + "waitlist/join", formData);
        if (res) {
          // Then trigger EmailJS
          await emailjs.send(
            "service_rj8aotx", // from EmailJS dashboard
            "template_4mom4d9", // from EmailJS dashboard
            {
              name: formData.name,
              email: formData.email,
              message: "Thank you for joining the Blink Karo waitlist!",
            },
            "V8uj_yvXLUcmreIAl", // EmailJS Public Key
          );
        }
      } catch (error) {
        console.error("Error submitting form or sending email:", error);
        // alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section id="waitlist" className="px-4 md:px-8 2xl:px-0">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left side: Dark background with logo + content */}
        <div className="flex flex-col justify-center space-y-6 rounded-lg bg-gradient-to-r p-10 text-black">
          {/* Logo */}
          <div>
            {/* <img
              src="/blinkkaro-logo.png" // <-- Replace with your logo path
              alt="Blinkkaro"
              className="mb-6 h-16 w-auto"
            /> */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/logo/logo-light.png" // Replace with your actual image path
                alt="About Blinkkaro"
                width={400}
                height={300}
                className="mx-auto rounded-lg dark:hidden"
              />
              <Image
                src="/images/logo/logo-dark.png" // Replace with your actual image path
                alt="About Blinkkaro"
                width={400}
                height={300}
                className="mx-auto hidden rounded-lg dark:block"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold dark:text-white">
            Why Join Blinkkaro?
          </h2>
          <p className="text-black-200 dark:text-white">
            Built for modern India, Blinkkaro connects you with trusted service
            providers, event planners, taskers, and more — all in one app.
          </p>
          <ul className="space-y-4 dark:text-white">
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> One app for all
              services
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> Transparent
              pricing
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> Smart scheduling
            </li>
          </ul>
        </div>

        {/* Right side: Form */}
        <div className="rounded-lg bg-white p-8 shadow dark:bg-black">
          <motion.h2 className="mb-10 text-2xl font-bold text-black dark:text-white">
            Join the Blinkkaro Waitlist
          </motion.h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-stroke dark:border-strokedark mb-10 w-full border-b bg-transparent pb-3 focus:outline-none"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-stroke dark:border-strokedark mb-10 w-full border-b bg-transparent pb-3 focus:outline-none"
            />
            {errors.email && (
              <p className="mb-4 text-sm text-red-500">{errors.email}</p>
            )}
            <input
              type="text"
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-stroke dark:border-strokedark mb-10 w-full border-b bg-transparent pb-3 focus:outline-none"
            />

            {/* Country Code + Phone */}
            <div className="mb-1 flex gap-3">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border-stroke dark:border-strokedark border-b bg-transparent pb-3 focus:outline-none"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-stroke dark:border-strokedark flex-1 border-b bg-transparent pb-3 focus:outline-none"
              />
            </div>
            {errors.phone && (
              <p className="mb-4 text-sm text-red-500">{errors.phone}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-black py-3 text-white transition hover:bg-gray-800"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
