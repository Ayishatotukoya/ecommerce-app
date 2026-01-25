import Image from "next/image";

export default function SignupPage() {
   return (
   <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Image side */}
      <div className="relative hidden md:block">
        <Image
          src="/logo.png"
          alt="logo"
          className="w-full h-full  object-cover"
        />
      </div>

       <div>
         <h1>Sign Up</h1>
         <form>
           <label>
             Username:
             <input type="text" name="username" required />
           </label>
           <br />
           <label>
             Email:
             <input type="email" name="email" required />
           </label>
           <br />
           <label>
             Password:
             <input type="password" name="password" required />
           </label>
           <br />
           <button type="submit">Create Account</button>
         </form>
       </div>
     </div>
   );
}