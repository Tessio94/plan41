import React from "react";
import * as motion from "motion/react-client";
import SelectService from "@/components/SelectService";
import ServiceTypes from "@/components/ServiceTypes";

const page = () => {
  return (
    <section className="-mt-[148px]">
      <div className="bg-[url(/frame-1.png)] bg-cover bg-no-repeat px-6 pt-[254px] pb-26 sm:px-10 lg:px-18 2xl:px-28">
        <motion.h1
          className="font-playfair after:bg-theme3 before:bg-theme3 relative text-6xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        >
          Usluge
        </motion.h1>
      </div>
      <ServiceTypes />
      <SelectService />
    </section>
  );
};

export default page;
