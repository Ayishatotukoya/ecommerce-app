import Link from "next/link";

export default function AdminSidebar(){
   return (
     <aside className="w-64 bg-white border-r min-h-screen">
       <div className="p-6 border-b">
         <h1 className="text-xl font-bold">style-spectrum</h1>
       </div>

       {/* Navigation */}
       <nav className="p-4 space-y-2">
         <Link
           href="/admin"
           className="block px-4 py-2 rounded-lg hover:bg-gray-100"
         >
           Dashboard
         </Link>

         <Link
           href="/admin/products"
           className="block px-4 py-2 rounded-lg hover:bg-gray-100"
         >
           Products
         </Link>

         <Link
           href="/admin/category"
           className="block px-4 py-2 rounded-lg hover:bg-gray-100"
         >
           Categories
         </Link>

         <Link
           href="/admin/orders"
           className="block px-4 py-2 rounded-lg hover:bg-gray-100"
         >
           Orders
         </Link>
       </nav>
     </aside>
   );
}