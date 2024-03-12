"use client";
import { getBannerList } from "@/services/banner_repo";
import Image from "next/image";

export default async function Home() {
  console.log(await getBannerList())
  return (
    <div className="bg-gray-100 w-full pt-9  h-full min-w-full">
      
    </div>
  );
}
