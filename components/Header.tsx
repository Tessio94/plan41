import Image from "next/image";
import Link from "next/link";
import { CiMail, CiMobile3 } from "react-icons/ci";

const Header = () => {
	return (
		<header className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-5 bg-blue-950/40 backdrop-blur-xs z-20 max-w-screen">
			<Link
				href="/"
				className="flex flex-row gap-4 items-center text-5xl font-bold font-playfair text-theme3"
			>
				<Image
					className="rounded-full"
					src="/logo1.png"
					alt="plan41 logo"
					width={110}
					height={110}
				/>
				Plan41
			</Link>
			<nav className="hidden lg:block">
				<ul className="flex items-center lg:gap-8 xl:gap-22">
					<li>
						<Link
							href="/"
							className="text-slate-100 relative cursor-pointer font-playfair text-2xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme3 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5 before:bg-theme3 before:transition-all before:duration-300"
						>
							Naslovnica
						</Link>
					</li>
					<li>
						<Link
							href="/o-nama"
							className="text-slate-100 relative cursor-pointer font-playfair text-2xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme3 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme3 before:transition-all before:duration-300"
						>
							O nama
						</Link>
					</li>
					<li>
						<Link
							href="/usluge"
							className="text-slate-100 relative cursor-pointer font-playfair text-2xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme3 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme3 before:transition-all before:duration-300"
						>
							Usluge
						</Link>
					</li>
					<li>
						<Link
							href="/kontakt"
							className="text-slate-100 relative cursor-pointer font-playfair text-2xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme3 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme3 before:transition-all before:duration-300"
						>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
			<div className="hidden flex-row  lg:flex">
				<a
					href="tel:+385 99 312 4867"
					className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider font-playfair xl:gap-2 bg-theme2 rounded-2xl text-background pl-3 pr-9 py-2 border-2 border-theme1 hover:bg-background hover:text-theme1 transition-all duration-300"
				>
					<CiMobile3 className="text-heading1 text-2xl ml-[-3px]" />
					<span className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						099 312 4867
					</span>
				</a>

				<a
					href="mailto:info@nlstech.pro"
					className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider font-playfair xl:gap-2 bg-theme3 rounded-2xl text-background px-3 py-2 border-2 border-theme3 hover:bg-background hover:text-theme3 transition-all duration-300 -ml-6"
				>
					<CiMail className="text-heading1 text-2xl" />
					<span className="after:bg-theme3 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
						info@plan41.hr
					</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
