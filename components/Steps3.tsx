"use client";

import ClipPathIcons from "./icons/ClipPathIcons";
import NounIcon from "./icons/NounIcon";
import { cardContainer, cardVariants } from "@/lib/animation";
import { LazyMotion, domAnimation, m } from "motion/react";
import { useMediaQuery } from "usehooks-ts";

const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
};

export default function Steps3() {
  const matches = useMediaQuery("(min-width: 640px)");

  return (
    <section className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
      <ClipPathIcons />

      {/* LazyMotion boundary */}
      <LazyMotion features={domAnimation}>
        <div className="mb-15 flex flex-col gap-5">
          <m.h3
            className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-2 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Koraci do uspjeha
          </m.h3>

          <m.p
            className="font-inter text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Broj <b>41</b> simbolizira četiri koraka do jednog cilja –{" "}
            <b>ideju</b>, <b>strukturu</b>, <b>plan</b> i <b>akciju</b>.
          </m.p>

          <m.p
            className="font-inter text-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Kroz te korake pomažem poduzetnicima i onima koji to žele postati da
            pretvore svoje ideje u održive projekte i sigurno izgrade svoj put
            prema uspjehu.
          </m.p>
        </div>

        <m.div
          className="grid place-items-center gap-10 sm:grid-cols-2 2xl:grid-cols-4"
          {...(matches ? inViewProps : {})}
          variants={matches ? cardContainer : undefined}
        >
          {[
            {
              title: "Ideja",
              text: `je početak promjene – trenutak kada iskustvo i vizija postaju
                  poslovna prilika`,
              type: "idea",
              left: "left-12",
            },
            {
              title: "Struktura",
              text: `Stabilni temelji koji ideju čine provedivom, mjerljivom i
                  održivom`,
              type: "structure",
              left: "left-2",
            },
            {
              title: "Plan",
              text: `je most između vizije i rezultata - definira ciljeve, resurse
                  i rokove`,
              type: "plan",
              left: "left-13",
            },
            {
              title: "Akcija",
              text: `Idemo do kraja – provođenje odluka koje plan pretvaraju u
                  željeni rezultat`,
              type: "action",
              left: "left-11",
            },
          ].map(({ title, text, type, left }) => (
            <m.div
              key={title}
              className="group relative z-20 h-75 min-h-70 w-full max-w-85 min-w-70 rounded-br-2xl shadow-[30px_30px_30px_#0041772f]"
              {...(matches ? {} : inViewProps)}
              variants={cardVariants}
            >
              <p
                className={`font-playfair absolute top-3.5 ${left} text-[34px] font-bold`}
              >
                {title}
              </p>

              <div className="card bg-theme1 transition-translate absolute inset-0 z-20 duration-300 group-hover:translate-y-2.5" />

              <div className="card-border absolute inset-0 z-20 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100 group-focus:bg-blue-100 group-active:bg-blue-100">
                <NounIcon type={type} />
                <div className="mt-[25%] flex flex-col gap-2 py-6 pr-3 pl-6">
                  <p className="text-2xl">
                    {(title === "Plan" || title === "Ideja") && (
                      <strong className="group-hover:text-theme3 group-focus:text-theme3 group-active:text-theme3 transition-colors duration-300">
                        {title}{" "}
                      </strong>
                    )}
                    {text}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
