import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
// import CoverHeading from "./icons/CoverHeading";
import CoverHeading1 from "./icons/CoverHeading1";
import * as motion from "motion/react-client";
import { CgArrowLongUp } from "react-icons/cg";

const Cover = () => {
	return (
		<section className="bg-[url('/frame-1.png')] bg-cover bg-no-repeat h-screen flex flex-row items-center">
			<div className="flex flex-row items-center h-fit w-full px-8 lg:px-12 xl:px-30 py-5 ">
				<div className="flex flex-col gap-4  z-20 w-1/2">
					<motion.p
						className="text-3xl font-bold text-slate-100 z-20"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.8 }}
					>
						Poslovno savjetovanje
					</motion.p>
					<div className="flex flex-row gap-6 items-end">
						<CoverHeading1 />
						<motion.span
							className="-mb-8 text-[240px] leading-none text-slate-100 font-bold flex flex-row"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.8 }}
						>
							4
							<CgArrowLongUp className="-ml-20" />
						</motion.span>
					</div>
					<motion.p
						className="text-2xl mt-5 text-slate-100 z-20 font-playfair"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.8 }}
					>
						<strong className="text-theme3">PLAN41</strong> nastao je iz ideje
						da se svaki veliki put sastoji od niza malih, ali odlučnih koraka –
						od kojih je najvažniji onaj{" "}
						<strong className="text-theme3">prvi</strong>.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.8 }}
					>
						<Link
							href="/#intro"
							className="flex flex-row gap-5 text-slate-100 bg-theme2 py-3 px-5 items-center rounded-xl w-fit text-2xl font-bold mt-5 hover:bg-theme1 hover:text-theme3 transition-colors duration-300 group"
						>
							Pogledaj više{" "}
							<FaArrowDown className="group-hover:translate-y-1.5 transition-translate duration-300" />
						</Link>
					</motion.div>
				</div>
				<div className="w-1/2">
					<div className="relative w-fit ml-auto z-30">
						<motion.div
							initial={{ opacity: 0, x: 150 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.8 }}
							className="relative  overflow-hidden cover-card rounded-2xl  z-30"
						>
							<Image
								src="/financije2_50.jpg"
								className="relative z-30"
								alt="financije slika"
								width={500}
								height={563}
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 150 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1 }}
							className="absolute bg-linear-to-bl from-blue-800 to-transparent w-full h-full top-20 -left-20 z-10 rounded-2xl cover-card"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cover;
