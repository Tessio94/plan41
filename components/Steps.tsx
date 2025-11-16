"use client";

import DecisionIcons from "@/components/icons/DecisionIcons";
import { useState } from "react";

export default function Steps() {
  const [transitionStep, setTransitionStep] = useState("");

  return (
    <div className="grid grid-cols-2 gap-5 py-20 px-10 bg-blue-200/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-7 max-lg:col-span-2 max-sm:place-items-center">
        <div
          className="relative w-50 h-50 z-20 group"
          onMouseEnter={() => {
            setTransitionStep("ideja");
          }}
          onMouseLeave={() => {
            setTransitionStep("");
          }}
        >
          <div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
          <div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300 z-20">
            <p className="text-xl font-bold absolute right-8 top-2 after:content-[''] after:absolute after:h-0.5 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-0.5 before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300">
              Ideja
            </p>
            <div className="flex flex-col py-3 pl-3 pr-2 gap-2 mt-12">
              <p className="">
                Svaka dobra <strong>ideja</strong> počinje razumijevanjem
                problema i vjerom u rješenje.
              </p>
            </div>
          </div>
          <div className="absolute left-10 -top-10 w-50 h-50 z-10 ">
            <div className="absolute inset-0 card  bg-yellow-400 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
            <div className="absolute inset-0 card-border bg-yellow-50 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
          </div>
        </div>
        <div
          className="relative w-50 h-50 z-20 group"
          onMouseEnter={() => {
            setTransitionStep("struktura");
          }}
          onMouseLeave={() => {
            setTransitionStep("");
          }}
        >
          <div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
          <div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 z-20">
            <p className="text-xl font-bold absolute right-1.5 top-2 after:content-[''] after:absolute after:h-0.5 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-0.5 before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300">
              Struktura
            </p>
            <div className="flex flex-col py-3 pl-3 pr-2 gap-2 mt-12">
              <p className="">
                Jasna <strong>struktura</strong> organizacije omogućuje
                efikasnost, odgovornosti i bolju timsku koordinaciju.
              </p>
            </div>
          </div>
          <div className="absolute left-10 -top-10 w-50 h-50 z-10">
            <div className="absolute inset-0 card  bg-yellow-400 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
            <div className="absolute inset-0 card-border bg-yellow-50 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
          </div>
        </div>
        <div
          className="relative w-50 h-50 z-20 group  hover:card-shadow"
          onMouseEnter={() => {
            setTransitionStep("plan");
          }}
          onMouseLeave={() => {
            setTransitionStep("");
          }}
        >
          <div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
          <div className="absolute inset-0 card-border bg-blue-50 z-20 group-hover:bg-blue-100 transition-colors duration-300">
            <p className="text-xl font-bold absolute right-8 top-2 after:content-[''] after:absolute after:h-0.5 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-0.5 before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300">
              Plan
            </p>
            <div className="flex flex-col py-3 pl-3 pr-2 gap-2 mt-12">
              <p className="">
                <strong>Plan</strong> mora definirati ciljeve, rokove, resurse i
                jasno mjerljive korake.
              </p>
            </div>
          </div>
          <div className="absolute left-10 -top-10 w-50 h-50 z-10 ">
            <div className="absolute inset-0 card  bg-yellow-400 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
            <div className="absolute inset-0 card-border bg-yellow-50 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
          </div>
        </div>

        <div
          className="relative w-50 h-50 z-20 group"
          onMouseEnter={() => {
            setTransitionStep("akcija");
          }}
          onMouseLeave={() => {
            setTransitionStep("");
          }}
        >
          <div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
          <div className="absolute inset-0 card-border  bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300  z-20">
            <p className="text-xl font-bold absolute right-6 top-2 after:content-[''] after:absolute after:h-0.5 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-0.5 before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300">
              Akcija
            </p>
            <div className="flex flex-col py-3 pl-3 pr-2 gap-2 mt-12">
              <p className="">
                Brza <strong>akcija</strong> uz mjerenje rezultata vodi do
                održivog poslovnog rasta.
              </p>
            </div>
          </div>
          <div className="absolute left-10 -top-10 w-50 h-50 z-10 ">
            <div className="absolute inset-0 card  bg-yellow-400 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
            <div className="absolute inset-0 card-border bg-yellow-50 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <DecisionIcons transitionStep={transitionStep} />
      </div>
    </div>
  );
}
