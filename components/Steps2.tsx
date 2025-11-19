"use client";

import ClipPathIcons from "./icons/ClipPathIcons";
import NounIcon from "./icons/NounIcon";

export default function Steps2() {
	return (
		<section className="bg-background px-6 sm:px-10 lg:px-18  2xl:px-28 py-26">
			<ClipPathIcons />
			<div className="mb-15 flex flex-col gap-5">
				<h3 className="relative text-6xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-[5px] after:left-0  after:top-[105%] after:bg-theme3 after:w-25 before:content-[''] before:absolute before:h-3 before:w-3 before:left-25  before:top-[calc(100%-1px)]  before:bg-theme3 before:rotate-45">
					Koraci do uspjeha
				</h3>
				<p className="text-2xl font-inter">
					Broj <b>41</b> simbolizira četiri koraka do jednog cilja –{" "}
					<b>ideju</b>, <b>strukturu</b>, <b>plan</b> i <b>akciju</b>.
				</p>
				<p className="text-2xl font-inter">
					Kroz te korake pomažem poduzetnicima i onima koji to žele postati da
					pretvore svoje ideje u održive projekte i sigurno izgrade svoj put
					prema uspjehu.
				</p>
			</div>

			<div className="">
				<div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-10 place-items-center">
					<div className="relative w-full max-w-85 h-75 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<p className="text-[34px]  font-bold absolute left-12 top-3.5 font-playfair">
							Ideja
						</p>
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300 z-20">
							<NounIcon type="idea" />
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Svaka dobra{" "}
									<strong className="group-hover:text-theme3 transition-colors duration-300">
										ideja
									</strong>{" "}
									počinje razumijevanjem problema i vjerom u rješenje.
								</p>
							</div>
						</div>
					</div>
					<div className="relative w-full max-w-85 h-75 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<p className="text-[32px]  font-bold absolute left-2 top-3.5 font-playfair max_3xl:text-[30px] max_3xl:top-4.5 max-2xl:text-[32px]! max-2xl:top-3.5! max_2sm:text-[28px]! max_2sm:top-4.5! max_sm:text-[32px]! max_xsm:text-[30px]!">
							Struktura
						</p>
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 z-20">
							<NounIcon type="structure" />
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Jasna{" "}
									<strong className="group-hover:text-theme3 transition-colors duration-300">
										struktura
									</strong>{" "}
									organizacije omogućuje efikasnost, odgovornosti i bolju timsku
									koordinaciju.
								</p>
							</div>
						</div>
					</div>
					<div className="relative w-full max-w-85 h-75 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<p className="text-[34px]  font-bold absolute left-13 top-3.5 font-playfair">
							Plan
						</p>
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 z-20 group-hover:bg-blue-100 transition-colors duration-300">
							<NounIcon type="plan" />
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									<strong className="group-hover:text-theme3 transition-colors duration-300">
										Plan
									</strong>{" "}
									mora definirati ciljeve, rokove, resurse i jasno mjerljive
									korake.
								</p>
							</div>
						</div>
					</div>

					<div className="relative w-full max-w-85 h-75 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<p className="text-[34px]  font-bold absolute left-11 top-3.5 font-playfair max_3xl:left-9">
							Akcija
						</p>
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border  bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300  z-20 ">
							<NounIcon type="action" />
							<div className="flex flex-col py-6 pl-6 pr-3 gap-2 mt-[25%]">
								<p className="text-2xl">
									Brza{" "}
									<strong className="group-hover:text-theme3 transition-colors duration-300">
										akcija
									</strong>{" "}
									uz mjerenje rezultata vodi do održivog poslovnog rasta.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
