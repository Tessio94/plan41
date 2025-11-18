import React from "react";
import Image from "next/image";
import {
	CiInstagram,
	CiLocationArrow1,
	CiLocationOn,
	CiMail,
	CiMobile3,
} from "react-icons/ci";

const Footer = () => {
	return (
		<footer className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-10 bg-[url('/frame-1.png')] bg-cover bg-no-repeat">
			<a href="#">
				<Image
					className="rounded-full"
					src="/logo1.png"
					alt="plan41 logo"
					width={150}
					height={150}
				/>
			</a>

			<div className="order-1 text-center lg:order-0 font-inter text-slate-100">
				Copyright © 2025 Plan41 - Sva prava pridržana.
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl font-inter text-slate-100 flex flex-row items-start gap-4">
					<CiLocationOn className="text-3xl" />
					Zadar, Augusta Cesarca 30A
				</p>
				<p className="text-2xl font-inter text-slate-100 flex flex-row items-start gap-4">
					<CiMail className="text-3xl" />

					<a
						href="mailto:info@plan41.hr"
						className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter"
					>
						info@plan41.hr
					</a>
				</p>
				<p className="text-2xl font-inter text-slate-100 flex flex-row items-start gap-4">
					<CiMobile3 className="text-3xl" />

					<a
						href="tel:+385957269444"
						className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-inter"
					>
						+385 95 726 94 44
					</a>
				</p>
				<div className="flex justify-start">
					<a
						href="https://www.instagram.com/plan41/"
						target="_blank"
						aria-label="NLS Tech on Instagram - Footer social link"
						className="group"
					>
						<CiInstagram className="text-3xl text-theme1 hover:scale-110 hover:text-theme2 transition-all duration-300" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
