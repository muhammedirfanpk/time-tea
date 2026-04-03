// import { EntranceWave } from "@/components/Animation";
import { ReviewsCarousel } from "./ReviewCarousal";
import { ReviewService } from "./ReviewService";

const Reviews = async () => {
  // const response = await ReviewService.getReviewData();
  // const review = response?.reviews;

  const review = ReviewService.getExampleReviews();

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF8] py-4 sm:py-10 md:py-10">
      {/* Background Pattern */}

      <div className="flex flex-col gap-6 ">
        <div className="flex items-center justify-center">
          {/* <EntranceWave
            text="From Our Clients"
            className="font-josefin_Sans text-center text-4xl font-[500] tracking-[5%]  md:text-5xl"
          /> */}
        </div>
        <div className="relative">
          {review && <ReviewsCarousel reviews={review} />}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
