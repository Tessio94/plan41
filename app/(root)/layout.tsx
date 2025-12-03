import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollWrapper from "@/components/ScrollWrapper";
import { ProjectProvider } from "@/context/ProjectContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectProvider>
      <>
        <Header />
        {children}
        <Footer />
        <ScrollWrapper />
      </>
    </ProjectProvider>
  );
};

export default Layout;
