import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "Stranica nije pronađena (404) | Plan 41 Zadar",
  description:
    "Tražena stranica ne postoji. Poslovno savjetovanje u Zadru – Plan 41.",
  robots: { index: false, follow: false },
};

const NotFound = () => {
  return (
    <div className="relative z-10 h-screen max-h-screen min-h-screen w-full bg-[url(/frame-1.png)] max-lg:bg-position-[20%] max-md:bg-position-[30%] max-sm:bg-position-[55%] min-[1920px]:bg-cover">
      <div className="from-theme1/40 to-theme1/20 absolute inset-0 -z-10 bg-linear-to-r" />
      <div className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-col items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <motion.span
          className="text-theme3 text-center text-8xl font-bold max-[1500px]:text-7xl max-[750px]:text-6xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.span>
        <motion.h1
          className="text-center text-7xl font-bold text-slate-100 max-[1500px]:text-6xl max-[750px]:text-5xl max-[450px]:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Stranica koju ste zatražili nije pronađena
        </motion.h1>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/"
            className="bg-theme1 hover:bg-theme4 mt-5 rounded-4xl border-2 border-transparent px-10 py-5 text-3xl font-semibold text-slate-100 transition-all duration-300 hover:border-slate-100 max-[1400px]:px-7 max-[1400px]:py-3 max-[640px]:text-2xl"
          >
            Naslovnica
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
