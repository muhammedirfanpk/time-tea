
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { FadeOnScroll } from "@/components/Animation";
// import motion from "framer-motion"
// const Menu: React.FC = () => {
//   return (

//     <section className="w-full py-16">

//     <FadeOnScroll>
//       <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-[1px] font-playfair_display mb-14 text-[#0A0A09]">
//         Menu Highlights
//       </h2>
//     </FadeOnScroll>

//       <div className="hidden md:block pt-4">
//         <div className=" mx-auto grid grid-cols-[1fr_1.5fr_1fr] gap-6 items-start px-6">


//           <div className="flex flex-col gap-6">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="border-[1px] border-[#000000] p-5 text-left">
//                 <p className="text-sm text-[#3F2419] font-semibold ">
//                   Spicy fried chicken sub <br /> sandwich
//                 </p>
//                 <p className="font-bold mt-2 font-inter">34 AED</p>
//               </div>
//             ))}
//           </div>


//           <div className="flex justify-center ">
//             <div className="relative h-[400px] w-[360px] overflow-top-visible overflow-bottom-hidden">

//               <Image
//                 src="/images/home/menu/1.webp.png"
//                 alt="burger"
//                 fill
//                 className="object-cover rounded-t-[120px]  object-bottom scale-y-[1.1] "
//               />

//             </div>
//           </div>


//           <div className="flex flex-col gap-6">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="border border-[#000000] p-5 text-left">
//                 <p className="text-sm text-[#3F2419] font-semibold">
//                   Spicy fried chicken sub <br /> sandwich
//                 </p>
//                 <p className="font-bold mt-2 font-inter">34 AED</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* mobile view */}

//       <div className="md:hidden px-4 ">
//         <div className="flex flex-col gap-2 ">

//           <div className="w-full h-[300px] ">
//             <Image
//               src={"/images/home/menu/1.webp.png"}
//               alt="menu image"
//               width={400}
//               height={300}
//               className="w-full h-full object-cover rounded-t-[120px]" />
//           </div>

//           <div className=" grid grid-cols-2 gap-2">
//             <div className="border border-[#000000] p-5 text-left">
//               <p className="text-sm text-[#3F2419] font-semibold">
//                 Spicy fried chicken sub <br /> sandwich
//               </p>
//               <p className="font-bold mt-2 font-inter">34 AED</p>
//             </div>

//             <div className="border  border-[#000000] p-5 text-left">
//               <p className="text-sm text-[#3F2419] font-semibold">
//                 Spicy fried chicken sub <br /> sandwich
//               </p>
//               <p className="font-bold mt-2 font-inter">34 AED</p>
//             </div>

//             <div className="border border-[#000000] p-5 text-left">
//               <p className="text-sm text-[#3F2419] font-semibold">
//                 Spicy fried chicken sub <br /> sandwich
//               </p>
//               <p className="font-bold mt-2 font-inter">34 AED</p>
//             </div>

//             <div className="border border-[#000000] p-5 text-left">
//               <p className="text-sm text-[#3F2419] font-semibold">
//                 Spicy fried chicken sub <br /> sandwich
//               </p>
//               <p className="font-bold mt-2 font-inter">34 AED</p>
//             </div>

//           </div>

//         </div>
//         <div className="flex items-center justify-center py-5 ">
//           <Button className="py-5 px-6 rounded-none bg-[#FFFDF8] text-[#3F2419] border border-[#3F2419] hover:bg-transparent uppercase">
//             View full menu
//           </Button>
//         </div>




//       </div>

//     </section>
//   )
// }
// export default Menu;








"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeOnScroll, container, imageFadeIn } from "@/components/Animation";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  return (
    <section className="w-full py-16">

      {/* Heading */}
      <FadeOnScroll>
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-[1px] font-playfair_display mb-14 text-[#0A0A09]">
          Menu Highlights
        </h2>
      </FadeOnScroll>

      {/* Desktop View */}
      <div className="hidden md:block pt-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto grid grid-cols-[1fr_1.5fr_1fr] gap-6 items-start px-6"
        >
          {/* Left Cards */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={imageFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-[1px] border-[#000000] p-5 text-left"
              >
                <p className="text-sm text-[#3F2419] font-semibold">
                  Spicy fried chicken sub <br /> sandwich
                </p>
                <p className="font-bold mt-2 font-inter">34 AED</p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <motion.div
              variants={imageFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center relative h-[400px] w-[360px] overflow-hidden"
            >
              <Image
                src="/images/home/menu/1.webp.png"
                alt="burger"
                fill
                className="object-cover rounded-t-[120px] object-bottom scale-y-[1.1]"
              />
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={imageFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-[#000000] p-5 text-left"
              >
                <p className="text-sm text-[#3F2419] font-semibold">
                  Spicy fried chicken sub <br /> sandwich
                </p>
                <p className="font-bold mt-2 font-inter">34 AED</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4">
        <div className="flex flex-col gap-2">
          {/* Hero Image */}
          <motion.div
            variants={imageFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full h-[300px]"
          >
            <Image
              src={"/images/home/menu/1.webp.png"}
              alt="menu image"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-t-[120px]"
            />
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-2"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                variants={imageFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-[#000000] p-5 text-left"
              >
                <p className="text-sm text-[#3F2419] font-semibold">
                  Spicy fried chicken sub <br /> sandwich
                </p>
                <p className="font-bold mt-2 font-inter">34 AED</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-center py-5">
          <Button className="py-5 px-6 rounded-none bg-[#FFFDF8] text-[#3F2419] border border-[#3F2419] hover:bg-transparent uppercase">
            View full menu
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Menu;