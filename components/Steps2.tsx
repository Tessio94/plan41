"use client";
import * as motion from "motion/react-client";
import ClipPathIcons from "./icons/ClipPathIcons";
import NounIcon from "./icons/NounIcon";
import { cardContainer, cardVariants } from "@/lib/animation";

export default function Steps2() {
  return (
    <section className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
      <ClipPathIcons />
      <div className="mb-15 flex flex-col gap-5">
        <motion.h3
          className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-2 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Koraci do uspjeha
        </motion.h3>
        <motion.p
          className="font-inter text-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Broj <b>41</b> simbolizira četiri koraka do jednog cilja –{" "}
          <b>ideju</b>, <b>strukturu</b>, <b>plan</b> i <b>akciju</b>.
        </motion.p>
        <motion.p
          className="font-inter text-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Kroz te korake pomažem poduzetnicima i onima koji to žele postati da
          pretvore svoje ideje u održive projekte i sigurno izgrade svoj put
          prema uspjehu.
        </motion.p>
      </div>

      <div className="">
        <motion.div
          className="grid place-items-center gap-10 sm:grid-cols-2 2xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardContainer}
        >
          <motion.div
            className="group relative z-20 h-75 min-h-70 w-full max-w-85 min-w-70 rounded-br-2xl shadow-[30px_30px_30px_#0041772f]"
            variants={cardVariants}
          >
            <p className="font-playfair absolute top-3.5 left-12 text-[34px] font-bold">
              Ideja
            </p>
            <div className="card bg-theme1 transition-translate absolute inset-0 z-20 duration-300 group-hover:translate-y-2.5"></div>
            <div className="card-border absolute inset-0 z-20 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <NounIcon type="idea" />
              <div className="mt-[25%] flex flex-col gap-2 py-6 pr-3 pl-6">
                <p className="text-2xl">
                  Svaka dobra{" "}
                  <strong className="group-hover:text-theme3 transition-colors duration-300">
                    ideja
                  </strong>{" "}
                  počinje razumijevanjem problema i vjerom u rješenje.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="group relative z-20 h-75 min-h-70 w-full max-w-85 min-w-70 rounded-br-2xl shadow-[30px_30px_30px_#0041772f]"
            variants={cardVariants}
          >
            <p className="font-playfair max_3xl:text-[30px] max_3xl:top-4.5 max_2sm:text-[28px]! max_2sm:top-4.5! max_sm:text-[32px]! max_xsm:text-[30px]! absolute top-3.5 left-2 text-[32px] font-bold max-2xl:top-3.5! max-2xl:text-[32px]!">
              Struktura
            </p>
            <div className="card bg-theme1 transition-translate absolute inset-0 z-20 duration-300 group-hover:translate-y-2.5"></div>
            <div className="card-border absolute inset-0 z-20 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <NounIcon type="structure" />
              <div className="mt-[25%] flex flex-col gap-2 py-6 pr-3 pl-6">
                <p className="text-2xl">
                  Jasna{" "}
                  <strong className="group-hover:text-theme3 transition-colors duration-300">
                    struktura
                  </strong>{" "}
                  organizacije omogućuje efikasnost, odgovornosti i bolju timsku
                  koordinaciju.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="group relative z-20 h-75 min-h-70 w-full max-w-85 min-w-70 rounded-br-2xl shadow-[30px_30px_30px_#0041772f]"
            variants={cardVariants}
          >
            <p className="font-playfair absolute top-3.5 left-13 text-[34px] font-bold">
              Plan
            </p>
            <div className="card bg-theme1 transition-translate absolute inset-0 z-20 duration-300 group-hover:translate-y-2.5"></div>
            <div className="card-border absolute inset-0 z-20 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <NounIcon type="plan" />
              <div className="mt-[25%] flex flex-col gap-2 py-6 pr-3 pl-6">
                <p className="text-2xl">
                  <strong className="group-hover:text-theme3 transition-colors duration-300">
                    Plan
                  </strong>{" "}
                  mora definirati ciljeve, rokove, resurse i jasno mjerljive
                  korake.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative z-20 h-75 min-h-70 w-full max-w-85 min-w-70 rounded-br-2xl shadow-[30px_30px_30px_#0041772f]"
            variants={cardVariants}
          >
            <p className="font-playfair max_3xl:left-9 absolute top-3.5 left-11 text-[34px] font-bold">
              Akcija
            </p>
            <div className="card bg-theme1 transition-translate absolute inset-0 z-20 duration-300 group-hover:translate-y-2.5"></div>
            <div className="card-border absolute inset-0 z-20 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <NounIcon type="action" />
              <div className="mt-[25%] flex flex-col gap-2 py-6 pr-3 pl-6">
                <p className="text-2xl">
                  Brza{" "}
                  <strong className="group-hover:text-theme3 transition-colors duration-300">
                    akcija
                  </strong>{" "}
                  uz mjerenje rezultata vodi do održivog poslovnog rasta.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
