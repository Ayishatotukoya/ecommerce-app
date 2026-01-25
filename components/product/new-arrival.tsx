'use client'

import ProductSection from "./productList";

export default function NewArrival() {
  return (
    <div>
      <ProductSection
        title={
          <h1 className="text-gray-800 ">
            NEW{" "}
            <span className="text-orange-800">
              ARR
              <span className="text-blue-400">I</span>
              <span className="text-amber-600">VAL</span>
            </span>
          </h1>
        }
        limit={5}
        showToggle={true}
      />
    </div>
  );
}