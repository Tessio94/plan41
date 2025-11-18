"use client";

import ClipPathIcons from "./icons/ClipPathIcons";

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
				<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10">
					<div className="relative w-full h-full max-w-85 max-h-85 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300 z-20">
							<p className="text-3xl  font-bold absolute right-[14%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-theme3  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-theme3  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Ideja
							</p>
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
					<div className="relative w-full h-full max-w-85 max-h-85 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 z-20">
							<p className="text-3xl font-bold absolute right-[3%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-theme3  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-theme3  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Struktura
							</p>
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
					<div className="relative w-full h-full max-w-85 max-h-85 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border bg-blue-50 z-20 group-hover:bg-blue-100 transition-colors duration-300">
							<p className="text-3xl font-bold absolute right-[15%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-theme1  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-theme1  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Plan
							</p>
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

					<div className="relative w-full h-full max-w-85 max-h-85 min-h-70 min-w-70 z-20 group shadow-[30px_30px_30px_#0041772f] rounded-br-2xl">
						<div className="absolute inset-0 card bg-theme1 z-20 group-hover:translate-y-2.5 transition-translate  duration-300"></div>
						<div className="absolute inset-0 card-border  bg-blue-50 group-hover:bg-blue-100  transition-colors duration-300  z-20 ">
							<p className="text-3xl font-bold absolute right-[12%] top-[7%] after:content-[''] after:absolute after:h-1 after:left-0 after:right-full after:top-full after:bg-theme1  group-hover:after:right-1/2 after:transition-all after:duration-300 before:content-[''] before:absolute before:h-1 after:rounded-l-full before:rounded-r-full before:right-0 before:left-full before:top-full before:bg-theme1  group-hover:before:left-1/2 before:transition-all before:duration-300 font-playfair">
								Akcija
							</p>
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
