"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  rating: number;
  text: { text: string };
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  relativePublishTimeDescription: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  const [expandedReviews, setExpandedReviews] = useState(new Set<number>());

  const toggleReadMore = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const isTextTruncated = (text: string) => {
    return text && text.length > 150;
  };

  return (
    



     <section className=" py-1">
      <h2 className="text-center text-3xl md:text-4xl font-playfair_display ">
        Reviews
      </h2>

      <div className="w-full ">
        <Carousel className="w-full p-10">

          
          <CarouselContent className="ml-0 border border-[#3F2419]">

            {reviews
              .filter((r) => r.rating >= 4)
              .slice(0, 4) 
              .map((review, index) => {
                const isExpanded = expandedReviews.has(index);

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/4 p-0 
                               border-r  last:border-r-0"
                  >
                    <Card className="h-full rounded-none border-none shadow-none bg-white">
                      
                      <CardContent className="flex h-full min-h-[420px] flex-col items-center justify-center text-center px-6">

                        
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-current text-black"
                            />
                          ))}
                        </div>

                       
                        <p
                          className={`text-sm  text-[#0A0A09] leading-relaxed max-w-[220px] mb-6 ${
                            isExpanded ? "" : "line-clamp-4"
                          }`}
                        >
                          {review.text.text}
                        </p>

                       
                        {review.text.text.length > 120 && (
                          <button
                            onClick={() => toggleReadMore(index)}
                            className="text-xs text-gray-500 underline mb-4"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}

                      
                        <div>
                          <p className="text-sm font-medium text-[#0A0A09]">
                            {review.authorAttribution.displayName}
                          </p>
                          <p className="text-xs opacity-60 text-[#0A0A09]">
                            {review.relativePublishTimeDescription}
                          </p>
                        </div>

                      </CardContent>

                    </Card>
                  </CarouselItem>
                );
              })}
          </CarouselContent>

         
          <div className="mt-10 flex justify-center gap-4">
            <CarouselPrevious className="static h-10 w-10 rounded-full bg-black text-white hover:scale-110 transition" />
            <CarouselNext className="static h-10 w-10 rounded-full bg-black text-white hover:scale-110 transition" />
          </div>

        </Carousel>
      </div>
    </section>
  );
};

export { ReviewsCarousel };
