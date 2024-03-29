import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (<><div className="md:flex flex-row hidden  space-x-6 bg-slate-800 w-full p-4">
        <div className="flex flex-col w-2/5 space-y-3 ">
        <Link href="/"><Image src="/logo.png" alt="BD Chefs" width={50} height={50} /></Link>

            <p className="text-base-100 text-bold"> Subscribe to our newslatter to get daily update</p>
            <div className="flex flex-row justify-between p-1 bg-base-100 rounded-full">
                <input className="outline-none rounded-full w-[90%] placeholder:text-xs px-2" placeholder="Enter your email" />
                <button className="btn btn-primary btn-sm p-1 rounded-r-full rounded-l-full"> subscribe</button>
            </div>
            <div className="flex flex-row space-x-4">
                <Link href="https://facebook.com/bdchefs" ><div className="rounded-full w-6 h-6 "><Image src="/facebook.png" width={50} height={50} alt="facebook logo"/></div></Link>
                <Link href="https://www.linkedin.com/company/bdchefs" ><div className="rounded-full w-6 h-6 "><Image src="/linkedin.png" width={50} height={50} alt="LinkedIn logo"/></div></Link>
                
                </div>
        </div>
        <div className="flex flex-row justify-between w-3/5 space-x-8 bg-gray-700 px-5 py-2 rounded-2xl">



            <div className="flex flex-col space-y-1 text-slate-200/85">
                <p className="text-bold text-base-100 mb-2">About</p>
                <Link href=""><p className="text-bold text-xs hover:text-primary">About us</p></Link>

                <Link href=""><p className="text-bold text-xs hover:text-primary">Find Store</p></Link>

                <Link href=""><p className="text-bold text-xs hover:text-primary">Catagories</p></Link>


            </div>

            <div className="flex flex-col space-y-1 text-slate-200/85">
                <p className="text-bold text-base-100 mb-2">Quick Link</p>
                <Link href=""><p className="text-bold text-xs hover:text-primary">Cancellation Policy</p></Link>
                <Link href=""><p className="text-bold text-xs hover:text-primary">Privacy Policy</p></Link>

                <Link href=""><p className="text-bold text-xs hover:text-primary">Terms and Condition</p></Link>


            </div>

            <div className="flex flex-col space-y-1 text-slate-200/85">
                <p className="text-bold text-base-100 mb-2">For users</p>
                <Link href=""><p className="text-bold text-xs hover:text-primary">Help Desk</p></Link>
                <Link href=""><p className="text-bold text-xs hover:text-primary">Live Chat</p></Link>

                <Link href=""><p className="text-bold text-xs hover:text-primary">Log In</p>
                </Link>

            </div>

            <div className="flex flex-col space-y-1 text-slate-200/85">
                <p className="text-bold text-base-100 mb-2">Get it on</p>

                <p>Google Play</p>




            </div></div>

    </div><hr className="bg-base-100  hidden md:block w-full" />
        <div className="md:flex  hidden px-4 flex-row justify-between text-xs bg-slate-800 text-base-100/60">
            <p>Order from the nearest chefs </p>
            <p>Lang: English</p>
        </div></>
    )
}