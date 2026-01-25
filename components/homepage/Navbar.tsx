"use client"

import { TbShoppingCart } from "react-icons/tb";
import Image from "next/image";
import { MobileSidebar } from "./MobileSidebar";
import { Bell, ChevronDown, Search, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div
        className="
        max-w-7xl 
        mx-auto 
        px-4 
        sm:px-8 
        lg:px-10
        h-16
        flex 
        items-center 
        justify-between
        text-gray-50
      "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileSidebar />
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="StyleSpectrum Logo"
              width={36}
              height={36}
              priority
              className="rounded-full bg-indigo-900 p-1"
            />
          </Link>
        </div>

        {/* DESKTOP DROPDOWN */}
        <div className="relative hidden md:block lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 hover:text-indigo-400 transition"
          >
           
            <Link
              href="/category"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Home
            </Link>
            <ChevronDown className="w-4 h-4" />
          </button>

          {open && (
            <div className="absolute left-0 mt-3 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden">
              <Link
                href="/category"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Categories
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Products
              </Link>
              <Link
                href="/audience"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Audience
              </Link>
            </div>
          )}
        </div>


        {/*desktop link */}
        <div className="hidden md:hidden px-4 lg:flex gap-6">
         
          <Link href="/" className="hover:text-indigo-400">
           
            Home{" "}
          </Link>{" "}
          <Link href="/category" className="hover:text-indigo-400">
           
            Categories{" "}
          </Link>{" "}
          <Link href="/products" className="hover:text-indigo-400">
           
            Products{" "}
          </Link>{" "}
        </div>
        {/* CENTER — DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full 
                pl-10 
                pr-4 
                py-2 
                rounded-full
                bg-gray-800 
                text-sm
                text-gray-100
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-2">
          {/* Mobile Search Icon */}
          <Link
            href="/search"
            className="md:hidden p-2 rounded-full hover:bg-gray-800 transition"
          >
            <Search className="w-5 h-5" />
          </Link>

          <Link
            href="/cart"
            className="p-2 rounded-full hover:bg-gray-800 transition"
          >
            <TbShoppingCart className="w-5 h-5" />
          </Link>

          <Link
            href="/login"
            className="p-2 rounded-full hover:bg-gray-800 transition"
          >
            <User2 className="w-5 h-5" />
          </Link>

          <Link
            href="/Notification"
            className="p-2 rounded-full hover:bg-gray-800 transition hidden md:block"
          >
            <Bell className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
