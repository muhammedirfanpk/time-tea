import type { Metadata } from "next";
import {
  Baskervville_SC,
  Inter,
  Lora,
  Manrope,
  Open_Sans,
  Playfair_Display_SC,
  Poppins,
  Lato,
  Playfair_Display,
} from "next/font/google";
import "../styles/globals.css";
import "../styles/ham.css";
import { cn } from "@/lib/utils";
import Providers from "./Providers";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Abaseen | Authentic South Asian Restaurant in Manchester",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://abaseen-new.vercel.app/",
  ),
  alternates: {
    canonical: "/",
  },
  description:
    "Abaseen brings South Asian warmth to Manchester with authentic dishes, heritage family recipes, and traditional flavours. Enjoy warm hospitality, premium ingredients, and a home-away-from-home dining experience inspired by generations of culinary culture.",
  keywords: [
    "Abaseen",
    "Abaseen Manchester",
    "South Asian Restaurant Manchester",
    "Authentic South Asian Food",
    "Traditional South Asian Cuisine",
    "Family Style South Asian Restaurant",
    "Best South Asian Restaurant Manchester",
    "Abaseen Restaurant UK",
    "South Asian Dining Experience",
    "Heritage South Asian Recipes",
  ],
  icons: [{ rel: "icon", url: "/images/logo.png" }],
  openGraph: {
    title: "Abaseen | Authentic South Asian Dining in Manchester",
    description:
      "Discover authentic South Asian cuisine at Abaseen. From tea to family feasts, enjoy heritage recipes, warm hospitality, and traditional flavours crafted with care in Manchester.",
    type: "website",
    locale: "en_GB",
    siteName: "Abaseen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abaseen | Authentic South Asian Restaurant",
    description:
      "Heritage South Asian flavours, warm hospitality, and a true home-away-from-home dining experience at Abaseen.",
  },
};
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const baskervville_SC = Baskervville_SC({
  subsets: ["latin"],
  variable: "--font-baskervville_SC",
  weight: ["400"],
});

const playfair_display_SC = Playfair_Display_SC({
  subsets: ["latin"],
  variable: "--font-playfair_display_SC",
  weight: ["400"],
});

const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: ["400","500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"], 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "theme-custom flex min-h-screen antialiased",
          manrope.variable,
          poppins.variable,
          inter.variable,
          open_sans.variable,
          lora.variable,
          baskervville_SC.variable,
          playfair_display_SC.variable,
          playfair_Display.variable,
          lato.variable
        )}
      >
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
