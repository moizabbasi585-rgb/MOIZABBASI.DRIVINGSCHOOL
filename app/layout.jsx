import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "L-Pass Driving School Liverpool | Pass First Time",
  description:
    "Liverpool's top-rated driving school. Manual & automatic lessons, intensive courses, and a 94% first-time pass rate. Book online instantly.",
  keywords: [
    "driving school Liverpool",
    "driving lessons Liverpool",
    "automatic driving lessons",
    "intensive driving course Liverpool",
    "pass driving test Liverpool",
  ],
  openGraph: {
    title: "L-Pass Driving School Liverpool",
    description: "Pass your driving test faster in Liverpool. Book online today.",
    url: "https://lpassdriving.co.uk",
    siteName: "L-Pass Driving School",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
