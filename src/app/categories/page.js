import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { getCategoryList } from "@/services/category_repo";


import { shortTitle } from "@/uitls/shortTitle";
import { convertMeterToKm } from "@/uitls/units";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { getCuisineRestaurantList } from "@/services/cuisine_repo";

export default async function Page({ params, query }) {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const types = searchParams.get("types");
  let catagories = await getCategoryList();


  return (
    <div className="flex flex-col space-y-7 bg-white w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">
      <div className="flex flex-row space-x-4 w-full items-center justify-center md:justify-start mb-5">
        <p className="font-bold"> Cuisines </p>
      </div>

      {catagories.length > 0 ? (
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3  gap-6">
        {catagories.map((catagory, ind) =>(
            <Link
              href={`category-product/` + catagory.id}
              key={ind}
            >
              {/*Info container*/}
              <div className="rounded-lg p-2 flex flex-col items-center justify-center m-4 bg-white hover:bg-gray-400 shadow-lg  ">
              <Image
                    src={
                        "https://bdchefs.com/storage/app/public/category/" +
                        catagory.image
                      }
                    alt={catagory.name}
                    width={500}
                    height={500}
                    className="rounded-lg mx-1 my-3 w-24 h-24 bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-16 before:h-16 before:bg-[-53px 0px]"
                  />
                  <p className="text-xs font-bold">
                    {shortTitle(catagory.name, 26)}
                  </p>
                </div>
            </Link> ))} </div>
          
        ) : (
            <div className="flex flex-col justify-center items-center w-full h-full">
              
              <Image
                    src="/image/no_restaurants.png"
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-lg mr-4 ml-1 w-36 h-36 bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-16 before:h-16 before:bg-[-53px 0px]"
                  /><p className="text-lg text-gray-600 font-bold">No restaurant found</p>
              </div>

        )}
      
    </div>
  );
}
