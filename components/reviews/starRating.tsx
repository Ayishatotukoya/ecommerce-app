import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
};


export default function StarRating({ rating }: StarRatingProps) {
  const starNum = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1">
      {starNum.map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}