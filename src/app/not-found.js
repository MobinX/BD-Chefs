import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-3 justify-center bg-base-100 w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">
  
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-primary font-semibold">
                        404 Error
                    </h3>
                    <p className="text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/" ><button className="btn btn-primary ">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </main>
        </div>
)
}