import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
// import CoverHeading from "./icons/CoverHeading";
import CoverHeading1 from "./icons/CoverHeading1";
import * as motion from "motion/react-client";
import { CgArrowLongUp } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

const Cover = () => {
  return (
    <section className="flex h-screen flex-row items-center bg-[url('/frame-1.png')] bg-cover bg-no-repeat">
      <div className="flex h-fit w-full flex-row items-center px-8 py-5 lg:px-12 xl:px-30">
        <div className="z-20 flex w-1/2 flex-col gap-4">
          <motion.p
            className="z-20 text-3xl font-bold text-slate-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Poslovno savjetovanje
          </motion.p>
          <div className="flex flex-row items-end gap-6">
            <CoverHeading1 />
            <motion.span
              className="-mb-8 flex flex-row text-[240px] leading-none font-bold text-slate-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              4
              <CgArrowLongUp className="-ml-20" />
            </motion.span>
          </div>
          <motion.p
            className="font-playfair z-20 mt-5 text-2xl text-slate-100"
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
            className="flex flex-row gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <Link
              href="/#intro"
              className="bg-theme2 hover:bg-theme1 hover:text-theme3 border-theme2 hover:border-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-2xl border-2 px-5 py-3 text-2xl font-bold text-slate-100 transition-colors duration-300"
            >
              Pogledaj više{" "}
              <FaArrowDown className="transition-translate duration-300 group-hover:translate-y-1.5" />
            </Link>
            <Link
              href="/usluge"
              className="bg-theme3 border-theme3 hover:bg-background2 hover:text-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-2xl border-2 px-5 py-3 text-2xl font-bold text-slate-100 transition-colors duration-300"
            >
              Usluge{" "}
              <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
        <div className="w-1/2">
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
