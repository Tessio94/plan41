import Cover from "@/components/Cover";
import Intro2 from "@/components/Intro2";
import Steps2 from "@/components/Steps2";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Kontakt from "@/components/Kontakt";
import Banner from "@/components/Banner";

const page = () => {
  const jsonLdPro = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plan 41",
    url: "https://www.plan41.hr",
    publisher: {
      "@id": "https://www.plan41.hr/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdPro).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Cover />
        <Intro2 />
        <Steps2 />
        <Vision />
        <Services />
        <Kontakt />
        <Banner type="landing" />
      </main>
    </>
  );
};

export default page;
