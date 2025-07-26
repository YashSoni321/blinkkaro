import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group border-stroke shadow-solid-3 hover:border-primary dark:border-strokedark dark:bg-blacksection dark:hover:border-primary z-40 rounded-xl border bg-white p-7.5 transition-all xl:p-12.5"
      >
        <div className="bg-primary/10 group-hover:bg-primary dark:bg-primary/20 relative flex h-16 w-16 items-center justify-center rounded-lg transition-all duration-300">
          <Image
            src={icon}
            width={36}
            height={36}
            alt={title}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="group-hover:text-primary dark:group-hover:text-primary xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black transition-colors duration-300 dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
