import Contact from "@/app/contact/section/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Abaseen Restaurant Manchester",
  description:
    "Get in touch with Abaseen, an authentic South Asian restaurant in Manchester. Contact us for reservations, enquiries, or to learn more about our dining experience.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Abaseen | South Asian Restaurant Manchester",
    description:
      "Contact Abaseen for bookings, enquiries, and information about our authentic South Asian dining experience in Manchester.",
    type: "website",
    locale: "en_GB",
    siteName: "Abaseen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Abaseen | Manchester",
    description:
      "Reach out to Abaseen for reservations or enquiries and experience authentic South Asian hospitality in Manchester.",
  },
};

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#040507] ">
        <Navbar position="absolute" />
        <div className="h-[14vh] w-full  md:h-[12vh]" id="hero"></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
