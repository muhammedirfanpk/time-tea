// "use client"
// import Image from "next/image"
// import { Button } from "@/components/ui/button";


// import { motion } from "framer-motion";
// const Reserve: React.FC = () => {
//     return (
//         <section className="w-full h-full py-8 px-3 md:px-0">
//             <div className="flex flex-col md:flex-row w-full ">

//                 <div className="bg-[#3F2419] w-full md:w-1/2 flex flex-col justify-center 
//                                  px-6 py-10 md:p-10 min-h-[300px] md:min-h-[400px]">

//                     <motion.h2 
                    
//                     className="font-playfair_display text-3xl text-[#FFFDF8] md:text-3xl font-semibold mb-4">
//                         Reserve Your Table
//                     </motion.h2>
//                     <p className=" text-[#FFFDF8] leading-relaxed mb-6">
//                         Beyond the pour, we invite you to <br /> immerse yourself in a space where craft <br /> meets comfort.
//                     </p>
//                     <Button className="font-inter text-[#3F2419] bg-[#FFFDF8] px-7 py-3 w-fit mx-auto md:mx-0 rounded-none"> Reserve</Button>
//                 </div>

//                 <div className="w-full md:w-1/2 flex justify-center items-center border border-[#3F2419]
//                  p-4 md:p-10">
//                     <Image
//                         src={"/images/home/reserve/1.webp.png"}
//                         alt=""
//                         width={400}
//                         height={500}
//                         className="w-full h-[300px] md:h-[420px] object-cover" />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Reserve;









"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Animation";

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

const Reserve: React.FC = () => {
  return (
    <section className="w-full h-full py-8 px-3 md:px-0">
      <div className="flex flex-col md:flex-row w-full">

        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="bg-[#3F2419] w-full md:w-1/2 flex flex-col justify-center 
          px-6 py-10 md:p-10 min-h-[300px] md:min-h-[400px]"
        >
          <motion.h2
            variants={fadeUp}
            className="font-playfair_display text-3xl text-[#FFFDF8] md:text-3xl font-semibold mb-4"
          >
            Reserve Your Table
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#FFFDF8] leading-relaxed mb-6"
          >
            Beyond the pour, we invite you to <br /> immerse yourself in a space where craft <br /> meets comfort.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button className="font-inter text-[#3F2419] bg-[#FFFDF8] px-7 py-3 w-fit mx-auto md:mx-0 rounded-none">
              Reserve
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex justify-center items-center border border-[#3F2419]
          p-4 md:p-10"
        >
          <Image
            src={"/images/home/reserve/1.webp.png"}
            alt="reserve image"
            width={400}
            height={500}
            className="w-full h-[300px] md:h-[420px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Reserve;