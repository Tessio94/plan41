import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceTypes = () => {
  return (
    <>
      <div className="bg-background2 px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
        <div>
          <div className="mb-15 flex flex-col items-start gap-15">
            <motion.h3
              className="font-playfair after:bg-theme3 before:bg-theme3 relative text-5xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Start up
            </motion.h3>
            <motion.p
              className="font-inter text-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Želite li ući u svijet poduzetništva, krenite od onoga u čemu ste
              autentični.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            <div className="border-theme1 group flex w-full flex-col items-start gap-1 rounded-2xl border-2 bg-[url(/frame-1.png)] p-8 text-xl text-slate-100 shadow-xl shadow-blue-950/50 transition-shadow duration-300 hover:shadow-blue-950/70">
              <div className="group-hover:border-theme3 rounded-full border-b-4 border-transparent p-1 pb-3.5 transition-all duration-300">
                <Image
                  src="/ikone/startup.svg"
                  alt="vizija ikona"
                  width={60}
                  height={60}
                />
              </div>
              <p className="font-inter text-2xl">
                Pomoć u izradi poslovnih planova i prijava na{" "}
                <strong className="text-theme3">HZZ</strong> radi ostvarenje
                poticaja za samozapošljavanje
              </p>
            </div>
            <div className="border-theme1 group flex w-full flex-col items-start gap-1 rounded-2xl border-2 bg-[url(/frame-1.png)] p-8 text-xl text-slate-100 shadow-xl shadow-blue-950/50 transition-shadow duration-300 hover:shadow-blue-950/70">
              <div className="group-hover:border-theme3 rounded-full border-b-4 border-transparent p-1 pb-3.5 transition-all duration-300">
                <Image
                  src="/ikone/insurance.svg"
                  alt="vizija ikona"
                  width={60}
                  height={60}
                />
              </div>
              <p className="font-inter text-2xl">
                Pomoć u osiguranju financiranja za pokretanje ili razvoj
                poslovanja kroz zajmove{" "}
                <strong className="text-theme3">HAMAG-BICRO</strong> i kredite{" "}
                <strong className="text-theme3">HBOR-a</strong> ili program{" "}
                <strong className="text-theme3">Erste</strong> banke
                Poduzetnički starter
              </p>
            </div>
            <div className="border-theme1 group flex w-full flex-col items-start gap-1 rounded-2xl border-2 bg-[url(/frame-1.png)] p-8 text-xl text-slate-100 shadow-xl shadow-blue-950/50 transition-shadow duration-300 hover:shadow-blue-950/70 md:ml-[50%] xl:ml-0">
              <div className="group-hover:border-theme3 rounded-full border-b-4 border-transparent p-1 pb-3.5 transition-all duration-300">
                <Image
                  src="/ikone/mentorship.svg"
                  alt="vizija ikona"
                  width={60}
                  height={60}
                />
              </div>
              <p className="font-inter text-2xl">
                Mentorski program - uvod poduzetniku početniku u svijet
                poduzetništva
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
        <div>
          <motion.h3
            className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-5xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Poduzetnici
          </motion.h3>
          <div className="relative flex w-full flex-col justify-between gap-6 lg:flex-row xl:gap-16">
            <div className="flex w-full grow flex-col items-start gap-5 lg:w-1/2 xl:gap-10">
              <div className="border-theme1 shadow-blue-950/50l group flex w-full flex-col items-start gap-1 rounded-2xl border-2 bg-[url(/frame-1.png)] p-8 text-xl text-slate-100 shadow-xl shadow-blue-950/50 transition-shadow duration-300 hover:shadow-blue-950/70">
                <div className="group-hover:border-theme3 rounded-full border-b-4 border-transparent p-1 pb-3.5 transition-all duration-300">
                  <Image
                    src="/ikone/financing.svg"
                    alt="vizija ikona"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="font-inter text-2xl">
                  Pomoć u osiguranju najpovoljnijeg načina financiranja
                </p>
              </div>
              <div className="border-theme1 group flex w-full flex-col items-start gap-1 rounded-2xl border-2 bg-[url(/frame-1.png)] p-8 text-xl text-slate-100 shadow-xl shadow-blue-950/50 transition-shadow duration-300 hover:shadow-blue-950/70">
                <div className="group-hover:border-theme3 rounded-full border-b-4 border-transparent p-1 pb-3.5 transition-all duration-300">
                  <Image
                    src="/ikone/documents.svg"
                    alt="vizija ikona"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="font-inter text-2xl">
                  Izrada poslovnih planova i investicijskih elaborata
                </p>
              </div>
              <motion.div
                className="max_3xl:mt-5 absolute right-0 bottom-0 z-20 max-[530px]:right-1/2 max-[530px]:bottom-[23%] max-[530px]:mt-0! max-[530px]:translate-x-[50%] max-[490px]:bottom-[21%] max-[440px]:bottom-[20%] max-[390px]:bottom-[18%] max-[370px]:bottom-[16%] lg:relative"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  href="/kontakt"
                  className="text-theme1 bg-theme3 hover:bg-theme2 hover:text-theme3 border-theme3 group mt-5 flex w-fit flex-row items-center gap-5 rounded-xl border-2 px-5 py-3 text-2xl font-bold transition-colors duration-300"
                >
                  Kontakt{" "}
                  <FaArrowRight className="transition-translate duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </div>
            <div className="relative w-[60%] max-[530px]:w-full lg:w-1/2">
              <div className="bg-theme1/50 absolute inset-0 hidden rounded-2xl max-[530px]:block"></div>
              <Image
                className="shadow-theme4/50 overflow-hidden rounded-2xl shadow-xl"
                src="/financije1_50.jpg"
                alt="vizija ikona"
                width={960}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTypes;
