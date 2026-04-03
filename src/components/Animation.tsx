"use client";
import { easeInOut, motion, useScroll, useTransform, Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

interface ImageAnimationProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

// Enhanced interface for components that need additional props
interface StaggeredContainerProps extends AnimatedContentProps {
  staggerDelay?: number;
  delayChildren?: number;
}

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

// Utility function to combine classes
const combineClasses = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// 1. Slide in from left
export const SlideInLeft: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 2. Slide in from right
export const SlideInRight: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 3. Scale up animation
export const ScaleUp: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.6,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 4. Rotate in animation
export const RotateIn: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 5. Staggered children animation - Enhanced
export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = "",
  style = {},
  staggerDelay = 0.2,
  delayChildren = 0.1,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={combineClasses(
        "mx-auto flex flex-nowrap gap-5 md:flex-row",
        className,
      )}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

// 6. Parallax scroll animation
export const ParallaxScroll: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 1,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = scrollY * 0.3;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration }}
      style={{
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

// 7. Bounce in animation
export const BounceIn: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{
        duration,
        delay,
        ease: [0.175, 0.885, 0.32, 1.275], // Custom bounce easing
      }}
    >
      {children}
    </motion.div>
  );
};

// 8. Typewriter/reveal animation
export const RevealText: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 1.2,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// 9. Floating animation
export const FloatingAnimation: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration }}
      animate={{
        y: [0, -10, 0],
      }}
      style={{
        animation: "float 3s ease-in-out infinite",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

// 10. Magnetic hover effect
export const MagneticHover: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 0.3,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: false }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

// 11. Image Zoom Out to Zoom In (Ken Burns effect)
export const ImageZoomOutIn: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 1.5,
}) => {
  return (
    <motion.div
      className={combineClasses("overflow-hidden", className)}
      style={style}
      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// 12. Image Zoom In to Zoom Out
export const ImageZoomInOut: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 1.2,
}) => {
  return (
    <motion.div
      className={combineClasses("overflow-hidden", className)}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1.1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// 13. Continuous Zoom Animation (breathing effect)
export const ContinuousZoom: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 4,
}) => {
  return (
    <motion.div
      className={combineClasses("overflow-hidden", className)}
      style={style}
      initial={{ scale: 1, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        scale: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.8 },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

// 14. Hover Zoom with Initial Animation
export const HoverZoomImage: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 0.6,
}) => {
  return (
    <motion.div
      className={combineClasses("cursor-pointer overflow-hidden", className)}
      style={style}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// 15. Zoom with Rotation
export const ZoomRotate: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 1.8,
}) => {
  return (
    <motion.div
      className={combineClasses("overflow-hidden", className)}
      style={style}
      initial={{ scale: 1.3, rotate: 5, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// 16. Pulse Zoom Effect
export const PulseZoom: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  duration = 2,
}) => {
  return (
    <motion.div
      className={combineClasses("overflow-hidden", className)}
      style={style}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        scale: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.8 },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

// 17. Bottom to position
export const SlideInBottom: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 18. Top to position
export const SlideInTop: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// 19. Scroll animate
export const ScrollAnimate: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = Math.max(50 - scrollY * 0.5, -200);

  return (
    <motion.div
      className={combineClasses(
        "relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white",
        className,
      )}
      style={style}
      animate={{ y: translateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// 20. Wavy text animation - Enhanced
export const EntranceWave: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
}) => {
  // Handle both <br> and \n for flexibility
  let lines = text.split(/<br\s*\/?>/i); // Handle <br>, <br/>, <br />
  if (lines.length === 1) {
    lines = text.split("\n");
  }

  let charIndex = 0; // Keep track of overall character index for staggered animation

  return (
    <div className={combineClasses("flex flex-col", className)}>
      {lines.map((line: string, lineIndex: number) => (
        <div key={lineIndex} className="flex">
          {line.split("").map((char: string, index: number) => {
            const currentCharIndex = charIndex++;
            return (
              <motion.span
                key={`${lineIndex}-${index}`}
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration,
                  delay: delay + currentCharIndex * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
// 21. Continuous wave - Enhanced
export const ContinuousWave: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 2,
}) => {
  return (
    <div className={combineClasses("flex", className)}>
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -12, 0],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: delay + index * 0.1,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// 22. scroll image zoom animation
export const ParallaxDepth: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale }}
        transition={{ duration, ease: "easeOut" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

//23. hover image moving animation

export const MagneticImage: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  return (
    <motion.div
      ref={ref}
      className={`cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        x: isHovered ? mousePosition.x : 0,
        y: isHovered ? mousePosition.y : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

//24. Left to Right  Reveal

export const RevealMaskLeft: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1.5,
}) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: duration * 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// 25. Right to Left Reveal
export const RevealMaskRight: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1.5,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Sliding overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-black"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration, ease: "easeInOut" }}
      />

      {/* Image content */}
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: duration * 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 26. Top to Bottom Reveal
export const RevealMaskTop: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1.5,
}) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: duration * 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// 27. Bottom to Top Reveal
export const RevealMaskBottom: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1.5,
}) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: duration * 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// 28. Center Expand Reveal
export const RevealMaskCenter: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
  duration = 1.5,
}) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 50% 0 50%)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: duration * 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

//29. hover image positon changed

export const TiltImage: React.FC<ImageAnimationProps> = ({
  children,
  className = "",
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY((x - centerX) / 10);
    setRotateX((centerY - y) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div whileHover={{ z: 50 }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  );
};










import { Variants } from "framer-motion";

export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
export const imageZoomOut: Variants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 3.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};





export const FadeOnScroll = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};





import React from "react";


export const ImageZoom = ({
  children,
  className = "",
  duration = 1.2,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      className={`overflow-hidden will-change-transform ${className}`}
      initial={{ scale: 1.15, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1], // 🔥 smooth cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
};


// export const slider = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => ({
//     x: direction > 0 ? -300 : 300,
//     opacity: 0,
//   }),
// };

export const slider = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.95,
  }),
};

export  const imageFadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1],  }
    }
  };