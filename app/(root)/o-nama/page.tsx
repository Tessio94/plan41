import React from "react";
import { Metadata } from "next";
import ONama from "@/components/ONama";

export const metadata: Metadata = {
  title: "O nama | Plan41 – Poslovno savjetovanje Zadar",
  description:
    "Zovem se Davorka Lazanja i nakon više od 30 godina iskustva u financijama i poslovnom savjetovanju, svoj sam profesionalni put usmjerila na mentorstvo poduzetnika i onih koji to žele postati.",
  openGraph: {
    title: "O nama | Plan41",
    description:
      "Iza svakog iskoraka stoji plan. Saznajte više o viziji, iskustvu i vrijednostima koje stoje iza Plan 41.",
    url: "https://www.plan41.hr/o-nama",
    siteName: "Plan 41",
    images: [
      {
        url: "https://www.plan41.hr/og-plan41.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 41 – O nama",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

const page = () => {
  return <ONama />;
};

export default page;
