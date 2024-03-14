import { getBannerList } from "@/services/banner_repo";
import { getCategoryList } from "@/services/category_repo";
import { getCuisineList } from "@/services/cuisine_repo";
import { getLatestRestaurantList, getPopularRestaurantList } from "@/services/restaurant_repo";
import { shortTitle } from "@/uitls/shortTitle";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";



import Image from "next/image";
import Link from "next/link";
import { convertMeterToKm } from "@/uitls/units";



export default async function Home() {
  let catagories = await getCategoryList();
  let cuisines = await getCuisineList();
  let popularRestaurant = await getPopularRestaurantList("all");
  let latestRestaurant = await getLatestRestaurantList("all");

  return (
    <div className="flex flex-col space-y-14 bg-gray-100 w-full pt-16 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-w-full">
      {/* Category */}
      <div className="mx-2">
        <h1 className="text-lg font-bold my-2"> {"What's on your mind ?"} </h1>
        <div className="flex flex-row overflow-x-scroll scrollbar-hide space-x-4 justify-between">
          {catagories.map((catagory, ind) => (
            <div className="" key={ind}>
              <Link href={"/category-product/" + catagory.id}>
                <div className="rounded-lg p-0 ">
                  <Image
                    src={
                      "https://bdchefs.com/storage/app/public/category/" +
                      catagory.image
                    }
                    alt={catagory.name}
                    width={500}
                    height={500}
                    className="rounded-lg w-24 h-24  my-3 max-w-none"
                  />
                  <p className="text-xs font-bold">
                    {shortTitle(catagory.name, 15)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Cuisine */}
      <div className="bg-[#dfcad4ad] bg-[url('/image/cuisine_bg.png')] p-9 px-7 bg-contain bg-no-repeat rounded-lg">
        <h1 className="text-lg font-bold my-2 flex flex-row justify-between">
          {" "}
          Cuisine
          <Link href="/cuisines">
            <button className="btn btn-sm btn-circle bg-white text-[#cc0c62]">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </h1>
        <div className="flex flex-row overflow-x-scroll scrollbar-hide space-x-4">
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

      {/* Popular Cheif */}
     
      <div className="mx-2">
        <h1 className="text-lg font-bold my-2">Popular Cheif</h1>
        <div className="flex flex-row overflow-x-scroll scrollbar-hide space-x-4 justify-between">
          {popularRestaurant.map((chef, ind) => (
    
              <Link href={"/restaurant/" + chef.id} key={ind}>
               <div className="flex flex-col rounded-md shadow-lg w-64 bg-white">
                <Image src={chef.cover_photo != null ? "https://bdchefs.com/storage/app/public/restaurant/cover/" + chef.cover_photo : "/image/placeholder.png"} alt={chef.name} width={500} height={250} className="rounded-lg w-full h-28 max-w-none  relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-contain before:bg-no-repeat before:w-full before:h-28" />

                {"Info container"}
                <div className="flex flex-row  bg-white -mt-[13%] relative rounded-bl-md rounded-br-md w-full h-[90]">
                  <div className="p-[3px] bg-white rounded-md -mt-[7%] mx-3  max-w-none">
                  <Image src={chef.logo != null ? "https://bdchefs.com/storage/app/public/restaurant/" + chef.logo : "/image/placeholder.png"} alt="" width={500} height={500} className="rounded w-12 h-12  bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-contain before:bg-no-repeat before:w-12 before:h-12" />

                  </div>
                  <div className="flex flex-col space-y-2 py-2 ">
                    <p className="text-sm font-bold">{shortTitle(chef.name, 20)}</p>
                    <p className="text-xs text-gray-800">{shortTitle(chef.address, 15)}</p>
                    <div className="flex flex-row space-x-2 items-center font-extrabold">
                      <div className="flex flex-row items-center"><StarIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
                      <p className="text-xs text-[#cc0c62] ">{parseFloat(chef.avg_rating)}</p></div>
                      <div className="flex flex-row items-center">
                      <ClockIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
                      <p className="text-xs text-[#cc0c62]">{chef.delivery_time}</p></div>
                      <p className="text-xs text-[#cc0c62] bg-white rounded-md px-1 py-[4px] -translate-y-[70px]">{convertMeterToKm(chef.distance)}</p>
                    </div>
                    </div>
                </div>
               </div>
              </Link>
          
          ))}
        </div>
      </div>

      {/* Latest Cheif */}
      <div className="mx-2 p-2 before: px-7 rounded-md bg-[#dfcad4d0]">
        <div className="flex flex-row justify-between my-5"> <h1 className="text-lg font-bold my-2 flex flex-row items-center justify-center w-full"> New on BD Cheifs </h1>
        <Link href="/restaurant?types=latest">
            <button className="btn btn-sm btn-circle bg-white text-[#cc0c62]">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
       
        <div className="flex flex-row overflow-x-scroll mb-5 scrollbar-hide space-x-4 justify-between">
          {latestRestaurant.map((chef, ind) => (
    
              <Link href={"/restaurant/" + chef.id} key={ind}>

               
                {/*Info container*/}
                <div className="flex flex-row  items-center justify-between relative  rounded-md w-72 shadow-lg p-2 bg-white">
                  <div className="p-[3px] bg-white rounded-md   max-w-none h-full">
                  <Image src={chef.logo != null ? "https://bdchefs.com/storage/app/public/restaurant/" + chef.logo : "/image/placeholder.png"} alt="" width={500} height={500} className="rounded w-20 h-20 bg-white  max-w-none relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-20 before:h-20 before:bg-[-53px 0px]" />

                  </div>
                  <div className="flex flex-col space-y-1 py-2 ">
                    <p className="text-sm font-bold">{shortTitle(chef.name, 20)}</p>
                    <p className="text-xs text-gray-800">{shortTitle(chef.address, 15)}</p>
                    <div className="flex flex-row space-x-2 items-center font-extrabold">
                      <div className="flex flex-row items-center"><StarIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
                      <p className="text-xs text-[#cc0c62] ">{parseFloat(chef.avg_rating)}</p></div>
                      <div className="flex flex-row items-center">
                      <ClockIcon className="w-5 h-5 text-[#cc0c62] mr-2" />
                      <p className="text-xs text-[#cc0c62]">{chef.delivery_time}</p></div>
                      <p className="text-xs text-[#cc0c62] bg-white rounded-md px-1 py-[4px] ">{convertMeterToKm(chef.distance)}</p>
                    </div>
                    
                </div>
               </div>
              </Link>
          
          ))}
        </div>
      </div>
    </div>
  );
}
