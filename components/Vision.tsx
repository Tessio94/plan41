import React from "react";

const Vision = () => {
	return (
		<section className="flex flex-row">
			<div className="bg-background2 px-6 sm:px-10 lg:px-18 2xl:px-28 py-26 w-1/2">
				<div className="mb-15 flex flex-col gap-5">
					<h2 className="relative text-6xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-[5px] after:left-0  after:top-[105%] after:bg-theme3 after:w-25 before:content-[''] before:absolute before:h-3 before:w-3 before:left-25  before:top-[calc(100%-1px)]  before:bg-theme3 before:rotate-45">
						Ciljevi i vizija
					</h2>
					<p className="text-2xl font-semibold font-inter">
						Iskoristiti znanje stečeno dugogodišnjim iskustvom u pomoći razvoju
						poduzetništva, mentoriranju i poticanju na rast
					</p>
					<ul className="flex flex-col gap-7 items-start">
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
							Jačati poduzetničku klimu i stvarati pozitivno poduzetničko
							okruženje
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
							Potpora nezaposlenim osoba pri samozapošljavanju
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
							Informiranje i savjetovanje poduzetnika
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
							Pomoć u edukaciji poduzetnika i onih koji to namjeravaju postati
						</li>
						<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
							Financijsko osvješćivanje
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-theme1 px-6 sm:px-10 lg:px-18 2xl:px-28 py-26 w-1/2">
				<h2 className="relative text-6xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-[5px] after:left-0  after:top-[105%] after:bg-theme3 after:w-25 before:content-[''] before:absolute before:h-3 before:w-3 before:left-25  before:top-[calc(100%-1px)]  before:bg-theme3 before:rotate-45 text-theme3">
					Lista usluga
				</h2>
				<ul className="flex flex-col gap-7 items-start">
					<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
						Poslovno savjetovanje
					</li>
					<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
						Financijsko planiranje i investicijske studije
					</li>
					<li className="flex flex-row items-center text-xl gap-7 py-3 px-5 bg-theme2/20 w-full border-2 border-theme1 rounded-2xl shadow-xl shadow-theme2/40  hover:bg-theme2/30 transition-colors duration-300">
						Poslovni planovi za poticaje HZZ-a (samozapošljavanje)
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Vision;
