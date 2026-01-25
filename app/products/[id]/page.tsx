import { products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="section ">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> /{" "}
        <span className="text-gray-800">{product.title}</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8  mt-4">
        {/* LEFT - Images */}
        <div className="space-y-4">
           <div className="relative w-full h-[400px]  overflow-hidden rounded-lg cursor-pointer">
                    <Image
                      src={product.product_images[0]}
                      alt={product.title}
                      width={400}
                      height={410}
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.product_images.map((img, i) => (
              <div
                key={i}
                className="relative w-20 h-20 bg-gray-100 rounded border overflow-hidden cursor-pointer hover:ring-2 ring-indigo-500"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold">{product.title}</h1>

          <p className="text-gray-500">{product.slug}</p>

          <p className="text-2xl font-bold text-indigo-600">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Sizes */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="font-medium mb-2">Select Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <span
                  key={color}
                  title={color}
                  className="w-7 h-7 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="flex items-center gap-5 pt-4">
            <div className="flex items-center border rounded">
              <button className="px-3 py-1">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1">+</button>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-4">
        
        <div className="flex flex-col gap-4 card px-6 py-3 ">
          <h3 className=" border-b shadow p-2">Product Details</h3>
          <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, facere quo labore ab molestiae voluptatibus pariatur a. Quam numquam eius, praesentium recusandae fugit sint ut explicabo adipisci harum illo id, vero saepe consequuntur nostrum suscipit cupiditate officia inventore provident debitis a necessitatibus amet porro? Tempora eos neque autem, sapiente odit sint corporis similique hic ea deserunt aperiam, quaerat explicabo nihil, eaque quibusdam dolores architecto perferendis alias. Odit repudiandae aliquid quas dolorem necessitatibus dolorum consequuntur ex quibusdam dolor! A molestiae error numquam delectus illo veritatis, veniam provident quaerat facilis ex recusandae eos tempore sapiente asperiores voluptatum tempora id mollitia dignissimos, ipsum perspiciatis! Doloribus unde rerum quos at, atque voluptatum distinctio cupiditate officia architecto itaque velit repellendus vel eaque ut expedita tempore, impedit corrupti nulla doloremque exercitationem, reiciendis porro quas nam perferendis! Eligendi quis, nam eaque explicabo perspiciatis, dolores at odio aut dolorum officia nostrum maiores perferendis dignissimos veritatis quae voluptatem! </p>
        </div>

      </div>
    </div>
  );
}
