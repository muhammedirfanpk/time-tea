"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {motion} from "framer-motion"
import { FadeOnScroll } from "@/components/Animation"

const Collection: React.FC = () => {
  return (

    <section className=" w-full p-3 md:p-0 ">
      <div className="hidden md:block relative bg-[#3E2415] w-full py-20">
        
        <div className=" absolute top-0 left-5   ">
          <div className="relative bg-white md:p-6 lg:p-10   flex items-center justify-center overflow-hidden">
            <Image
              src="/images/home/collection/1.webp.png"
              alt="Coffee"
              width={110}
              height={120}
              className="object-cover"
            />
            <div className="absolute  bottom-2 right-4 p-1">
              <Image
                src="/images/home/collection/2.webp.png"
                alt="Sandwich"
                width={70}
                height={70}
                className=" object-cover "
              />
            </div>
          </div>

        </div>

        
        <div className="absolute bottom-0 right-4   ">
          <div className="relative bg-white md:p-6 lg:p-10 flex items-center justify-center">

            <Image
              src="/images/home/collection/3.webp.png"
              alt="Fries"
              width={110}
              height={120}
              className="object-cover"
            />

            <div className="absolute p-1 left-3 bottom-3  ">
              <Image
                src="/images/home/collection/4.webp.png"
                alt="Tacos"
                width={70}
                height={170}
                className=" object-cover "
              />
            </div>

          </div>

        </div>

        
        <div className="flex justify-center items-center">
          <div className="text-center max-w-xl text-white">
            <FadeOnScroll>
            <h1
             className="text-3xl lg:text-4xl md:text-3xl font-playfair_display mb-6 leading-relaxed">
              A curated collection of <br /> coffee, craft, and culture. <br /> Immerse yourself in our <br /> daily rhythm at
            </h1>

            <Button className="font-playfair_display text-lg rounded-none px-10 py-3 border bg-[#3E2415] hover:bg-transparent border-[#FFFDF8] text-[#FFFDF8] font font-semibold  transition">
              @teatime
            </Button>
            </FadeOnScroll>
          </div>
        </div>

      </div>


      {/* mobile view */}
      <div className="md:hidden relative bg-[#3E2415]  px-4 py-16 flex flex-col items-center gap-10">

        
        <div className=" flex gap-3">
          <div className="absolute bg-white p-6 top-0 left-0">
            <Image
              src="/images/home/collection/1.webp.png"
              alt="Coffee"
              width={70}
              height={70}
              className="object-cover"
            />

            <div className="absolute bottom-3 right-3 shadow-md">
              <Image
                src="/images/home/collection/2.webp.png"
                alt="Sandwich"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>

       
        <div className="text-center text-white py-8">
          <h1 className="text-xl leading-relaxed font-playfair_display mb-4">
            A curated collection of <br />
            coffee, craft, and culture. <br />
            Immerse yourself in our <br />
            daily rhythm at
          </h1>

          <Button className="font-playfair_display text-sm rounded-none px-6 py-2 border bg-[#3E2415] hover:bg-transparent border-[#FFFDF8] text-[#FFFDF8] font-semibold transition">
            @teatime
          </Button>
        </div>

        
        <div>
          <div className="absolute right-0 bottom-0 flex gap-3">
            <div className="relative bg-white p-6">
              <Image
                src="/images/home/collection/3.webp.png"
                alt="Fries"
                width={70}
                height={70}
                className="object-cover"
              />

              <div className="absolute bottom-2 left-3  shadow-md">
                <Image
                  src="/images/home/collection/4.webp.png"
                  alt="Tacos"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Collection