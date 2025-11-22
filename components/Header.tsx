"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CgArrowLongUp } from "react-icons/cg";
import { CiInstagram, CiMail, CiMobile3 } from "react-icons/ci";

const Header = () => {
  const [hambActive, setHambActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [fixedNav, setFixedNav] = useState<boolean>(false);
  const [showFixedNav, setShowFixedNav] = useState<boolean>(false);

  const path = usePathname();

  const removeSidebar = useEffectEvent(() => {
    setHambActive(false);
  });

  useEffect(() => {
    removeSidebar();
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 500) {
        setFixedNav(window.scrollY > 1000);
        setShowFixedNav(window.scrollY > 1200);
        console.log(scrollY);
      } else {
        setFixedNav(false);
        setShowFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "z-100 flex max-w-screen flex-row items-center justify-between bg-blue-950/40 px-8 py-5 after:absolute after:inset-0 after:-z-1 after:backdrop-blur-xs lg:px-12 xl:px-30",
          // navHeight && "invisible max-h-0 opacity-0",
          fixedNav
            ? "invisible fixed top-0 right-0 left-0 max-h-0 bg-[url(/frame-1.png)] bg-cover bg-repeat py-1.5! opacity-0"
            : "relative",
          showFixedNav &&
            "visible max-h-200 opacity-100 transition-all duration-300",
        )}
      >
        <Link
          href="/"
          className="font-playfair text-theme3 flex flex-row items-center gap-4 text-5xl font-bold"
        >
          <Image
            className={cn("rounded-full", fixedNav && "h-18 w-18")}
            src="/logo1.png"
            alt="plan41 logo"
            width={110}
            height={110}
          />

          <span className="flex flex-row max-[1650px]:hidden max-[1024px]:flex max-[500px]:hidden">
            Plan4
            <CgArrowLongUp className="mt-2 -ml-[18px]" />
          </span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center lg:gap-8 xl:gap-14 2xl:gap-22">
            <li>
              <Link
                href="/"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-2xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
              >
                Naslovnica
              </Link>
            </li>
            <li>
              <Link
                href="/o-nama"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-2xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
              >
                O nama
              </Link>
            </li>
            <li>
              <Link
                href="/usluge"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-2xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
              >
                Usluge
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-2xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden flex-row max-[1350px]:flex-col lg:flex">
          <a
            href="tel:+385 99 312 4867"
            className="text-heading1 font-playfair max-[1350px]:hover:border-theme3 max-[1350px]:border-b-none bg-theme2 text-background border-theme1 hover:bg-background hover:text-theme1 flex cursor-pointer items-center gap-1 rounded-2xl border-2 py-2 pr-9 pl-3 text-xl font-semibold tracking-wider transition-all duration-300 max-[1350px]:rounded-b-none max-[1350px]:py-1 xl:gap-2"
          >
            <CiMobile3 className="text-heading1 ml-[-3px] text-2xl" />
            <span className="after:bg-theme1 font-mont relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0">
              099 312 4867
            </span>
          </a>

          <a
            href="mailto:info@nlstech.pro"
            className="text-heading1 font-playfair bg-theme3 text-background border-theme3 hover:bg-background hover:text-theme3 -ml-6 flex cursor-pointer items-center gap-1 rounded-2xl border-2 px-3 py-2 text-xl font-semibold tracking-wider transition-all duration-300 max-[1350px]:ml-0 max-[1350px]:rounded-t-none max-[1350px]:py-1 xl:gap-2"
          >
            <CiMail className="text-heading1 text-2xl" />
            <span className="after:bg-theme3 font-mont relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0">
              info@plan41.hr
            </span>
          </a>
        </div>

        {/* ------------------mobile navigation---------------------------- */}
        <div className="ml-auto block lg:hidden">
          <div
            className="relative z-50 h-[35px] w-12.5 rotate-0 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setHambActive((prev) => !prev)}
          >
            <span
              className={cn(
                "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
                hambActive ? "top-[16px] rotate-135" : "top-0 rotate-0",
              )}
            ></span>
            <span
              className={cn(
                "bg-theme3 transition-300 absolute top-[15px] block h-[5px] w-full rotate-0 rounded-[9px] transition-all ease-in-out",
                hambActive ? "-left-[60px] opacity-0" : "left-0 opacity-100",
              )}
            ></span>
            <span
              className={cn(
                "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
                hambActive ? "top-[16px] -rotate-135" : "top-[30px] rotate-0",
              )}
            ></span>
          </div>
        </div>
        <nav
          className={cn(
            "xxsm:w-[260px] border-theme3 fixed top-[150px] bottom-0 left-0 z-9999 flex w-[300px] flex-col justify-between border-r-2 bg-[url(/frame-1.png)] bg-cover bg-no-repeat py-12 shadow-[inset_-50px_0_50px_-50px_var(--theme3)] transition-all duration-300 sm:w-[330px] lg:hidden",
            scrolled ? "top-0" : "top-[150px]",
            hambActive ? "translate-x-0" : "-translate-x-full",
            fixedNav && "top-[84px]",
          )}
        >
          <ul className="flex flex-col gap-6 text-2xl">
            <li className="w-full">
              <Link
                href="/"
                className="font-playfair relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Naslovnica
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/o-nama"
                className="font-playfair relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                O nama
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/usluge"
                className="font-playfair relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Usluge
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/kontakt"
                className="font-playfair relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="px-3 py-1 transition-all duration-500">
              <a
                href="tel:+385957269444"
                className="font-playfair flex cursor-pointer items-center gap-2 text-xl tracking-wider text-slate-100 capitalize"
              >
                <CiMobile3 className="text-theme3 text-3xl" />
                095 726 94 44
              </a>
            </div>
            <div className="px-3 py-1 transition-all duration-500">
              <a
                href="mailto:info@plan41.hr"
                className="font-playfair flex cursor-pointer items-center gap-2 text-xl tracking-wider text-slate-100"
              >
                <CiMail className="text-theme3 text-3xl" />
                info@plan41.hr
              </a>
            </div>

            <a
              href="https://www.instagram.com/plan41/"
              target="_blank"
              aria-label="Visit Plan 41 on Instagram - sidebar link"
              className="px-3 py-1 transition-all duration-500"
            >
              <CiInstagram className="text-theme3 text-3xl" />
            </a>
          </div>
        </nav>
      </header>
      <div className={cn("h-[150px]", fixedNav ? "block" : "hidden")}></div>
    </>
  );
};

export default Header;
