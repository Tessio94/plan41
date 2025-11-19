"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { FaArrowRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
	const [animationState, setAnimationState] = useState("paused");

	return (
		<section className="bg-background px-6 sm:px-10 lg:px-18  2xl:px-28 py-26 z-0 relative">
			<h3 className="relative text-6xl font-bold font-playfair mb-15 after:content-[''] after:absolute after:h-[5px] after:left-0  after:top-[105%] after:bg-theme3 after:w-25 before:content-[''] before:absolute before:h-3 before:w-3 before:left-25  before:top-[calc(100%-1px)]  before:bg-theme3 before:rotate-45">
				Usluge
			</h3>
			<div className="flex flex-row w-full items-center max-w-[85%] mx-auto ">
				{/* <motion.div className="relative flex flex-col gap-6 w-1/2 bg-background2 py-8 px-6 rounded-2xl  intro-card"> */}
				<motion.div
					className="relative  w-1/2  rounded-2xl bg-conic/[from_var(--border-angle)] from-theme3/30 via-theme3 to-theme1 p-1 shadow-xl shadow-theme1/20"
					onMouseEnter={(e) => {
						e.currentTarget.classList.add("animate-rotate-border");
						e.currentTarget.style.animationPlayState = "running";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.animationPlayState = "paused";
					}}
				>
					<div className="flex flex-col gap-6 py-8 px-6 bg-background2 rounded-2xl">
						<p className="text-2xl font-inter ">
							Pomažem u svim fazama razvoja poslovanja — od pokretanja obrta ili
							poduzeća do širenja postojećeg poslovanja.
						</p>
						<p className="text-2xl font-inter">
							Pomažem oblikovati poslovnu ideju, pripremiti svu potrebnu
							dokumentaciju i argumentirano obrazložiti održivost vašeg
							projekta.
						</p>
						<ul className="flex flex-col gap-8 items-start mt-4">
							<li className="flex flex-row gap-6 items-center">
								<GiCheckMark className="text-3xl text-theme3" />
								<p className="text-2xl font-semibold font-inter">
									Poslovno savjetovanje
								</p>
							</li>
							<li className="flex flex-row gap-6 items-center">
								<GiCheckMark className="text-3xl text-theme3" />
								<p className="text-2xl font-semibold font-inter">
									Financijsko planiranje i investicijske studije
								</p>
							</li>
							<li className="flex flex-row gap-6 items-center">
								<GiCheckMark className="text-3xl text-theme3" />
								<p className="text-2xl font-semibold font-inter">
									Poslovni planovi za poticaje HZZ-a (samozapošljavanje)
								</p>
							</li>
						</ul>
						<div>
							<Link
								href="/#intro"
								className="flex flex-row gap-5 text-theme1 bg-theme3 py-3 px-5 items-center rounded-xl w-fit text-2xl font-bold mt-5 hover:bg-theme4 hover:text-theme2 transition-colors duration-300 group mx-auto"
							>
								Usluge{" "}
								<FaArrowRight className="group-hover:translate-x-1.5 transition-translate duration-300" />
							</Link>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="w-1/2 -ml-18 -z-10"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Image
						className="w-full h-full rounded-2xl  shadow-xl shadow-theme1/20"
						src="/financije3_50.jpg"
						alt="financije bilježnica"
						width={960}
						height={1080}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
