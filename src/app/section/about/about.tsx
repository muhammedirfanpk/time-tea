//  "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { container,fadeUp,FadeOnScroll, imageFadeIn} from "@/components/Animation";
// const About : React.FC = () => {
//     return (
//         <section className=' w-full  bg-[#FFFDF8]'>
//             <FadeOnScroll>
//             <div className='flex items-center justify-center py-12 px-4 pt-8'>
//                 <div className='flex max-w-2xl flex-col items-center gap-3 text-center  '>

//                     <motion.h1
                    
//                      style={{ fontFamily: "var(--font-body)" }} className='font-lato text-base uppercase tracking-wide text-[#0A0909]'>
//                          our story
//                     </motion.h1>
//                     <p 
//                     className='font-playfair_display text-[#3F2419] text-2xl  leading-relaxed '>
//                         We believe the finest rituals are the ones that actually fill you up—where the ceremony of the leaf meets the soul of a satisfied appetite.</p>
//                 </div>
//             </div>
//             </FadeOnScroll>

//             <div 
           
//             className="w-full py-3">
//                 <div className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-3 h-[170px] md:h-[230px] gap-2">

//                  <div  className="relative w-full h-full">
//     <Image
//       src="/images/home/about/1.webp.png"
//       alt="about image"
//       fill
//       className="object-cover"
//     />
//   </div>

//                   <div className="bg-[#3F2419] flex items-center justify-center">
                    
//                      <Image
//                        src={"/images/logo.png"}
//                         alt="teatime logo"
//                         width={130}
//                         height={70}
//                          className="text-[#B28F61] w-[90px] md:w-[130px]"
//                       />
                    
//                   </div>

//                    <div className="relative w-full h-full">
                     
//                     <Image
//                     src={"/images/home/about/2.webp.png"}
//                     alt="abote image"
//                     fill 
//                     className="object-cover"
//                     />
                   
//                    </div>
//                 </div>

//             </div>

//         </section>
//     )
// }

// export default About;







"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, FadeOnScroll } from "@/components/Animation";

const About: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFDF8]">

      {/* Text Section */}
      <FadeOnScroll>
        <div className="flex items-center justify-center py-12 px-4 pt-8">
          <div className="flex max-w-2xl flex-col items-center gap-3 text-center">

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ fontFamily: "var(--font-body)" }}
              className="font-lato text-base uppercase tracking-wide text-[#0A0909]"
            >
              our story
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-playfair_display text-[#3F2419] text-2xl leading-relaxed"
            >
              We believe the finest rituals are the ones that actually fill you up—where the ceremony of the leaf meets the soul of a satisfied appetite.
            </motion.p>

          </div>
        </div>
      </FadeOnScroll>

      {/* Images Section */}
      <div className="w-full py-3">
        <div className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-3 h-[170px] md:h-[230px] gap-2">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/home/about/1.webp.png"
              alt="about image"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="bg-[#3F2419] flex items-center justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="teatime logo"
              width={130}
              height={70}
              className="w-[90px] md:w-[130px]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/home/about/2.webp.png"
              alt="about image"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default About;