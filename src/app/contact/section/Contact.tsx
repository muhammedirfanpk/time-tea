import { getRestaurant } from "@/lib/getRestaurant";
import { groupOpeningHours } from "@/lib/openingHours";
import ContactClient from "./Contactclient";

export default async function Contact() {
  const restaurant = await getRestaurant();

  if (!restaurant) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#040507] px-8 py-12">
        <div className="text-center">
          <h1 className="font-alagambe mb-4 text-2xl font-[400] text-[#E9DDC3] uppercase">
            Unable to Load
          </h1>
          <p className="font-playfair text-[#C1B6A6]">
            Failed to load restaurant data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const openingHoursGroups = groupOpeningHours(restaurant?.openHours);

  return (
    <ContactClient
      restaurant={restaurant}
      openingHoursGroups={openingHoursGroups}
    />
  );
}
