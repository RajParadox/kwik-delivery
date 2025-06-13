"use client";

import Link from "next/link";
import { Menu, ShoppingCart, Search, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  // A mock value. In a real app, this would come from your cart's state.
  const cartItemCount = 3; 
  // A mock value for user login status.
  const isLoggedIn = false; 

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* === Left Section: Burger Menu & Logo === */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-full text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="hidden md:block text-2xl font-bold text-slate-800">
              Kwik<span className="text-yellow-500">.</span>
            </Link>
          </div>

          {/* === Center Section: Search Bar === */}
          <div className="flex-1 flex justify-center px-4">
            <div className="relative w-full max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full border border-slate-300 rounded-full py-2 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
              />
            </div>
          </div>

          {/* === Right Section: Actions (Cart & Login) === */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/cart"
              className="relative p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label={`Cart with ${cartItemCount} items`}
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 rounded-full bg-yellow-500 text-xs font-bold text-slate-900 ring-2 ring-white">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Responsive Login Button */}
            {isLoggedIn ? (
              // If logged in, show user icon
              <Link href="/profile" className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
                <User size={24} />
              </Link>
            ) : (
              // If logged out, show login button
              <Link href="/auth/login" className="hidden md:flex items-center gap-2 bg-yellow-500 text-slate-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
                Login
              </Link>
            )}
            
            {/* Login Icon for Mobile */}
            {!isLoggedIn && (
                <Link href="/auth/login" className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors md:hidden">
                    <User size={24} />
                </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}