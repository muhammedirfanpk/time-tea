// import { SlideInBottom, SlideInBottomSpecial } from "@/components/Animation";
// import EmblaCarousel from "@/app/section/special/MenuCarousel";
// import type { EmblaOptionsType } from "embla-carousel";
// import { ModelService } from "./modelService";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const OPTIONS: EmblaOptionsType = { loop: true };

// const Special = async ({}) => {
//   const response = await ModelService.getModelData();
//   console.log(response);

//   // const restaurantID = process.env.NEXT_PUBLIC_RESTAURANT_ID;
//   // const filteredResponse = response?.rows.filter(
//   //   (item) => item.meta.restaurantID === restaurantID,
//   // );

//   return (
//     <section className="relative z-10 h-full w-full flex flex-col   justify-center items-center bg-background overflow-hidden  px-0 md:px-8 xl:px-10 ">
//       {/* image */}
//       <div className=" absolute left-1/2 top-1/2 px-4 md:px-0 -translate-y-1/2 w-full md:w-auto -mt-20 md:mt-0 -translate-x-1/2 ">
//         <Image
//           src="/images/home/special/image.webp"
//           width={1440}
//           height={1800}
//           alt="image"
//           priority
//           className="w-full h-[200px] md:h-[500px]  object-contain   "
//         />
//       </div>
//       {/* text */}
//       <SlideInBottomSpecial className="absolute w-full left-0 right-0 top-8 xl:top-16 ">
//         <h1 className=" font-plus_jakarta_sans font-[400] text-[#F7E8C9] tracking-[-8%] text-center text-[90px] md:text-7xl xl:text-[300px]  ">
//           Our Menu 
//         </h1>
//       </SlideInBottomSpecial>
//       <div className=" flex h-full w-full flex-col items-center justify-center gap-28 md:gap-24 xl:gap-32 ">
//         <SlideInBottom>
//           <p className="font-plus_jakarta_sans font-[500] uppercase tracking-[18%] text-start text-xs mb-4 text-foreground  ">
//             Curated Selection
//           </p>
//         </SlideInBottom>

//         <div className="relative z-20 -mt-32 md:-mt-0 flex min-h-[400px] w-full flex-col justify-center md:px-4 ">
//           {response?.rows && (
//             <EmblaCarousel slides={response.rows} options={OPTIONS} />
//           )}
//         </div>
//       </div>
//       <div className="-mt-20 z-20 md:mt-0 ">
//         <Link className="w-full md:w-auto" href={"/menu"}>
//           <Button
//             variant="outline"
//             aria-label="View Menu"
//             size="lg"
//             className="text-xs w-full md:w-auto rounded-full uppercase font-[500] px-8 py-6.5  tracking-[18%] text-center hover:bg-background hover:text-foreground  text-background border-[#92260C]  bg-[#92260C] font-plus_jakarta_sans cursor-pointer"
//           >
//             View Menu
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Special;





import EmblaCarousel from "@/app/section/special/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import { ModelService } from "./modelService";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = async ({}) => {
  const response = await ModelService.getModelData();
  console.log(response);

  // const restaurantID = process.env.NEXT_PUBLIC_RESTAURANT_ID;
  // const filteredResponse = response?.rows.filter(
  //   (item) => item.meta.restaurantID === restaurantID,
  // );

  return (
    <section className="relative z-10 h-full w-full flex flex-col   justify-center items-center bg-background overflow-hidden  px-0 md:px-8 xl:px-10 ">
      {/* image */}
      <div className=" absolute left-1/2 top-1/2 px-4 md:px-0 -translate-y-1/2 w-full md:w-auto -mt-20 md:mt-0 -translate-x-1/2 ">
        <Image
          src="/images/home/special/image.webp"
          width={1440}
          height={1800}
          alt="image"
          priority
          className="w-full h-[200px] md:h-[500px]  object-contain   "
        />
      </div>
      {/* text */}
      <div className="absolute w-full left-0 right-0 top-8 xl:top-16 ">
        <h1 className=" font-plus_jakarta_sans font-[400] text-[#F7E8C9] tracking-[-8%] text-center text-[90px] md:text-7xl xl:text-[300px]  ">
          Our Menu 
        </h1>
      </div>
      <div className=" flex h-full w-full flex-col items-center justify-center gap-28 md:gap-24 xl:gap-32 ">
        <div>
          <p className="font-plus_jakarta_sans font-[500] uppercase tracking-[18%] text-start text-xs mb-4 text-foreground  ">
            Curated Selection
          </p>
        </div>

        <div className="relative z-20 -mt-32 md:-mt-0 flex min-h-[400px] w-full flex-col justify-center md:px-4 ">
          {response?.rows && (
            <EmblaCarousel slides={response.rows} options={OPTIONS} />
          )}
        </div>
      </div>
      <div className="-mt-20 z-20 md:mt-0 ">
        <Link className="w-full md:w-auto" href={"/menu"}>
          <Button
            variant="outline"
            aria-label="View Menu"
            size="lg"
            className="text-xs w-full md:w-auto rounded-full uppercase font-[500] px-8 py-6.5  tracking-[18%] text-center hover:bg-background hover:text-foreground  text-background border-[#92260C]  bg-[#92260C] font-plus_jakarta_sans cursor-pointer"
          >
            View Menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Special;
