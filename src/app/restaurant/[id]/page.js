import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

import { shortTitle } from "@/uitls/shortTitle";
import { convertMeterToKm } from "@/uitls/units";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


import {
  getLatestRestaurantList,
  getPopularRestaurantList,
  getRestaurantDetails,
} from "@/services/restaurant_repo";
import { getCategoryProductList } from "@/services/category_repo";

export default async function Page({ params, query }) {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const details = await getRestaurantDetails(params.id);
  let items = [];
  for (let i = 0; i < details.category_ids.length; i++) {
    (
      await getCategoryProductList(details.category_ids[i], 1, "all")
    ).products.map((item, ind) => items.push(item));
  }
  console.log(items);
  return (
    <div className="flex flex-col items-center justify-center relative bg-white w-full -mt-[115px] md:mt-0 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full ">
      <div className="overflow-hidden rounded-br-3xl rounded-bl-3xl w-full h-[250px] -mt-[270px] md:-mt-[135px] lg:-mt-[245px]">
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
          className="rounded-lg  w-full h-[350px] bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-full before:h-full "
        />{" "}
      </div>
      <div className="flex flex-row justify-between lg:justify-normal bg-white items-start py-3 pb-5  relative rounded-bl-md rounded-br-md w-[88%] md:w-[90%] -mt-[40px] rounded-2xl shadow-xl">
        <div className="p-[3px] mt-[5px] md:h-auto items-center justify-center rounded-full shadow-[0px_0px_13px_1px_#cc0c62]  bg-white md:-mt-[68px]  mx-5  max-w-none">
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
            className="rounded-full w-20 h-20  md:w-48 md:h-44  bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-contain before:bg-no-repeat before:w-20 before:h-20 before:md:w-44 before:md:h-44"
          />
        </div>

        <div className="flex mx-4 flex-col  ">
          <p className="text-lg font-bold mb-1">
            {shortTitle(details.name, 200)}
          </p>
          <p className="text-xs  text-gray-500">
            {shortTitle(details.address, 150)}
          </p>
          <p className="text-xs flex flex-row space-x-1 text-gray-500">
            <span>Starting at </span>{" "}
            <span className="text-primary">
              {" "}
              {shortTitle(details.minimum_order, 150)}৳{" "}
            </span>
          </p>
          <div className="flex flex-row justify-between items-center mt-4 font-extrabold">
            <div className="flex flex-row items-center justify-between">
              <ClockIcon className="w-5 h-5 text-primary mr-1" />
              <p className="text-sm text-primary">{details.delivery_time}</p>
            </div>
            <Link
              href={`/map?lat=${details.latitude}&long=${details.longitude}`}
            >
              <div className="flex flex-row items-center">
                <MapPinIcon className="w-5 h-5 text-primary mr-1" />
                <p className="text-sm text-primary ">Location</p>
              </div>
            </Link>
            <div className="flex flex-row items-center">
              <StarIcon className="w-5 h-5 text-primary mr-1" />
              <p className="text-sm text-primary ">
                {parseFloat(details.avg_rating)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center -mt-[4px]  justify-start">
          <button className="btn btn-circle btn-ghost  btn-md">
            <HeartIcon className="w-6 h-6" />
          </button>
          <button className="btn btn-circle btn-md btn-ghost">
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center  my-4 w-full mx-6">
        <div className="flex flex-row items-center space-x-2 font-bold w-full">ALL </div>
        <MagnifyingGlassIcon className="w-6 h-6 text-primary " />
      </div>
      <div className="grid grid-cols-1 mx-6 items-center w-full justify-center md:grid-cols-2 lg:grid-cols-3  gap-4">
        {items.map((item, ind) => (
          <Link href={"/product/" + item.id} key={ind}>
            {/*Info container*/}
            <div className="flex flex-row  items-center  relative w-full  rounded-lg shadow-xl p-2 bg-white">
              <div className="px-1/2  bg-white rounded-lg max-w-none h-full">
                <Image
                  src={
                    item.image != null
                      ? `https://bdchefs.com/storage/app/public/${"product/"}` +
                        `${item.image}`
                      : "/image/placeholder.png"
                  }
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-lg mr-4 ml-1 w-24 h-24 bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-24 before:h-24 before:bg-[-53px 0px]"
                />
              </div>
              <div className="flex flex-col space-y-1 py-2 ">
                <p className="text-sm font-bold">{shortTitle(item.name, 50)}</p>
                {item.address ? (
                  <p className="text-xs text-gray-800">
                    {shortTitle(item.address, 50)}
                  </p>
                ) : (
                  ""
                )}
                {item.restaurant_name ? (
                  <p className="text-xs text-gray-800">
                    {shortTitle(item.restaurant_name, 30)}
                  </p>
                ) : (
                  ""
                )}

                <div className="flex flex-row space-x-2 items-center font-extrabold">
                  <div className="flex flex-row items-center">
                    <StarIcon className="w-5 h-5 text-primary mr-2" />
                    <p className="text-xs text-primary ">
                      {parseFloat(item.avg_rating)}
                    </p>
                  </div>
                  {item.price ? (
                    <p className="text-xs text-primary">
                      {shortTitle(item.price, 15)} ৳{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {item.minimum_order ? (
                    <p className="text-xs text-primary">
                      Starting from {shortTitle(item.minimum_order, 15)} ৳{" "}
                    </p>
                  ) : (
                    ""
                  )}

                  <div className="flex flex-row items-center"></div>
                </div>
              </div>
            </div>
          </Link>
        ))}{" "}
      </div>
    </div>
  );
}
