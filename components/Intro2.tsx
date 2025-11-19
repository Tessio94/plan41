import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Intro2 = () => {
	return (
		<section
			id="intro"
			className="bg-background2 px-6 sm:px-10 lg:px-18  2xl:px-28 py-26"
		>
			<div className="flex flex-row justify-between items-center gap-40">
				<div className="w-1/2">
					<Image
						src="/frame-2.png"
						alt="image collage"
						width={960}
						height={1080}
					/>
				</div>
				<div className="w-1/2">
					<div className="mb-15 flex flex-col gap-5">
						<h2 className="relative text-6xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-[5px] after:left-0  after:top-[105%] after:bg-theme3 after:w-25 before:content-[''] before:absolute before:h-3 before:w-3 before:left-25  before:top-[calc(100%-1px)]  before:bg-theme3 before:rotate-45">
							O Planu 41
						</h2>
						<p className="text-2xl font-semibold font-inter">
							<strong>Vizija</strong> je iskoristiti znanje stečeno
							dugogodišnjim iskustvom u pomoći razvoju poduzetništva,
							mentoriranju i poticanju na rast
						</p>
					</div>
					<p className="text-2xl  font-inter mb-5">
						Vjerujem da iza svakog iskoraka stoji plan:
					</p>
					<ul className="flex flex-col gap-7 items-start">
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-linear-to-br from-transparent to-theme2/40 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-linear-to-br hover:from-theme2/10 hover:to-theme2/60 transition-colors duration-300">
							<Image
								src="/ikone/vision.svg"
								alt="vizija ikona"
								width={60}
								height={60}
							/>
							<p className="flex flex-col gap-3">
								<span className="font-bold text-2xl">Jasna vizija</span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
								cumque.
							</p>
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-linear-to-br from-transparent to-theme2/40 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-linear-to-br hover:from-theme2/10 hover:to-theme2/60 transition-colors duration-300">
							<Image
								src="/ikone/structure.svg"
								alt="struktura ikona"
								width={60}
								height={60}
							/>
							<p className="flex flex-col gap-3">
								<span className="font-bold text-2xl">Struktura</span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
								cumque.
							</p>
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-linear-to-br from-transparent to-theme2/40 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-linear-to-br hover:from-theme2/10 hover:to-theme2/60 transition-colors duration-300">
							<Image
								src="/ikone/support.svg"
								alt="podrška ikona"
								width={60}
								height={60}
							/>
							<p className="flex flex-col gap-3">
								<span className="font-bold text-2xl">Podrška</span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
								cumque.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Intro2;
