import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import React, { Suspense } from "react";

// Gift Card Page Metadata
export const metadata: Metadata = {
  title: "Gift Cards | Hitchki Indian Restaurant",
  description:
    "Give the gift of exceptional Indian dining at Hitchki. Purchase gift cards for an unforgettable culinary experience in Cheadle. Perfect for food lovers who appreciate authentic flavours from Mumbai, Goa & Delhi.",
  alternates: {
    canonical: "/gift-card",
  },
  openGraph: {
    title: "Gift Cards | Hitchki",
    description:
      "Share the art of Indian dining. Gift cards available for Hitchki - where every bite is an art form. Perfect for special occasions and food enthusiasts.",
    type: "website",
    locale: "en_GB",
    siteName: "Hitchki",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Cards | Hitchki",
    description:
      "Give the gift of authentic Indian cuisine. Purchase Hitchki gift cards for an unforgettable dining experience.",
  },
};

export default async function GiftCard(props: {
  searchParams: Promise<{ activate?: string; balance?: string }>;
}) {
  const searchParams = await props.searchParams;
  const { activate, balance } = searchParams;

  const restaurantId = process.env.NEXT_PUBLIC_RESTAURANT_ID;

  const endPoint = activate
    ? `activate?code=${activate}`
    : balance
      ? `balance?code=${balance}`
      : "new-card";

  return (
    <main className="relative min-h-screen bg-[#fdfaf3] w-full flex-col">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <div className="h-[10vh]" id="hero"></div>

        <div className="flex h-[100vh] w-full flex-1 items-center justify-center p-4 mt-1 xl:mt-6 md:mt-2">
          <Suspense fallback={<GiftCardSkeleton />}>
            <iframe
              src={`https://giftcard-iframe-staging.vercel.app/${restaurantId}/${endPoint}`}
              className="h-full w-full rounded-lg border-0"
              title="Embedded Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

function GiftCardSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
