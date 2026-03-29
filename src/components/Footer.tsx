// import Image from "next/image";
// import Link from "next/link";
// import { Icons } from "./Icon";
// import { groupOpeningHours } from "@/lib/openingHours";
// import { getSocialMediaWithIcons } from "@/lib/socialMedia";
// import { getRestaurant } from "@/lib/getRestaurant";
// import { Button } from "./ui/button";

// const Footer = async ({}) => {
//   const restaurant = await getRestaurant();

//   if (!restaurant) {
//     return (
//       <div className="h-full w-full bg-black px-8 py-12">
//         <p className="text-center text-[#ECE6D6]">
//           Failed to load restaurant data
//         </p>
//       </div>
//     );
//   }
//   const openingHoursGroups = groupOpeningHours(restaurant?.openHours);
//   const socialMediaLinks = getSocialMediaWithIcons(restaurant?.socialMedias);
//   const latitude = restaurant?.address?.coords?.[0];
//   const longitude = restaurant?.address?.coords?.[1];
//   const placeQuery = `${restaurant?.name} ${restaurant?.address?.firstLine} ${restaurant?.address?.city} ${restaurant?.address.postCode} `;

//   const mapLink =
//     latitude && longitude
//       ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery)}`
//       : `https://www.google.com/maps?q=${latitude},${longitude}`;

//   return (
//     <footer className="relative h-full w-full  px-4  lg:px-10 py-10">
//       <div className="flex flex-col gap-4  border  ">
//         <div className="  w-full  " />
//         <div className="flex flex-col md:flex-row justify-around items-center py-4 md:py-6  ">
//           <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-6 md:-mt-5">


//             <Link className="md:hidden" href={"/"}>
//               <Image
//                 src={"/images/logo.png"}
//                 width={1024}
//                 height={1024}
//                 alt="logo"
//                 priority
//                 className="w-36 md:w-60 "
//               />
//             </Link>
//             <Link
//               href={"/menu"}
//               className="font-open_sans text-sm font-[600] tracking-[2.4px] text-[#3F2419] uppercase"
//             >
//               Home
//             </Link>
//             <Link
//               href={"/menu"}
//               className="font-open_sans text-sm font-[600] tracking-[2.4px] text-[#3F2419] uppercase"
//             >
//               About us
//             </Link>
//             <Link
//               href={"/our-story"}
//               className="font-open_sans text-sm font-[600] tracking-[2.4px] text-[#3F2419] uppercase"
//             >
//              Gallery
//             </Link>

//             <Link
//               href={"/table-booking"}
//               className="font-open_sans text-sm font-[600] tracking-[2.4px] text-[#3F2419] uppercase"
//             >
//               Contact us
//             </Link>
//             <Link
//               href={"/contact"}
//               className="font-open_sans text-sm font-[600] tracking-[2.4px] text-[#3F2419] uppercase"
//             >
//               Privacy policy
//             </Link>
//           </div>
//           <div className=" flex flex-col gap-1 md:gap-3 justify-center items-center ">
//             <Link className="hidden md:block" href={"/"}>
//               <Image
//                 src={"/images/logo.png"}
//                 width={1024}
//                 height={1024}
//                 alt="logo"
//                 priority
//                 className="w-33 md:w-45 "
//               />
//             </Link>

//             <div className="flex flex-row items-center justify-center gap-2 md:gap-6">


//                 <div className="w-[50px] h-[2px] bg-[#3F2419]"></div>


//               {socialMediaLinks.length > 0 ? (
//                 socialMediaLinks.map((social) => (
//                   <Link
//                     key={social._id || social.name}
//                     href={social.pageUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Visit our ${social.name}`}
//                   >
//                     <social.IconComponent className="w-14 text-[#3F2419]" />
//                   </Link>
//                 ))
//               ) : (
//                 <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
//                   <Link href={mapLink} target="_blank">
//                     <Icons.google className="text-[#3F2419]" />
//                   </Link>
//                 </div>

//               )}

//                 <div className="w-[50px] h-[2px] bg-[#3F2419]"></div>

//             </div>

//             <div className="flex flex-col gap-2">

//               <div className="flex justify-center">
//                  <div className="w-[2px] h-[40px] bg-[#3F2419]"></div>
//               </div>


//               <Button className="px-8 py-5 rounded-none text-[#1f120c] bg-transparent hover:bg-transparent border border-[#000000]">
//                 Teatime@gmail.com
//               </Button>

//               <Button className="px-8 py-5 rounded-none text-[#3F2419] bg-transparent hover:bg-transparent border border-[#000000]">
//                 SUBSCRIBE
//               </Button>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6  md:items-end text-center">

//             {openingHoursGroups.map((group, index) => (
//               <div key={index} className="flex w-full flex-col justify-between">
//                 <span className="font-open_sans text-sm font-[600] tracking-[2px] text-[#3F2419] uppercase">
//                   {group.daysDisplay}
//                 </span>
//                 <br />
//                 <span className="font-open_sans text-sm font-[600] tracking-[2px] text-[#3F2419] uppercase">
//                   {group.isOpen ? group.timings : "Closed"}
//                 </span>
//               </div>
//             ))}

//             <div className="text-sm text-[#3F2419 leading-relaxed text-center">
//               <Link href={mapLink}>
//                  49 Allerton Rd, Liverpool L25
//               </Link>
//               <p>
//                 01512451500 
//               </p>
//               <p>moorishl@yahoo.com</p>
//             </div>


//               <a href="tel:+565163717271" className="text-[#3F2419] hover:underline text-center">
//                   +565163717271
//               </a>

//           </div>
//         </div>

//         {/* <div className=" border-b-[1px]  border-b-[#C9AB8166] w-full  " />
//         <div className="flex w-full flex-row items-center justify-between">
//           <p className="font-open_sans text-xs font-[400] tracking-[1px] text-[#C9AB81] uppercase">
//             © 2026 {restaurant?.name} ALL RIGHTS RESERVED
//           </p>
//           <Link href={"https://foodo.ai/"} target="_blank">
//             <span className="font-open_sans text-xs font-[400] tracking-[1px] text-[#C9AB81] uppercase">
//               POWERED BY FOODO{" "}
//             </span>
//           </Link>
//         </div>
//       </div> */}

//      </div>
//     </footer>
//   );
// };

// export default Footer;







// import Image from "next/image";
// import Link from "next/link";
// import { Icons } from "./Icon";
// import { groupOpeningHours } from "@/lib/openingHours";
// import { getSocialMediaWithIcons } from "@/lib/socialMedia";
// import { getRestaurant } from "@/lib/getRestaurant";
// import { Button } from "./ui/button";

// const Footer = async () => {
//   const restaurant = await getRestaurant();

//   if (!restaurant) {
//     return (
//       <div className="h-full w-full bg-black px-8 py-12">
//         <p className="text-center text-[#ECE6D6]">
//           Failed to load restaurant data
//         </p>
//       </div>
//     );
//   }

//   const openingHoursGroups = groupOpeningHours(restaurant?.openHours);
//   const socialMediaLinks = getSocialMediaWithIcons(
//     restaurant?.socialMedias
//   );

//   const latitude = restaurant?.address?.coords?.[0];
//   const longitude = restaurant?.address?.coords?.[1];

//   const placeQuery = `${restaurant?.name} ${restaurant?.address?.firstLine} ${restaurant?.address?.city} ${restaurant?.address?.postCode}`;

//   const mapLink =
//     latitude && longitude
//       ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//         placeQuery
//       )}`
//       : `https://www.google.com/maps?q=${latitude},${longitude}`;

//   return (
//     <footer className="w-full px-4 lg:px-10 py-10">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-left gap-6 border py-10 px-4">

        
//         <div className="flex flex-col items-center justify-center gap-3 order-2 md:order-1 md:w-1/3 text-center md:py-16">

//           <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">
//             Home
//           </Link>

//           <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">
//             About Us
//           </Link>

//           <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">
//             Gallery
//           </Link>

//           <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">
//             Contact Us
//           </Link>

//           <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">
//             Privacy Policy
//           </Link>

//         </div>

      
//         <div className="flex flex-col items-center gap-6 order-1 md:order-2">

          
//           <Link href={"/"}>
//             <Image
//               src={"/images/logo.png"}
//               width={500}
//               height={500}
//               alt="logo"
//               className="w-28"
//             />
//           </Link>

         
//           <div className="flex items-center gap-6">
//             {socialMediaLinks.length > 0 ? (
//               socialMediaLinks.map((social) => (
//                 <Link
//                   key={social._id || social.name}
//                   href={social.pageUrl}
//                   target="_blank"
//                 >
//                   <social.IconComponent className="w-9 h-10 text-[#3F2419]" />
                  
//                 </Link>
//               ))
//             ) : (
//               <Link href={mapLink}>
//                 <Icons.google className="text-[#3F2419]" />
              
//               </Link>
//             )}
//           </div>

         
//           <div className="w-12 h-[1px] bg-[#3F2419] md:hidden" />

          
//           <div className="hidden  md:flex flex-col items-center gap-3">
//             <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
//               Teatime@gmail.com
//             </Button>

//             <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
//               SUBSCRIBE
//             </Button>
//           </div>
//         </div>

        
//         <div className="flex flex-col items-center justify-center gap-4 order-3 md:w-1/3 text-center md:h-full md:py-16">

//          <div className="w-2 h-[50px]  "></div>
//           {openingHoursGroups.map((group, index) => (
//             <div key={index}>
//               <p className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]">
//                 {group.daysDisplay}
//               </p>
//               <p className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]">
//                 {group.isOpen ? group.timings : "Closed"}
//               </p>
//             </div>
//           ))}

         
//           <div className="text-sm text-[#3F2419] leading-relaxed">
//             <Link href={mapLink}>
//               49 Allerton Rd, Liverpool L25
//             </Link>
//             <p>01512451500</p>
//             <p>moorishl@yahoo.com</p>
//           </div>

          
//           <a href="tel:+565163717271" className="text-[#3F2419]">
//             +565163717271
//           </a>

//           <div className="md:hidden  flex flex-col items-center gap-3">
//             <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
//               Teatime@gmail.com
//             </Button>

//             <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
//               SUBSCRIBE
//             </Button>
//           </div>
//         </div>



//       </div>
//     </footer>
//   );
// };

// export default Footer;



















import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { groupOpeningHours } from "@/lib/openingHours";
import { getSocialMediaWithIcons } from "@/lib/socialMedia";
import { getRestaurant } from "@/lib/getRestaurant";
import { Button } from "./ui/button";

const Footer = async () => {
  const restaurant = await getRestaurant();

  if (!restaurant) {
    return (
      <div className="h-full w-full bg-black px-8 py-12">
        <p className="text-center text-[#ECE6D6]">
          Failed to load restaurant data
        </p>
      </div>
    );
  }

  const openingHoursGroups = groupOpeningHours(restaurant?.openHours);
  const socialMediaLinks = getSocialMediaWithIcons(
    restaurant?.socialMedias
  );

  const latitude = restaurant?.address?.coords?.[0];
  const longitude = restaurant?.address?.coords?.[1];

  const placeQuery = `${restaurant?.name} ${restaurant?.address?.firstLine} ${restaurant?.address?.city} ${restaurant?.address?.postCode}`;

  const mapLink =
    latitude && longitude
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          placeQuery
        )}`
      : `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <footer className="w-full px-4 lg:px-10 py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-left gap-10 border py-10 px-4">

        
        <div className="flex flex-col items-center justify-center gap-5 order-2 md:order-1 md:w-1/3 md:h-full text-center md:py-16">
          <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">Home</Link>
          <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">About Us</Link>
          <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">Gallery</Link>
          <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">Contact Us</Link>
          <Link className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]" href="/">Privacy Policy</Link>
        </div>

        
        <div className="flex flex-col items-center gap-6 order-1 md:order-2">
          
         
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={500}
              height={500}
              alt="logo"
              className="w-28"
            />
          </Link>

          
          <div className="flex items-center gap-6">
            {socialMediaLinks.length > 0 ? (
              socialMediaLinks.map((social) => (
                <Link
                  key={social._id || social.name}
                  href={social.pageUrl}
                  target="_blank"
                >
                  <social.IconComponent className="w-10 h-10 text-[#3F2419]" />
                </Link>
              ))
            ) : (
              <Link href={mapLink}>
                <Icons.google className="text-[#3F2419]" />
              </Link>
            )}
          </div>

         
          <div className="w-12 h-[1px] bg-[#3F2419] md:hidden" />

          
          <div className="hidden md:flex flex-col items-center gap-3">
            <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
              Teatime@gmail.com
            </Button>

            <Button className="w-[260px] md:w-[220px] py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
              SUBSCRIBE
            </Button>
          </div>
        </div>

        
       <div className="flex flex-col items-center justify-center gap-4 order-3 md:w-1/3 text-center md:h-full md:py-16">

          
          {openingHoursGroups.map((group, index) => (
            <div key={index}>
              <p className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]">
                {group.daysDisplay}
              </p>
              <p className="text-sm font-semibold tracking-[2px] uppercase text-[#3F2419]">
                {group.isOpen ? group.timings : "Closed"}
              </p>
            </div>
          ))}

         
          <div className="text-sm text-[#3F2419] font-inter leading-relaxed">
            <Link href={mapLink} >
              49 Allerton Rd, Liverpool L25
            </Link>
            <p className="">01512451500</p>
            <p>moorishl@yahoo.com</p>
          </div>

          
          <a href="tel:+565163717271" className="text-[#3F2419]">
            +565163717271
          </a>

           <div className="md:hidden w-full flex flex-col items-center gap-3">
            <Button className="w-full py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
              Teatime@gmail.com
            </Button>

            <Button className="w-full  py-4 border border-black bg-transparent text-[#3F2419] rounded-none">
              SUBSCRIBE
            </Button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;