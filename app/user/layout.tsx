import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 mt-5 mb-5">{children}</main>

      <Footer />
    </div>
  );
}
