import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#040507] py-8 md:py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8 md:px-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src="/images/about-us/4.webp"
              width={4272}
              height={6224}
              alt="Abaseen authentic cuisine and warm hospitality"
              priority
              className="h-[300px] w-full object-cover shadow-2xl md:h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507]/60 to-transparent" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:justify-start md:gap-6">
          <h1 className="font-playfair text-sm tracking-[3px] text-[#B68F62] uppercase md:text-base">
            Our Story
          </h1>

          <h2 className="font-alagambe text-center text-2xl font-[400] text-[#E9DDC3] uppercase md:text-start md:text-4xl">
            From Afghan&apos;s
            <br />
            <span className="text-[#B68F62] font-playfair_display_SC">
              Heritage to Your Table
            </span>
          </h2>

          <div className="space-y-4">
            <p className="font-playfair max-w-[500px] text-center text-sm font-[400] text-[#C1B6A6] md:text-start md:text-base">
              Abaseen was born from a passion for bringing the rich, authentic
              flavors of Afghan cuisine to life. What began as a reverence for
              centuries-old culinary traditions has grown into a dining
              destination that celebrates the vibrant culture, warmth, and
              generous spirit of Afghan heritage.
            </p>

            <p className="font-playfair max-w-[500px] text-center text-sm font-[400] text-[#C1B6A6] md:text-start md:text-base">
              More than just a restaurant, Abaseen is a culinary bridge. Every
              dish honors time-honored recipes passed down through
              generations—crafted with the finest ingredients, rooted in
              tradition, and elevated with contemporary care. Whether
              you&apos;re here for a cherished meal or a special gathering, we
              bring people together with the warmth of Afghan hospitality,
              creating moments of fullness and completeness with every bite.
            </p>
          </div>

          {/* Heritage Stats */}
          <div className="flex w-full max-w-[500px] flex-col gap-4 rounded-lg border border-[#B68F62]/30 bg-[#0E0C07] p-6 shadow-lg md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-alagambe text-2xl font-[400] text-[#C9AB81]">
                Heritage
              </h4>
              <h5 className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Authentic Recipes
              </h5>
            </div>
            <div className="hidden w-px bg-[#B68F62]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <h6 className="font-alagambe text-2xl font-[400] text-[#C9AB81]">
                Tradition
              </h6>
              <h6 className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Afghan Culture
              </h6>
            </div>
            <div className="hidden w-px bg-[#B68F62]/30 md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <h6 className="font-alagambe text-2xl font-[400] text-[#C9AB81]">
                Excellence
              </h6>
              <h6 className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Quality Ingredients
              </h6>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/our-story">
              <Button
                aria-label="Discover Our Story"
                className="font-open_sans h-12 rounded-none border border-[#B68F62] bg-transparent px-6 text-xs font-[400] tracking-[2px] text-[#E9DDC3] uppercase transition-all duration-150 hover:bg-[#B68F62] hover:text-[#040507] active:scale-95"
              >
                Discover Our Story
              </Button>
            </Link>
            <Link href={"/menu"}>
              <Button
                aria-label="Order Online"
                className="font-open_sans h-12 rounded-none border border-[#B68F62] bg-[#B68F62] px-6 text-xs font-[400] tracking-[2px] text-[#040507] uppercase transition-all duration-150 hover:bg-[#C9AB81] active:scale-95"
              >
                Order Online
              </Button>
            </Link>
          </div>

          {/* Cultural Elements */}
          <div className="mt-6 flex items-center gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                <svg
                  className="h-6 w-6 text-[#040507]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Made with Passion
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                <svg
                  className="h-6 w-6 text-[#040507]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Authentic Flavours
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#B68F62]">
                <svg
                  className="h-6 w-6 text-[#040507]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-playfair text-xs font-[400] tracking-[2px] text-[#C1B6A6] uppercase">
                Afghan Heritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
