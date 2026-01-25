export default function NewsLetter(){
   return (
     <div className=" flex justify-center w-full h-96 ">
       <div className=" bg-gray-100 rounded-2xl w-5/6 h-full">
         <div className=" flex items-center justify-between p-4">
           {/* left */}
           <h3>
             STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
           </h3>

           {/* right */}
           <div className="flex  flex-col items-center gap-3">
             <input
               type="email"
               name="email"
               id="email"
               placeholder="Enter Your Email Address"
               className="text-black border border-black px-4 rounded "
             />
             <button className="bg-black text-white px-5 py-2 rounded-md">
               Subscribe to Newsletter
             </button>
           </div>
         </div>
       </div>
     </div>
   );
}