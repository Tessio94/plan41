import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
// import CoverHeading from "./icons/CoverHeading";
import CoverHeading1 from "./icons/CoverHeading1";
import * as motion from "motion/react-client";

const Cover = () => {
	return (
		<section>
			<div className="relative">
				<Image
					className="blur-xs"
					src="/financije2.jpg"
					alt="laptop i analiza"
					width={1920}
					height={1080}
				/>
				<div className="inset-0 absolute bg-blue-950/70"></div>
				<div className="absolute left-30 top-1/4 flex flex-col gap-4">
					<motion.p
						className="text-3xl font-bold text-theme3"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.8 }}
					>
						Poslovno savjetovanje
					</motion.p>
					{/* <p className=" font-bold text-[170px] text-theme3 leading-none">
						<span className="text-transparent my-text-stroke">Plan</span>
						4&#8639;
					</p> */}
					<div className="flex flex-row gap-6 items-end">
						<CoverHeading1 />
						<motion.span
							className="-mb-8 text-[240px] leading-none text-theme3 font-bold"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.8 }}
						>
							4&#8639;
						</motion.span>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.8 }}
					>
						<Link
							href="#intro"
							className="flex flex-row gap-5 bg-theme3 py-3 px-5 items-center rounded-3xl w-fit text-2xl font-bold mt-5 hover:bg-theme1 hover:text-theme3 transition-colors duration-300 group border-2 border-theme3 group"
						>
							Pogledaj više{" "}
							<FaArrowDown className="group-hover:translate-y-1.5 transition-translate duration-300" />
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Cover;
