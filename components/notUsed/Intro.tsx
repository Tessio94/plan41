import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Intro = () => {
	return (
		<section
			id="intro"
			className="bg-background2 px-6 sm:px-10 lg:px-18  2xl:px-28 py-26"
		>
			<div className="flex flex-row">
				<div className="w-1/2">
					<div className="mb-15">
						<h2 className="relative text-4xl font-bold font-playfair mb-2 after:content-[''] after:absolute after:h-1 after:left-0  after:top-full after:bg-theme4 after:w-10">
							Plan 41
						</h2>
						<p className="text-2xl font-semibold font-playfair">
							Nastao je iz ideje da se svaki veliki put sastoji od niza malih,
							ali odlučnih koraka – od kojih je najvažniji onaj prvi.
						</p>
					</div>

					<p className="text-2xl font-semibold font-playfair mb-5">
						Vjerujem da iza svakog iskoraka stoji plan:
					</p>
					<ul className="flex flex-col gap-4 items-start">
						<li className="flex flex-row items-center text-xl gap-3">
							<GiCheckMark />
							jasna vizija
						</li>
						<li className="flex flex-row items-center text-xl gap-3">
							<GiCheckMark /> struktura
						</li>
						<li className="flex flex-row items-center text-xl gap-3">
							<GiCheckMark /> podrška
						</li>
					</ul>
				</div>
				<div className="w-1/2"></div>
			</div>
		</section>
	);
};

export default Intro;
