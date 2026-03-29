"use client";
import React, {
  type ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { EmblaCarouselType } from "embla-carousel";
import "@/app/section/special/embla-menu.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <Button
      className="h-12 w-12 hover:cursor-pointer bg-transparent border border-foreground rounded-full"
      // size="icon"
      // className={cn(
      //   'group/btn border-primary text-foreground h-10 w-10 rounded-full border-0 bg-[#fff] hover:bg-[#D1A04D] md:h-16 md:w-16',
      //   'top-1/2 -left-12 -translate-y-1/2'
      // )}
      {...restProps}
    >
      {/* <div
        className="absolute inset-0 flex rounded-full group-hover/btn:hidden"
        style={{
          border: `2px solid #ffff`,
          // clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
          transition: "clip-path 0.4s ease-in-out",
          transform: "rotate(160deg)",
        }}
      /> */}
      <ChevronLeft className=" !h-8 text-foreground !w-6" />
      <span className="sr-only">Previous slide</span>
      {/* <Image
        src={"/images/home/special/al.png"}
        alt="red button"
        width={100}
        height={100}
        className="w-32 md:w-36"
      /> */}
    </Button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <Button
      className="h-12 w-12 hover:cursor-pointer bg-transparent border border-foreground rounded-full"
      // size="icon"
      // className={cn(
      //   "group/btn border-primary text-foreground h-10 w-10 rounded-full border-0 bg-[#ffff] hover:bg-[#D1A04D] md:h-16 md:w-16",
      //   "top-1/2 -right-12 -translate-y-1/2"
      // )}
      {...restProps}
    >
      {/* <div
        className="absolute inset-0 flex rounded-full group-hover/btn:hidden"
        style={{
          border: `2px solid #ffff`,
          // clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
          transition: "clip-path 0.4s ease-in-out",
          transform: "rotate(-20deg)",
        }}
      />*/}
      <ChevronRight className=" !h-8 text-foreground !w-6" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};
