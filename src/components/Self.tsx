"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    transform: translate(-50px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Self: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false); // New state for 1024px

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= 768);
      setIsMobileScreen(width <= 320);
      setIsMediumScreen(width <= 1024); // Set medium screen size
    };

    
    // Update screen size on initial render
    updateScreenSize();

    // Update screen size on resize
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const textMotionVariants = {
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    hidden: { opacity: 0, scale: 0, x: "-50%" },
  };

  const imageMotionVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: isMobileScreen
        ? [0, -50, -100, -150, -30]
        : isSmallScreen
        ? [0, -100, -300, -450, -130]
        : isMediumScreen
        ? [0, -80, -200, -300, -100] // Animation for 1024px
        : [0, -100, -300, -450, -450],
      y: isMobileScreen ? [20, 10, 5, 0, 10] : [35, 20, 10, 0, -10],
      rotate: isMobileScreen
        ? [-30, -20, -10, -5, -2]
        : isSmallScreen
        ? [-60, -45, -35, -35, -35, -35, -2]
        : isMediumScreen
        ? [-50, -30, -20, -15, -10] // Rotation for 1024px
        : [-60, -45, -35, -35, -35, -35, -2],
    },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section className="px-1 md:px-20 mt-16 mb-24">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
        viewport={{ once: true }}
          variants={textMotionVariants}
          transition={{ duration: 1.9, type: "spring", bounce: 0.1 }}
        >
          <div className="text-md font-semibold text-black px-3 md:px-0">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-2xl px-2 md:px-0 mg:text-3xl lg:text-5xl pb-3 font-bold text-black">
            Self-improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
        viewport={{ once: true }}
          variants={imageMotionVariants}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
        >
          <Image
            src="/blue-ghost.png"
            alt="blue ghost"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-2 md:px-20 pt-14 h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
          <Reveal keyframes={customAnimation}>
            {[...Array(8)].map((val, index) => {
              return (
                <div key={index}>
                  <motion.div
                    className="max-w-[40rem] relative align-top pl-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div style={{ left: "-12px" }} className="absolute">
                      🟣
                    </div>
                    <p className="text-xl font-bold">
                      It&apos;s not easy as 1-2-3.
                    </p>
                    <p className="mt-3">
                      The journey may be long but our sessions are quick. We get
                      to the point and tell you what you want to know (and
                      nothing else).
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Self;
