import Hero from "./section/hero/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "./section/about/about";
import Specialties from "./section/specialties/Specialties";
import Moments from "./section/moments/Moments";
import Menu from "./section/menu/Menu";
import Reserve from "./section/reserve/Reserve";
// import Special from "./section/special/Special";
import Reviews from "./section/review/Review";
import Collection from "./section/collection/Collection";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <About/>
        <Specialties/>
        <Moments/>
        <Menu/>
        <Reserve/>
        <Reviews/>
        {/* <Special /> */}
        <Collection/>
        <Footer />
      </div>
      <div className="fixed right-2 bottom-6 z-50 flex md:right-[48px] md:bottom-[54px]"></div>
    </main>
  );
}
