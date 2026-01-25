"use client";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import {X} from "lucide-react"
import Sidebar from "./Sidebar";
export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button in Navbar */}
      <button onClick={() => setOpen(true)} className="lg:hidden ">
        <TbMenu2 className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <aside className="bg-gray-900 w-64 h-full p-4">
            <button onClick={() => setOpen(false)} className="text-gray-50">
              <X />
            </button>
            <Sidebar />
          </aside>
        </div>
      )}
    </>
  );
}
