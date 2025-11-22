"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SelectService = () => {
  const [tab, setTab] = useState("t1");

  return (
    <div className="bg-background2 px-6 pt-26 pb-26 min-[1024px]:pb-80 min-[1050px]:pb-70 min-[1080px]:pb-65 min-[1120px]:pb-56 min-[1280px]:pb-40 min-[1400px]:pb-26 sm:px-10 lg:px-18 2xl:px-28">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-8 xl:gap-16 2xl:gap-22">
        <div className="w-fit">
          <ul>
            <li
              className={cn(
                "border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-t-2xl border-2 border-b-0 bg-linear-to-br from-transparent px-3 py-3 transition-colors duration-500 hover:bg-linear-to-br min-[400px]:px-5",
                tab === "t1" && "from-theme2/10 to-theme2/60",
              )}
              onClick={() => setTab("t1")}
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Poslovno savjetovanje
                <FaArrowRight
                  className={cn(
                    "shrink-0 rotate-90 transition-all duration-300 max-lg:group-hover:translate-y-2 lg:rotate-0 lg:group-hover:translate-x-2",
                    tab === "t1" && "max-lg:translate-y-2 lg:translate-x-2",
                  )}
                />
              </p>
            </li>
            <li
              className={cn(
                "border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-3 py-3 transition-colors duration-500 hover:bg-linear-to-br min-[400px]:px-5",
                tab === "t2" && "from-theme2/10 to-theme2/60",
              )}
              onClick={() => setTab("t2")}
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Financijsko planiranje i investicijske studije
                <FaArrowRight
                  className={cn(
                    "shrink-0 rotate-90 transition-all duration-300 max-lg:group-hover:translate-y-2 lg:rotate-0 lg:group-hover:translate-x-2",
                    tab === "t2" && "max-lg:translate-y-2 lg:translate-x-2",
                  )}
                />
              </p>
            </li>
            <li
              className={cn(
                "border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-b-2xl border-2 bg-linear-to-br from-transparent px-3 py-3 transition-colors duration-500 hover:bg-linear-to-br min-[400px]:px-5",
                tab === "t3" && "from-theme2/10 to-theme2/60",
              )}
              onClick={() => setTab("t3")}
            >
              <p className="font-inter flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
                Poslovni planovi za poticaje HZZ-a (samozapošljavanje)
                <FaArrowRight
                  className={cn(
                    "shrink-0 rotate-90 transition-all duration-300 max-lg:group-hover:translate-y-2 lg:rotate-0 lg:group-hover:translate-x-2",
                    tab === "t3" && "max-lg:translate-y-2 lg:translate-x-2",
                  )}
                />
              </p>
            </li>
          </ul>
        </div>
        <div className="relative z-20 w-full min-[320px]:min-h-[600px] min-[350px]:min-h-[560px] min-[360px]:min-h-[530px] min-[450px]:min-h-[480px] min-[500px]:min-h-[400px] sm:min-h-[300px] lg:min-h-[unset] lg:w-4/5">
          <div
            className={cn(
              "absolute inset-0 transition-all duration-300",
              tab === "t1" ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            <div className="bg-background shadow-theme1/30 inset-shadow-theme1/30 border-theme1/60 z-10 rounded-2xl border-2 px-3 py-5 shadow-lg inset-shadow-sm min-[400px]:p-8">
              <p className="text-2xl">
                Pomažem u svim fazama razvoja poslovanja — od pokretanja obrta
                ili poduzeća do širenja postojećeg poslovanja. Savjetujem o
                izboru pravne strukture, zakonskim obvezama, troškovima i
                mogućnostima financiranja.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "absolute inset-0 transition-all duration-300",
              tab === "t2" ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            <div className="bg-background shadow-theme1/30 inset-shadow-theme1/30 border-theme1/60 rounded-2xl border-2 px-3 py-5 shadow-lg inset-shadow-sm min-[400px]:p-8">
              <p className="text-2xl">
                Izrađujem poslovne planove, investicijske studije i analize
                isplativosti koje služe kao temelj za donošenje odluka,
                apliciranje na kredite il Uz stručnu pripremu dokumentacije,
                pružam i podršku u pregovorima s kreditorima.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "absolute inset-0 transition-all duration-300",
              tab === "t3" ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            <div className="bg-background shadow-theme1/30 inset-shadow-theme1/30 border-theme1/60 rounded-2xl border-2 px-3 py-5 shadow-lg inset-shadow-sm min-[400px]:p-8">
              <p className="text-2xl">
                Pomoći ću vam u izradi{" "}
                <strong>
                  poslovnih planova za potpore Hrvatskog zavoda za zapošljavanje
                  (HZZ) namijenjene
                </strong>{" "}
                samozapošljavanju. Pomažem vam oblikovati poslovnu ideju u jasnu
                i izvedivu strukturu, pripremiti svu potrebnu dokumentaciju i
                argumentirano obrazložiti održivost vašeg projekta — sve kako bi
                vaš zahtjev imao najbolje šanse za odobrenje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectService;
//    <Image
//             className="absolute -top-[170px] right-0 -z-1 block max-[450px]:hidden"
//             src="/ikone/consulting.svg"
//             alt="planiranje ikona"
//             width={140}
//             height={140}
//           />
//           <Image
//             className="absolute -bottom-[90px] left-0 -z-1 lg:-top-[170px] lg:bottom-[unset]"
//             src="/ikone/planning.svg"
//             alt="planiranje ikona"
//             width={160}
//             height={160}
//           />
//           <Image
//             className="xsm:right-5 xsm:bottom-0 absolute right-1 bottom-5 -z-1 sm:right-20 sm:-bottom-[70px] lg:right-[50%] lg:-bottom-[90px]"
//             src="/ikone/poslovni-planovi.svg"
//             alt="planiranje ikona"
//             width={180}
//             height={180}
//           />
