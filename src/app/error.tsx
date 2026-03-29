"use client";
import React from "react";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

interface ErrorProps {
  error?: Error;
  reset?: () => void;
  title?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  error,
  reset,
  title = "Something went wrong",
  message = "We're experiencing some technical difficulties. Our team at Abaseen is working to fix this issue.",
}) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#040507]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#B68F62]/10 via-transparent to-[#B68F62]/5"></div>
        <div className="absolute top-32 left-16 h-40 w-40 animate-pulse rounded-full border border-[#B68F62]/20"></div>
        <div className="absolute right-20 bottom-32 h-56 w-56 rounded-full border border-[#B68F62]/10"></div>
        <div className="absolute top-2/3 right-32 h-28 w-28 animate-pulse rounded-full border border-[#B68F62]/15 delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 animate-pulse items-center justify-center rounded-full border-2 border-[#B68F62]/40 bg-gradient-to-br from-[#C9AB81]/30 to-[#B68F62]/30">
              <AlertTriangle size={64} className="text-[#B68F62]" />
            </div>
            <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#B68F62]">
              <span className="text-sm font-bold text-[#040507]">!</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="font-alagambe mb-6 text-5xl leading-tight font-[400] tracking-wide text-[#E9DDC3] md:text-6xl">
            {title}
          </h1>
          <p className="font-playfair mx-auto mb-6 max-w-2xl text-lg leading-relaxed font-[400] text-[#C1B6A6] md:text-xl">
            {message}
          </p>

          {/* Error Details (if provided) */}
          {error && (
            <div className="mx-auto mb-8 max-w-2xl rounded-lg border border-[#B68F62]/50 bg-[#B68F62]/10 p-4 shadow-md">
              <p className="overflow-x-auto text-left font-mono text-sm text-[#C1B6A6]">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {reset && (
            <button
              onClick={reset}
              className="font-alagambe group flex transform items-center gap-3 rounded-full bg-[#B68F62] px-8 py-4 font-[400] tracking-wide text-[#040507] uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#C9AB81]"
            >
              <RefreshCw
                size={20}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
              Try Again
            </button>
          )}

          <button className="font-alagambe group flex items-center gap-3 rounded-full border border-[#B68F62] px-8 py-4 font-[400] tracking-wide text-[#E9DDC3] uppercase transition-all duration-300 hover:bg-[#B68F62] hover:text-[#040507]">
            <Home size={20} />
            Back to Home
          </button>

          <button className="font-alagambe group flex items-center gap-3 rounded-full border border-[#C9AB81] px-8 py-4 font-[400] tracking-wide text-[#C9AB81] uppercase transition-all duration-300 hover:bg-[#C9AB81] hover:text-[#040507]">
            <Mail size={20} />
            Report Issue
          </button>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-center gap-6 opacity-70">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#B68F62]"></div>
            <span className="font-playfair text-sm font-[400] text-[#C1B6A6]">
              Service Interrupted
            </span>
          </div>
          <div className="h-4 w-px bg-[#B68F62]/40"></div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#C9AB81] delay-300"></div>
            <span className="font-playfair text-sm font-[400] text-[#C1B6A6]">
              Recovery in Progress
            </span>
          </div>
        </div>

        {/* Restaurant Support Card */}
        <div className="mt-12 rounded-lg border border-[#B68F62]/20 bg-[#0E0C07] p-6 shadow-md">
          <h3 className="font-alagambe mb-2 text-2xl font-[400] text-[#E9DDC3]">
            Need immediate assistance?
          </h3>
          <p className="font-playfair mb-4 text-sm font-[400] text-[#C1B6A6]">
            Contact Abaseen directly for reservations, bookings, or inquiries
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-playfair text-sm font-[400] text-[#B68F62]">
                Phone:
              </span>
              <span className="font-playfair text-sm font-[400] text-[#C1B6A6]">
                +44 xxx xxx xxxx
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-playfair text-sm font-[400] text-[#B68F62]">
                Email:
              </span>
              <span className="font-playfair text-sm font-[400] text-[#C1B6A6]">
                info@abaseen.com
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="font-playfair text-sm font-[400] text-[#B68F62]">
              Location:
            </span>
            <span className="font-playfair text-sm font-[400] text-[#C1B6A6]">
              Every Flavor, a Tradition
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 h-4 w-4 animate-bounce rounded-full bg-[#B68F62]/60"></div>
        <div className="absolute right-16 bottom-40 h-2 w-2 animate-bounce rounded-full bg-[#C9AB81]/60 delay-700"></div>
        <div className="absolute top-1/3 right-10 h-3 w-3 animate-bounce rounded-full bg-[#B68F62]/40 delay-1000"></div>
      </div>

      {/* Subtle Effect Lines */}
      <div className="absolute top-1/4 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#B68F62]/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#C9AB81]/20 to-transparent delay-500"></div>
    </div>
  );
};

export default Error;
