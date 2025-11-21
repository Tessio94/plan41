import React from "react";
import * as motion from "motion/react-client";

const page = () => {
  return (
    <section>
      <div className="bg-background px-6 py-26 sm:px-10 lg:px-18 2xl:px-28">
        <motion.h2
          className="font-playfair after:bg-theme3 before:bg-theme3 relative mb-15 text-6xl font-bold before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Usluge
        </motion.h2>
      </div>
    </section>
  );
};

export default page;
