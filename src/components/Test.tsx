"use client";
import React from "react";
import { motion } from "framer-motion";

// Define motion variants
const textMotionVariants = {
  hidden: { y: "10%" },
  visible: {
    y: 0,
    transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
  },
};

const buttonMotionVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    opacity: 1,
    scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
    transition: { ease: "easeInOut", duration: 1 },
  },
};

// Define the functional component with React.FC type
const Test: React.FC = () => {
  return (
    <section className="mt-10 sm:mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center font-semibold">We take privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
        &quot;We won&apos;t share your answers with anyone (and won&apos;t ever
        tell <br></br> you which friends said what about you)&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="font-semibold">
          with Love,{" "}
          <b>
            <i className="font-playwrite">Team Ahead</i>
          </b>
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={{ once: true }}
        variants={textMotionVariants}
        className="pt-3"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView={{ once: true }}
          variants={buttonMotionVariants}
          className="pt-3"
        >
          <button className="rounded-3xl p-3 px-6 text-white bg-black font-semibold">
            Start a test
          </button>
        </motion.div>
        <div className="text-sm mt-4 font-semibold">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
