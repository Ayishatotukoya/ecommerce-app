export interface Product {
   category: string;
   id: string;  
   title: string;
   price: number;
   slug: string;
   product_images:  string[];
   category_id: string;
   audiences_id: string;
   sizes: string[];
   colors: string[];
   description: string;
   stock: number;
}

/* ---------------- IMAGE POOLS ---------------- */

const clothesImages = [
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
];

const shoesImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
];

const bagImages = [
  "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
];

const watchImages = [
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
];

const jewelryImages = [
  "https://images.unsplash.com/photo-1600180758895-61ec7f6d32c6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1617038260897-41a1f14a1cc0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
];


/* -------- HELPERS ----------- */

const titles = [
  "Elegant Dress",
  "Casual Shirt",
  "Running Shoes",
  "Leather Bag",
  "Silver Necklace",
  "Kids T-Shirt",
  "Men Jacket",
  "Women Sandals",
  "Luxury Watch",
  "Fashion Backpack",
];

const colors = ["Black", "Blue", "Red", "White", "Brown", "Green"];
const sizes = ["S", "M", "L", "XL"];

function randomStock (){
  return Math.floor(Math.random()* 50 )+ 1
};

function randomItem<T>(arr:T[]){
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomPrice(){
  return Math.floor(Math.random() * 20000) + 3000;
}

function imagePoolByIndex(i: number) {
  if (i % 5 === 0) return clothesImages;
  if (i % 5 === 1) return shoesImages;
  if (i % 5 === 2) return bagImages;
  if (i % 5 === 3) return watchImages;
  return jewelryImages;
}


/* ----------- PRODUCTS ----------- */

export const products: Product[] = Array.from({ length: 150 }).map((_, i) => {
  const title = randomItem(titles);
  const pool = imagePoolByIndex(i);

  return {
    id: String(i + 1),
    title: `${title} ${i + 1}`,
    slug: `${title.toLowerCase().replaceAll(" ", "-")}-${i + 1}`,
    price: randomPrice(),
    product_images: pool.sort(() => 0.5 - Math.random()).slice(0, 7),
    category_id: String((i % 4) + 1),
    audiences_id: String(((i % 3) + 1)),
    sizes,
    colors,
    description: `Premium ${title.toLowerCase()} designed for comfort, durability, and modern style.`,
    stock: randomStock(),
  };
});


export default Product