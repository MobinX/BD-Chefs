"use client"
import React from "react";
import { MapPinIcon } from "@heroicons/react/20/solid"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/solid"
import { BellIcon } from "@heroicons/react/24/solid"
import { BellIcon as BellIconOut } from "@heroicons/react/24/outline"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"




import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";

export const Navbar = () => {
   const pathname = usePathname();
   return (<>
      <div className="row fixed top-0  bg-base-100 shadow-xl z-50 space-x-3 w-full min-w-full hidden md:row  p-1 px-8">
         <div className="row space-x-1">
            <Link href="/"><Image src="/logo.png" alt="BD Chefs" width={50} height={50} /></Link>
            <Link href="/pick-map">
               <div className="flex flex-col px-3 mt-1">
                  <p className="flex flex-row text-sm text-primary100"> <MapPinIcon className="h-5 w-5 mx-1" /> Other </p>
                  <p className="row text-sm  space-x-4">Riazbag, Khilgaon, Dhaka <ChevronDownIcon className="ml-2 text-bold w-4 h-4 " /></p>
               </div>
            </Link>
         </div>

         <ul className="row space-x-3">
            <li className=""><Link href="/" ><button className="btnx-ghost ">Home</button></Link></li>
            <li className=""><Link href="/categories" ><button className="btnx-ghost">Catagories</button></Link></li>
            <li className=""><Link href="/cuisines" ><button className="btnx-ghost">Cuisines</button></Link></li>
            <li className=""><Link href="/restaurant" ><button className="btnx-ghost">Chefs</button></Link></li>
         </ul>
         <div className="row space-x-1">
            <Link href="/login" ><button className="btnx-ghost row"><LockClosedIcon className="w-4 h-4" /> Sign In</button></Link>
            <Link href="/login?new=true" ><button className="btnx-ghost row"><UserIcon className="w-4 h-4" /> Sign Up</button></Link>

         </div>

         <div className="row space-x-1">

            <Link href="/notification" ><button className="btnx-ghost"><BellIcon className="w-5 h-5" /></button></Link>
            <Link href="/notification" ><button className="btnx-ghost"><MagnifyingGlassIcon className="w-5 h-5" /></button></Link>
            <Link href="/notification" ><button className="btnx-ghost"><ShoppingCartIcon className="w-5 h-5" /></button></Link>
            <Link href="/notification" ><button className="btnx-ghost"><Bars3Icon className="w-5 h-5" /></button></Link>

         </div>

      </div>
      <div className="flex flex-col items-center h-28  w-full min-w-full   md:hidden bg-primary text-base-100 p-1">
         <div className="row  w-full translate-y-5 justify-between">
            <Link href="/pick-map">
               <div className="flex flex-col px-3 mt-1">
                  <p className="flex flex-row text-sm text-base-100]"> <MapPinIcon className="h-5 w-5 mx-1" /> Other </p>
                  <p className="row text-sm  space-x-4 text-base-100">Riazbag, Khilgaon, Dhaka <ChevronDownIcon className="ml-2 text-bold w-4 h-4 " /></p>
               </div>
            </Link>
            <Link href="/notification" ><button className="btnx-ghost btn-sm p-3 bg-base-100 hover:text-base-100"><BellIconOut className="w-5 h-5  text-primary hover:text-base-100" /></button></Link>
         </div>

         <div className="row  justify-between w-[90%] bg-base-100 translate-y-[80%] -mt-3 rounded-full">
            <button className="btn btn-ghost btn-circle p-3 bg-base-100 hover:text-base-100"><MagnifyingGlassIcon className="w-5 h-5  text-primary " /></button>
            <input type="text" className="w-full p-2 rounded-full focus:bottom-0 focus:outline-none focus-visible:outline-none text-primary" placeholder="Search for food, cuisines, chefs" />
         </div>
      </div>
   </>

   );
}