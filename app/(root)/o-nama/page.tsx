import React from "react";
import * as motion from "motion/react-client";
import Banner from "@/components/Banner";
import Image from "next/image";
import ClipPathIcons from "@/components/icons/ClipPathIcons";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  return (
    <section>
      <ClipPathIcons />
      <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
        <motion.h1
          className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          O nama
        </motion.h1>
        <div className="flex flex-col justify-between gap-35 xl:flex-row xl:gap-10">
          <div className="flex w-3/5 flex-col gap-10 max-[1650px]:w-1/2 max-xl:w-full">
            <div className="flex flex-col gap-5">
              <motion.p
                className="font-inter text-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Zovem se{" "}
                <strong className="text-theme3">Davorka Lazanja</strong>. Iza
                mene je <strong className="text-theme3">30 godina</strong>{" "}
                iskustva u{" "}
                <span className="underline">
                  financijama, poslovnom savjetovanju i razvoju poduzetničkih
                  projekata
                </span>
                .
              </motion.p>
              <motion.p
                className="font-inter text-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Svojim klijentima pomažem da donesu informirane odluke, jasno
                definiraju ciljeve i pronađu najbolji put do realizacije svojih
                planova.
              </motion.p>
            </div>
            <div className="flex flex-col gap-5">
              <motion.p
                className="font-inter text-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Vjerujem da svaka poslovna priča počinje <strong>idejom</strong>
                , ali tek uz dobar <strong>plan</strong> dobiva priliku da
                uspije. Zato svakom klijentu pristupam individualno,
                kombinirajući stručnost, razumijevanje i praktična rješenja koja
                donose rezultate.
              </motion.p>
              <motion.p
                className="font-inter text-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
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
          <div className="relative z-30 mr-20 grow max-xl:aspect-square xl:h-auto">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="cover-card relative z-30 h-full w-[500px] overflow-hidden rounded-2xl bg-[url(/financije5.1_50.jpg)] bg-cover bg-position-[20%_20%] bg-no-repeat max-xl:w-full max-lg:h-full"
            >
              {/* <Image
                src="/financije4.1_50.jpg"
                className="relative z-30"
                alt="financije slika"
                width={500}
                height={500}
              /> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="cover-card absolute -top-20 -right-20 z-10 h-full w-full rounded-2xl bg-[url(/frame-1.png)]"
            />
          </div>
        </div>
      </div>
      <div className="z-0 flex flex-col xl:flex-row">
        <div className="bg-theme1 w-full px-6 py-26 sm:px-10 lg:px-18 xl:w-1/2 2xl:px-28">
          <motion.h3
            className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold text-slate-100 before:absolute before:top-[calc(113%-4px)] before:left-23 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-23 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Vizija
          </motion.h3>
          <ul className="flex flex-col gap-15">
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold text-slate-100">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>
                Iskoristiti znanje stečeno dugogodišnjim iskustvom u pomoći
                razvoju poduzetništva, mentoriranju i poticanju na rast
              </p>
            </li>
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold text-slate-100">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>
                Težiti tome da svaka osoba s poduzetničkom idejom dobije
                podršku, znanje i samopouzdanje potrebno za njezinu realizaciju.
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-background2 w-full px-6 py-26 sm:px-10 lg:px-18 xl:w-1/2 2xl:px-28">
          <motion.h3
            className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold before:absolute before:top-[calc(113%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[113%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ciljevi
          </motion.h3>
          <ul className="flex flex-col gap-15">
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>
                Jačati poduzetničku klimu i stvarati pozitivno poduzetničko
                okruženje
              </p>
            </li>
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>Potpora nezaposlenim osoba pri samozapošljavanju</p>
            </li>
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>Informiranje i savjetovanje poduzetnika</p>
            </li>
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>
                Pomoć u edukaciji poduzetnika i onih koji to namjeravaju postati
              </p>
            </li>
            <li className="font-inter flex flex-row items-center gap-5 text-3xl font-semibold">
              <GiCheckMark className="shrink-0 text-4xl" />
              <p>Financijsko osvješćivanje</p>
            </li>
          </ul>
        </div>
      </div>
      <Banner type="o-nama" />
    </section>
  );
};

export default page;
