"use client";

import DecisionIcons from "@/components/icons/DecisionIcons";
import { useState } from "react";
import ClipPathIcons from "../icons/ClipPathIcons";

export default function Steps() {
	const [transitionStep, setTransitionStep] = useState("");

	return (
		<section className="bg-background px-6 sm:px-10 lg:px-18  2xl:px-28 py-26">
			<ClipPathIcons />
			<div className="mb-25">
				<h3 className="relative text-4xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-1 after:left-0  after:top-full after:bg-theme4 after:w-10">
					Koraci do uspjeha
				</h3>
				<p className="text-2xl font-semibold font-playfair">
					Broj 41 simbolizira četiri koraka do jednog cilja – ideju, strukturu,
					plan i akciju.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 max-lg:place-items-center ">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-18 lg:gap-x-18 max-lg:col-span-2 max-lg:place-items-center place-items-stretch  max-lg:w-full">
					<div
						className="relative w-full h-full max-w-80 max-h-80 z-20 group"
						onMouseEnter={() => {
							setTransitionStep("ideja");
						}}
						onMouseLeave={() => {
							setTransitionStep("");
						}}
					>
						<div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300 z-20">
							<p className="text-3xl font-bold absolute right-[14%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Ideja
							</p>
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Svaka dobra <strong>ideja</strong> počinje razumijevanjem
									problema i vjerom u rješenje.
								</p>
							</div>
						</div>
						<div className="absolute left-10 -top-10 lg:left-4 lg:-top-4 xl:left-10 xl:-top-10 w-full h-full max-w-80 max-h-80 z-10 ">
							<div className="absolute inset-0 card  bg-theme4 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
							<div className="absolute inset-0 card-border bg-theme3 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
						</div>
					</div>
					<div
						className="relative w-full h-full max-w-80 max-h-80 z-20 group"
						onMouseEnter={() => {
							setTransitionStep("struktura");
						}}
						onMouseLeave={() => {
							setTransitionStep("");
						}}
					>
						<div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 z-20">
							<p className="text-3xl font-bold absolute right-[3%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Struktura
							</p>
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Jasna <strong>struktura</strong> organizacije omogućuje
									efikasnost, odgovornosti i bolju timsku koordinaciju.
								</p>
							</div>
						</div>
						<div className="absolute left-10 -top-10 lg:left-4 lg:-top-4 xl:left-10 xl:-top-10 w-full h-full max-w-80 max-h-80 z-10">
							<div className="absolute inset-0 card  bg-theme4 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
							<div className="absolute inset-0 card-border bg-theme3 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
						</div>
					</div>
					<div
						className="relative w-full h-full max-w-80 max-h-80 z-20 group"
						onMouseEnter={() => {
							setTransitionStep("plan");
						}}
						onMouseLeave={() => {
							setTransitionStep("");
						}}
					>
						<div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 z-20 group-hover:bg-blue-100 transition-colors duration-300">
							<p className="text-3xl font-bold absolute right-[15%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Plan
							</p>
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									<strong>Plan</strong> mora definirati ciljeve, rokove, resurse
									i jasno mjerljive korake.
								</p>
							</div>
						</div>
						<div className="absolute left-10 -top-10 lg:left-4 lg:-top-4 xl:left-10 xl:-top-10 w-full h-full max-w-80 max-h-80 z-10 ">
							<div className="absolute inset-0 card  bg-theme4 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
							<div className="absolute inset-0 card-border bg-theme3 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
						</div>
					</div>

					<div
						className="relative w-full h-full max-w-80 max-h-80 z-20 group"
						onMouseEnter={() => {
							setTransitionStep("akcija");
						}}
						onMouseLeave={() => {
							setTransitionStep("");
						}}
					>
						<div className="absolute inset-0 card bg-blue-800 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border  bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300  z-20">
							<p className="text-3xl font-bold absolute right-[12%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-blue-800  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-blue-800  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Akcija
							</p>
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Brza <strong>akcija</strong> uz mjerenje rezultata vodi do
									održivog poslovnog rasta.
								</p>
							</div>
						</div>
						<div className="absolute left-10 -top-10 lg:left-4 lg:-top-4 xl:left-10 xl:-top-10 w-full h-full max-w-80 max-h-80 z-10 ">
							<div className="absolute inset-0 card  bg-theme4 z-10 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
							<div className="absolute inset-0 card-border bg-theme3 z-10 group-hover:bg-yellow-100 duration-300 transition-colors"></div>
						</div>
					</div>
				</div>
				<div className="hidden lg:block">
					<DecisionIcons transitionStep={transitionStep} />
				</div>
			</div>
		</section>
	);
}
