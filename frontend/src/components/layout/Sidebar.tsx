"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Home, LayoutGrid, ScrollText, Heart, Percent, LifeBuoy, Settings, LogOut } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Categories", href: "/categories", icon: LayoutGrid },
  { name: "My Orders", href: "/orders", icon: ScrollText },
  { name: "Favorites", href: "/favorites", icon: Heart },
  { name: "Offers & Deals", href: "/offers", icon: Percent },
];

const secondaryLinks = [
  { name: "Help & Support", href: "/support", icon: LifeBuoy },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <Link href="/" onClick={onClose} className="text-2xl font-bold text-slate-800">
              Kwik <span className="text-yellow-500">.</span>
            </Link>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100">
              <X size={24} className="text-slate-600 cursor-pointer" />
            </button>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <img src="https://avatar.vercel.sh/jane-doe" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-slate-800">Jane Doe</p>
                <p className="text-sm text-slate-500">jane.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-grow p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-yellow-500 text-slate-900 font-bold"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </Link>
            ))}
            
            <hr className="my-4 border-slate-200" />

            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Footer / Logout */}
          <div className="p-4 border-t border-slate-200">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}