import Banner from "@/components/homepage/banner";
import BestSeller from "@/components/homepage/homepage_component/best-seller";
import NewArrival from "@/components/homepage/homepage_component/new-arrival";
import LimitedStock from "@/components/homepage/homepage_component/limitedStock";
import BrowseByCat from "@/components/category/browseByCat";
import ReviewList from "@/components/homepage/homepage_component/reviewList";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

export default function UserHomePage() {
  return (
    <>
      <Navbar />
      <main className="section space-y-4">
        {/* banner */}
        <Banner
          heading="Welcome to StyleSpectrum"
          paragraph="Discover premium fashion for men, women, and kids — curated just for you."
        />

        {/* new Products */}
        <NewArrival />

        {/* top product */}
        <BestSeller />

        {/* Limited-Stock */}
        <LimitedStock />

        {/* category  */}
        <BrowseByCat />

        {/* review */}
        <ReviewList />
      </main>
      <Footer />
    </>
  );
}
