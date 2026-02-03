import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "fonts/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/PlayfairDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/PlayfairDisplay-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--playfair",
});

const inter = localFont({
  src: [
    {
      path: "fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-SemiBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "fonts/Inter_18pt-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Plan41 | Poslovno savjetovanje Zadar",
  description:
    "Plan41 nudi stručne savjetodavne usluge za startupe i poduzetnike u Zadru. Od razvoja poslovnih strategija do podrške u pokretanju i rastu poslovanja.",
  openGraph: {
    title: "Plan41 | Poslovno savjetovanje Zadar",
    description:
      "Kroz mentorstvo, znanje i partnerski pristup pomažem poduzetnicima izgraditi stabilno i održivo poslovanje.",
    url: "https://www.plan41.hr",
    siteName: "Plan 41",
    images: [
      {
        url: "https://www.plan41.hr/og-plan41.jpg",
        width: 1200,
        height: 630,
        alt: "Mentorstvo za poduzetnike – Plan 41",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Plan 41",
  url: "https://www.plan41.hr",
  logo: "https://www.plan41.hr/logo.svg",
};

const jsonLdPro = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plan 41",
  url: "https://www.plan41.hr",
  logo: "https://www.plan41.hr/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
