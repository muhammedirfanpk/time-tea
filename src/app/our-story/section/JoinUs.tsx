"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-cover bg-fixed bg-center px-4 py-24 md:py-36"
      style={{
        backgroundImage: "url('/images/about-us/3.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#040507]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center md:px-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-playfair text-sm tracking-[8px] text-[#B68F62] uppercase drop-shadow-md md:text-base">
            Celebrate Afghan Heritage
          </h1>
          <h2 className="font-alagambe max-w-4xl text-4xl leading-tight font-[400] text-[#E9DDC3] uppercase drop-shadow-md md:text-6xl">
            Experience the Warmth of
            <br />
            <span className="text-[#B68F62] font-playfair_display_SC">
              Authentic Afghan Hospitality
            </span>
          </h2>
        </div>

        <p className="font-playfair max-w-2xl text-center text-sm leading-relaxed font-[400] text-[#C1B6A6] drop-shadow-sm md:text-base lg:text-lg">
          Step into a place where Afghan culture, culinary heritage, and vibrant
          flavors come together. At Abaseen, every dish is crafted with passion
          and reverence, using the finest ingredients to honor the traditions we
          cherish. Whether you&apos;re joining us for a cherished meal or a
          special celebration, we promise a dining experience that nourishes
          body and soul—a true taste of Afghanistan.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link href={"/table-booking"}>
            <Button
              aria-label="Book a Table"
              className="font-open_sans flex h-auto flex-row items-center justify-center gap-2 rounded-none bg-[#B68F62] px-8 py-6 text-center text-xs font-[400] tracking-[2px] text-[#040507] uppercase drop-shadow-lg transition-all duration-150 hover:cursor-pointer hover:bg-[#C9AB81] active:scale-95 md:px-9 md:py-7"
            >
              Book a Table
              <ChevronRight size={16} />
            </Button>
          </Link>
          <Link href={"/menu"}>
            <Button
              aria-label="View Menu"
              className="font-open_sans flex h-auto flex-row items-center justify-center gap-2 rounded-none border border-[#B68F62] bg-transparent px-8 py-6 text-center text-xs font-[400] tracking-[2px] text-[#E9DDC3] uppercase drop-shadow-lg transition-all duration-150 hover:cursor-pointer hover:bg-[#B68F62] hover:text-[#040507] active:scale-95 md:px-9 md:py-7"
            >
              View Menu
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
