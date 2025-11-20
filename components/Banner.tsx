import React from "react";

const Banner = () => {
  return (
    <div className="bg-theme1 text-theme3 my-px flex flex-col gap-8 px-6 py-10 sm:px-10 lg:px-18 2xl:px-28">
      <p className="font-playfair text-3xl font-semibold italic max-[500px]:text-2xl md:text-4xl">
        “Plan for what it is difficult while it is easy, do what is great while
        it is small.”
      </p>
      <p className="font-playfair after:bg-theme3 before:bg-theme3 relative ml-15 self-start text-2xl font-semibold italic before:absolute before:top-1/2 before:right-0 before:h-0.5 before:w-15 before:translate-x-full before:content-[''] after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-15 after:-translate-x-full after:content-['']">
        Sun Tzu
      </p>
    </div>
  );
};

export default Banner;
