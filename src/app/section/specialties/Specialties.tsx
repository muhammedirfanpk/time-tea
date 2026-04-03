// "use client";
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion";
// import { slider } from "@/components/Animation";
// import { useState } from "react";
// import { FadeOnScroll } from "@/components/Animation";
// import { text } from "stream/consumers";
// const Specialties: React.FC = () => {


//   const items = [
//     {
//       img: "/images/home/specialties/1.webp.png",
//       title: "Spicy fried chicken sub sandwich",
//       price: "34 AED",
//     },
//     {
//       img: "/images/home/specialties/2.webp.png",
//       title: "Spicy fried chicken sub sandwich",
//       price: "34 AED",
//     },
//   ];

//   const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0]);

//   const nextSlide = () => {
//     setCurrentIndex([(currentIndex + 1) % items.length, 1]);
//   };

//   const prevSlide = () => {
//     setCurrentIndex([
//       currentIndex === 0 ? items.length - 1 : currentIndex - 1,
//       -1,
//     ]);
//   };

//   return (


//     <section className="py-8 px-4 w-full mx-auto">
//       <FadeOnScroll>
//       <p className="text-center mb-2">
//         Where the art of the pour meets the soul of the kitchen
//       </p>
//       <h1 className="text-3xl font-playfair_display text-center mb-6">
//         House Specialties
//       </h1>
//       </FadeOnScroll>

//       <div className="flex items-center justify-center">
//         <div className=" hidden md:flex w-full max-w-5xl  py-3 ">

//           <div 
//           className=" flex flex-col items-center justify-center md:w-1/2 border-[1px] border-[#3F2419] border-r-0 py-5">
//             <div className="w-44 h-44 mb-2 flex items-center justify-center">
//               <Image
//                 src="/images/home/specialties/1.webp.png"
//                 alt="Specialty 1"
//                 width={100}
//                 height={100}
//                 className="object-contain"
//               />
//             </div>
//             <h2 className="text-center font-semibold mt-1">
//               Spicy fried chicken sub sandwich
//             </h2>
//             <p className="text-center font-bold ">34 AED</p>
//           </div>

//           {/* Card 2 */}
//           <div className="  p-4 flex flex-col items-center justify-center md:w-1/2  border-[1px] border-[#3F2419] py-5">
//             <div className="w-44 h-44 mb-2 flex items-center justify-center ">
//               <Image
//                 src="/images/home/specialties/2.webp.png"
//                 alt="Specialty 1"
//                 width={300}
//                 height={300}
//                 className="object-contain w-250 h-250 "
//               />
//             </div>
//             <h2 className="text-center font-semibold mb-1">
//               Spicy fried chicken sub sandwich
//             </h2>
//             <p className="text-center font-bold pb-4">34 AED</p>
//           </div>
//         </div>
//       </div>


//       <div className="md:hidden relative overflow-hidden py-8 p-8">

//         {/* <div
//           className="flex transition-transform duration-300"
//         // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {/* Card 1 */}
//         {/* <div className="flex-shrink-0 w-full border border-gray-300 p-10 flex flex-col items-center justify-center px-5 py-16">
//             <Image
//               src="/images/home/specialties/2.webp.png"
//               alt="Specialty 1"
//               width={300}
//               height={300}
//               className="mb-2"
//             />
//             <h2 className="text-center font-semibold">
//               Spicy fried chicken sub sandwich
//             </h2>
//             <p className="text-center font-bold mt-1">34 AED</p>
//           </div>

//         </div>  */}

//         {/* <div className="md:hidden  w-full flex justify-center pt-4 gap-5">
//           <button

//             class.title}
//               </h2>
//               <p className="textName="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
//           >
//             &#8249;
//           </button>
//           <button

//             className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
//           >
//             &#8250;
//           </button>
//         </div> */}

//         <div className="md:hidden relative overflow-hidden py-8 px-6">
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slider}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.4 }}
//               className="w-full h-full border border-gray-300 flex flex-col items-center justify-center px-5 py-2"
//             >
//               <div className="w-[300px] h-[200px]  flex items-center justify-center">
//                 <Image
//                   src={items[currentIndex]?.img}
//                   alt={items[currentIndex]?.title}
//                   width={300}
//                   height={200}
//                   className="mb-2 object-contain w-full h-full"

//                 />
//               </div>
//               <h2 className="text-center font-semibold">
//                 {items[currentIndex]?-center font-bold mt-1">
//                 {items[currentIndex].price}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex justify-center pt-4 gap-5">
//             <button
//               onClick={prevSlide}
//               className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center "
//             >
//               &#8249;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
//             >
//               &#8250;
//             </button>
//           </div>
//         </div>

//       </div>




//     </section>



//   )
// }

// export default Specialties












"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { slider, FadeOnScroll } from "@/components/Animation";
import { useState } from "react";

type Item = {
  img: string;
  title: string;
  price: string;
};

const Specialties: React.FC = () => {
  const items: Item[] = [
    {
      img: "/images/home/specialties/1.webp.png",
      title: "Spicy fried chicken sub sandwich",
      price: "34 AED",
    },
    {
      img: "/images/home/specialties/2.webp.png",
      title: "Spicy fried chicken sub sandwich",
      price: "34 AED",
    },
  ];

  const [[currentIndex, direction], setCurrentIndex] =
    useState<[number, number]>([0, 0]);

  const nextSlide = () => {
    setCurrentIndex([(currentIndex + 1) % items.length, 1]);
  };

  const prevSlide = () => {
    setCurrentIndex([
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
      -1,
    ]);
  };

  const currentItem = items[currentIndex];

  return (
    <section className="py-8 px-4 w-full mx-auto">
      {/* Heading */}
      <FadeOnScroll>
        <p className="text-center mb-2">
          Where the art of the pour meets the soul of the kitchen
        </p>
        <h1 className="text-3xl font-playfair_display text-center mb-6">
          House Specialties
        </h1>
      </FadeOnScroll>

      {/* Desktop View */}
      <div className="flex items-center justify-center">
        <div className="hidden md:flex w-full max-w-5xl py-3">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center md:w-1/2 border border-[#3F2419] border-r-0 py-5">
            <div className="w-44 h-44 mb-2 flex items-center justify-center">
              <Image
                src="/images/home/specialties/1.webp.png"
                alt="Specialty 1"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-center font-semibold mt-1">
              Spicy fried chicken sub sandwich
            </h2>
            <p className="text-center font-bold">34 AED</p>
          </div>

          {/* Card 2 */}
          <div className="p-4 flex flex-col items-center justify-center md:w-1/2 border border-[#3F2419] py-5">
            <div className="w-44 h-44 mb-2 flex items-center justify-center">
              <Image
                src="/images/home/specialties/2.webp.png"
                alt="Specialty 2"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <h2 className="text-center font-semibold mb-1">
              Spicy fried chicken sub sandwich
            </h2>
            <p className="text-center font-bold pb-4">34 AED</p>
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative overflow-hidden py-8 px-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slider}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="w-full border border-gray-300 flex flex-col items-center justify-center px-5 py-4"
          >
            <div className="w-[300px] h-[200px] flex items-center justify-center">
              <Image
               src={currentItem?.img || "/fallback.png"}
  alt={currentItem?.title || "image"}
                width={300}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>

            <h2 className="text-center font-semibold mt-3">
              {currentItem?.title}
            </h2>

            <p className="text-center font-bold mt-1">
              {currentItem?.price}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-center pt-4 gap-5">
          <button
            onClick={prevSlide}
            className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialties;