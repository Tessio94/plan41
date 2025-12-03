"use client";

import React from "react";
import Image from "next/image";
import { CiInstagram, CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import { useProjectInfo } from "@/context/ProjectContext";

const Footer = () => {
  const { logo } = useProjectInfo();

  return (
    <footer className="flex flex-col items-center justify-between gap-8 bg-[url('/frame-1.png')] bg-cover bg-no-repeat px-8 py-10 lg:flex-row lg:gap-0 lg:px-12 xl:px-30">
      <a href="#">
        <Image
          className="rounded-full"
          src={logo}
          alt="plan41 logo"
          width={150}
          height={150}
        />
      </a>

      <div className="font-playfair order-1 text-center text-slate-100 lg:order-0">
        Copyright © 2025 Plan41 - Sva prava pridržana.
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-playfair flex flex-row items-start gap-4 text-2xl text-slate-100">
          <CiLocationOn className="text-theme3 text-3xl" />
          Zadar, Augusta Cesarca 30A
        </p>
        <p className="font-playfair flex flex-row items-start gap-4 text-2xl text-slate-100">
          <CiMobile3 className="text-theme3 text-3xl" />

          <a
            href="tel:+385957269444"
            className="after:bg-theme1 font-playfair relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0"
          >
            +385 95 726 94 44
          </a>
        </p>
        <p className="font-playfair flex flex-row items-start gap-4 text-2xl text-slate-100">
          <CiMail className="text-theme3 text-3xl" />

          <a
            href="mailto:info@plan41.hr"
            className="after:bg-theme1 font-playfair relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0"
          >
            info@plan41.hr
          </a>
        </p>
        <div className="flex justify-start">
          <a
            href="https://www.instagram.com/plan41/"
            target="_blank"
            aria-label="NLS Tech on Instagram - Footer social link"
            className="group"
          >
            <CiInstagram className="text-theme3 text-3xl transition-all duration-300 hover:scale-110 hover:text-slate-100" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
