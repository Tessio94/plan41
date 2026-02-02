"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleChevronDown } from "react-icons/fa6";

const Services = () => {
  const [dropdown, setDropdown] = useState("");

  return (
    <section className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
      <motion.h2
        className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Usluge
      </motion.h2>
      <div className="flex flex-col gap-15 md:gap-25 lg:flex-row lg:gap-10 xl:gap-13 2xl:gap-15">
        <div className="flex w-full flex-col gap-5 lg:w-1/2">
          <motion.p
            className="font-inter text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Želite li ući u svijet poduzetništva, krenite od onoga u čemu ste
            autentični. Sljedeći korak je strategija, a kada dođete do poslovnog
            plana, obratite mi se
          </motion.p>
          <motion.p
            className="font-inter text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ukoliko ste svoju poslovnu ideju sami razradili i pripemili poslovni
            plan, ukoliko želite savjet, mentorstvo, podršku i pomoć, zatražite
            to
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/usluge"
              className="bg-theme1 hover:bg-theme2 hover:text-theme3 active:bg-theme2 active:text-theme3 focus:bg-theme2 focus:text-theme3 border-theme2 hover:border-theme3 active:border-theme3 focus:border-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-xl border-2 px-5 py-3 text-2xl font-bold text-slate-100 transition-colors duration-300"
            >
              Pogledajte više{" "}
              <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5 group-focus:translate-x-1.5 group-active:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
        <div className="xsm:min-h-[450px] relative z-0 min-h-[550px] w-full sm:min-h-[380px] md:min-h-[300px] lg:min-h-[unset] lg:w-1/2">
          <Image
            className="absolute -top-[170px] right-0 -z-1 block max-[450px]:hidden"
            src="/ikone/consulting.svg"
            alt="planiranje ikona"
            width={140}
            height={140}
          />
          <Image
            className="absolute -bottom-[90px] left-0 -z-1 lg:-top-[170px] lg:bottom-[unset]"
            src="/ikone/planning.svg"
            alt="planiranje ikona"
            width={160}
            height={160}
          />
          <Image
            className="xsm:right-5 xsm:bottom-0 absolute right-1 bottom-5 -z-1 sm:right-20 sm:-bottom-[70px] lg:right-[50%] lg:-bottom-[90px]"
            src="/ikone/poslovni-planovi.svg"
            alt="planiranje ikona"
            width={180}
            height={180}
          />
          <ul className="bg-background2 absolute top-0 left-0 z-10 rounded-t-2xl rounded-b-2xl">
            {/* <li
              className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-t-2xl border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
              onClick={() =>
                dropdown !== "d1" ? setDropdown("d1") : setDropdown("")
              }
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Poslovno savjetovanje
                <FaCircleChevronDown
                  className={cn(
                    "shrink-0 rotate-0 text-3xl transition-all duration-500",
                    dropdown === "d1" && "rotate-180",
                  )}
                />
              </p>
              <div
                className={cn(
                  "transition-all duration-500",
                  dropdown === "d1"
                    ? "visible max-h-200 opacity-100"
                    : "invisible max-h-0 opacity-0",
                )}
              >
                <p className="pt-2 text-lg">
                  Izrađujem poslovne planove, investicijske studije i analize
                  isplativosti koje služe kao temelj za donošenje odluka,
                  apliciranje na kredite il Uz stručnu pripremu dokumentacije,
                  pružam i podršku u pregovorima s kreditorima.
                </p>
              </div>
            </li> */}
            <li
              className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-t-2xl border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
              onClick={() =>
                dropdown !== "d2" ? setDropdown("d2") : setDropdown("")
              }
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Financijsko planiranje i investicijske studije
                <FaCircleChevronDown
                  className={cn(
                    "shrink-0 rotate-0 text-3xl transition-all duration-500",
                    dropdown === "d2" && "rotate-180",
                  )}
                />
              </p>
              <div
                className={cn(
                  "transition-all duration-500",
                  dropdown === "d2"
                    ? "visible max-h-200 opacity-100"
                    : "invisible max-h-0 opacity-0",
                )}
              >
                <p className="pt-2 text-lg">
                  Kroz poslovne planove, investicijske studije i analize
                  isplativosti pretvaram ideju u mjerljive brojke – kako biste
                  sigurnije donosili odluke i imali kvalitetnu dokumentaciju za
                  financiranje i ulaganja.
                </p>
              </div>
            </li>
            <li
              className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-b-2xl border-2 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
              onClick={() =>
                dropdown !== "d3" ? setDropdown("d3") : setDropdown("")
              }
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Poslovni planovi za poticaje HZZ-a (samozapošljavanje)
                <FaCircleChevronDown
                  className={cn(
                    "shrink-0 rotate-0 text-3xl transition-all duration-500",
                    dropdown === "d3" && "rotate-180",
                  )}
                />
              </p>
              <div
                className={cn(
                  "transition-all duration-500",
                  dropdown === "d3"
                    ? "visible max-h-200 opacity-100"
                    : "invisible max-h-0 opacity-0",
                )}
              >
                <p className="pt-2 text-lg">
                  Pomoći ću vam u izradi{" "}
                  <strong>
                    poslovnih planova za potpore Hrvatskog zavoda za
                    zapošljavanje (HZZ)
                  </strong>{" "}
                  namijenjene samozapošljavanju. Pomažem vam oblikovati poslovnu
                  ideju u jasnu i izvedivu strukturu, pripremiti svu potrebnu
                  dokumentaciju i argumentirano obrazložiti održivost vašeg
                  projekta — sve kako bi vaš zahtjev imao najbolje šanse za
                  odobrenje.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
