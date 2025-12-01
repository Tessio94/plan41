"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import * as motion from "motion/react-client";
import { cardContainer, cardVariants } from "@/lib/animation";

const Vision = () => {
  const [animationState, setAnimationState] = useState("paused");

  return (
    <section className="bg-background2 relative z-0 px-6 py-26 max-[640px]:pb-50 max-[480px]:pb-95 max-[400px]:pb-130 sm:px-10 lg:px-18 2xl:px-28">
      <motion.h3
        className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold before:absolute before:top-[calc(113%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Ciljevi i vizija
      </motion.h3>
      <div className="relative mx-auto flex w-full max-w-[85%] flex-col items-center max-[1650]:max-w-[92%] max-[1380]:max-w-[97%] max-[1160px]:max-w-full lg:flex-row">
        {/* <motion.div className="relative flex flex-col gap-6 w-1/2 bg-background2 py-8 px-6 rounded-2xl  intro-card"> */}
        <motion.div
          className="from-theme3/30 via-theme3 to-theme1 shadow-theme1/20 absolute order-2 rounded-2xl bg-conic/[from_var(--border-angle)] p-1 shadow-xl max-[1024px]:top-[50%] max-[1024px]:left-[50%] max-[1024px]:w-[80%] max-[1024px]:max-w-[95%] max-[1024px]:translate-x-[-50%] max-[1024px]:translate-y-[-50%] max-[640px]:top-[70%] max-[590px]:w-[92%] max-[480px]:top-[90%] max-[400px]:top-[100%] lg:relative lg:order-1 lg:mt-0 lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("animate-rotate-border");
            e.currentTarget.style.animationPlayState = "running";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
        >
          <div className="bg-background2 flex flex-col gap-6 rounded-2xl px-6 py-8 max-[530px]:px-3">
            <p className="font-inter text-2xl max-[530px]:text-xl">
              Iskoristiti znanje stečeno dugogodišnjim iskustvom u pomoći
              razvoju poduzetništva, mentoriranju i poticanju na rast
            </p>

            <motion.ul
              className="mt-4 flex flex-col items-start gap-8 max-[500px]:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainer}
            >
              <motion.li
                className="flex flex-row items-center gap-6 max-[530px]:gap-3"
                variants={cardVariants}
              >
                <GiCheckMark className="text-theme3 shrink-0 text-3xl max-[530px]:text-2xl" />
                <p className="font-inter text-2xl font-semibold max-[530px]:text-xl">
                  Jačati poduzetničku klimu i stvarati pozitivno poduzetničko
                  okruženje
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-center gap-6 max-[530px]:gap-3"
                variants={cardVariants}
              >
                <GiCheckMark className="text-theme3 shrink-0 text-3xl max-[530px]:text-2xl" />
                <p className="font-inter text-2xl font-semibold max-[530px]:text-xl">
                  Potpora nezaposlenim osoba pri samozapošljavanju
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-center gap-6 max-[530px]:gap-3"
                variants={cardVariants}
              >
                <GiCheckMark className="text-theme3 shrink-0 text-3xl max-[530px]:text-2xl" />
                <p className="font-inter text-2xl font-semibold max-[530px]:text-xl">
                  Informiranje i savjetovanje poduzetnika
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-center gap-6 max-[530px]:gap-3"
                variants={cardVariants}
              >
                <GiCheckMark className="text-theme3 shrink-0 text-3xl max-[530px]:text-2xl" />
                <p className="font-inter text-2xl font-semibold max-[530px]:text-xl">
                  Pomoć u edukaciji poduzetnika i onih koji to namjeravaju
                  postati
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-center gap-6 max-[530px]:gap-3"
                variants={cardVariants}
              >
                <GiCheckMark className="text-theme3 shrink-0 text-3xl max-[530px]:text-2xl" />
                <p className="font-inter text-2xl font-semibold max-[530px]:text-xl">
                  Financijsko osvješćivanje
                </p>
              </motion.li>
            </motion.ul>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href="/o-nama"
                className="text-theme1 bg-theme3 hover:text-theme3 hover:bg-theme1 border-theme3 group mx-auto mt-5 flex w-fit flex-row items-center gap-5 rounded-xl border-2 px-5 py-3 text-2xl font-bold transition-colors duration-300"
              >
                O nama{" "}
                <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="-z-10 order-1 h-full w-full lg:order-2 lg:mt-0 lg:-ml-18 lg:w-1/2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            className="shadow-theme1/20 h-[120%] rounded-2xl shadow-xl max-[1279px]:aspect-3/5 max-[1160px]:aspect-1/2 xl:aspect-7/10"
            src="/financije3_50.jpg"
            alt="financije bilježnica"
            width={960}
            height={1080}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
