import Navbar from "@/components/Navbar";
import React from "react";
import type { Metadata } from "next";

// Table Booking Page Metadata
export const metadata: Metadata = {
  title: "Book a Table | Hitchki Indian Restaurant in Cheadle",
  description:
    "Reserve your table at Hitchki for an unforgettable Indian dining experience. Book now for authentic cuisine from Mumbai, Goa & Delhi, premium wines, and warm hospitality in Cheadle. Where Every Bite is an Art Form.",
  alternates: {
    canonical: "/table-booking",
  },
  keywords: [
    "book table Hitchki",
    "reserve table Cheadle",
    "Indian restaurant reservation",
    "Hitchki table booking",
    "restaurant reservations Cheadle",
    "book Indian restaurant",
    "Hitchki Cheadle booking",
    "table reservation online",
  ],
  openGraph: {
    title: "Book a Table | Hitchki - Premium Indian Dining",
    description:
      "Reserve your table for an exceptional Indian dining experience. Enjoy authentic flavours, premium wines, local ales, and unforgettable moments at Hitchki in Cheadle.",
    type: "website",
    locale: "en_GB",
    siteName: "Hitchki",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Table | Hitchki",
    description:
      "Reserve your table at Hitchki. Authentic Indian cuisine, premium dining, and warm hospitality in Cheadle.",
  },
};

function page() {
  return (
    <div className="w-full flex justify-center bg-[#fdfaf3] items-center p-4 pt-[12vh]">
      <Navbar position="absolute" />
      <iframe
        src={`https://table-booking-module-staging.vercel.app/${process.env.NEXT_PUBLIC_RESTAURANT_ID}/table-booking/iframe?variant=modern&theme=light`}
        className="w-full h-full rounded-lg border-0"
        title="Embedded Project"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default page;
