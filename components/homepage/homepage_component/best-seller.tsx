'use client'

import ProductSection from "../../product/productList";

export default function BestSeller() {
  return (
    <div>
      <ProductSection
        title={
          <h3 className="text-lg font-extrabold ">
           BEST SELLER
          </h3>
        }
        start={7}
        limit={16}
        showToggle={true}
      />
    </div>
  );
}