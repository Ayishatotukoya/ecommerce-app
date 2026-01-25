
export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  category_image: string[];
  audience_id: string;
}

export const categories : Category[] = [
   {
      id: "1",
      title: "Clothes",
      slug: "clothes",
      description: "Women clothes",
      category_image: ["/Category_image/clothes-placeholder.jpg"],
      audience_id: "1",
   },

   {
      id: "2",
      title: "Shoes",
      slug: "shoes",
      description: " Women Footwear",
      category_image:["/Category_image/shoes-placeholder.jpg"] ,
      audience_id: "1",
   },

   {
      id: "3",
      title: "Accessories",
      slug: "accessories",
      description: "women trendy accessories",
      category_image:["/Category_image/necklaces-placeholder.jpg"],
      audience_id: "1"
      }, 
      
      {
         id: "4",
         title: "Bags",
         slug: "bags",
         description: "Stylish and functional bags",
         category_image:["/Category_image/bags-placeholder.jpg"] ,
         audience_id: "1",
      },
{
   id: "5",
   title: "Clothes",
   slug: "clothes",
   description: "Men clothes",
   category_image: ["/Category_image/clothes-placeholder.jpg"] ,
   audience_id: "2" ,
},

{
   id: "6",
   title: "Shoes",
   slug: "shoes",
   description: "Men Footwear",
   category_image: ["/Category_image/shoes-placeholder.jpg"] ,
   audience_id: "2", 
},

{
   id: "7",
   title: "Accessories",
   slug: "accessories",
   description: "Men trendy accessories",
   category_image: ["/Category_image/necklaces-placeholder.jpg"] ,
   audience_id: "2",
},

{
   id: "8",
   title: "Bags",
   slug: "bags",  
   description: "Stylish and functional bags",
   category_image:["/Category_image/bags-placeholder.jpg"] ,
   audience_id: "2",
},

{
   id: "9",
   title: "Clothes",
   slug: "clothes",  
   description: "children clothes",
   category_image: ["/Category_image/clothes-placeholder.jpg"] ,
   audience_id: "3",
},

{
   id: "10",
   title: "Shoes",
   slug: "shoes", 
   description: "Children Footwear",
   category_image: ["/Category_image/shoes-placeholder.jpg"] ,
   audience_id: "3",
},

{
   id: "11",
   title: "Accessories",   
   slug: "accessories",
   description: "Children trendy accessories",
   category_image:["/Category_image/necklaces-placeholder.jpg"] ,
   audience_id: "3",
}, 

{
   id: "12",
   title: "Bags",
   slug: "bags",
   description: " children Stylish and functional bags",
   category_image:["/Category_image/bags-placeholder.jpg"] ,
   audience_id: "3",
},
];

export default Category;
