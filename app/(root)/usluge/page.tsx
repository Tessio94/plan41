import React from "react";
import { Metadata } from "next";
import * as motion from "motion/react-client";
import SelectService from "@/components/SelectService";
import ServiceTypes from "@/components/ServiceTypes";

export const metadata: Metadata = {
  title: "Usluge | Plan41 – Podrška poduzetnicima i startupima",
  description:
    "Plan41 nudi savjetovanje, mentorstvo i izradu poslovnih planova za startupe i poduzetnike. Pomoć pri financiranju, poticajima i održivom rastu poslovanja.",
  openGraph: {
    title: "Usluge | Plan41",
    description:
      "Savjetovanje, mentorstvo i praktična podrška za poduzetnike – od prve ideje do stabilnog poslovanja.",
    url: "https://www.plan41.hr/usluge",
    siteName: "Plan 41",
    images: [
      {
        url: "https://www.plan41.hr/og-plan41.jpg",
        width: 1200,
        height: 630,
        alt: "Usluge poslovnog savjetovanja – Plan 41",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <SelectService />
      <section className="-mt-[148px]">
        <div className="bg-[url(/frame-1.png)] bg-cover bg-no-repeat px-6 pt-[254px] pb-26 sm:px-10 lg:px-18 2xl:px-28">
          <motion.h1
            className="font-playfair after:bg-theme3 before:bg-theme3 relative text-6xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Usluge
          </motion.h1>
        </div>
        <ServiceTypes />
      </section>
    </>
  );
};

export default page;
