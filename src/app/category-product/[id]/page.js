import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import {
  getCategoryProductList,
  getCategoryRestaurantList,
} from "@/services/category_repo";
import { shortTitle } from "@/uitls/shortTitle";
import { convertMeterToKm } from "@/uitls/units";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

export default async function Page({ params, query }) {
  const url = new URL(headers().get("x-url"));
  const searchParams = url.searchParams;
  const types = searchParams.get("types");
  console.log(params.id);
  let list = [];
  if (types == "chefs") {
    list = await getCategoryRestaurantList(params.id, 1, "all");
  }
  if (types != "chefs") {
    list = await getCategoryProductList(params.id, 1, "all");
  }
  console.log(list);
  return (
    <div className="flex flex-col space-y-7 bg-base-100 w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">
      <div className="flex flex-row space-x-4 w-full items-center justify-center md:justify-start mb-5">
        <Link href={`/category-product/${params.id}?types=foods`}>
          <button
            className={`btn btn-ghost ${
              types != "chefs"
                ? "text-primary border-b-2 border-b-primary"
                : ""
            }`}
          >
            Foods
          </button>
        </Link>
        <Link href={`/category-product/${params.id}?types=chefs`}>
          <button
            className={`btn btn-ghost ${
              types == "chefs"
                ? "text-primary border-b-2 border-b-primary"
                : ""
            }`}
          >
            Chefs
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3  gap-4">
        {list[`${types == "chefs" ? "restaurants" : "products"}`].map(
          (item, ind) => (
            <Link
              href={`${types == "chefs" ? "/restaurant/" : "/product/"}` + item.id}
              key={ind}
            >
              {/*Info container*/}
              <div className="flex flex-row  items-center  relative w-full  rounded-lg shadow-xl p-2 bg-base-100">
                <div className="px-1/2  bg-base-100 rounded-lg max-w-none h-full">
                  <Image
                    src={
                      (types == "chefs" && item.logo != null) ||
                      (types != "chefs" && item.image != null)
                        ? `https://bdchefs.com/storage/app/public/${
                            types == "chefs" ? "restaurant/" : "product/"
                          }` + `${types == "chefs" ? item.logo : item.image}`
                        : "/image/placeholder.png"
                    }
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-lg mr-4 ml-1 w-24 h-24 bg-base-100  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-24 before:h-24 before:bg-[-53px 0px]"
                  />
                </div>
                <div className="flex flex-col space-y-1 py-2 ">
                  <p className="text-sm font-bold">
                    {shortTitle(item.name, 50)}
                  </p>
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
          )
        )}{" "}
      </div>
    </div>
  );
}
