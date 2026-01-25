"use client"

import CategorySection from "./categoryList";


export default function BrowseByCat(){
  return (
        <CategorySection
          title={
         <h1>
          <span className="text-gray-800">Browse </span> 
          <span className="text-orange-800"> By </span> 

          <span className="text-blue-400"> Cate</span>
          <span className="text-amber-600">gory</span>
        </h1>
        }
        subtitle={
         <p>
            Discover styles that soothe your vision
         </p>
        }
        limit={4}
        showToggle={false}
      />
  );
}