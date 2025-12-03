"use client";

import { useProjectInfo } from "@/context/ProjectContext";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const LogoOptions = ({ fixed }: { fixed: boolean }) => {
  const { setLogo } = useProjectInfo();
  const path = usePathname();

  return (
    <div
      className={cn(
        "absolute top-[170px] left-[20px] flex flex-row items-center gap-3",
        fixed && "hidden",
        path !== "/" && "hidden",
      )}
    >
      <div
        className="border-theme3 bg-theme1 text-theme3 hover:bg-theme3 hover:text-theme1 active:bg-theme3 active:text-theme1 focus:bg-theme3 focus:text-theme1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300"
        onClick={() => setLogo("/logoProp1.svg")}
      >
        1
      </div>
      <div
        className="border-theme3 bg-theme1 text-theme3 hover:bg-theme3 hover:text-theme1 active:bg-theme3 active:text-theme1 focus:bg-theme3 focus:text-theme1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300"
        onClick={() => setLogo("/logoProp2.svg")}
      >
        2
      </div>
      <div
        className="border-theme3 bg-theme1 text-theme3 hover:bg-theme3 hover:text-theme1 active:bg-theme3 active:text-theme1 focus:bg-theme3 focus:text-theme1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300"
        onClick={() => setLogo("/logoProp3.svg")}
      >
        3
      </div>
      <div
        className="border-theme3 bg-theme1 text-theme3 hover:bg-theme3 hover:text-theme1 active:bg-theme3 active:text-theme1 focus:bg-theme3 focus:text-theme1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300"
        onClick={() => setLogo("/logoProp4.svg")}
      >
        4
      </div>
    </div>
  );
};

export default LogoOptions;
