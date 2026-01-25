'use client'

import ProductSection from "./productList";

export default function BestSeller() {
  return (
    <div>
      <ProductSection
        title={
          <h1 className="text-gray-800">
            BE
            <span className="text-orange-800">ST </span>
            <span className="text-blue-400">SEL</span>
            <span className="text-amber-600">LER</span>
          </h1>
        }
        limit={5}
        showToggle={true}
      />
    </div>
  );
}