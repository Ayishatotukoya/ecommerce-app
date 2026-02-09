'use client'

import ProductSection from "../../product/productList";

export default function LimitedStock() {
  return (
    <div>
      <ProductSection
        title={
          <h3 className="text-lg font-extrabold ">
          LIMITED STOCK
          </h3>
        }
        start={12}
        limit={20}
        showToggle={true}
      />
    </div>
  );
}