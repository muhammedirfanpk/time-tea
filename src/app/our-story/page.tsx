import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./section/Hero";
import Story from "./section/Story";
import JoinUs from "./section/JoinUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Abaseen South Asian Restaurant",
  description:
    "Learn the story behind Abaseen — a South Asian restaurant rooted in heritage, family traditions, and generations of authentic recipes, proudly serving Manchester.",
  alternates: {
    canonical: "/our-story",
  },
  openGraph: {
    title: "Our Story | The Heritage Behind Abaseen",
    description:
      "Discover the heritage, family values, and culinary traditions that shaped Abaseen’s authentic South Asian dining experience in Manchester.",
    type: "article",
    locale: "en_GB",
    siteName: "Abaseen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Abaseen",
    description:
      "Explore Abaseen’s journey, rooted in South Asian heritage, family recipes, and a passion for authentic flavours.",
  },
};

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#E8E2D4]">
        <Navbar position="absolute" />
        <Hero />
        <Story />
        <JoinUs />
        <Footer />
      </div>
    </main>
  );
};

export default page;
