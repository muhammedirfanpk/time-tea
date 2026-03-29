import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollAnimate } from "@/components/Animation";
import { url } from "inspector";

const Hero: React.FC = () => {
  return (
    <section className="relative  w-full h-screen overflow-hidden   ">

      <div className="hidden  md:flex h-full w-full">

        
        <div className="relative  w-[30%] h-full overflow-hidden">
          <Image
            src="/images/home/hero/1.webp.png"
            alt="hero image 1"
            fill
            priority
            className="object-cover object-center "
          />
        </div>

        
        <div className="relative w-[40%] h-full overflow-hidden">
          <Image
            src="/images/home/hero/2.webp.png"
            fill
            alt="hero image 2"
            className="object-cover object-center"
          />
        </div>

        
        <div className="relative w-[30%] h-full overflow-hidden">
          <Image
            src="/images/home/hero/3.webp.png"
            alt="hero image 3"
            fill
            className="object-cover  object-center"
          />
        </div>
      
       <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-transparent" />

      </div>

      {/* mobile view */}

      <div className="md:hidden relative w-full h-full">
        <Image
          src="/images/home/hero/3.webp.png"
          alt="tea time hero image"
          fill
          priority
          className="object-cover object-center "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-transparent" />
      </div>


      <div className="absolute  inset-0 z-20 flex flex-col items-center justify-center  text-center px-4">

         <div className=" hidden md:block top-[19%]">
          <Image
            src={"/images/home/hero/hero-logo.png"}
            alt="teatime logo"
            width={110}
            height={70}
          />
        </div>

        <h1 style={{ fontFamily: "var(--font-body)" }}  className=" text-[#FFFDF8]  text-5xl md:text-7xl  leading-tight ">
          Not Just Tea.  <br />
          It&apos;s Teatime
        </h1>

        <div className=" md:hidden pb-10">
          <Button className=" py-2 px-4 bg-[#FFFDF8] hover:bg-transparent  translate-y-6 rounded-none">
            VIEW FULL MENU
          </Button>
        </div>

        <div className="absolute hidden md:block top-5 right-4  ">
          <Button className=" px-6 py-3 bg-[#FFFDF8] hover:bg-transparent rounded-none">
            VIEW FULL MENU
          </Button>
        </div>

       


        <div className="absolute -top-5 md:hidden">
          <Image
            src={"/images/home/hero/hero-logo.png"}
            alt="teatime logo"
            width={110}
            height={70}
          />
        </div>
        



      </div>


      {/* Animated Content Container */}
      <ScrollAnimate>
        {/* Animated Heading */}
        <Image
          src={"/images/logo.webp"}
          width={171}
          height={74}
          alt="logo"
          priority
          className="-mt-16 w-64 md:w-96"
        />
        <div className="flex items-center justify-center gap-5">
          <Link href={"/table-booking"}>
            <Button
              variant="round"
              aria-label="Book Now"
              className="font-open_sans h-12 w-40 rounded-none  text-center text-sm font-[400]  uppercase hover:cursor-pointer text-[#121212] md:h-20 md:w-44"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </ScrollAnimate>

    </section>
  );
};

export default Hero;
