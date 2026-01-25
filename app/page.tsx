
import Banner from "@/components/homepage/banner";
import ReviewList from "@/components/reviews/reviewList";
import BestSeller from "@/components/product/best-seller";
import NewArrival from "@/components/product/new-arrival";
import BrowseByCat from "@/components/category/browseByCat";
import NewsLetter from "@/components/homepage/newsLetter";

export default function Home() {
 

  return (
    <main className="section space-y-12">
      <Banner
        heading="Welcome to StyleSpectrum"
        paragraph="Discover premium fashion for men, women, and kids — curated just for you."
      />

      {/* new Products */}
      <NewArrival />

      {/* top product */}
      <BestSeller />

      {/* category  */}
      <BrowseByCat />

      {/* review */}
      <ReviewList />

      {/* newsletter */}
      <NewsLetter/>
    </main>
  );
}
