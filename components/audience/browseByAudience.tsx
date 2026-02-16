"use client"

import CategorySection from "../category/categoryList";




export default function BrowseByAud(){
  return (
        <CategorySection
          title={
         <h2 className="">
         Browse By Audience
        </h2>
        }
        subtitle={
         <p>
            Choose products tailored for your specific audience
         </p>
        }
      />
  );
}