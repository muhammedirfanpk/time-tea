import React from "react";
import { Search, Home, Utensils } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#040507]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#B68F62]/10 via-transparent to-[#B68F62]/5"></div>
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full border border-[#B68F62]/20"></div>
        <div className="absolute right-32 bottom-40 h-48 w-48 rounded-full border border-[#B68F62]/10"></div>
        <div className="absolute top-1/2 right-20 h-24 w-24 rounded-full border border-[#B68F62]/15"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-alagambe bg-gradient-to-r from-[#B68F62] via-[#C9AB81] to-[#B68F62] bg-clip-text text-9xl leading-none font-[400] text-transparent md:text-[12rem]">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="font-alagambe mb-6 text-4xl leading-tight font-[400] text-[#B68F62] md:text-5xl">
            Oops! This page seems to be
            <span className="block text-[#E9DDC3] font-playfair_display_SC">
              off the menu
            </span>
          </h2>
          <p className="font-playfair mx-auto max-w-2xl text-lg leading-relaxed font-[400] text-[#C1B6A6] md:text-xl">
            We couldn&apos;t find the page you&apos;re looking for. It might
            have been moved, deleted, or you may have mistyped the URL.
            Let&apos;s get you back to our authentic dining experience at
            Abaseen.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"/"}>
            <button className="font-alagambe group flex transform items-center gap-3 rounded-full bg-[#B68F62] px-8 py-4 font-[400] tracking-wide text-[#040507] uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#C9AB81]">
              <Home size={20} />
              Back to Home
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C9AB81] to-[#B68F62] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            </button>
          </Link>

          <Link href={"/menu"}>
            <button className="font-alagambe group flex items-center gap-3 rounded-full border border-[#B68F62] px-8 py-4 font-[400] tracking-wide text-[#E9DDC3] uppercase transition-all duration-300 hover:bg-[#B68F62] hover:text-[#040507]">
              <Search size={20} />
              Browse Menu
            </button>
          </Link>
        </div>

        {/* Decorative Food Elements */}
        <div className="flex items-center justify-center gap-8 opacity-60">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B68F62]/20 bg-gradient-to-br from-[#B68F62]/30 to-[#C9AB81]/30">
            <Utensils size={20} className="text-[#B68F62]" />
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#B68F62]"></div>
          <div className="h-12 w-12 rounded-full border border-[#B68F62]/20 bg-gradient-to-br from-[#C9AB81]/30 to-[#B68F62]/30"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#C9AB81] delay-300"></div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#B68F62]/20 bg-gradient-to-br from-[#C9AB81]/30 to-[#B68F62]/30">
            <div className="h-10 w-10 rounded-full bg-[#B68F62]/40"></div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="mt-12 rounded-lg border border-[#B68F62]/20 bg-[#B68F62]/10 p-6 shadow-md">
          <h3 className="font-alagambe mb-2 text-2xl font-[400] text-[#E9DDC3]">
            Meanwhile, explore Abaseen
          </h3>
          <p className="font-playfair text-sm font-[400] tracking-[2px] text-[#C1B6A6]">
            Authentic Afghan cuisine & warm hospitality • Every Flavor, a
            Tradition
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-10 h-2 w-2 animate-bounce rounded-full bg-[#B68F62] delay-1000"></div>
      <div className="absolute top-3/4 right-20 h-1 w-1 animate-bounce rounded-full bg-[#C9AB81] delay-500"></div>
      <div className="absolute top-1/2 left-1/4 h-1.5 w-1.5 animate-bounce rounded-full bg-[#B68F62]/80 delay-700"></div>
    </div>
  );
};

export default NotFound;
