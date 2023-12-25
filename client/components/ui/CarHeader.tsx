'use client'

import { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"

const CarHeader = () => {
    const linkRoot = "./";
    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }  
  
    useEffect(() => {
      scrollHandler()
      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    return(
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="
                 justify-between h-16 md:h-20">
                    {/* Car Logo Section */}
                    <div className="shrink-0 mr-4">
                        <Logo /> 
                    </div>

                    {/* Navigations */}
                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li><Link href= {`${linkRoot}/CarNew`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">New</Link></li>
                            <li><Link href= {`${linkRoot}/CarUsed`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Used</Link></li>
                            <li><Link href={`${linkRoot}/CarBuy`} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-left transition duration-150 ease-in-out">Buy</Link></li>
                            <li><Link href={`${linkRoot}/CarSell`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Sell</Link></li>
                            <li><Link href={`${linkRoot}/CarLeasing`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Leasing</Link></li> 
                            <li><Link href={`${linkRoot}/CarReview`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Reviews</Link></li>
                            <li><Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Subscribe</Link></li>
                            <li><Link href={`${linkRoot}/CarLoginForm`} className="font-medium text-gray-600 hover:text-gray-900 px-10 py-3 flex items-left transition duration-150 ease-in-out">Login</Link></li>
                        
                        </ul>

                    </nav>
                </div>
                
            </div>

        </header>
    );
}

export default CarHeader;