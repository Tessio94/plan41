import React from "react";
import * as motion from "motion/react-client";
import { CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import Location from "@/components/Location";
import KontaktForma from "@/components/KontaktForma";
import Image from "next/image";

const page = () => {
  return (
    <section className="-mt-[148px]">
      <div className="bg-[url(/frame-1.png)] bg-cover bg-no-repeat px-6 pt-[254px] pb-26 sm:px-10 lg:px-18 2xl:px-28">
        <motion.h1
          className="font-playfair after:bg-theme3 before:bg-theme3 relative text-6xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        >
          Kontakt
        </motion.h1>
      </div>
      <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
        <div className="mb-20 flex w-full flex-col gap-5">
          <motion.p
            className="font-inter text-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Želite li ući u svijet poduzetništva, krenite od onoga u čemu ste
            autentični. Sljedeći korak je strategija, a kada dođete do poslovnog
            plana, <span className="font-bold">obratite mi se</span>.
          </motion.p>
          <motion.p
            className="font-inter text-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Ukoliko ste svoju poslovnu ideju sami razradili i pripemili poslovni
            plan, ukoliko želite savjet, mentorstvo, podršku i pomoć,{" "}
            <span className="font-bold">zatražite to</span>.
          </motion.p>
        </div>
        <div className="flex w-full flex-row justify-center max-[1180px]:mx-auto max-[1180px]:max-w-[80%] max-[1180px]:flex-col max-[630px]:max-w-[100%]">
          <div className="border-theme3 after:bg-theme3 before:bg-theme3 relative border-r-[3px] px-20 py-10 before:absolute before:top-0 before:-right-[8px] before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:-right-2 after:bottom-0 after:h-3 after:w-3 after:rotate-45 after:content-[''] max-[1710px]:px-10 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-r-0 max-[1180px]:border-b-2 max-[1180px]:px-0 max-[1180px]:py-0 max-[1180px]:pb-18 max-[1180px]:before:top-[unset] max-[1180px]:before:right-0 max-[1180px]:before:-bottom-2 max-[1180px]:after:-bottom-2 max-[1180px]:after:left-0">
            <div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6">
              <CiMobile3 className="text-theme3 text-5xl" />
              <p className="font-inter text-4xl font-semibold">Mobitel</p>
              <a
                href="tel:+385957269444"
                className="after:bg-theme1 font-playfair relative inline-block text-3xl after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 focus:after:right-0 active:after:right-0"
              >
                +385 95 72 69 444
              </a>
            </div>
          </div>
          <div className="border-theme3 max-[1710px]: flex border-x px-20 py-10 max-[1710px]:px-10 max-[1400px]:border-x-0 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-y-1 max-[1180px]:px-0 max-[1180px]:py-18">
            <div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6 max-[1180px]:w-full">
              <CiLocationOn className="text-theme3 text-5xl" />
              <p className="font-inter text-4xl font-semibold">Adresa</p>
              <p className="font-playfair text-center text-3xl">
                Augusta Cesarca 30A, Zadar
              </p>
            </div>
          </div>
          <div className="border-theme3 after:bg-theme3 before:bg-theme3 relative border-l-[3px] px-20 py-10 before:absolute before:top-0 before:-left-2 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:bottom-0 after:-left-2 after:h-3 after:w-3 after:rotate-45 after:content-[''] max-[1710px]:px-10 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-t-2 max-[1180px]:border-l-0 max-[1180px]:px-0 max-[1180px]:py-0 max-[1180px]:pt-18 max-[1180px]:before:-top-2 max-[1180px]:before:right-0 max-[1180px]:before:left-[unset] max-[1180px]:after:-top-2 max-[1180px]:after:bottom-[unset]">
            <div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6">
              <CiMail className="text-theme3 text-5xl" />
              <p className="font-inter text-4xl font-semibold">E-mail</p>
              <a
                href="mailto:info@plan41.hr"
                className="after:bg-theme1 font-playfair relative inline-block text-3xl after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 focus:after:right-0 active:after:right-0"
              >
                info@plan41.hr
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background2 w-full px-6 py-26 sm:px-10 lg:px-18 lg:py-42 2xl:px-28">
        <div className="flex w-full flex-col items-center justify-between gap-15 lg:h-160 lg:flex-row lg:gap-0">
          <div className="lg:rounded-r-0 order-2 h-140 w-full grow overflow-hidden rounded-l-2xl rounded-r-2xl bg-[url(/financije5.3_50.jpg)] bg-cover bg-no-repeat max-[550px]:h-fit max-[550px]:bg-none max-md:bg-position-[40%] lg:order-1 lg:h-full lg:rounded-r-none lg:bg-position-[50%] xl:bg-position-[20%]">
            <Image
              className="hidden rounded-2xl max-[550px]:block"
              src="/financije5.1_50.jpg"
              alt="laptop plan41"
              width={500}
              height={500}
            />
          </div>
          {/* <Location /> */}

          <KontaktForma />
        </div>
      </div>
    </section>
  );
};

export default page;
