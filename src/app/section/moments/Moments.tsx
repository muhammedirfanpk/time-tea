import Image from "next/image";
const Moments:React.FC = () => {
    return(
        <section className="w-full py-3 md:py-5  lg:py-10 md:px-8 lg:px-15 ">
            <div className="  grid grid-cols-[1fr_1.5fr_1fr] gap-1 md:gap-3  h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden md:px-12">
                
                <div className="h-full overflow-hidden " >
                   <Image 
                    src={"/images/home/moments/1.webp.png"}
                    alt="Moments image"
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"/>
                </div>

                 <div className=" flex flex-col justify-between h-full gap-1 md:gap-3  ">
                    <Image
                    width={200}
                    height={120}
                    src={"/images/home/moments/2.webp.png"}
                    alt=""
                    className="w-full h-[33%] object-center"
                    />

                    <div className="text-center px-2 flex  items-center justify-center h-[34%] border border-[#000000]">
                      <h1 className="font-playfair_display text-2xl md:text-3xl">Moments & <br /> Macchiatos</h1>
                    </div>

                   <Image
                    src={"/images/home/moments/3.webp.png"}
                    alt=""
                    width={200}
                    height={120}
                    className="w-full h-[33%] object-center"
                    />

                </div>

                 <div className="h-full overflow-hidden">
                    <Image
                    width={150}
                    height={200}
                    src={"/images/home/moments/4.webp.png"}
                    alt=""
                    className="w-full h-full object-cover"/>
                </div>
            </div>

        </section>
    )
}
export default Moments;