import Image from "next/image";
import Link from "next/link";

export default function NewsLetter(){
   return (
     <div
       className=" 
      bg-black w-full py-8 px-8 text-white "
     >
       <div className=" flex  md:flex-row  flex-col items-center justify-around h-full px-4">

         {/* left */}
         <Link href="/" className="flex flex-col items-center gap-2">
           <Image
             src="/logo.png"
             alt="StyleSpectrum Logo"
             width={100}
             height={50}
             priority
             className="hidden md:block"
           />
           <h2 className="text-2xl mb-4">StyleSpectrum</h2>
         </Link>

         {/* right */}
         <div className="flex flex-col md:flex-col  justify-between gap-6 ">
           <div>
             <h3>New to StyleSpectrum</h3>
             <p>
               Subscribe to our newsletter to get updates on our latest offers!
             </p>
           </div>
           <div>
             <input
               type="email"
               name="email"
               id="email"
               placeholder=" Enter Your Email Address"
               className="text-gray-700 bg-amber-50 border border-white px-6 py-4 mr-1 "
             />
             <button className="bg-black border border-white  text-white px-5 py-4">
               Subscribe
             </button>
           </div>

           <div>
             <input
               type="checkbox"
               name="subscribe"
               id="subscribe"
               className="mr-2"
             />
             <label htmlFor="subscribe">
               {" "}
               I agree to StyleSpectrum Privacy and Cookie Policy.
               <br />
               You can unsubscribe from newsletters at any time.
             </label>
             <div>
               <a href="#" className="text-amber-700">
                 I accept the Legal Terms
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}