"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CgArrowLongUp } from "react-icons/cg";
import { CiInstagram, CiMail, CiMobile3 } from "react-icons/ci";

const Header = () => {
  const [hambActive, setHambActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollBreakpoint, setScrollBreakpoint] = useState<boolean>(false);
  const [fixedNav, setFixedNav] = useState<boolean>(false);

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
        setScrollBreakpoint(window.scrollY > 600);
        setFixedNav(window.scrollY > 1000);
      } else {
        setScrollBreakpoint(false);
        setFixedNav(false);
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
          fixedNav
            ? "fixed top-0 right-0 left-0 bg-[url(/frame-1.png)] bg-cover bg-repeat py-1.5!"
            : "relative",
        )}
      >
        <Link
          href="/"
          className="font-playfair text-theme3 flex flex-row items-center gap-4 text-5xl font-bold"
        >
          <Image
            className={cn("rounded-full", fixedNav && "h-13 w-13")}
            src="/logo.svg"
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
          <ul className="flex items-center lg:gap-8 xl:gap-11 2xl:gap-18">
            <li>
              <Link
                href="/"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 2xl:text-2xl"
              >
                Naslovnica
              </Link>
            </li>
            <li>
              <Link
                href="/o-nama"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 2xl:text-2xl"
              >
                O nama
              </Link>
            </li>
            <li>
              <Link
                href="/usluge"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 2xl:text-2xl"
              >
                Usluge
              </Link>
            </li>
            <li>
              <Link
                href="/mentorstvo"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 2xl:text-2xl"
              >
                Mentorstvo
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="font-playfair after:bg-theme3 before:bg-theme3 relative inline-block cursor-pointer text-xl font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 2xl:text-2xl"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden flex-col lg:flex">
          <a
            href="tel:+385 95 72 69 444"
            className="text-heading1 font-playfair hover:border-theme3 border-b-none bg-theme2 text-background border-theme1 hover:bg-background hover:text-theme1 flex cursor-pointer items-center gap-1 rounded-2xl rounded-b-none border-2 py-1 pr-9 pl-3 text-xl font-semibold tracking-wider transition-all duration-300 xl:gap-2"
          >
            <CiMobile3 className="text-heading1 ml-[-3px] text-2xl" />
            <span className="after:bg-theme1 relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0">
              095 72 69 444
            </span>
          </a>

          <a
            href="mailto:info@plan41.hr"
            className="text-heading1 font-playfair bg-theme3 text-background border-theme3 hover:bg-background hover:text-theme3 ml-0 flex cursor-pointer items-center gap-1 rounded-2xl rounded-t-none border-2 px-3 py-1 text-xl font-semibold tracking-wider transition-all duration-300 xl:gap-2"
          >
            <CiMail className="text-heading1 text-2xl" />
            <span className="after:bg-theme3 relative inline-block after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0">
              info@plan41.hr
            </span>
          </a>
        </div>

        {/* ------------------mobile navigation---------------------------- */}
        <div className="ml-auto block lg:hidden">
          <div
            className={cn(
              "relative z-50 h-[35px] w-12.5 rotate-0 cursor-pointer transition-all duration-300 ease-in-out",
              scrollBreakpoint && "h-[21px] w-[25px]",
            )}
            onClick={() => setHambActive((prev) => !prev)}
          >
            <span
              className={cn(
                "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
                hambActive ? "top-[16px] rotate-135" : "top-0 rotate-0",
                scrollBreakpoint && "h-[3px]",
                fixedNav && hambActive && "top-[11px]",
              )}
            ></span>
            <span
              className={cn(
                "bg-theme3 transition-300 absolute top-[15px] block h-[5px] w-full rotate-0 rounded-[9px] transition-all ease-in-out",
                hambActive ? "-left-[60px] opacity-0" : "left-0 opacity-100",
                scrollBreakpoint && "top-[9px] h-[3px]",
              )}
            ></span>
            <span
              className={cn(
                "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
                hambActive ? "top-[16px] -rotate-135" : "top-[30px] rotate-0",
                scrollBreakpoint && "top-[18px] h-[3px]",
                fixedNav && hambActive && "top-[11px]",
              )}
            ></span>
          </div>
        </div>
        <nav
          className={cn(
            "xxsm:w-[260px] border-theme3 fixed top-[150px] bottom-0 left-0 z-9999 flex w-[300px] flex-col justify-between border-r-2 bg-[url(/frame-1.png)] bg-cover bg-no-repeat py-12 shadow-[inset_-50px_0_50px_-50px_var(--theme3)] transition-all duration-300 sm:w-[330px] lg:hidden",
            scrolled ? "top-0" : "top-[150px]",
            hambActive ? "translate-x-0" : "-translate-x-full",
            fixedNav && "top-[64px]",
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
                href="/mentorstvo"
                className="font-playfair relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Mentorstvo
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
                095 72 69 444
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
