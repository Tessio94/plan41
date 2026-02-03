"use client";

import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import Banner from "@/components/Banner";
import ClipPathIcons from "@/components/icons/ClipPathIcons";
import { cardContainer2, cardVariants2 } from "@/lib/animation";

const ONama = () => {
  return (
    <>
      <section className="-mt-[148px]">
        <div className="bg-[url(/frame-1.png)] bg-cover bg-no-repeat px-6 pt-[254px] pb-26 sm:px-10 lg:px-18 2xl:px-28">
          <motion.h1
            className="font-playfair after:bg-theme3 before:bg-theme3 relative text-6xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            O nama
          </motion.h1>
        </div>
        <ClipPathIcons />
        <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
          <div className="relative flex flex-col gap-16 sm:gap-25 xl:flex-row xl:gap-10">
            <div className="flex w-3/5 flex-col gap-10 max-[1650px]:w-1/2 max-xl:w-full">
              <div className="flex flex-col gap-5">
                <motion.p
                  className="font-inter bg-theme3/20 xsm:px-5 rounded-2xl px-2.5 py-5 text-2xl font-semibold sm:text-3xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                >
                  Zovem se{" "}
                  <strong className="text-theme3">Davorka Lazanja</strong>. Iza
                  mene je <strong className="text-theme3">30 godina</strong>{" "}
                  iskustva u financijama, poslovnom savjetovanju i razvoju
                  poduzetničkih projekata.
                </motion.p>
                <motion.p
                  className="font-inter text-2xl sm:text-3xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Svojim klijentima pomažem da donesu informirane odluke, jasno
                  definiraju ciljeve i pronađu najbolji put do realizacije
                  svojih planova.
                </motion.p>
              </div>
              <div className="flex flex-col gap-5">
                <motion.p
                  className="font-inter text-2xl sm:text-3xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Vjerujem da svaka poslovna priča počinje{" "}
                  <strong>idejom</strong>, ali tek uz dobar{" "}
                  <strong>plan</strong> dobiva priliku da uspije. Zato svakom
                  klijentu pristupam individualno, kombinirajući stručnost,
                  razumijevanje i praktična rješenja koja donose rezultate.
                </motion.p>
                <motion.p
                  className="font-inter text-2xl sm:text-3xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Moj cilj je biti podrška na vašem putu – od prve ideje do
                  uspješnog poslovanja.
                </motion.p>
              </div>
              <motion.p
                className="font-playfair mt-auto text-4xl font-semibold italic"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                „Vaša je ideja. Moj zadatak je plan.“
              </motion.p>
            </div>
            <div className="max-[600px]:max-w-[90%]">
              <motion.div
                className="relative w-fit"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/profilna.jpg"
                  className="relative z-30 rounded-2xl shadow-lg"
                  alt="financije slika"
                  width={500}
                  height={500}
                />
                <div className="t-10 absolute top-10 -right-10 bottom-0 left-10 h-full rounded-2xl bg-[url(/frame-1.png)] bg-cover bg-no-repeat shadow-lg shadow-blue-950"></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="z-0 flex flex-col xl:flex-row">
          <div className="bg-theme1 w-full px-6 py-26 sm:px-10 lg:px-18 xl:w-1/2 2xl:px-28">
            <motion.h3
              className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-5xl font-bold text-slate-100 before:absolute before:top-[calc(113%-4px)] before:left-23 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-23 after:content-['']"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Vizija
            </motion.h3>
            <motion.ul
              className="flex flex-col gap-15"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainer2}
            >
              <motion.li
                className="font-inter flex flex-row items-center gap-5 text-slate-100"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Iskoristiti znanje stečeno dugogodišnjim iskustvom u pomoći
                  razvoju poduzetništva, mentoriranju i poticanju na rast
                </p>
              </motion.li>
              <motion.li
                className="font-inter flex flex-row items-center gap-5 text-slate-100"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Težiti tome da svaka osoba s poduzetničkom idejom dobije
                  podršku, znanje i samopouzdanje potrebno za njezinu
                  realizaciju.
                </p>
              </motion.li>
            </motion.ul>
          </div>
          <div className="bg-background2 w-full px-6 py-26 sm:px-10 lg:px-18 xl:w-1/2 2xl:px-28">
            <motion.h3
              className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-5xl font-bold before:absolute before:top-[calc(113%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ciljevi
            </motion.h3>
            <motion.ul
              className="flex flex-col gap-15"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainer2}
            >
              <motion.li
                className="font-inter flex flex-row items-center gap-5"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Jačati poduzetničku klimu i stvarati pozitivno poduzetničko
                  okruženje
                </p>
              </motion.li>
              <motion.li
                className="font-inter flex flex-row items-center gap-5"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Potpora nezaposlenim osobama pri samozapošljavanju
                </p>
              </motion.li>
              <motion.li
                className="font-inter flex flex-row items-center gap-5"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Informiranje i savjetovanje poduzetnika
                </p>
              </motion.li>
              <motion.li
                className="font-inter flex flex-row items-center gap-5"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Pomoć u edukaciji poduzetnika i onih koji to namjeravaju
                  postati
                </p>
              </motion.li>
              <motion.li
                className="font-inter flex flex-row items-center gap-5"
                variants={cardVariants2}
              >
                <GiCheckMark className="shrink-0 text-4xl" />
                <p className="text-2xl font-semibold sm:text-3xl">
                  Financijsko osvješćivanje
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <Banner type="o-nama" />
      </section>
    </>
  );
};

export default ONama;
