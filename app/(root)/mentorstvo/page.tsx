import React from "react";
import * as motion from "motion/react-client";
import { cardContainer2, cardVariants2 } from "@/lib/animation";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="-mt-[148px]">
        <div className="bg-[url(/frame-1.png)] bg-cover bg-no-repeat px-6 pt-[254px] pb-26 sm:px-10 lg:px-18 2xl:px-28">
          <motion.h1
            className="font-playfair after:bg-theme3 before:bg-theme3 relative text-6xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Mentorstvo
          </motion.h1>
        </div>
        <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
          <div className="flex w-full flex-col gap-5">
            <motion.h3
              className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-5xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Neka znanje kruži
            </motion.h3>
            <motion.p
              className="font-inter text-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            >
              Ukoliko želite svoje znanje prenijeti poduzetnicima i onima koji
              to žele postati, pozivam vas na suradnju u razvoju i provedbi
              mentorskih programa
            </motion.p>

            <ul className="ml-5 flex list-disc flex-col gap-5">
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                <p className="font-inter text-3xl">
                  <span className="font-bold">Zašto mentorstvo?</span>{" "}
                  Jedinstvena prilika izlaska iz uobičajenog kruga prijatelja i
                  kolega, razvoj kritičkog razmišljanja, otvaranja novih
                  perspektiva i u konačnici razvoja novih ideja.
                </p>
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                <p className="font-inter text-3xl">
                  <span className="font-bold">Čemu služi mentorstvo?</span>{" "}
                  Osobnom razvoju, širenju znanja, motiviranju, poticanju,
                  umrežavanju, poticanju samostalnog razmišljanja i donošenja
                  odluka, povezivanju različitih generacija.
                </p>
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              >
                <p className="font-inter text-3xl">
                  <span className="font-bold">
                    Što je nužno za mentorski program?
                  </span>{" "}
                  Odnos povjerenja i poštovanja.
                </p>
              </motion.li>
            </ul>
          </div>
          <div className="mx-auto mt-20 w-fit overflow-hidden rounded-2xl shadow-xl">
            <Image
              className="rounded-2xl"
              src="/mentor.jpg"
              alt="mentor program"
              width={1536}
              height={1024}
            />
          </div>
        </div>

        <div className="bg-background2 px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
          <motion.h3
            className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-5xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Mentorski programi
          </motion.h3>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 2xl:grid-cols-3">
            <div className="bg-theme1/10 border-theme1 flex w-full flex-col gap-5 rounded-2xl border p-6 shadow-xl">
              <h5 className="font-inter mb-5 text-4xl font-semibold underline">
                Osnove poduzetništva – Prvi koraci koji čine razliku
              </h5>
              <p className="font-inter text-3xl">
                Modul je namijenjen ambicioznim i motiviranim osobama koje
                preuzimaju odgovornost za svoje odluke i traže mentorsku
                podršku, a ne gotova rješenja. Postavljanje čvrstih temelja
                poslovanja kroz razumijevanje:
              </p>

              <ul className="ml-5 flex list-disc flex-col gap-5">
                <li>
                  <p className="font-inter text-3xl">
                    razlike poslovnih modela
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    uloge i odgovornosti poduzetnika
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    osnovni zakonodavni okvir
                  </p>
                </li>
              </ul>
              <p className="font-inter text-3xl">
                <span className="font-semibold">Cilj modula:</span> siguran
                ulazak u poduzetništvo
              </p>
            </div>
            <div className="bg-theme1/10 border-theme1 flex w-full flex-col gap-5 rounded-2xl border p-6 shadow-xl">
              <h5 className="font-inter mb-5 text-4xl font-semibold underline">
                Profitabilnost, cijene i poslovni ciljevi
              </h5>
              <p className="font-inter text-3xl">
                Rad na postavljanju{" "}
                <span className="font-semibold">
                  realnih i održivih poslovnih ciljeva
                </span>{" "}
                kroz:
              </p>

              <ul className="ml-5 flex list-disc flex-col gap-5">
                <li>
                  <p className="font-inter text-3xl">
                    definiranje cilja zadovoljavajuće profitabilnosti
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    razumijevanje strukture troškova
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    formiranje cijena proizvoda ili usluga
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    tumačenje financijskih pokazatelja
                  </p>
                </li>
              </ul>

              <p className="font-inter text-3xl">
                <span className="font-semibold">Cilj modula:</span> osigurati da
                poslovanje bude profitabilno u skladu sa očekivanjima
              </p>
            </div>
            <div className="bg-theme1/10 border-theme1 flex w-full flex-col gap-5 rounded-2xl border p-6 shadow-xl">
              <h5 className="font-inter mb-5 text-4xl font-semibold underline">
                Pasivni prihodi
              </h5>

              <ul className="ml-5 flex list-disc flex-col gap-5">
                <li>
                  <p className="font-inter text-3xl">
                    Analiza preduvjeta za ostvarenje pasivnih prihoda
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    Osnovni pojmovi i vrste pasivnih prihoda
                  </p>
                </li>
              </ul>
              <p className="font-inter text-3xl">
                <span className="font-semibold">Cilj modula:</span>{" "}
                razumijevanje opcija pasivnih prihoda, njihovih prednosti i
                ograničenja, kako bi mogli pravovremeno donositi odluke koje
                doprinose financijskoj sigurnosti i stabilnosti
              </p>
            </div>
            <div className="bg-theme1/10 border-theme1 flex w-full flex-col gap-5 rounded-2xl border p-6 shadow-xl">
              <h5 className="font-inter mb-5 text-4xl font-semibold underline">
                Investiranje i financiranje
              </h5>
              <p className="font-inter text-3xl">
                Kada je pravi trenutak za investiranje i kako ga financirati
              </p>

              <ul className="ml-5 flex list-disc flex-col gap-5">
                <li>
                  <p className="font-inter text-3xl">
                    prepoznavanje pravog trenutka za investiciju u odnosu na
                    fazu poslovanja
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    unutarnji i vanjski izvori financiranja
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    utjecaj investicije i financiranja na likvidnost, stabilnost
                    i rizik poslovanja
                  </p>
                </li>
                <li>
                  <p className="font-inter text-3xl">
                    priprema poslovanja i financijske dokumentacije za razgovore
                    s bankama, investitorima ili institucijama
                  </p>
                </li>
              </ul>

              <p className="font-inter text-3xl">
                <span className="font-semibold">Cilj modula:</span> Razumjeti
                financijski i poslovni učinak investicije te način procjene
                banke
              </p>
            </div>
            <div className="bg-theme1/10 border-theme1 flex w-full flex-col gap-5 place-self-start rounded-2xl border p-6 shadow-xl">
              <h5 className="font-inter mb-5 text-4xl font-semibold underline">
                Prilagođeni program
              </h5>
              <p className="font-inter text-3xl">
                Program je prilagođen vašim potrebama i ciljevima
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
