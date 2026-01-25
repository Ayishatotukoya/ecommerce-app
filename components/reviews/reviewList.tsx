import { reviews } from "@/types/Rating"
import StarRating from "./starRating";

export default function ReviewList() {

  const visibleReviews = reviews.slice(0, 5);

  return (
    <div className="flex flex-col gap-6 justify-between items-center">
      <h1 className="text-gray-800 text-2xl font-bold">
        OUR{" "}
        <span className="text-orange-800">
          HAPP
          <span className="text-blue-400">PY CUST</span>
          <span className="text-amber-600">TOMERS</span>
        </span>
      </h1>
      <div
        className="
  grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-6
"
      >
        {visibleReviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4 bg-white">
            <StarRating rating={review.rating} />
            <p className="mt-2 text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}