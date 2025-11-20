import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { FaArrowRight } from "react-icons/fa";

const Kontakt = () => {
  return (
    <section className="bg-theme1 max_3xl:flex-col max_3xl:items-start flex flex-row items-end justify-between px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
      <div className="relative flex flex-col gap-5">
        <motion.h2
          className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-2 text-6xl font-bold text-slate-100 before:absolute before:top-[calc(113%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-25 after:content-[''] max-[450px]:text-5xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Kontakirajte nas
        </motion.h2>
        <motion.p
          className="font-inter text-2xl text-slate-100"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ako ste na početku poduzetničkog puta ili želite osnažiti postojeće
          poslovanje — javite mi se.
        </motion.p>
        <motion.p
          className="font-inter flex flex-row gap-8 text-2xl text-slate-100"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Veselim se prilici da zajedno pronađemo najbolje rješenje.
        </motion.p>
        <motion.div
          className="xsm:right-10 absolute right-2 -bottom-34 xl:-right-28 xl:bottom-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/ikone/success.svg"
            alt="uspjeh ikona"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
      <motion.div
        className="max_3xl:mt-5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link
          href="/#intro"
          className="text-theme1 bg-theme3 hover:bg-theme2 hover:text-theme3 border-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-xl border-2 px-5 py-3 text-2xl font-bold transition-colors duration-300"
        >
          Kontakt{" "}
          <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Kontakt;
