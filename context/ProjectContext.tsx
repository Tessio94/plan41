"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ProjectContextType {
  logo: string;
  setLogo: (logo: string) => void;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [logo, setLogo] = useState<string>("/logoProp1.svg");

  return (
    <ProjectContext.Provider value={{ logo, setLogo }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectInfo = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "useProjectInfo muse be used within ProjectContext.Provider",
    );
  }

  return context;
};
