"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import temp from "medoff/public/temp.jpg";
import Link from "next/link";
import { gradient } from "medoff/components/gradient";
import { motion } from "framer-motion";

export default function IndexPage() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-8xl py-20 sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#1D2B3A] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lorem ipsum, dolor sit amet consectetur elit.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Doctor <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/patient"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Patient <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 ">
            <Image
              src={temp}
              alt="temp"
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 border-blue-600 border-4"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
      <motion.canvas
        initial={{
          filter: "blur(20px)",
        }}
        animate={{
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.075, 0.82, 0.965, 1],
        }}
        style={{
          clipPath:
            "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
        }}
        id="gradient-canvas"
        data-transition-in
        className="z-[-1] fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
      ></motion.canvas>
      <div className="h-[60px] bg-[#1D2B3A] fixed bottom-0 z-20 w-full flex flex-row px-[2rem]">
        <p className="text-white/80 text-base md:text-lg font-semibold md:leading-[60px] whitespace-nowrap flex flex-row">
          Meet Doctors from All over the World, Because not all wounds are
          visible, we are dedicated to healing the unseen.
        </p>
      </div>
    </div>
  );
}
