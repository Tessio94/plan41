"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ProjectContextType {
  service: string | null;
  setService: (service: string | null) => void;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [service, setService] = useState<string | null>(null);

  return (
    <ProjectContext.Provider value={{ service, setService }}>
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
