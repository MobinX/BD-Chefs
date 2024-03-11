import { HomeIcon } from "@heroicons/react/20/solid"
import { HeartIcon } from "@heroicons/react/24/solid"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { Bars3Icon} from "@heroicons/react/24/outline"
import { headers } from "next/headers"

import Link from 'next/link'
export const BottomNav = () => {
    const heads = headers()
    const pathname = heads.get('next-url')

    return(<>
    <div className="flex flex-row md:hidden justify-around  w-full shadow-md">

        <Link href="/"><button className="btn btn-ghost btn-circle "><HomeIcon className="w-6 h-6" /></button></Link>
        <Link href="/favourite"><button className="btn btn-ghost btn-circle "><HeartIcon className="w-6 h-6" /></button></Link>
        <Link href="/cart"><button className="btn btn-xl btn-white bg-gray-100 btn-circle -translate-y-[40%]"><ShoppingCartIcon className="w-6 h-6" /></button></Link>
        <Link href="/bag"><button className="btn btn-ghost btn-circle shadow-md"><ShoppingBagIcon className="w-6 h-6" /></button></Link>

        <Link href="/menu"><button className="btn btn-ghost btn-circle "><Bars3Icon className="w-6 h-6" /></button></Link>
    </div>
    </>)
}