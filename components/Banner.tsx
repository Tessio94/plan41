import React from "react";

const Banner = () => {
	return (
		<div className="flex flex-col gap-2 bg-theme1 text-theme3  px-6 sm:px-10 lg:px-18  2xl:px-28  py-10 mb-[1px]">
			<p className="text-4xl font-playfair italic font-semibold">
				“Plan for what it is difficult while it is easy, do what is great while
				it is small.”
			</p>
			<p className="relative self-end text-2xl font-playfair font-semibold italic after:content-[''] after:absolute after:h-0.5 after:left-0 after:-translate-x-full after:top-1/2 after:bg-theme3 after:w-15 before:content-[''] before:absolute before:h-0.5 before:w-15 before:right-0 before:translate-x-full  before:top-1/2 before:bg-theme3 mr-15">
				Sun Tzu
			</p>
		</div>
	);
};

export default Banner;
