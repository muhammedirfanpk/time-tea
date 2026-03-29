import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-center pt-8 pb-8 md:pt-20">
              <Image
                src="/images/home/hero/hero-logo.png"
                width={197}
                height={192}
                alt="logo"
                className="w-24"
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7">
            <Link
              href="/"
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              menu
            </Link>

            <Link
              href={"/aboutus"}
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
             About us
            </Link>
            <Link
              href="/gallery"
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
             Gallery
            </Link>

              <Link
              href="/contact"
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
             Contact
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff]"
            >
              Order Online{" "}
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
