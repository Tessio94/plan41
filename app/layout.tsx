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
