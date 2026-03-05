"use client";
import Product from "@/types/products";
import { useState } from "react";

type ProductFormProps= {
  currentData: Omit<Product,"id">;
  OnSubmit: (data:Omit<Product,"id">) => void;
  isSubmitting?: boolean;
}

export default function ProductForm({
  currentData, OnSubmit,isSubmitting}:
   ProductFormProps) {
 
    const [formData, setFormData] =useState(currentData)
    const[error, setError] =useState("")

    function validate():string | null{
      if (!formData.title.trim()) return "Product title required";
      if (formData.price <= 0) return "Price must be greater than 0";
      if (!formData.slug.trim()) return "Slug required";
      if (formData.stock <= 0) return "Stock must be greater than 0";
      if (!formData.category_id) return "Category required";
      if (!formData.audiences_id) return "Audience required";
      if (!formData.description.trim()) return "Description required";
      if (!formData.product_images.length) return "Image required";
      if (!formData.colors.length) return "Select at least one color";
      if (!formData.sizes.length) return "Select at least one size";
      return null;
    }

    function handleSubmit(){
      const validateError = validate();
      if(validateError){

        setError(validateError)
        return;
      }

      OnSubmit({
        ...formData,
        slug: formData.slug.toLocaleLowerCase().trim()
      });
    }

  // const product = useProductStore((state) =>
  //   state.getProduct(id),
  // );

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  // const { addProduct } = useProductStore();

  // const [formData, setFormData] = useState<ProductFormData>({
  //   title: product?.title ?? "",
  //   price: product?.price ?? 0,
  //   slug: product?.slug ?? "",
  //   stock: product?.stock ?? 0,
  //   category_id: product?.category_id ?? "",
  //   product_images: product?.product_images ?? [],
  //   description: product?.description ?? "",
  //   colors: product?.colors ?? [],
  //   sizes: product?.sizes ?? [],
  //   audiences_id: product?.audiences_id ?? "",
  // });

  // function validate(): string | null {
  //   if (!formData.title.trim()) return "Product title required";
  //   if (formData.price <= 0) return "Price must be greater than 0";
  //   if (!formData.slug.trim()) return "Slug required";
  //   if (formData.stock <= 0) return "Stock must be greater than 0";
  //   if (!formData.category_id) return "Category required";
  //   if (!formData.audiences_id) return "Audience required";
  //   if (!formData.description.trim()) return "Description required";
  //   if (!formData.product_images.length) return "Image required";
  //   if (!formData.colors.length) return "Select at least one color";
  //   if (!formData.sizes.length) return "Select at least one size";

  //   return null;
  // }

  // function createProduct() {

  //   async function handleSubmit(){
  //     setIsLoading(true);
  //     setError("")
  //   }
   
  //   const errorMessage = validate();

  //   if (errorMessage) {
  //     setError(errorMessage);
  //     setIsLoading(false);
  //     return;
  //   }
    
  //   const cleanedData = {
  //     ...formData,
  //     slug: formData.slug.toLocaleLowerCase().trim()
  //   };

  //   if (product){
  //     UpdateProduct(id, cleanedData);
  //   } else {
  //     addProduct(cleanedData)
  //   }

  //   setIsLoading(false);
  //   router.push("/admin/products");
  // }

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-6">Product Information</h2>

      <div className="space-y-4">
        {/* title */}
        <div>
          <label className="text-sm font-medium">Product Title</label>

          <input
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Enter product title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* price */}
        <div>
          <label className="text-sm font-medium">Price</label>

          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Enter price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
          />
        </div>

        {/* slug */}
        <div>
          <label className="text-sm font-medium">Slug</label>

          <input
            value={formData.slug}
            type="text"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Enter slug"
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
        </div>

        {/* stock */}
        <div>
          <label className="text-sm font-medium">Stock</label>

          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={formData.stock}
            placeholder="Enter stock"
            onChange={(e) =>
              setFormData({ ...formData, stock: Number(e.target.value) })
            }
          />
        </div>

        {/* category */}
        <div>
          <label className="text-sm font-medium">Category id</label>

          <select
            value={formData.category_id}
            onChange={(e) =>
              setFormData({ ...formData, category_id: e.target.value })
            }
          >
            <option value="Bag">Bag</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
            <option value="Cloth">Cloth</option>
          </select>
        </div>

        {/* audience */}

        <div>
          <label className="text-sm font-medium">Audience</label>

          <select
            value={formData.audiences_id}
            onChange={(e) =>
              setFormData({ ...formData, audiences_id: e.target.value })
            }
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">kids</option>
          </select>
        </div>

        {/* image */}
        <div>
          <label className="text-sm font-medium">Product Image</label>

          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="enter image url"
            value={formData.product_images[0] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                product_images: [e.target.value],
              })
            }
          />
        </div>

        {/* description */}
        <div>
          <label className="text-sm font-medium">Description</label>

          <textarea
            value={formData.description}
            rows={4}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Enter product description"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
        </div>

        {/* color */}
        <div>
          <h3 className="text-sm font-medium">Colors</h3>
          {["Black", "Blue", "Red", "White", "Brown", "Green"].map((color) => (
            <label key={color} className="text-sm font-medium ">
              <input
                type="checkbox"
                checked={formData.colors.includes(color)}
                onChange={() => {
                  const exits = formData.colors.includes(color);

                  setFormData({
                    ...formData,
                    colors: exits
                      ? formData.colors.filter((c) => c !== color)
                      : [...formData.colors, color],
                  });
                }}
              />
              {color}
            </label>
          ))}
        </div>

        {/* sizes */}
        <div>
          <h3 className="text-sm font-medium">Sizes</h3>
          {["S", "M", " L", "XL"].map((size) => (
            <label key={size} className="text-sm font-medium">
              <input
                type="checkbox"
                checked={formData.sizes.includes(size)}
                onChange={() => {
                  const exists = formData.sizes.includes(size);

                  setFormData({
                    ...formData,
                    sizes: exists
                      ? formData.sizes.filter((s) => s !== size)
                      : [...formData.sizes, size],
                  });
                }}
              />
              {size}
            </label>
          ))}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        
          <button
            className="bg-black text-white px-6 py-2 rounded-lg"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Product"}
          </button>

          <button className="border px-6 py-2 rounded-lg">Cancel</button>
        </div>
      </div>
  );
}
