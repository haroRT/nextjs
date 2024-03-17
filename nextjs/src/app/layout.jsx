"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathname = usePathname('')
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col w-full relative">
          <div className="flex flex-row justify-around h-[60px] bg-white w-full fixed top-0 z-10">
            <div className="w-40 p-3">
              <img src="https://hoidap247.com/static/img/logo_hoidap2.png" className="" alt="ádasdad" />
            </div>
            <form className="max-w-md w-96 p-1">   
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-400 focus:border-amber-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
            <div>
              
            </div>
          </div>
          
          {pathname === '/' ? <div>123</div>: '' }
          <div>
            {children}
            <div className="bg-slate-100 w-full h-[1200px]">

            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
