"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white">
      {/* Logo */}
      <Link href={'/'} className="flex items-center gap-2">
        <span className="font-bold text-2xl text-yellow-500">Kwik</span>
      </Link>

      {/* Delivery Info and Address */}
      {/* <div className="flex flex-col ml-8">
        <span className="font-semibold text-sm">Delivery in 8 minutes</span>
        <span className="text-xs text-black truncate w-56">
          B1/5, Road, Block 9, Nehru Nag...
        </span>
      </div> */}

      {/* Search Bar */}
      <div className="flex-1 flex justify-center mx-8">
        <input
          type="text"
          placeholder='Search "chocolate"'
          className="w-full max-w-lg px-4 py-2 rounded text-gray-800 bg-gray-100 border border-gray-200 focus:outline-none"
        />
      </div>

      {/* Login and Cart */}
      <div className="flex items-center gap-6">
        <Link href={'/auth/login'} className="text-gray-700 font-medium">Login</Link>
        <Link
          href={'/cart'} className="flex items-center px-4 py-2 bg-yellow-500 rounded text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
        >
          <svg width="20" height="20" fill="none" className="mr-2">
            <path
              d="M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6.2 14h7.45c.75 0 1.4-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 18.8 6H5.21l-.94-2H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          My Cart
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
