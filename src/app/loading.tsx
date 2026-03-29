"use client";
import React from "react";

interface LoaderProps {
  message?: string;
  subMessage?: string;
  variant?: "full" | "inline" | "minimal";
}

const Loader: React.FC<LoaderProps> = ({
  message = "Preparing your experience",
  subMessage = "Please wait a moment",
  variant = "full",
}) => {
  // Minimal loader - just the spinner
  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#B68F62]" />
          <div
            className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-b-[#C9AB81]"
            style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
          />
        </div>
      </div>
    );
  }

  // Inline loader - spinner with text
  if (variant === "inline") {
    return (
      <div className="flex items-center justify-center gap-3 p-6">
        <div className="relative h-6 w-6">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-[#B68F62]/20 border-t-[#B68F62]" />
        </div>
        <span className="text-sm font-medium text-[#C1B6A6]">{message}</span>
      </div>
    );
  }

  // Full page loader
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#040507]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B68F62]/5 via-transparent to-[#B68F62]/5" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Main spinner */}
        <div className="relative mb-10 h-20 w-20">
          {/* Outer ring */}
          <div
            className="absolute inset-0 animate-spin rounded-full border-[3px] border-[#B68F62]/10 border-t-[#B68F62]"
            style={{ animationDuration: "1.2s" }}
          />

          {/* Middle ring */}
          <div
            className="absolute inset-2 animate-spin rounded-full border-[3px] border-[#C9AB81]/10 border-t-[#C9AB81]"
            style={{ animationDuration: "1s", animationDirection: "reverse" }}
          />

          {/* Inner ring */}
          <div
            className="absolute inset-4 animate-spin rounded-full border-[2px] border-[#B68F62]/10 border-t-[#B68F62]/80"
            style={{ animationDuration: "0.8s" }}
          />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#B68F62]" />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center">
          <h2 className="mb-2 text-lg font-medium tracking-wide text-[#E9DDC3]">
            {message}
          </h2>
          <p className="text-sm text-[#C1B6A6]/70">{subMessage}</p>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B68F62]"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
