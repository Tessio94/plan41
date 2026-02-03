import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollWrapper from "@/components/ScrollWrapper";
import { ProjectProvider } from "@/context/ProjectContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Plan 41",
    url: "https://www.plan41.hr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.plan41.hr/logo.svg",
    },
  };

  return (
    <ProjectProvider>
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Header />
        {children}
        <Footer />
        <ScrollWrapper />
      </>
    </ProjectProvider>
  );
};

export default Layout;
