import React from "react";
import Image from "next/image";
import Link from "next/link";
import CoverHeading1 from "./icons/CoverHeading1";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import * as motion from "motion/react-client";
import ArrowUp from "./icons/ArrowUp";

const Cover = () => {
  return (
    <section className="relative z-0 -mt-[148px] flex h-screen min-h-[950px] flex-row items-center lg:min-h-[1080px]">
      <Image
        src="/frame-1.jpg"
        alt="Blue cover background"
        fill
        preload={true}
        // loading="eager"
        // fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="-z-10 object-cover"
      />

      {/* <section className="relative z-0 -mt-[148px] flex h-screen min-h-[950px] flex-row items-center bg-[url('/frame-1.png')] bg-cover bg-no-repeat lg:min-h-[1080px]"> */}
      <div className="flex h-fit w-full flex-row items-center px-8 py-5 lg:px-12 xl:px-30">
        <div className="z-20 flex w-1/2 flex-col gap-4 max-[1420px]:w-[770px] max-[1420px]:justify-start max-[820px]:w-[570px] max-[620px]:w-full">
          <motion.p
            className="z-20 text-3xl font-bold text-slate-100 max-[380px]:text-[26px]!"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Poslovno savjetovanje
          </motion.p>
          <div className="flex max-w-full min-w-0 flex-row items-end gap-6 max-[530px]:gap-3">
            <CoverHeading1 />
            <motion.span
              className="-mb-8 flex min-w-0 flex-row text-[240px] leading-none font-bold text-slate-100 max-[820px]:-mb-5 max-[820px]:text-[165px] max-[620px]:text-[140px] max-[530px]:text-[120px] max-[450px]:text-[100px] max-[380px]:-mb-3.5 max-[380px]:text-[90px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              4
              <ArrowUp />
            </motion.span>
          </div>
          <motion.p
            className="font-playfair z-20 mt-2 text-2xl text-slate-100 md:mt-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <strong className="text-theme3">PLAN41</strong> nastao je iz ideje
            da se svaki veliki put sastoji od niza malih, ali odlučnih koraka –
            od kojih je najvažniji onaj{" "}
            <strong className="text-theme3">prvi</strong>.
          </motion.p>
          <motion.div
            className="flex flex-row gap-6 max-[530px]:flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <Link
              href="/#intro"
              className="bg-theme2 hover:bg-theme1 hover:text-theme3 active:bg-theme1 active:text-theme3 focus:bg-theme1 focus:text-theme3 border-theme2 hover:border-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-2xl border-2 px-5 py-3 text-2xl font-bold text-slate-100 transition-colors duration-300 max-[530px]:mt-2"
            >
              Pogledaj više{" "}
              <FaArrowDown className="transition-translate duration-300 group-hover:translate-y-1.5 group-focus:translate-y-1.5 group-active:translate-y-1.5" />
            </Link>
            <Link
              href="/usluge"
              className="bg-theme3 border-theme3 hover:bg-background2 hover:text-theme3 active:bg-background2 active:text-theme3 focus:bg-background2 focus:text-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-2xl border-2 px-5 py-3 text-2xl font-bold text-slate-100 transition-colors duration-300 max-[530px]:mt-0"
            >
              Usluge{" "}
              <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5 group-focus:translate-x-1.5 group-active:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
        <div className="ml-auto block w-1/2 max-[1640px]:w-[40%] max-[1560px]:w-[30%] max-[1420px]:hidden">
          <div className="relative z-30 ml-auto w-fit">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="cover-card relative z-30 overflow-hidden rounded-2xl"
            >
              <Image
                src="/financije2.1_50.jpg"
                className="relative z-30"
                alt="financije slika"
                width={500}
                height={563}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="cover-card absolute top-20 -left-20 z-10 h-full w-full rounded-2xl bg-linear-to-bl from-blue-800 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
