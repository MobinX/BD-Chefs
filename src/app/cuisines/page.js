import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getCuisineList } from "@/services/cuisine_repo";

import { shortTitle } from "@/uitls/shortTitle";
import { convertMeterToKm } from "@/uitls/units";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

export default async function Page({ params, query }) {
  let cuisines = await getCuisineList();

  return (
    <div className="flex flex-col space-y-7 bg-gray-200 w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">
      <div className="flex flex-row space-x-4 w-full items-center justify-center md:justify-start mb-5">
        <p className="font-bold"> Cuisines </p>
      </div>

      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3  gap-4">
      {cuisines["Cuisines"].map((cuisine, ind) => (
            <div className="" key={ind}>
              <Link href={"/cuisine-restaurant/" + cuisine.id}>
                <div
                  className="rounded-lg p-0 mr-3 relative w-28 bg-[url('/image/cuisine_item_bg.svg')] bg-contain bg-no-repeat"
                  style={{ backgroundPosition: "0% 72%" }}
                >
                  <Image
                    src={
                      "https://bdchefs.com/storage/app/public/cuisine/" +
                      cuisine.image
                    }
                    alt={cuisine.name}
                    width={500}
                    height={500}
                    className="rounded-full w-24 translate-y-4 -z-0 h-24  max-w-none"
                  />
                  <p className="text-sm relative font-bold flex z-10 flex-row py-1 items-center justify-center  bg-white rounded-bl-lg rounded-br-lg">
                    {shortTitle(cuisine.name, 15)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
