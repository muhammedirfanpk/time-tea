// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// const Moments:React.FC = () => {


//     const imageFadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//     return(
//         <section className="w-full py-3 md:py-5  lg:py-10 md:px-8 lg:px-15 ">
//             <div className="  grid grid-cols-[1fr_1.5fr_1fr] gap-1 md:gap-3  h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden md:px-12">
                
//                 <motion.div 
//                 Variants={imageFadeIn}
//                 initial="hidden"
//                 animate="visible"
//                 className="h-full overflow-hidden " >
//                    <Image 
//                     src={"/images/home/moments/1.webp.png"}
//                     alt="Moments image"
//                     width={150}
//                     height={200}
//                     className="w-full h-full object-cover"/>
//                 </motion.div>

//                  <motion.div 
//                   Variants={imageFadeIn}
//                 initial="hidden"
//                 animate="visible"
//                  className=" flex flex-col justify-between h-full gap-1 md:gap-3  ">
//                     <Image
//                     width={200}
//                     height={120}
//                     src={"/images/home/moments/2.webp.png"}
//                     alt=""
//                     className="w-full h-[33%] object-center"
//                     />

//                     <div className="text-center px-2 flex  items-center justify-center h-[34%] border border-[#000000]">
//                       <h1 className="font-playfair_display text-2xl md:text-3xl">Moments & <br /> Macchiatos</h1>
//                     </div>

//                    <Image
//                     src={"/images/home/moments/3.webp.png"}
//                     alt=""
//                     width={200}
//                     height={120}
//                     className="w-full h-[33%] object-center"
//                     />

//                 </motion.div>

//                  <motion.div
//                   Variants={imageFadeIn}
//                 initial="hidden"
//                 animate="visible"
//                   className="h-full overflow-hidden">
//                     <Image
//                     width={150}
//                     height={200}
//                     src={"/images/home/moments/4.webp.png"}
//                     alt=""
//                     className="w-full h-full object-cover"/>
//                 </motion.div>
//             </div>

//         </section>
//     )
// }
// export default Moments;











"use client"; // Required for Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";
import { imageFadeIn } from "@/components/Animation";

const Moments: React.FC = () => {
    
  // Animation variants for the images
//   const imageFadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8,ease: [0.25, 0.8, 0.25, 1] }
//     }
//   };

  const centerTextReveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  return (
    <section className="w-full py-3 md:py-5 lg:py-10 md:px-8 lg:px-15 ">
      <motion.div 
        // This triggers animation when the div enters the viewport
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-[1fr_1.5fr_1fr] gap-1 md:gap-3 h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden md:px-12"
      >
        
        {/* Left Image - Slides in from left */}
        <motion.div 
          variants={imageFadeIn}
          initial="hidden"
          animate="visible"
          className="h-full overflow-hidden"
        >
          <Image 
            src={"/images/home/moments/1.webp.png"}
            alt="Moments image"
            width={300}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Center Column */}
        <div className="flex flex-col justify-between h-full gap-1 md:gap-3">
          <motion.div variants={imageFadeIn}
           className="h-[33%] overflow-hidden">
            <Image
              width={400}
              height={200}
              src={"/images/home/moments/2.webp.png"}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <div 
           
            className="text-center px-2 flex items-center justify-center h-[34%] border border-[#000000] bg-white"
          >
            <motion.h1
             variants={centerTextReveal}
             className="font-playfair_display text-2xl md:text-3xl leading-tight">
              Moments & <br /> Macchiatos
            </motion.h1>
          </div>

          <motion.div variants={imageFadeIn} className="h-[33%] overflow-hidden">
            <Image
              src={"/images/home/moments/3.webp.png"}
              alt=""
              width={400}
              height={200}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Right Image - Slides up */}
        <motion.div 
          variants={imageFadeIn}
          className="h-full overflow-hidden"
        >
          <Image
            width={300}
            height={500}
            src={"/images/home/moments/4.webp.png"}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Moments;