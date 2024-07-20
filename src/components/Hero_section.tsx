"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Star from './Star';

const Hero_section = () => {
    return (
        <div className="px-4 md:px-4 lg:px-20 mt-20 md:mt-28">
            <div style={{ height: "550px" }} className='bg-bgBlue relative rounded-3xl flex flex-col md:flex-row overflow-hidden'>
                <div className='md:w-1/2 flex items-center justify-center'>
                    <div className='pl-10 md:pl-20 flex items-center justify-start flex-col'>
                        <div><p className='text-lg font-semibold'>Ahead app</p></div>
                        <div><p className='mt-5 text-2xl md:text-5xl lg:text-6xl font-bold'>Master your life by mastering emotions</p></div>
                        <div className="flex gap-5 md:gap-7 items-center w-full mt-5">
                            <Image
                                width={120}
                                height={24}
                                alt="Apple Play Store"
                                src="/appleStoreIcon.svg"
                                className="cursor-pointer"
                            />
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-1">
                                    <Star/>
                                </div>
                                <p className="text-xs">100+ AppStore reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex items-center justify-center'>
                    <div className='h-64 w-64 md:h-80 md:w-80 flex items-center '>
                        <Image
                            className='h-full w-full '
                            height={100}
                            width={100}
                            src="https://storage.googleapis.com/web-api-media-uploads/media/Image_1_8d38f94793/Image_1_8d38f94793.svg"
                            alt=""
                        />
                    </div>
                    <motion.div
                        whileInView="visible"
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: { opacity: 1, rotate: 360 },
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{ border: "3px solid white", borderStyle: "dashed" }}
                        className='absolute rounded-full h-96 w-96 border-dashed border-white mt-20 md:mt-0'
                    >
                        <motion.div
                            whileInView="visible"
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ top: "55px" }}
                            className='absolute h-16 w-12'
                        >
                            <Image
                                height={80}
                                width={80}
                                className='h-full w-full'
                                src="/blue-ghost.png"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            whileInView="visible"
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ right: "-30px", top: "50%", transform: "translate(-50%,-50%)" }}
                            className='absolute h-16 w-14'
                        >
                            <Image
                                height={80}
                                width={80}
                                className='h-full w-full'
                                src="/red-ghost.png"
                                alt=""
                            />
                        </motion.div>
                        <motion.div
                            whileInView="visible"
                            animate={{ rotate: -360 }}
                            transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                            style={{ bottom: "-22px", right: "50%" }}
                            className='absolute h-14 w-12'
                        >
                            <Image
                                height={80}
                                width={80}
                                src="/newGhost.png"
                                alt=""
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Leaf */}
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    variants={{
                        visible: {
                            x: [0, 10],
                            y: [55, -25],
                            rotate: 25,
                        },
                        hidden: { y: 35 },
                    }}
                    animate={{
                        x: [0, 10],
                        y: [55, -5],
                        rotate: 25,
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="h-24 w-20 absolute"
                    style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
                >
                    <Image
                        height={80}
                        width={80}
                        src="/leaf.png"
                        alt=""
                    />
                </motion.div>

                {/* Small circles */}
                <motion.div
                    whileInView="visible"
                    animate={{ x: -120 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ bottom: "-10px", left: "120px" }}
                    className='absolute bg-orange-300 rounded-full h-10 w-10'
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    animate={{ y: -120 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ left: "-10px", top: "50%" }}
                    className='absolute bg-blue-300 rounded-full h-10 w-10'
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    animate={{ x: -120 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ right: "120px", top: "-10px" }}
                    className='absolute bg-yellow-300 rounded-full h-10 w-10'
                ></motion.div>
                <motion.div
                    whileInView="visible"
                    animate={{ x: 120 }}
                    transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                    style={{ left: "120px", top: "0px" }}
                    className='absolute h-10 w-10'
                >
                    <Image
                        src="/singleLeaf.png"
                        height={32}
                        width={32}
                        alt=""
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero_section;
