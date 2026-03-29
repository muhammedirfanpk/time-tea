"use client";
import React, { useEffect, useRef, useState } from "react";

const ModelBox: React.FC<{
  iosSrc?: string;
  src: string;
  width?: string;
  height?: string;
  Top?: string;
  Bottom?: string;
  Right?: string;
  Left?: string;
  fieldOfView: string;
  cameraOrbit: string;
  cameraTarget: string;
}> = ({
  iosSrc,
  src,
  width,
  height,
  Top,
  Bottom,
  Right,
  Left,
  cameraOrbit,
  fieldOfView,
  cameraTarget,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);

      const checkMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && typeof window !== "undefined" && !isModelViewerLoaded) {
      void import("@google/model-viewer").then(() => {
        setIsModelViewerLoaded(true);
      });
    }
  }, [isInView, isModelViewerLoaded]);

  if (!isClient || !isModelViewerLoaded || !isInView) {
    return (
      <div
        ref={containerRef}
        style={{ width: width ?? "100px", height: height ?? "500px" }}
        className="flex items-center justify-center bg-transparent"
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      <model-viewer
        id="model"
        src={src}
        ios-src={iosSrc}
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity={isMobile ? "0" : "1"}
        ar-modes="webxr scene-viewer quick-look"
        auto-rotate={!isMobile}
        camera-controls
        camera-orbit={cameraOrbit}
        field-of-view={fieldOfView}
        disable-tap
        camera-target={cameraTarget}
        max-camera-orbit="Infinity 90deg auto"
        alt="3D model"
        style={
          {
            width: width ?? "100px",
            height: height ?? "500px",
            zIndex: "99",
            top: Top,
            bottom: Bottom,
            left: Left,
            right: Right,
            "--progress-bar-color": "transparent",
            "--progress-mask": "transparent",
          } as React.CSSProperties
        }
      ></model-viewer>
    </div>
  );
};

export default ModelBox;
