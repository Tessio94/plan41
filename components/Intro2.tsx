import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
// import { cardVariants } from "@/lib/animation";

const Intro2 = () => {
  return (
    <section
      id="intro"
      className="bg-background2 relative px-6 py-26 sm:px-10 lg:px-18 2xl:px-28"
    >
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row lg:gap-12 xl:gap-16 2xl:gap-40">
        <div className="order-2 w-full lg:order-1 lg:w-1/2">
          <Image
            src="/frame-2.png"
            alt="image collage"
            width={960}
            height={1080}
          />
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <div className="mb-15 flex flex-col gap-5">
            <motion.h2
              className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-2 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              O Planu 41
            </motion.h2>
            <motion.p
              className="font-inter text-2xl font-semibold"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>Vizija</strong> je iskoristiti znanje stečeno
              dugogodišnjim iskustvom u pomoći razvoju poduzetništva,
              mentoriranju i poticanju na rast
            </motion.p>
          </div>
          <p className="font-inter mb-5 text-2xl">
            Vjerujem da iza svakog iskoraka stoji plan:
          </p>
          <ul className="flex flex-col items-start gap-7">
            <motion.li
              className="to-theme2/40 border-theme1 shadow-theme2/40 hover:from-theme2/10 hover:to-theme2/60 flex w-full flex-row items-center gap-4 rounded-2xl border-2 bg-linear-to-br from-transparent px-3 py-3 text-xl shadow-xl transition-colors duration-300 hover:bg-linear-to-br sm:gap-7 sm:px-5"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/ikone/vision.svg"
                alt="vizija ikona"
                width={60}
                height={60}
              />
              <p className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Jasna vizija</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                cumque.
              </p>
            </motion.li>
            <motion.li
              className="to-theme2/40 border-theme1 shadow-theme2/40 hover:from-theme2/10 hover:to-theme2/60 flex w-full flex-row items-center gap-4 rounded-2xl border-2 bg-linear-to-br from-transparent px-3 py-3 text-xl shadow-xl transition-colors duration-300 hover:bg-linear-to-br sm:gap-7 sm:px-5"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/ikone/structure.svg"
                alt="struktura ikona"
                width={60}
                height={60}
              />
              <p className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Struktura</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                cumque.
              </p>
            </motion.li>
            <motion.li
              className="to-theme2/40 border-theme1 shadow-theme2/40 hover:from-theme2/10 hover:to-theme2/60 flex w-full flex-row items-center gap-4 rounded-2xl border-2 bg-linear-to-br from-transparent px-3 py-3 text-xl shadow-xl transition-colors duration-300 hover:bg-linear-to-br sm:gap-7 sm:px-5"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/ikone/support.svg"
                alt="podrška ikona"
                width={60}
                height={60}
              />
              <p className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Podrška</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                cumque.
              </p>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro2;
