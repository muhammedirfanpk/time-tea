// "use client";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "@/app/section/special/MenuArrowButtons";
// import "@/app/section/special/embla-menu.css";
// import ModelBox from "./ModelBox";
// import type { ModelData } from "@/types/model-data.type";
// import type {
//   EmblaCarouselType,
//   EmblaEventType,
//   EmblaOptionsType,
// } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import React, { useCallback, useEffect, useRef } from "react";
// import { SmallToRoatated } from "@/components/Animation";

// const isMobile = typeof window !== "undefined" && window.innerWidth < 769;

// const TWEEN_FACTOR_BASE = isMobile ? 0.3 : 0.4;

// const numberWithinRange = (number: number, min: number, max: number): number =>
//   Math.min(Math.max(number, min), max);

// type PropType = {
//   slides: ModelData[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     ...options,
//     loop: true,
//     align: "center",
//     // containScroll: "keepSnaps",
//     containScroll: false,
//   });
//   const tweenFactor = useRef(0);
//   const tweenNodes = useRef<HTMLElement[]>([]);

//   // const { selectedIndex } = useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//       return slideNode.querySelector(
//         ".embla-menu__slide__number",
//       ) as HTMLElement;
//     });
//   }, []);

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
//   }, []);

//   // const tweenScale = useCallback(
//   //   (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//   //     const engine = emblaApi.internalEngine();
//   //     const scrollProgress = emblaApi.scrollProgress();
//   //     const slidesInView = emblaApi.slidesInView();
//   //     const isScrollEvent = eventName === "scroll";

//   //     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//   //       let diffToTarget = scrollSnap - scrollProgress;
//   //       const slidesInSnap = engine.slideRegistry[snapIndex];

//   //       slidesInSnap?.forEach((slideIndex) => {
//   //         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//   //         if (engine.options.loop) {
//   //           engine.slideLooper.loopPoints.forEach((loopItem) => {
//   //             const target = loopItem.target();

//   //             if (slideIndex === loopItem.index && target !== 0) {
//   //               const sign = Math.sign(target);

//   //               if (sign === -1) {
//   //                 diffToTarget = scrollSnap - (1 + scrollProgress);
//   //               }
//   //               if (sign === 1) {
//   //                 diffToTarget = scrollSnap + (1 - scrollProgress);
//   //               }
//   //             }
//   //           });
//   //         }

//   //         const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
//   //         const scale = numberWithinRange(tweenValue, 0, 1).toString();
//   //         const tweenNode = tweenNodes.current[slideIndex];
//   //         if (!tweenNode) return;
//   //         tweenNode.style.transform = `scale(${scale})`;
//   //         tweenNode.style.opacity = scale;
//   //       });
//   //     });
//   //   },
//   //   [],
//   // );

//   const tweenScale = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       const engine = emblaApi.internalEngine();
//       const scrollProgress = emblaApi.scrollProgress();
//       const slidesInView = emblaApi.slidesInView();
//       const isScrollEvent = eventName === "scroll";

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress;
//         const slidesInSnap = engine.slideRegistry[snapIndex];

//         slidesInSnap?.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

//           if (engine.options.loop) {
//             engine.slideLooper.loopPoints.forEach((loopItem) => {
//               const target = loopItem.target();

//               if (slideIndex === loopItem.index && target !== 0) {
//                 const sign = Math.sign(target);

//                 if (sign === -1) {
//                   diffToTarget = scrollSnap - (1 + scrollProgress);
//                 }
//                 if (sign === 1) {
//                   diffToTarget = scrollSnap + (1 - scrollProgress);
//                 }
//               }
//             });
//           }

//           const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
//           const scale = numberWithinRange(tweenValue, 0, 1).toString();
//           const tweenNode = tweenNodes.current[slideIndex];
//           if (!tweenNode) return;

//           // diffToTarget > 0 → slide is to the LEFT
//           // diffToTarget < 0 → slide is to the RIGHT
//           const LEFT_OFFSET = isMobile ? -100 : -150;
//           const RIGHT_OFFSET = isMobile ? -100 : -150;

//           const translateY =
//             diffToTarget > 0
//               ? LEFT_OFFSET * Math.abs(diffToTarget * tweenFactor.current)
//               : RIGHT_OFFSET * Math.abs(diffToTarget * tweenFactor.current);

//           tweenNode.style.transform = `scale(${scale}) translateY(${translateY}px)`;

//           // Center slide → full opacity, side slides → controlled by MIN_SIDE_OPACITY
//           const MIN_SIDE_OPACITY = 0.8; // 0 to 1 — increase this to make side slides more visible
//           const opacity = numberWithinRange(
//             MIN_SIDE_OPACITY + (1 - MIN_SIDE_OPACITY) * Number(scale),
//             MIN_SIDE_OPACITY,
//             1,
//           );
//           tweenNode.style.opacity = opacity.toString();
//         });
//       });
//     },
//     [],
//   );

//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   useEffect(() => {
//     if (!emblaApi) return;

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     onSelect(); // initial
//     emblaApi.on("select", onSelect);

//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     setTweenNodes(emblaApi);
//     setTweenFactor(emblaApi);
//     tweenScale(emblaApi);

//     emblaApi
//       .on("reInit", setTweenNodes)
//       .on("reInit", setTweenFactor)
//       .on("reInit", tweenScale)
//       .on("scroll", tweenScale)
//       .on("slideFocus", tweenScale);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [emblaApi, tweenScale]);

//   return (
//     <>
//       <div className="relative z-50 flex w-full pb-8  justify-center  flex-col items-center gap-2">
//         <div className="embla-menu  w-full">
//           <div className="embla-menu__viewport  " ref={emblaRef}>
//             <div className="embla-menu__container">
//               {/* <div className="absolute flex w-full items-center justify-center pb-6">
//                 {slides[selectedIndex]?.name && (
//                   // <p className="font-playfair min-h-[80px] max-w-[300px] text-center font-merriweather text-xl text-white md:text-3xl">
//                   <p
//                     className="font-occamsEraser max-w-[300px] text-center text-3xl font-[400] uppercase tracking-[2%] text-[#fff] lg:text-5xl"
//                     style={{
//                       textShadow: "-4.99px 4.08px 0 #0095DF",
//                     }}
//                   >
//                     {formatModelName(slides[selectedIndex]?.name)}
//                   </p>
//                 )}
//               </div> */}
//               {slides.map((modelData, index) => (
//                 <div className="embla-menu__slide  rounded-none  " key={index}>
//                   <div className="embla-menu__slide__number relative h-full w-full    flex flex-col gap-6 items-center justify-center ">
//                     <div className="absolute bottom-10 h-10 w-40 rounded-full bg-black/20 blur-2xl md:h-12 md:w-56 md:blur-3xl" />

//                     <div className="absolute hidden md:block -left-28 top-[25rem]  ">
//                       <p
//                         className={`font-plus_jakarta_sans    min-h-[80px] -mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[400] max-w-[500px] text-center md:text-start text-base
//     ${
//       index === selectedIndex
//         ? "text-base  font-semibold text-foreground scale-110"
//         : "text-base text-foreground scale-90"
//     }`}
//                       >
//                         {index === selectedIndex
//                           ? formatModelName(modelData?.name)
//                           : ""}
//                       </p>
//                     </div>
//                     <SmallToRoatated className="mt-28 md:mt-0 ">
//                       <ModelBox
//                         src={modelData?.modelPath?.glb}
//                         width={isMobile ? "140px" : "400px"}
//                         height={isMobile ? "140px" : "400px"}
//                         cameraOrbit="0deg 40deg 0deg 5m"
//                         fieldOfView="25deg"
//                         cameraTarget="0m 0m 0m"
//                       />
//                     </SmallToRoatated>

//                     {/* <p className="font-plus_jakarta_sans  min-h-[80px] -mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[500] max-w-[500px] text-center text-lg">
//                       {formatModelName(modelData?.name)}
//                     </p> */}
//                     <p
//                       className={`font-plus_jakarta_sans md:hidden     min-h-[80px] mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[400] max-w-[500px] text-center md:text-start text-base
//     ${
//       index === selectedIndex
//         ? "text-base  font-semibold text-foreground scale-110"
//         : "text-base text-foreground scale-90"
//     }`}
//                     >
//                       {index === selectedIndex
//                         ? formatModelName(modelData?.name)
//                         : ""}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="relative flex mt-20 md:mt-14 h-auto w-full items-center justify-end gap-2 px-10  md:px-64">
//           <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform items-center gap-6 md:bottom-2">
//             <PrevButton
//               onClick={onPrevButtonClick}
//               disabled={prevBtnDisabled}
//             />
//             <NextButton
//               onClick={onNextButtonClick}
//               disabled={nextBtnDisabled}
//             />
//           </div>
//         </div>
//         {/* <div className="hidden absolute -left-8 xl:left-28 top-1/2 -translate-y-1/2 md:flex items-center gap-6 cursor-pointer">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//         </div>
//         <div className="hidden absolute -right-8 xl:right-28 top-1/2 -translate-y-1/2 md:flex items-center gap-6 cursor-pointer">
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default EmblaCarousel;

// const formatModelName = (name: string) => {
//   return name
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };












"use client";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/app/section/special/MenuArrowButtons";
import "@/app/section/special/embla-menu.css";
import ModelBox from "./ModelBox";
import type { ModelData } from "@/types/model-data.type";
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef } from "react";

const isMobile = typeof window !== "undefined" && window.innerWidth < 769;

const TWEEN_FACTOR_BASE = isMobile ? 0.3 : 0.4;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: ModelData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    align: "center",
    // containScroll: "keepSnaps",
    containScroll: false,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  // const { selectedIndex } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(
        ".embla-menu__slide__number",
      ) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  // const tweenScale = useCallback(
  //   (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
  //     const engine = emblaApi.internalEngine();
  //     const scrollProgress = emblaApi.scrollProgress();
  //     const slidesInView = emblaApi.slidesInView();
  //     const isScrollEvent = eventName === "scroll";

  //     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
  //       let diffToTarget = scrollSnap - scrollProgress;
  //       const slidesInSnap = engine.slideRegistry[snapIndex];

  //       slidesInSnap?.forEach((slideIndex) => {
  //         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

  //         if (engine.options.loop) {
  //           engine.slideLooper.loopPoints.forEach((loopItem) => {
  //             const target = loopItem.target();

  //             if (slideIndex === loopItem.index && target !== 0) {
  //               const sign = Math.sign(target);

  //               if (sign === -1) {
  //                 diffToTarget = scrollSnap - (1 + scrollProgress);
  //               }
  //               if (sign === 1) {
  //                 diffToTarget = scrollSnap + (1 - scrollProgress);
  //               }
  //             }
  //           });
  //         }

  //         const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
  //         const scale = numberWithinRange(tweenValue, 0, 1).toString();
  //         const tweenNode = tweenNodes.current[slideIndex];
  //         if (!tweenNode) return;
  //         tweenNode.style.transform = `scale(${scale})`;
  //         tweenNode.style.opacity = scale;
  //       });
  //     });
  //   },
  //   [],
  // );

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap?.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (!tweenNode) return;

          // diffToTarget > 0 → slide is to the LEFT
          // diffToTarget < 0 → slide is to the RIGHT
          const LEFT_OFFSET = isMobile ? -100 : -150;
          const RIGHT_OFFSET = isMobile ? -100 : -150;

          const translateY =
            diffToTarget > 0
              ? LEFT_OFFSET * Math.abs(diffToTarget * tweenFactor.current)
              : RIGHT_OFFSET * Math.abs(diffToTarget * tweenFactor.current);

          tweenNode.style.transform = `scale(${scale}) translateY(${translateY}px)`;

          // Center slide → full opacity, side slides → controlled by MIN_SIDE_OPACITY
          const MIN_SIDE_OPACITY = 0.8; // 0 to 1 — increase this to make side slides more visible
          const opacity = numberWithinRange(
            MIN_SIDE_OPACITY + (1 - MIN_SIDE_OPACITY) * Number(scale),
            MIN_SIDE_OPACITY,
            1,
          );
          tweenNode.style.opacity = opacity.toString();
        });
      });
    },
    [],
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect(); // initial
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, tweenScale]);

  return (
    <>
      <div className="relative z-50 flex w-full pb-8  justify-center  flex-col items-center gap-2">
        <div className="embla-menu  w-full">
          <div className="embla-menu__viewport  " ref={emblaRef}>
            <div className="embla-menu__container">
              {/* <div className="absolute flex w-full items-center justify-center pb-6">
                {slides[selectedIndex]?.name && (
                  // <p className="font-playfair min-h-[80px] max-w-[300px] text-center font-merriweather text-xl text-white md:text-3xl">
                  <p
                    className="font-occamsEraser max-w-[300px] text-center text-3xl font-[400] uppercase tracking-[2%] text-[#fff] lg:text-5xl"
                    style={{
                      textShadow: "-4.99px 4.08px 0 #0095DF",
                    }}
                  >
                    {formatModelName(slides[selectedIndex]?.name)}
                  </p>
                )}
              </div> */}
              {slides.map((modelData, index) => (
                <div className="embla-menu__slide  rounded-none  " key={index}>
                  <div className="embla-menu__slide__number relative h-full w-full    flex flex-col gap-6 items-center justify-center ">
                    <div className="absolute bottom-10 h-10 w-40 rounded-full bg-black/20 blur-2xl md:h-12 md:w-56 md:blur-3xl" />

                    <div className="absolute hidden md:block -left-28 top-[25rem]  ">
                      <p
                        className={`font-plus_jakarta_sans    min-h-[80px] -mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[400] max-w-[500px] text-center md:text-start text-base
    ${
      index === selectedIndex
        ? "text-base  font-semibold text-foreground scale-110"
        : "text-base text-foreground scale-90"
    }`}
                      >
                        {index === selectedIndex
                          ? formatModelName(modelData?.name)
                          : ""}
                      </p>
                    </div>
                    <div className="mt-28 md:mt-0 ">
                      <ModelBox
                        src={modelData?.modelPath?.glb}
                        width={isMobile ? "140px" : "400px"}
                        height={isMobile ? "140px" : "400px"}
                        cameraOrbit="0deg 40deg 0deg 5m"
                        fieldOfView="25deg"
                        cameraTarget="0m 0m 0m"
                      />
                    </div>

                    {/* <p className="font-plus_jakarta_sans  min-h-[80px] -mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[500] max-w-[500px] text-center text-lg">
                      {formatModelName(modelData?.name)}
                    </p> */}
                    <p
                      className={`font-plus_jakarta_sans md:hidden     min-h-[80px] mt-10 md:-mt-2 text-foreground tracking-[-1%] font-[400] max-w-[500px] text-center md:text-start text-base
    ${
      index === selectedIndex
        ? "text-base  font-semibold text-foreground scale-110"
        : "text-base text-foreground scale-90"
    }`}
                    >
                      {index === selectedIndex
                        ? formatModelName(modelData?.name)
                        : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex mt-20 md:mt-14 h-auto w-full items-center justify-end gap-2 px-10  md:px-64">
          <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform items-center gap-6 md:bottom-2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        {/* <div className="hidden absolute -left-8 xl:left-28 top-1/2 -translate-y-1/2 md:flex items-center gap-6 cursor-pointer">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="hidden absolute -right-8 xl:right-28 top-1/2 -translate-y-1/2 md:flex items-center gap-6 cursor-pointer">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}
      </div>
    </>
  );
};

export default EmblaCarousel;

const formatModelName = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};