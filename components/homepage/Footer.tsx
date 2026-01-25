import { LetterText } from "lucide-react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-400 ">
      <div className="relative flex flex-col justify-between px-4 py-3 md:flex-row md:justify-between md:items-center gap-4 border-t pt-4 text-sm md:px-12">
        <div>
          <h1 className="text-xl">STYLE_SPECTRUM</h1>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex  gap-4">
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsTwitter />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <BsTiktok />
            </span>
          </div>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-6"
        >
          <Link href="#">
            <h1 className="text-sm">COMPANY</h1>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </Link>
          <Link href="#">
            <h1 className="text-sm">HELP</h1>

            <ul>
              <li> Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Link>
          <Link href="#">
            <h1 className="text-sm">FAQ</h1>
            <ul>
              <li>Account</li>
              <li> Manage Deliveries</li>
              <li> Orders</li>
              <li>Payments</li>
            </ul>
          </Link>
          <Link href="#">
            <h1 className="text-sm">RESOURCES</h1>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </Link>
        </div>
      </div>
      <div className=" text-center">
        © {new Date().getFullYear()} StyleSpectrum. All rights reserved.
      </div>
    </footer>
  );
}
