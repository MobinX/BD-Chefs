import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

import { shortTitle } from "@/uitls/shortTitle";
import { convertMeterToKm } from "@/uitls/units";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  getLatestRestaurantList,
  getPopularRestaurantList,
  getRestaurantDetails,
} from "@/services/restaurant_repo";

export default async function Page({ params, query }) {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const details = await getRestaurantDetails(params.id);
  console.log(details);
  console.log;
  return (
    <div className="flex flex-col items-center justify-center relative bg-white w-full -mt-[115px] md:mt-0 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full ">
      <div className="overflow-hidden rounded-3xl w-full h-[250px] -mt-[190px] md:-mt-[135px] lg:-mt-[245px]">
        {" "}
        <Image
          src={
            details.cover_photo != null
              ? `https://bdchefs.com/storage/app/public/restaurant/cover/` +
                `${details.cover_photo}`
              : "/image/placeholder.png"
          }
          alt=""
          width={500}
          height={500}
          className="rounded-lg mr-4 ml-1 w-full h-[350px] bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-full before:h-full "
        />{" "}
      </div>
      <div className="flex flex-row  bg-white items-start py-3   relative rounded-bl-md rounded-br-md w-[88%] md:w-[90%] -mt-[40px] rounded-2xl shadow-xl">
        <div className="p-[3px] rounded-full shadow-[0px_0px_13px_1px_#cc0c62]  bg-white md:-mt-[68px]  mx-6  max-w-none">
          <Image
            src={
              details.logo != null
                ? "https://bdchefs.com/storage/app/public/restaurant/" +
                  details.logo
                : "/image/placeholder.png"
            }
            alt=""
            width={500}
            height={500}
            className="rounded-full w-24 h-24  md:w-48 md:h-44  bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-contain before:bg-no-repeat before:w-44 before:h-44"
          />
        </div>

        <div className="flex mx-4 flex-col  ">
          <p className="text-lg font-bold mb-1">{shortTitle(details.name, 200)}</p>
          <p className="text-xs  text-gray-500">
            {shortTitle(details.address, 150)}
          </p>
          <p className="text-xs  text-gray-500">
            Starting at {" " +shortTitle(details.minimum_order, 150)}৳
          </p>
          <div className="flex flex-row space-x-2 items-center mt-4 font-extrabold">
            <div className="flex flex-row items-center">
              <StarIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
              <p className="text-sm text-[#cc0c62] ">
                {parseFloat(details.avg_rating)}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <ClockIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
              <p className="text-sm text-[#cc0c62]">{details.delivery_time}</p>
            </div>
            <p className="text-sn text-[#cc0c62] bg-white rounded-md px-1 py-[4px] ">
              {convertMeterToKm(details.distance)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
