import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-full w-full bg-[#040507]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-24 md:flex-row md:py-32 lg:px-8">
        {/* Left: Text Content */}
        <div className="flex w-full flex-col items-start justify-center md:w-1/2">
          <h1 className="font-alagambe text-balance text-4xl font-[400] leading-tight text-[#E9DDC3] md:text-5xl lg:text-6xl">
            Abaseen Restaurant
            <br />
            <span className="text-[#B68F62] font-playfair_display_SC">
              Every Flavor, a Tradition
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#C1B6A6] md:text-lg font-playfair">
            Rooted in the heart of the community, Abaseen began as a modest
            eatery and has grown into a celebrated culinary destination.
            Renowned for its authentic cuisine and heartfelt hospitality,
            Abaseen is more than just a restaurant — it&apos;s a tradition.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/menu"
              aria-label="View Menu"
              className="rounded-full bg-[#B68F62] px-6 py-3 text-sm font-semibold text-[#040507] transition hover:bg-[#C9AB81] font-open_sans tracking-wide"
            >
              View Menu
            </Link>
            <Link
              href="/table-booking"
              aria-label="Book a Table"
              className="rounded-full border border-[#B68F62] px-6 py-3 text-sm font-semibold text-[#E9DDC3] transition hover:bg-[#B68F62] hover:text-[#040507] font-open_sans tracking-wide"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg md:rounded-3xl">
            <Image
              src="/images/about-us/2.webp"
              alt="Abaseen Hero Image"
              width={1200}
              height={1600}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
