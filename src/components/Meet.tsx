"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Meet: React.FC = () => {
  return (
    <div className="px-2 md:px-8 lg:px-20 relative mt-7 mb-12">
      <div className="bg-bgPeach overflow-hidden relative flex rounded-lg flex-col md:flex-row h-[470px] md:h-[490px]">
        <div className="rounded-xl basis-1/2 px-7">
          <div className="flex flex-col mt-20 gap-3">
            <p className="text-md font-semibold text-left text-black">
              Built out of frustration
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Meet the ahead app
            </p>
          </div>
        </div>
        <div className="mt-5 basis-1/2 flex items-center">
          <div className="flex flex-col gap-4 w-4/5 items-center">
            <p className="text-lg ml-[200px] md:ml-0">
              A personalized pocket coach that provides bite-sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p className="text-lg z-50 ml-4 md:ml-0">
              Think of it as a pocket cheerleader towards a better, more
              fulfilling life.
            </p>
          </div>
        </div>

        {/* Circle animation */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: { x: [0, -550], y: [55, -18] },
          }}
          animate={{ x: [0, -550], y: [55, -18] }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-darkPeach h-60 w-60 absolute rounded-full"
          style={{ bottom: "-16px", right: "500px" }}
        ></motion.div>

        {/* Leaves animation */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: { x: [0, 10], y: [55, -25], rotate: 5 },
            hidden: { y: 55 },
          }}
          animate={{ x: [0, 10], y: [55, -5], rotate: 5 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="h-28 w-24 absolute"
          style={{
            right: "60%",
            bottom: "20%",
            transform: "translate(50%,50%)",
          }}
        >
          <Image height={100} width={100} src="/leaf.png" alt="" />
        </motion.div>

        {/* Ghost animation */}
        <div
          className="absolute flex justify-center items-center rounded-full bg-white h-44 w-44 border-8 border-borderGrey"
          style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
        >
          <motion.div
            transition={{ duration: 1.5 }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-20 w-16 inline-block"
          >
            <Image
              height={100}
              width={100}
              src="/newGhost.png"
              className="h-full w-full"
              alt=""
            />
          </motion.div>
          {/* Badge animation */}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute h-11 w-11"
            style={{ top: "-22px" }}
          >
            <Image height={100} width={100} src="/badge.png" alt="" />
          </motion.div>
        </div>
      </div>

      {/* Flower animation */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{ visible: { opacity: 1, rotate: 360 }, hidden: { opacity: 1 } }}
        transition={{ loop: Infinity, ease: "linear", duration: 2 }}
        className="h-11 w-11 absolute"
        style={{ right: "180px", top: "-20px" }}
      >
        <Image height={100} width={100} src="/flower.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Meet;
