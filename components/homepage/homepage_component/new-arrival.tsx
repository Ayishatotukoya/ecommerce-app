'use client'

import ProductSection from "@/components/product/productList";


export default function NewArrival() {
  return (
    <div>
      <ProductSection
        title={
          <h3 className="font-extrabold text-lg">
            NEW ARRIVAL
          </h3>
        }
        start={2}
        limit={10}
        showToggle={true}
      />
    </div>
  );
}