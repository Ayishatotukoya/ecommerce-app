"use client";

import { ChevronDown, LogOut, User2 } from "lucide-react";
import { useState } from "react";

export default function User(){

   const [adminOpen, setAdminOpen] = useState(false);
   
   return (
     <div>
       <button
         className="w-full flex items-center justify-between gap-3 px-2 py-2 "
         onClick={() => setAdminOpen((s) => !s)}
         aria-expanded={adminOpen}
       >
         <div className="flex items-center gap-3 text-gray-100">
           <User2 />
           <div>
             <div className="text-sm font-medium">Account</div>
             <div className="text-xs text-slate-500">user-profile</div>
           </div>
         </div>

         <ChevronDown
           className={`h-4 w-4 text-gray-100 transform transition-transform ${
             adminOpen ? "rotate-180" : "rotate-0"
           }`}
         />
       </button>

       {adminOpen && (
         <div className="mt-2 flex flex-col gap-1">
           <h2 className="px-2 py-2 text-sm rounded hover:text-gray-50 hover:font-bold">
             Account
           </h2>
           <h2 className="px-2 py-2 text-sm rounded hover:text-gray-50 hover:font-bold">
             Profile
           </h2>
           <button
             onClick={() => {}}
             className="flex items-center gap-2 px-2 py-2 text-sm rounded hover:text-gray-50 hover:font-bold text-left"
           >
             <LogOut className="h-4 w-4" />
             Login
           </button>
         </div>
       )}
     </div>
   );
}