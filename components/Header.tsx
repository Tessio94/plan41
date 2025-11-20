import Image from "next/image";
import Link from "next/link";
import { CgArrowLongUp } from "react-icons/cg";
import { CiMail, CiMobile3 } from "react-icons/ci";

const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 z-20 flex max-w-screen flex-row items-center justify-between bg-blue-950/40 px-8 py-5 backdrop-blur-xs lg:px-12 xl:px-30">
      <Link
        href="/"
        className="font-playfair text-theme3 flex flex-row items-center gap-4 text-5xl font-bold"
      >
        <Image
          className="rounded-full"
          src="/logo1.png"
          alt="plan41 logo"
          width={110}
          height={110}
        />

        <span className="flex flex-row max-[1650px]:hidden">
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
          className="text-heading1 font-playfair bg-theme2 text-background border-theme1 hover:bg-background hover:text-theme1 flex cursor-pointer items-center gap-1 rounded-2xl border-2 py-2 pr-9 pl-3 text-xl font-semibold tracking-wider transition-all duration-300 max-[1350px]:rounded-b-none max-[1350px]:py-1 xl:gap-2"
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
    </header>
  );
};

export default Header;
