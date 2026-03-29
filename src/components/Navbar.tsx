"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon} from 'lucide-react';

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>("");

  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
        position,
        " top-0 lg:top-0 z-50 h-[12vh] w-full pt-4 transition-all duration-300 md:pt-10",
        pathname === "/table-booking" && " bg-[#040507] h-[12vh] lg:h-[9vh] ",
        (pathname === "/menu" ||
          pathname === "/dine-in-menu" ||
          pathname === "/our-story" ||
          pathname === "/contact" ||
          pathname === "/checkout") &&
        "h-[11vh] bg-[#040507] pt-0 lg:h-[12vh] lg:pt-10 top-2 lg:top-0",
      )}
    >


      {/*big screen */}

      <div className="hidden md:block">

        <div className="absolute left-6  translate-y-1 flex flex-col gap-6 z-20">

          <Link href="/" className="font-inter uppercase tracking-widest text-[#FBF7E8] hover:opacity-70 text-[14px] transition">
            Home
          </Link>

          <Link href="/menu" className="font-inter uppercase tracking-widest text-[#FBF7E8] text-[14px] hover:opacity-70 transition">
            Menu
          </Link>

          <Link href="/about" className="font-inter uppercase tracking-widest text-[#FBF7E8] text-[14px] hover:opacity-70 transition">
            About us
          </Link>

          <Link href="/gallery" className="font-inter uppercase tracking-widest text-[#FBF7E8] text-[14px] hover:opacity-70 transition">
            Gallery
          </Link>

          <Link href="/contact" className="font-inter uppercase tracking-widest text-[#FBF7E8] text-[14px] hover:opacity-70 transition">
            Contact
          </Link>

        </div>

      </div>



      {/*mobile screen */}
      <div className="block px-4 py-2 md:hidden ">
        <div className="">
          <div>
            <Sidebar >
              <Button
                variant="ghost"
                className="flex items-center justify-start text-primary hover:text-primary  px-1 py-1 hover:bg-transparent"
              >
                <div className="flex flex-row gap-2 ">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;

const EqualizerIcon  : React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizericon rotate">
      <div
        className={`bar ${pathname === "/" ? "bg-white" : "bg-[#B68F62]"}`}
      ></div>
      <div
        className={`bar ${pathname === "/" ? "bg-white" : "bg-[#B68F62]"}`}
      ></div>
      <div
        className={`bar ${pathname === "/" ? "bg-white" : "bg-[#B68F62]"}`}
      ></div>
    </div>
  );
};
