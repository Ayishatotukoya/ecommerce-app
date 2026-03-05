import { BellDot, HomeIcon, List, SettingsIcon } from "lucide-react";
import { BsLuggage } from "react-icons/bs";
import User from "./SidebarUser";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="space-y-4  text-indigo-700">
      <ul className="space-y-2 text- flex flex-col gap-4 ml-7 text-gray-100">
        <li className="mt-5 flex items-center gap-2">
          <Link href="/user">
            <HomeIcon className="inline w-5 h-5 mr-2 " />
          </Link>
          Home
        </li>
        <li className=" flex items-center gap-2">
          <Link href="/user/category">
            <List className="inline w-5 h-5 mr-2" />
          </Link>
          Categories
        </li>
        <li className=" flex items-center gap-2">
          <Link href="/user/products">
            <BsLuggage className="inline w-5 h-5 mr-2" />
          </Link>
          Products
        </li>
        <li className=" flex items-center gap-2">
          <Link href="/user/Notification">
            <BellDot className="inline w-5 h-5 mr-2" />
          </Link>
          Notifications
        </li>

        <li className=" flex items-center gap-2 mb-4">
          <Link href="/user/settings">
            <SettingsIcon className="inline w-5 h-5 mr-2" />
          </Link>
          Settings
        </li>
      </ul>
      <hr />

      <div>
        <User/>
      </div>
    </div>
  );
}
